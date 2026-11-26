import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import s from "./fridgebuddy.module.css";

const GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=se.triple7.fridgebuddy";

// The screenshots come from the debug app: most on a Pixel 8 Pro emulator with demo data
// (540x1202 after scaling), the date scans on a Galaxy S24 with real packages (status bar
// cropped off, 540x1115).

export const metadata: Metadata = {
  title: "FridgeBuddy – Triple7 Studios",
  description:
    "Keep track of what's in your fridge and eat it before it goes off. Sorted by best-before date, with a daily reminder, barcode and date scanning, and a shopping list.",
};

const EMULATOR = { width: 540, height: 1202 };
const PHONE = { width: 540, height: 1115 };

const SCREENS = [
  { file: "fridge.jpg", ...EMULATOR, alt: "The fridge, sorted into past best before, eat soon and later" },
  { file: "barcode.jpg", ...EMULATOR, alt: "Adding milk: the name filled in from Open Food Facts after a barcode scan" },
  { file: "date-kalles.jpg", ...PHONE, alt: "Scanning a dot-matrix best-before date on a tube: Friday, October 15, 2027" },
  { file: "date-milk.jpg", ...PHONE, alt: "Scanning the date stamped on a milk carton: today" },
  { file: "widget.jpg", ...EMULATOR, alt: "The Eat soon widget on the home screen" },
  { file: "shopping.jpg", ...EMULATOR, alt: "The shopping list, with what's already in the basket" },
  { file: "stats.jpg", ...EMULATOR, alt: "Food waste statistics for the last 30 days and 8 weeks" },
  { file: "settings.jpg", ...EMULATOR, alt: "Settings: reminders, language, colour themes and light or dark" },
];

const FEATURES = [
  {
    icon: "🗓️",
    title: "Sorted by date",
    text: "Past best before, eat soon and later, at a glance. Swipe right when you've eaten something, left when it was thrown away.",
  },
  {
    icon: "📷",
    title: "Scan instead of typing",
    text: "Scan the barcode to get the name, and point the camera at the best-before date to read it, even when it's printed in dots.",
  },
  {
    icon: "🔔",
    title: "A daily reminder",
    text: "One notification, at the time you choose, when something should be eaten today or tomorrow.",
  },
  {
    icon: "🛒",
    title: "Shopping list",
    text: "Ate the last of the milk? Add it to the shopping list with one tap, and tick things off in the shop.",
  },
  {
    icon: "📊",
    title: "Less food waste",
    text: "See how much you eat and how much you throw away, week by week, and what you throw away most often.",
  },
  {
    icon: "🏠",
    title: "Home screen widget",
    text: "What to eat soon, right on your home screen, in the app's colour theme: seven to choose from, light or dark.",
  },
];

const TECH = [
  {
    title: "Stack & platform",
    items: [
      "Kotlin, Jetpack Compose and Material 3",
      "Room database with tested migrations; Navigation 3",
      "Glance widget; WorkManager for the daily reminder",
    ],
  },
  {
    title: "Scanning",
    items: [
      "Barcodes with Google's code scanner: no camera permission needed",
      "Best-before dates read on the phone with CameraX and ML Kit",
      "Its own date parser, tested against photos of real packaging",
    ],
  },
  {
    title: "Product names",
    items: [
      "Names the household has used before come first",
      "Then Open Food Facts, the open food database",
      "Then names shared by other users, published when two agree",
    ],
  },
];

export default function FridgeBuddyPage() {
  return (
    <main className={s.page}>
      <Link href="/" className={s.back}>
        ← Triple7 Studios
      </Link>

      <section className={s.hero}>
        <Image className={s.icon} src="/fridgebuddy/icon.png" alt="" width={120} height={120} priority />
        <div>
          <span className={s.kicker}>An app by Triple7 Studios</span>
          <h1 className={s.title}>FridgeBuddy</h1>
          <p className={s.lede}>
            Keep track of what&apos;s in your fridge and eat it before it goes off. FridgeBuddy
            sorts your food by best-before date, reminds you in time and helps you throw away
            less. No account, no ads, and your fridge stays on your phone.
          </p>
          <div className={s.chips}>
            <a className={s.chip} href={GOOGLE_PLAY} target="_blank" rel="noreferrer">
              <span className={s.live} />
              Google Play
            </a>
            <span className={s.chip}>Android · Kotlin · Jetpack Compose</span>
            <span className={s.chip}>7 languages</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className={s.sectionTitle}>Screenshots</h2>
        <p className={s.sectionSubtitle}>Scroll sideways to see them all.</p>
        <div className={s.screens}>
          {SCREENS.map((screen) => (
            <div className={s.screen} key={screen.file}>
              <Image
                src={`/fridgebuddy/screens/${screen.file}`}
                alt={screen.alt}
                width={screen.width}
                height={screen.height}
                sizes="220px"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className={s.sectionTitle}>What it does</h2>
        <p className={s.sectionSubtitle}>Quick to add things, and it tells you what to eat first.</p>
        <div className={s.grid}>
          {FEATURES.map((feature) => (
            <article className={`${s.panel} ${s.feature}`} key={feature.title}>
              <span className={s.featureIcon} aria-hidden="true">
                {feature.icon}
              </span>
              <div>
                <div className={s.cardTitle}>{feature.title}</div>
                <p className={s.cardText}>{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className={s.sectionTitle}>Free, with an optional Premium</h2>
        <p className={s.sectionSubtitle}>No ads and no subscription.</p>
        <div className={s.grid}>
          <article className={s.panel}>
            <div className={s.cardTitle}>Free</div>
            <ul className={s.list}>
              <li>Everything in the app</li>
              <li>3 scans a month: barcode, best-before date or product name</li>
            </ul>
          </article>
          <article className={`${s.panel} ${s.premium}`}>
            <div className={s.cardTitle}>FridgeBuddy Premium</div>
            <ul className={s.list}>
              <li>Unlimited scanning</li>
              <li>A one-time purchase that never renews</li>
            </ul>
          </article>
        </div>
      </section>

      <section>
        <h2 className={s.sectionTitle}>Technical overview</h2>
        <p className={s.sectionSubtitle}>
          Everything runs on the phone; only barcode numbers go out to look up a name.
        </p>
        <div className={s.grid}>
          {TECH.map((block) => (
            <article className={s.panel} key={block.title}>
              <div className={s.cardTitle}>{block.title}</div>
              <ul className={s.list}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className={s.sectionTitle}>Get FridgeBuddy</h2>
        <p className={s.sectionSubtitle}>On Google Play, published by Bluedeer IT AB.</p>
        <div className={s.stores}>
          <a className={s.storeBadge} href={GOOGLE_PLAY} target="_blank" rel="noreferrer">
            <Image src="/googleplay.png" alt="Get it on Google Play" width={182} height={54} />
          </a>
        </div>
        <div className={s.links}>
          <span>
            <Link className={s.link} href="/fridgebuddy/privacy">
              Privacy policy
            </Link>{" "}
            <span className={s.dim}>·</span>{" "}
            <Link className={s.link} href="/fridgebuddy/sv/privacy" hrefLang="sv">
              Svenska
            </Link>
          </span>
          <a className={s.link} href="mailto:contact@triple7.se">
            contact@triple7.se
          </a>
        </div>
      </section>

      <footer className={s.footer}>Triple7 Studios · Apps, games &amp; digital products</footer>
    </main>
  );
}
