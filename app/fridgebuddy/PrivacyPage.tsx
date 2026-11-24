import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POLICIES } from "./policies";
import s from "./legal.module.css";

// FridgeBuddy's privacy policy, in the app's seven languages. The app links to
// /fridgebuddy/privacy (English) and /fridgebuddy/<lang>/privacy (the others), so keep those
// paths. Change every language together, and the date at the top with the text.

export const LANGS = ["en", "sv", "de", "fr", "es", "da", "nb"] as const;
export type Lang = (typeof LANGS)[number];

/** Each language's name in that language, for the language menu. */
const LANG_NAMES: Record<Lang, string> = {
  en: "English",
  sv: "Svenska",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  da: "Dansk",
  nb: "Norsk",
};

const COMPANY = "Bluedeer IT AB · Olle Edfeldts väg 8, 243 93 Höör, Sweden · Org. no. 559337-9562";

export const privacyPath = (lang: Lang) =>
  lang === "en" ? "/fridgebuddy/privacy" : `/fridgebuddy/${lang}/privacy`;

export const isLang = (value: string): value is Lang => (LANGS as readonly string[]).includes(value);

export function privacyMetadata(lang: Lang): Metadata {
  const policy = POLICIES[lang];
  return {
    title: policy.title,
    description: policy.description,
    alternates: {
      canonical: `https://www.triple7.se${privacyPath(lang)}`,
      languages: Object.fromEntries(LANGS.map((l) => [l, `https://www.triple7.se${privacyPath(l)}`])),
    },
  };
}

export function PrivacyPage({ lang }: { lang: Lang }) {
  const policy = POLICIES[lang];
  return (
    <div lang={lang} className={s.root}>
      <header className={s.top}>
        <Link className={s.brand} href="/fridgebuddy">
          <Image src="/fridgebuddy/icon.png" alt="" width={40} height={40} />
          FridgeBuddy
        </Link>
        <nav aria-label={policy.languages} className={`${s.nav} ${s.langs}`}>
          {LANGS.map((l) => (
            <Link
              key={l}
              href={privacyPath(l)}
              hrefLang={l}
              lang={l}
              title={LANG_NAMES[l]}
              aria-label={LANG_NAMES[l]}
              aria-current={l === lang ? "true" : undefined}
            >
              {l === "nb" ? "NO" : l.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>

      <main>{policy.body}</main>

      <footer className={s.footer}>
        <span>{policy.byline}</span>
        <p className={s.company}>{COMPANY}</p>
        <a className={s.email} href="mailto:contact@triple7.se">
          contact@triple7.se
        </a>
      </footer>
    </div>
  );
}
