import Image from "next/image";

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
          <span className="pill">Coming soon</span>
        </div>

        <h1 className="title">Building something new</h1>
        <p className="subtitle">
          We craft focused, high-quality apps and games. Updates will land here first.
        </p>

      </section>

      <section className="grid">
        <article className="card">
          <div className="cardTitle">Contact</div>
          <div className="cardBody">
            <a className="link" href="mailto:contact@triple7.se">contact@triple7.se</a>
          </div>
        </article>

        <article className="card">
          <div className="cardTitle">Privacy</div>
          <div className="cardBody">
            <a className="link" href="/privacy">Read our policy</a>
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
        <a className="footerLink" href="/privacy">Privacy</a>
      </footer>
    </main>
  );
}