import { Footer, Header, PageIntro } from "../components/site-shell";
// Deliberately excluded from the main navigation until research content is ready.
export default function ResearchPage() { return <main><a className="skip-link" href="#content">Skip to content</a><Header /><div className="shell" id="content"><PageIntro eyebrow="Research" title="Questions worth investigating."><p>This page is intentionally unlisted while the research material is being prepared.</p></PageIntro><Footer /></div></main>; }
