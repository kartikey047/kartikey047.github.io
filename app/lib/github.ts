export const GITHUB_USERNAME = "kartikey047";

type Repository = { name: string; html_url: string; pushed_at: string | null; default_branch: string };
type Commit = { html_url: string; sha: string; commit: { message: string; author: { date: string } } };

export type LatestCommit = { repository: string; repositoryUrl: string; commitUrl: string; message: string; shortSha: string; date: string } | null;

export type ContributionActivity = {
  total: number | null;
  days: Array<{ date: string; level: number }>;
  months: Array<{ label: string; column: number }>;
  weeks: number;
} | null;

const headers = { Accept: "application/vnd.github+json", "User-Agent": "kartikey-portfolio" };

export async function getLatestCommit(): Promise<LatestCommit> {
  try {
    const repositoriesResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&direction=desc&per_page=1`, { headers, next: { revalidate: 3600 } });
    if (!repositoriesResponse.ok) return null;
    const repositories = (await repositoriesResponse.json()) as Repository[];
    const repository = repositories[0];
    if (!repository) return null;

    const commitsResponse = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repository.name}/commits?sha=${repository.default_branch}&per_page=1`, { headers, next: { revalidate: 3600 } });
    if (!commitsResponse.ok) return null;
    const commits = (await commitsResponse.json()) as Commit[];
    const commit = commits[0];
    if (!commit) return null;

    return { repository: repository.name, repositoryUrl: repository.html_url, commitUrl: commit.html_url, message: commit.commit.message.split("\n")[0], shortSha: commit.sha.slice(0, 7), date: commit.commit.author.date };
  } catch { return null; }
}

export async function getContributionActivity(): Promise<ContributionActivity> {
  try {
    const response = await fetch(`https://github.com/users/${GITHUB_USERNAME}/contributions`, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!response.ok) return null;

    const html = await response.text();
    const days = Array.from(
      html.matchAll(/data-date="([^"]+)"[^>]*data-level="(\d+)"/g),
      ([, date, level]) => ({ date, level: Number(level) }),
    );
    if (!days.length) return null;

    const weeks = Math.ceil(days.length / 7);
    const formatter = new Intl.DateTimeFormat("en", { month: "short" });
    const months: NonNullable<ContributionActivity>["months"] = [];
    let previousMonth = "";
    for (let column = 0; column < weeks; column += 1) {
      const day = days[column];
      if (!day) continue;
      const label = formatter.format(new Date(`${day.date}T12:00:00`));
      if (label !== previousMonth) {
        const previous = months.at(-1);
        // A calendar may begin during the final week of a month. Replace that
        // short fragment rather than stacking two month labels on top of each other.
        if (previous && column - previous.column < 3) previous.label = label;
        else months.push({ label, column });
        previousMonth = label;
      }
    }

    const totalMatch = html.match(/([\d,]+)\s+contributions\s+in the last year/);
    return { total: totalMatch ? Number(totalMatch[1].replaceAll(",", "")) : null, days, months, weeks };
  } catch {
    return null;
  }
}
