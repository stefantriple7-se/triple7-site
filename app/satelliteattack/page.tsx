import React from "react";

type ReleaseCardProps = {
  version: string;
  label: string;
  items: string[];
  highlight?: boolean;
  footer?: React.ReactNode;
};

function ReleaseCard({ version, label, items, highlight, footer }: ReleaseCardProps) {
  return (
    <div
      className={[
        "rounded-2xl border bg-white p-5",
        highlight ? "border-emerald-200 shadow-sm" : "border-slate-200",
      ].join(" ")}
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-900">{version}</h3>
        <span
          className={[
            "rounded-full px-2 py-0.5 text-xs font-medium",
            highlight
              ? "bg-emerald-50 text-emerald-700"
              : "bg-slate-100 text-slate-700",
          ].join(" ")}
        >
          {label}
        </span>
      </div>

      <ul className="mt-3 space-y-1 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>

      {footer}
    </div>
  );
}

const SCREENSHOT_RATIO = 2048 / 945;
const SCREENSHOT_PAD = `${(1 / SCREENSHOT_RATIO) * 100}%`; // ≈ 46.1%

const renderImage = (
  src: string,
  alt: string,
  caption: string,
  fit: "cover" | "contain" = "cover"
) => {
  return (
    <figure
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.6rem",
        width: "100%",
        maxWidth: "360px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: "100%",
          borderRadius: "1.5rem",
          border: "1px solid #e2e8f0",
          backgroundColor: "#f8fafc",
          boxShadow: "0 10px 20px rgba(15, 23, 42, 0.08)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* aspect-ratio fallback */}
        <div style={{ width: "100%", paddingTop: SCREENSHOT_PAD }} />

        <img
          src={src}
          alt={alt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: fit,
          }}
        />
      </div>

      <figcaption
        style={{
          fontSize: "0.75rem",
          color: "#64748b",
          textAlign: "center",
          maxWidth: "46ch",
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
};
export default function SatelliteAttackPage() {
  return (
    <div className="page mx-auto max-w-5xl px-6 py-12">
      {/* Hero */}
      <section className="mb-12">
        <p className="mb-3 inline-flex rounded-full border border-indigo-200/60 bg-indigo-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-indigo-700">
          A game by Triple7 Studios
        </p>

        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Satellite Attack
        </h1>

        <p className="mt-4 max-w-2xl text-balance text-sm text-slate-600 md:text-base">
          A fast-paced arcade space survival game where every second counts.
          Dodge danger, stay alive, and push for the next high score.
        </p>

        <div style={{ marginTop: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem", 
              rowGap: "0.5rem",
              alignItems: "center",
              fontSize: "0.75rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "9999px",
                padding: "0.25rem 0.75rem",
                fontWeight: 600,
                background: "#ecfdf5",
                color: "#047857",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#10b981",
                  display: "inline-block",
                }}
              />
              Android — Live
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "9999px",
                padding: "0.25rem 0.75rem",
                fontWeight: 600,
                background: "#fffbeb",
                color: "#b45309",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#f59e0b",
                  display: "inline-block",
                }}
              />
              iOS — Ongoing
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "9999px",
                padding: "0.25rem 0.75rem",
                fontWeight: 600,
                background: "#f1f5f9",
                color: "#334155",
                whiteSpace: "nowrap",
              }}
            >
              Current: v1.1
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "9999px",
                padding: "0.25rem 0.75rem",
                fontWeight: 600,
                background: "#f1f5f9",
                color: "#334155",
                whiteSpace: "nowrap",
              }}
            >
              Unity · C# · Mobile
            </span>
          </div>
        </div>
      </section>

      <section
        style={{
          marginTop: "1rem",
          padding: "0 1.5rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#0284c7",
            }}
          >
            Game screenshots
          </h3>

          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "1.2rem",
              fontWeight: 600,
            }}
          >
            Satellite Attack – quick runs, intense pressure, high-score hunting
          </p>

          <div
            style={{
              marginTop: "2rem",
              display: "grid",
              gap: "1.25rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 360px))",
              justifyContent: "center",   // <-- centrera kolumnerna
              justifyItems: "center",     // <-- centrera varje item
              alignItems: "start",
            }}
          >
              {renderImage(
              "/satelliteattack/splash.jpg",
              "Satellite Attack – Splash screen",
              "Clean, polished presentation sets the tone for the game experience."
            )}
            {renderImage(
              "/satelliteattack/options.jpg",
              "Satellite Attack – Main menu",
              "Start a run or view your highscores"
            )}
            {renderImage(
              "/satelliteattack/gameplay.jpg",
              "Satellite Attack – Gameplay",
              "Fast reactions and smart positioning are the key to survival."
            )}
            {renderImage(
              "/satelliteattack/localhighscore.jpg",
              "Satellite Attack – Local Highscore",
              "Track your best runs and keep chasing the next record."
            )}
        
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="mb-12 mt-12">
        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
          Key features
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Designed for short, addictive sessions and a clear “one more run”
          gameplay loop.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <FeatureCard
            title="Arcade survival gameplay"
            description="Quick runs with constant pressure — survive longer to score higher."
          />
          <FeatureCard
            title="High-score driven progression"
            description="Chase personal bests and build consistency through repetition and mastery."
          />
          <FeatureCard
            title="Responsive mobile controls"
            description="Tight control feel tuned for touch gameplay and fast decision-making."
          />
          <FeatureCard
            title="Polish and ongoing updates"
            description="Regular bug fixes and balancing to keep runs fair, smooth, and fun."
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
          Technical overview
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Satellite Attack is built as a lightweight Unity game with a focus on
          deterministic-feeling gameplay, performance on mobile devices, and a
          clean, iteration-friendly codebase.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <TechBlock
            title="Stack & platform"
            items={[
              "Unity",
              "C# gameplay code",
              "Mobile-first performance tuning",
            ]}
          />
          <TechBlock
            title="Core gameplay systems"
            items={[
              "Spawner logic with safe positioning rules",
              "Difficulty pacing over time",
              "Collision + damage + game over loop",
            ]}
          />
          <TechBlock
            title="UI & flow"
            items={[
              "Main menu + in-run HUD",
              "Game over panel with fast restart",
              "High-score screen and persistence",
            ]}
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
          Release history & roadmap
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Satellite Attack is built in small, frequent iterations — shipping core gameplay
          first, then improving fairness, pacing, and polish based on playtesting.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <ReleaseCard
            version="v1.0"
            label="First release"
            items={[
              "Core survival loop: start → survive → game over → restart",
              "Scoring + basic progression feel",
              "Initial menus + in-run HUD",
            ]}
          />

          <ReleaseCard
            version="v1.1"
            label="Current"
            items={[
              "Local Highscore leaderboard",    
              "Upgrade progress bars",
              "Stage system added",
              "New Shooter Enemy introduced (stage 3 and above)",
              "Polish + stability improvements",
              "Fairness tweaks (reducing frustrating / unavoidable moments)",
              "General balancing and small UX refinements",
        
            ]}
            highlight
          />

          <ReleaseCard
            version="Backlog"
            label="Backlog (v1.2 draft)"
            items={[
              "Multikill bonuses",
              "Select new primary weapons (shotgun, laser, etc.)",
              "Secondary weapons (missiles etc)More tuning around pacing, readability, and run variety",
            ]}
           
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
          About this game
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Tribute to the classic Satellite Attack on the Philips Videopac G7000.
          This is an early version of the game with the core gameplay in place.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-sm font-semibold text-slate-900">
            Disclaimer
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            This game is an unofficial fan tribute and is not affiliated with or endorsed by
            Philips.
          </p>
        </div>

      </section>

      {/* Availability */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
          Availability & current status
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Satellite Attack is currently available on Android (live) and is actively being
          prepared for iOS release. 
          
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="https://play.google.com/store/apps/details?id=se.triple7.satelliteattack&hl=en"
            target="_blank"
            rel="noreferrer"
            className="inline-flex"
            aria-label="Get it on Google Play"
          >
            <img
              src="/googleplay.png"
              alt="Get it on Google Play"
              style={{ height: 54, width: "auto" }}
            />
          </a>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-sm font-semibold text-slate-900">
            Want a similar game or prototype?
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            If you&apos;re looking to build a mobile game, a playable prototype,
            or a polished Unity release for your brand or product,{" "}
            <a className="link" href="mailto:contact@triple7.se">
              contact us
            </a>
            .
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
          <span className="text-xs text-slate-500">
            <span className="font-semibold text-slate-800">Triple7 Studios</span>{" "}
            · Apps, games & digital products
          </span>
        </div>
      </section>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}

type TechBlockProps = {
  title: string;
  items: string[];
};

function TechBlock({ title, items }: TechBlockProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}