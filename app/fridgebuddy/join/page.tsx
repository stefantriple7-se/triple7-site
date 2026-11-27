import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { LANGS, type Lang, isLang } from "../PrivacyPage";
import s from "../legal.module.css";
import j from "./join.module.css";

// Where a household invite's QR code leads, when it's scanned with a phone's own camera rather
// than in the app: the app (1.3 and later) puts https://triple7.se/fridgebuddy/join?code=K7Q2MX
// in it, and reads the code back out when it scans it itself. So keep this path and parameter.
// The page shows the code and how to join; it is in the visitor's language, or ?lang=xx.

const GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=se.triple7.fridgebuddy";

/** The app's invite codes: six letters and digits without look-alikes (see backend/firestore.rules). */
const CODE = /^[A-HJKMNP-Z2-9]{6}$/;

type JoinText = {
  title: string;
  heading: string;
  lede: string;
  codeLabel: string;
  noCode: string;
  steps: [string, string, string];
  note: string;
  getApp: string;
  languages: string;
};

const TEXT: Record<Lang, JoinText> = {
  en: {
    title: "Join a household in FridgeBuddy",
    heading: "An invitation to share a fridge",
    lede: "Someone has invited you to their household in FridgeBuddy: the same fridge and shopping list on everyone’s phone.",
    codeLabel: "Your invite code",
    noCode: "Ask someone in the household for a code, then:",
    steps: [
      "Get FridgeBuddy from Google Play.",
      "Open Settings → Share with your household → Join with a code.",
      "Type the code, or scan the QR code on their phone.",
    ],
    note: "The code works for 48 hours after it was made. Joining is free; what you already have in the app is added to the household’s.",
    getApp: "Get it on Google Play",
    languages: "Language",
  },
  sv: {
    title: "Gå med i ett hushåll i FridgeBuddy",
    heading: "En inbjudan att dela kylskåp",
    lede: "Någon har bjudit in dig till sitt hushåll i FridgeBuddy: samma kylskåp och inköpslista på allas telefoner.",
    codeLabel: "Din inbjudningskod",
    noCode: "Be någon i hushållet om en kod, och gör sedan så här:",
    steps: [
      "Hämta FridgeBuddy på Google Play.",
      "Öppna Inställningar → Dela med hushållet → Gå med med en kod.",
      "Skriv koden, eller skanna QR-koden på deras telefon.",
    ],
    note: "Koden gäller i 48 timmar från att den skapades. Att gå med är gratis; det du redan har i appen läggs ihop med hushållets.",
    getApp: "Hämta på Google Play",
    languages: "Språk",
  },
  de: {
    title: "Einem Haushalt in FridgeBuddy beitreten",
    heading: "Eine Einladung, einen Kühlschrank zu teilen",
    lede: "Jemand hat dich in seinen Haushalt in FridgeBuddy eingeladen: derselbe Kühlschrank und dieselbe Einkaufsliste auf allen Handys.",
    codeLabel: "Dein Einladungscode",
    noCode: "Bitte jemanden im Haushalt um einen Code, dann:",
    steps: [
      "Hol dir FridgeBuddy bei Google Play.",
      "Öffne Einstellungen → Mit dem Haushalt teilen → Mit Code beitreten.",
      "Gib den Code ein oder scanne den QR-Code auf dem anderen Handy.",
    ],
    note: "Der Code gilt 48 Stunden ab seiner Erstellung. Beitreten ist kostenlos; was du schon in der App hast, wird mit dem Haushalt zusammengeführt.",
    getApp: "Bei Google Play holen",
    languages: "Sprache",
  },
  fr: {
    title: "Rejoindre un foyer dans FridgeBuddy",
    heading: "Une invitation à partager un frigo",
    lede: "Quelqu’un vous invite dans son foyer sur FridgeBuddy : le même frigo et la même liste de courses sur tous les téléphones.",
    codeLabel: "Votre code d’invitation",
    noCode: "Demandez un code à quelqu’un du foyer, puis :",
    steps: [
      "Téléchargez FridgeBuddy sur Google Play.",
      "Ouvrez Paramètres → Partager avec votre foyer → Rejoindre avec un code.",
      "Saisissez le code, ou scannez le QR code sur son téléphone.",
    ],
    note: "Le code est valable 48 heures après sa création. Rejoindre est gratuit ; ce que vous avez déjà dans l’appli est ajouté à celui du foyer.",
    getApp: "Disponible sur Google Play",
    languages: "Langue",
  },
  es: {
    title: "Unirse a un hogar en FridgeBuddy",
    heading: "Una invitación a compartir nevera",
    lede: "Alguien te ha invitado a su hogar en FridgeBuddy: la misma nevera y la misma lista de la compra en los móviles de todos.",
    codeLabel: "Tu código de invitación",
    noCode: "Pide un código a alguien del hogar y luego:",
    steps: [
      "Descarga FridgeBuddy en Google Play.",
      "Abre Ajustes → Compartir con tu hogar → Unirse con un código.",
      "Escribe el código o escanea el código QR de su móvil.",
    ],
    note: "El código vale durante 48 horas desde que se creó. Unirse es gratis; lo que ya tienes en la app se suma a lo del hogar.",
    getApp: "Disponible en Google Play",
    languages: "Idioma",
  },
  da: {
    title: "Deltag i en husstand i FridgeBuddy",
    heading: "En invitation til at dele køleskab",
    lede: "Nogen har inviteret dig til deres husstand i FridgeBuddy: det samme køleskab og den samme indkøbsliste på alles telefoner.",
    codeLabel: "Din invitationskode",
    noCode: "Bed en i husstanden om en kode, og gør så sådan her:",
    steps: [
      "Hent FridgeBuddy i Google Play.",
      "Åbn Indstillinger → Del med husstanden → Deltag med en kode.",
      "Skriv koden, eller scan QR-koden på deres telefon.",
    ],
    note: "Koden gælder i 48 timer, fra den blev oprettet. Det er gratis at deltage; det, du allerede har i appen, lægges sammen med husstandens.",
    getApp: "Hent i Google Play",
    languages: "Sprog",
  },
  nb: {
    title: "Bli med i en husstand i FridgeBuddy",
    heading: "En invitasjon til å dele kjøleskap",
    lede: "Noen har invitert deg til husstanden sin i FridgeBuddy: det samme kjøleskapet og den samme handlelisten på alles telefoner.",
    codeLabel: "Invitasjonskoden din",
    noCode: "Be noen i husstanden om en kode, og gjør så slik:",
    steps: [
      "Last ned FridgeBuddy fra Google Play.",
      "Åpne Innstillinger → Del med husstanden → Bli med med en kode.",
      "Skriv inn koden, eller skann QR-koden på telefonen deres.",
    ],
    note: "Koden gjelder i 48 timer fra den ble opprettet. Det er gratis å bli med; det du allerede har i appen, slås sammen med husstandens.",
    getApp: "Last ned fra Google Play",
    languages: "Språk",
  },
};

type SearchParams = { code?: string | string[]; lang?: string | string[] };
type Props = { searchParams: Promise<SearchParams> };

const first = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

/** ?lang=xx, or else the browser's first language we have (Norwegian of either kind is nb). */
async function language(params: SearchParams): Promise<Lang> {
  const asked = first(params.lang);
  if (asked && isLang(asked)) return asked;
  const accepted = (await headers()).get("accept-language") ?? "";
  for (const part of accepted.split(",")) {
    const primary = part.split(";")[0].trim().toLowerCase().split("-")[0];
    const lang = primary === "no" || primary === "nn" ? "nb" : primary;
    if (isLang(lang)) return lang;
  }
  return "en";
}

/** The code as the app shows it ("K7Q 2MX"), or null if what's in the link isn't one. */
function inviteCode(params: SearchParams): string | null {
  const code = first(params.code)?.trim().toUpperCase() ?? "";
  return CODE.test(code) ? code : null;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const t = TEXT[await language(await searchParams)];
  // A code in the address is for one household: nothing here belongs in a search engine.
  return { title: t.title, description: t.lede, robots: { index: false, follow: false } };
}

export default async function FridgeBuddyJoinPage({ searchParams }: Props) {
  const params = await searchParams;
  const lang = await language(params);
  const code = inviteCode(params);
  const t = TEXT[lang];
  const here = (l: Lang) => `/fridgebuddy/join?${new URLSearchParams({ ...(code ? { code } : {}), lang: l })}`;

  return (
    <div lang={lang} className={s.root}>
      <header className={s.top}>
        <Link className={s.brand} href="/fridgebuddy">
          <Image src="/fridgebuddy/icon.png" alt="" width={40} height={40} />
          FridgeBuddy
        </Link>
        <nav aria-label={t.languages} className={`${s.nav} ${s.langs}`}>
          {LANGS.map((l) => (
            <Link key={l} href={here(l)} hrefLang={l} lang={l} aria-current={l === lang ? "true" : undefined}>
              {l === "nb" ? "NO" : l.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>

      <main>
        <div className={s.hero}>
          <h1>{t.heading}</h1>
          <p className={s.lede}>{t.lede}</p>
        </div>

        {code ? (
          <div className={j.codeBox}>
            <span className={j.codeLabel}>{t.codeLabel}</span>
            <span className={j.code}>{`${code.slice(0, 3)} ${code.slice(3)}`}</span>
          </div>
        ) : (
          <p>{t.noCode}</p>
        )}

        <ol className={j.steps}>
          {t.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <a className={j.play} href={GOOGLE_PLAY} target="_blank" rel="noreferrer">
          <Image src="/googleplay.png" alt={t.getApp} width={182} height={54} />
        </a>

        <p className={s.note}>{t.note}</p>
      </main>
    </div>
  );
}
