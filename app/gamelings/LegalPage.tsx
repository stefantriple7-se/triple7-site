import Image from "next/image";
import Link from "next/link";
import { Nunito } from "next/font/google";
import s from "./legal.module.css";

// Gamelings' privacy and terms pages, in English and Swedish. The app links to
// /gamelings/privacy and /gamelings/terms, so keep those paths. Change both
// languages together, and the date at the top with the text.

const nunito = Nunito({ subsets: ["latin"], weight: ["600", "800", "900"] });

export type Lang = "en" | "sv";
export type LegalKind = "privacy" | "terms";

const TEXT = {
  en: {
    byline: "Gamelings · A Triple7 Studios game, published by Bluedeer IT AB",
    pages: "Gamelings pages",
    languages: "Language",
    privacy: "Privacy",
    terms: "Terms",
    company:
      "Bluedeer IT AB · Olle Edfeldts väg 8, 243 93 Höör, Sweden · Org. no. 559337-9562 · VAT no. SE559337956201",
  },
  sv: {
    byline: "Gamelings · Ett spel från Triple7 Studios, utgivet av Bluedeer IT AB",
    pages: "Gamelings sidor",
    languages: "Språk",
    privacy: "Integritet",
    terms: "Villkor",
    company:
      "Bluedeer IT AB · Olle Edfeldts väg 8, 243 93 Höör · Org.nr 559337-9562 · Momsreg.nr SE559337956201",
  },
};

export const legalPath = (lang: Lang, kind: LegalKind) =>
  lang === "en" ? `/gamelings/${kind}` : `/gamelings/sv/${kind}`;

/** Metadata links between the English and Swedish versions of a page. */
export const legalAlternates = (lang: Lang, kind: LegalKind) => ({
  canonical: `https://www.triple7.se${legalPath(lang, kind)}`,
  languages: {
    en: `https://www.triple7.se${legalPath("en", kind)}`,
    sv: `https://www.triple7.se${legalPath("sv", kind)}`,
  },
});

export function Email() {
  return (
    <a className={s.email} href="mailto:support@bluedeer.se">
      support@bluedeer.se
    </a>
  );
}

export function LegalPage({
  lang,
  kind,
  children,
}: {
  lang: Lang;
  kind: LegalKind;
  children: React.ReactNode;
}) {
  const t = TEXT[lang];
  return (
    <div lang={lang} className={`${s.root} ${nunito.className}`}>
      <header className={s.top}>
        <Link className={s.brand} href="/gamelings">
          <Image src="/gamelings/icon.png" alt="" width={40} height={40} />
          Gamelings
        </Link>
        <nav aria-label={t.pages} className={`${s.nav} ${s.pages}`}>
          {(["privacy", "terms"] as const).map((k) => (
            <Link
              key={k}
              href={legalPath(lang, k)}
              aria-current={k === kind ? "page" : undefined}
            >
              {t[k]}
            </Link>
          ))}
        </nav>
        <nav aria-label={t.languages} className={`${s.nav} ${s.langs}`}>
          <Link
            href={legalPath("en", kind)}
            hrefLang="en"
            lang="en"
            title="English"
            aria-label="English"
            aria-current={lang === "en" ? "true" : undefined}
          >
            EN
          </Link>
          <Link
            href={legalPath("sv", kind)}
            hrefLang="sv"
            lang="sv"
            title="Svenska"
            aria-label="Svenska"
            aria-current={lang === "sv" ? "true" : undefined}
          >
            SV
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className={s.footer}>
        <span>{t.byline}</span>
        <p className={s.company}>{t.company}</p>
        <Link href={legalPath(lang, "privacy")}>{t.privacy}</Link>
        <Link href={legalPath(lang, "terms")}>{t.terms}</Link>
        <Email />
      </footer>
    </div>
  );
}
