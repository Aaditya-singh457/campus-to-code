import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type SVGProps } from "react";
import profileImg from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aaditya Singh — B.Tech Student Portfolio" },
      {
        name: "description",
        content:
          "Learn about Aaditya Singh, a B.Tech student at JECRC University, Jaipur — skills, education and background.",
      },
      { property: "og:title", content: "Aaditya Singh — B.Tech Student Portfolio" },
      {
        property: "og:description",
        content: "Skills, education and background of Aaditya Singh, B.Tech student.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GITHUB = "https://github.com/your-username";
const LINKEDIN = "https://linkedin.com/in/your-username";

function GithubIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
function LinkedinIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function SocialLinks({ size = "md" }: { size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-12 w-12" : "h-10 w-10";
  const icon = size === "lg" ? "h-6 w-6" : "h-5 w-5";
  const cls = `${box} inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary transition hover:bg-primary hover:text-primary-foreground`;
  return (
    <div className="flex items-center gap-3">
      <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className={cls}>
        <GithubIcon className={icon} />
      </a>
      <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={cls}>
        <LinkedinIcon className={icon} />
      </a>
    </div>
  );
}

const NAV = ["home", "about", "education", "skills", "contact"];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-display text-xl font-extrabold">
          AS<span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${n}`}
              className="text-sm font-medium capitalize text-muted-foreground transition hover:text-primary"
            >
              {n}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <SocialLinks />
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md border border-border px-3 py-2 text-sm lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col border-t border-border px-6 py-4 lg:hidden">
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${n}`}
              onClick={() => setOpen(false)}
              className="py-2 capitalize text-muted-foreground hover:text-primary"
            >
              {n}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>
    </div>
  );
}

const skills = {
  Technical: ["C / C++", "React", "Git & GitHub"],
  Soft: ["Problem Solving", "Teamwork", "Communication", "Leadership", "Time Management", "Adaptability"],
};

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };
  const input =
    "w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30";
  return (
    <section id="contact" className="section-padding scroll-mt-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Contact" title="Let's build something together" />
          <p className="mb-8 text-muted-foreground">
            Open to internships, collaborations and interesting conversations. Drop a message and I'll get back to you soon.
          </p>
          <SocialLinks size="lg" />
        </div>
        <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-8">
          <input required name="name" placeholder="Your name" className={input} />
          <input required type="email" name="email" placeholder="Your email" className={input} />
          <textarea required name="message" rows={5} placeholder="Your message" className={input} />
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Send Message
          </button>
          {sent && <p className="text-center text-sm text-primary">Thanks! Your message has been noted.</p>}
        </form>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Home */}
        <section id="home" className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-6 py-20">
            <div className="grid w-full items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="mb-4 font-display text-primary">Hi there, I'm</p>
                <h1 className="font-display text-5xl font-extrabold leading-tight md:text-7xl">
                  Aaditya Singh<span className="text-primary">.</span>
                </h1>
                <h2 className="mt-3 font-display text-3xl font-bold text-muted-foreground md:text-5xl">
                  I build things with <span className="text-gradient">code</span>.
                </h2>
                <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                  I am a 1st Year ECE Student at JECRC University. Having good interest in learning C/C++ Programing language and learning new things about technology and help others using it.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href="#contact" className="rounded-lg border border-border px-6 py-3 font-semibold transition hover:border-primary hover:text-primary">
                    Get in Touch
                  </a>
                  <SocialLinks />
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-3 rounded-[2rem] bg-primary/20 blur-2xl" aria-hidden />
                <img
                  src={profileImg}
                  alt="Portrait of Aaditya Singh"
                  width={880}
                  height={1104}
                  className="relative w-full rounded-[2rem] border border-border object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-padding scroll-mt-16 bg-card/40">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle eyebrow="About Me" title="Curious mind, builder at heart" />
            <div className="grid gap-10">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm an engineering student who fell in love with technology the first time I wrote a program that actually worked. Since then, I've been exploring everything from algorithms to web development.
                </p>
                <p>
                  I enjoy learning by building — whether it's a side project, a hackathon idea or contributing to open source.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="section-padding scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle eyebrow="Education" title="Academic journey" />
            <div className="card-glow relative rounded-2xl border border-border bg-card p-8 md:p-10">
              <span className="absolute right-6 top-6 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                Currently Pursuing
              </span>
              <p className="text-sm text-muted-foreground">2026 — 2030</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Bachelor of Technology (B.Tech)</h3>
              <p className="mt-1 text-primary">Electronic And Communication Engineering</p>
              <p className="mt-1 text-muted-foreground">JECRC University , Jaipur</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section-padding scroll-mt-16 bg-card/40">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle eyebrow="Skills" title="What I work with" />
            <div className="grid gap-8 md:grid-cols-2">
              {Object.entries(skills).map(([group, list]) => (
                <div key={group} className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="mb-6 font-display text-xl font-bold">{group} Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {list.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm transition hover:border-primary hover:text-primary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Aaditya Singh. All rights reserved.</p>
          <SocialLinks size="lg" />
        </div>
      </footer>
    </div>
  );
}
