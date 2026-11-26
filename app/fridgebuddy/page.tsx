import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import s from "./fridgebuddy.module.css";

const GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=se.triple7.fridgebuddy";

// The screenshots come from version 1.2: most on a Pixel 8 Pro emulator with demo data
// (540x1202 after scaling), the barcode and date scans on a Galaxy S24 with a real package
// (status bar cropped off, 540x1115), and the reminder from the emulator's notification shade,
// cut off below FridgeBuddy's notifications (540x721).

export const metadata: Metadata = {
  title: "FridgeBuddy – Triple7 Studios",
  description:
    "Keep track of what's in your fridge and eat it before it goes off. Sorted by best-before date, with a daily reminder, barcode and date scanning, and a shopping list.",
};

const EMULATOR = { width: 540, height: 1202 };
const PHONE = { width: 540, height: 1115 };
const SHADE = { width: 540, height: 721 };

const SCREENS = [
  { file: "fridge.jpg", ...EMULATOR, alt: "The fridge: past date, eat soon and later, each sorted by category" },
  { file: "barcode.jpg", ...PHONE, alt: "Adding a soured milk after a barcode scan: name and category from Open Food Facts, best before in 3 days" },
  { file: "date.jpg", ...PHONE, alt: "Scanning the dot-matrix best-before date on a carton: Sunday, November 29, 2026" },
  { file: "reminder.jpg", ...SHADE, alt: "The morning reminder, one notification per product, with Eaten, Thrown away and +2 days" },
  { file: "freezer.jpg", ...EMULATOR, alt: "Chicken put in the freezer: the date becomes a reminder three months ahead" },
  { file: "advice.jpg", ...EMULATOR, alt: "Advice for cheese past its best-before date, from the Swedish Food Agency" },
  { file: "shopping.jpg", ...EMULATOR, alt: "The shopping list in shop order: fruit and veg, bread, dairy, pantry, household" },
  { file: "stats.jpg", ...EMULATOR, alt: "Food waste statistics for the last 30 days and 8 weeks" },
  { file: "widget.jpg", ...EMULATOR, alt: "The Eat soon widget on the home screen" },
  { file: "settings.jpg", ...EMULATOR, alt: "Settings: reminders, language, colour themes, light or dark, and sharing" },
];

const FEATURES = [
  {
    icon: "🗓️",
    title: "Sorted by date or category",
    text: "Past date, eat soon and later, at a glance. Swipe right when you've eaten something, left when it was thrown away, one at a time when you have several.",
  },
  {
    icon: "📷",
    title: "Scan instead of typing",
    text: "Scan the barcode for the name and category, and point the camera at the date to read it, even when it's printed in dots. Best before or use by, it tells them apart.",
  },
  {
    icon: "🔔",
    title: "Reminders with buttons",
    text: "One notification per product, at the time you choose, when it should be eaten today or tomorrow. Mark it eaten or thrown away, or give it two more days, right there.",
  },
  {
    icon: "❄️",
    title: "Opened or in the freezer",
    text: "Mark something opened, or put it in the freezer, where the date becomes a reminder a month to a year ahead. Food without a date, like leftovers or bread, gets a suggested one.",
  },
  {
    icon: "💡",
    title: "Advice when the date has passed",
    text: "What to do with that kind of food: how to check meat, when mould can be cut away, how long leftovers keep. It follows the Swedish Food Agency's advice.",
  },
  {
    icon: "🛒",
    title: "Shopping list in shop order",
    text: "Ate the last of the milk? Add it with one tap. The list follows the order of the shop, and can be shared as text, CSV or PDF.",
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
      "Barcodes and dates read on the phone with CameraX and ML Kit",
      "A barcode counts only when several frames agree, so a misread never gets through",
      "Its own date parser, tested against photos and recorded scans of real packaging",
    ],
  },
  {
    title: "Names and categories",
    items: [
      "What the household chose before comes first",
      "Then Open Food Facts, the open food database",
      "Then what other users shared, published when two agree",
      "Otherwise a category guessed from the name",
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
            sorts your food by date, reminds you in time and helps you throw away less. No
            account, no ads, and your fridge stays on your phone.
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
          Everything runs on the phone. Only barcode numbers go out, to look up a product, and
          what you choose to share with other users.
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
