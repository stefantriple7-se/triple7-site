import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    href: "/danskompis-traning",
    title: "Danskompis – Träning",
    role: "Creator & developer",
    description:
      "Android workout companion that turns Spotify playlists into interval-based training sessions for dancers and coaches.",
    meta: "Android · Kotlin · Jetpack Compose · Spotify SDK",
    images: [
      "/danskompis-traning/splash.jpeg",
      "/danskompis-traning/playlists.jpeg",
      "/danskompis-traning/playing.jpeg",
    ],
  },
 
];

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <div className="brand">
          <div className="logoWrap" aria-hidden="true">
            <Image
              src="/t7Logo.png"
              alt="Triple7 Studios logo"
              fill
              priority
              sizes="56px"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="brandText">
            <div className="brandName">Triple7 Studios</div>
            <div className="brandTag">Apps & Games</div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="heroTop">
          <span className="pill">Independent app & game studio</span>
        </div>

        <h1 className="title">Apps, games & consulting – crafted with care</h1>
        <p className="subtitle">
          Triple7 Studios builds focused, high-quality mobile apps and games, and also
          offers senior consulting within mobile development, product design and
          technical leadership.
        </p>
      </section>

      {/* Projects */}
      <section className="projects">
        <h2 className="sectionTitle">Selected projects</h2>
        <p className="sectionSubtitle">
          A few examples of apps and digital products built under the
          Triple7 Studios brand.
        </p>

        <div className="mt-6 space-y-4">
          {projects.map((project) => (
            <article className="card" key={project.href}>
              {project.images && project.images.length > 0 && (
                <div className="projectScreens">
                  {project.images.map((src, idx) => (
                    <div className="projectScreen" key={src}>
                      <Image
                        src={src}
                        alt={`${project.title} – screenshot ${idx + 1}`}
                        width={90}
                        height={180}
                        className="projectScreenImage"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="cardTitle">{project.title}</div>

              <div className="cardBody">
                <p className="cardText">
                  <span className="cardMeta">{project.role}</span>
                  <br />
                  {project.description}
                </p>
                <p className="cardMetaSmall">{project.meta}</p>
                <p className="cardLinkWrap">
                  <Link href={project.href} className="link">
                    View project
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact / Privacy / Status */}
      <section className="grid">
        <article className="card">
          <div className="cardTitle">Contact</div>
          <div className="cardBody">
            <a className="link" href="mailto:contact@triple7.se">
              contact@triple7.se
            </a>
          </div>
        </article>

        <article className="card">
          <div className="cardTitle">Privacy</div>
          <div className="cardBody">
            <a className="link" href="/privacy">
              Read our policy
            </a>
          </div>
        </article>

        <article className="card">
          <div className="cardTitle">Status</div>
          <div className="cardBody">In development</div>
        </article>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Triple7 Studios</span>
        <span className="dot">•</span>
        <a className="footerLink" href="/privacy">
          Privacy
        </a>
      </footer>
    </main>
  );
}