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
    thumbRatio: 9 / 16, // portrait
  },

  {
    href: "/satelliteattack",
    title: "Satellite Attack",
    role: "Creator & developer",
    description:
      "A fast-paced arcade space survival game. Tribute to the classic Satellite Attack on the Philips Videopac G7000.",
    meta: "Android · Unity · C# · Arcade",
    images: [
      "/satelliteattack/splash.jpg",
      "/satelliteattack/gameplay.jpg",
      "/satelliteattack/localhighscore.jpg",
    ],
    thumbRatio: 2048 / 945, // landscape
    storeHref:
      "https://play.google.com/store/apps/details?id=se.triple7.satelliteattack&hl=en",
  },
];

function ProjectThumb({ src, alt, ratio }: { src: string; alt: string; ratio: number }) {
  const isLandscape = ratio > 1;

  // Bigger thumbnails, but controlled:
  // Portrait: slightly narrower; Landscape: wider (otherwise it looks tiny/flat)
  const width = isLandscape ? "clamp(210px, 28vw, 360px)" : "clamp(140px, 18vw, 210px)";

  return (
    <div
      className="projectScreen"
      style={{
        width,
        aspectRatio: String(ratio),
        position: "relative",
        overflow: "hidden",
        borderRadius: "16px",
        border: "1px solid rgba(226,232,240,1)",
        background: "rgba(248,250,252,1)",
        boxShadow: "0 10px 20px rgba(15,23,42,0.08)",
        flex: "0 0 auto",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 38vw, 360px"
        style={{ objectFit: "cover" }}
        className="projectScreenImage"
      />
    </div>
  );
}

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
          A few examples of apps and digital products built under the Triple7 Studios brand.
        </p>

        <div className="mt-6 space-y-4">
          {projects.map((project) => (
            <article className="card" key={project.href}>
              {project.images && project.images.length > 0 && (
                <div
                  className="projectScreens"
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {project.images.map((src, idx) => (
                    <ProjectThumb
                      key={src}
                      src={src}
                      ratio={project.thumbRatio ?? 1}
                      alt={`${project.title} – screenshot ${idx + 1}`}
                    />
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

                <p
                  className="cardLinkWrap"
                  style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
                >
                  <Link href={project.href} className="link">
                    View project
                  </Link>

                  {project.storeHref && (
                    <a
                      className="link"
                      href={project.storeHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Install on Google Play
                    </a>
                  )}
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
          <div className="cardTitle">Latest status</div>
          <div className="cardBody">Satellite Attack 1.1 live on Android and soon on iOS</div>
        </article>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Triple7 Studios</span>
       
      </footer>
    </main>
  );
}