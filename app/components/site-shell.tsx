import { EmailLink } from "./email-link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const links = [
    ["#education", "Education"],
    ["#experience", "Experience"],
    ["#projects", "Projects"],
    ["#interests", "Interests"],
  ] as const;

  return <header className="site-header"><nav className="nav nav-only" aria-label="Primary navigation"><a className="nav-home" href="#home">Home</a><div className="nav-actions"><div className="nav-links">{links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}</div><ThemeToggle /></div></nav></header>;
}
export function Footer() {
  return <footer className="footer"><p className="footer-identity">Kartikey Sharma <span>·</span> San Francisco</p><div className="footer-links">
    <a href="https://github.com/kartikey047" target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.683-.217.683-.483 0-.237-.009-1.026-.013-1.86-2.782.604-3.369-1.18-3.369-1.18-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.092.39-1.984 1.029-2.684-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 6.756a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.7 1.028 1.592 1.028 2.684 0 3.842-2.339 4.687-4.566 4.935.359.31.679.92.679 1.852 0 1.337-.012 2.416-.012 2.747 0 .268.18.58.688.482A10.003 10.003 0 0 0 22 12c0-5.523-4.477-10-10-10Z" /></svg></a>
    <a href="https://www.linkedin.com/in/ksharm" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8.06 18.74H5.32V9.92h2.74v8.82ZM6.69 8.72A1.59 1.59 0 1 1 6.69 5.54a1.59 1.59 0 0 1 0 3.18Zm12.07 10.02h-2.73v-4.29c0-1.02-.02-2.33-1.42-2.33-1.42 0-1.64 1.11-1.64 2.26v4.36h-2.73V9.92h2.62v1.21h.04c.36-.69 1.26-1.42 2.59-1.42 2.77 0 3.28 1.82 3.28 4.19v4.84Z" /></svg></a>
    <a href="https://x.com/ksharma047" target="_blank" rel="noreferrer" aria-label="X profile" title="X"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" /></svg></a>
    <EmailLink aria-label="Email Kartikey" title="Email"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" /></svg></EmailLink>
  </div></footer>;
}
export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) { return <section className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="intro-copy">{children}</div></section>; }
