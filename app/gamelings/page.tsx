import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nunito } from "next/font/google";
import s from "./gamelings.module.css";

// The screenshots are the English store screenshots (made in the Gamelings
// repo by `npm run store:images`), scaled down to 540x960.

const nunito = Nunito({ subsets: ["latin"], weight: ["900"] });

export const metadata: Metadata = {
  title: "Gamelings – Triple7 Studios",
  description:
    "Five party games in one app: Imposter Hunt, Skitgubbe, Yatzy, Sink the Fleet and Four in a Row. On one phone, on several phones or against the computer.",
};

/** The colourful GAMELINGS wordmark, as in the app. */
const LETTER_COLORS = ["#FFD23F", "#FF8A00", "#FF3DA6", "#C86BFF", "#3DA5FF", "#00D1B2", "#2EE59D", "#A3E635", "#FFD23F"];

const SCREENS = [
  "The home screen with the five games",
  "An Imposter Hunt card: you are the imposter",
  "A room on several phones: the QR code and three players",
  "Yatzy against the computer",
  "Skitgubbe: your hand and the pile",
  "Four in a Row against the computer",
  "Sink the Fleet: the computer’s waters and your fleet",
];

const GAMES = [
  {
    name: "Imposter Hunt",
    icon: "🕵️",
    colors: ["#FF4D6D", "#7B1FA2"],
    text: "Everyone gets the secret word, except the imposter. Give clues, discuss, vote, and catch the faker before they work out the word. 3–20 players.",
  },
  {
    name: "Skitgubbe",
    icon: "🃏",
    colors: ["#00D1B2", "#3DA5FF"],
    text: "The classic Swedish card game. Beat the top card, burn the pile with a 10, and don’t be the last one holding cards.",
  },
  {
    name: "Yatzy",
    icon: "🎲",
    colors: ["#FF8A00", "#FFD23F"],
    text: "Roll five dice up to three times and chase the perfect score sheet. The app does all the counting.",
  },
  {
    name: "Sink the Fleet",
    icon: "🚢",
    colors: ["#00A8E8", "#2EE59D"],
    text: "Hide your ships and hunt down the enemy fleet.",
  },
  {
    name: "Four in a Row",
    icon: "🔴",
    colors: ["#3D5AFE", "#FF3DA6"],
    text: "Drop your discs and line up four before your rival does.",
  },
];

const WAYS = [
  {
    title: "📱 One phone",
    text: "Pass it around the table. Cards and secret words show only for the right player.",
  },
  {
    title: "🔗 Several phones",
    text: "One phone hosts a room and the others scan its QR code to join. No accounts, no sign-up, up to 12 phones.",
  },
  {
    title: "🤖 Against the computer",
    text: "Easy, medium or hard, in every game except Imposter Hunt. The computer only knows what a player at the table could see.",
  },
];

const TECH = [
  {
    title: "Stack & platform",
    items: [
      "React Native (bare, no Expo) with TypeScript",
      "One codebase for Android and iPhone",
      "In English and Swedish",
    ],
  },
  {
    title: "Playing on several phones",
    items: [
      "The host phone runs the game",
      "A WebSocket relay on Cloudflare Workers passes the moves",
      "Each phone receives only its own cards or secret word",
    ],
  },
  {
    title: "Computer opponents",
    items: [
      "Three difficulty levels in every game except Imposter Hunt",
      "Four in a Row: a time-boxed search several moves ahead",
      "In Skitgubbe the computer only knows what a player in its seat could see",
    ],
  },
];

export default function GamelingsPage() {
  return (
    <main className={s.page}>
      <Link href="/" className={s.back}>
        ← Triple7 Studios
      </Link>

      <section className={s.hero}>
        <Image className={s.icon} src="/gamelings/icon.png" alt="" width={120} height={120} priority />
        <div>
          <span className={s.kicker}>A game by Triple7 Studios</span>
          <h1 className={`${s.title} ${nunito.className}`}>
            <span className={s.srOnly}>Gamelings</span>
            <span aria-hidden="true">
              {[..."GAMELINGS"].map((letter, i) => (
                <span key={i} style={{ color: LETTER_COLORS[i] }}>
                  {letter}
                </span>
              ))}
            </span>
          </h1>
          <p className={s.lede}>
            Five party games in one app, for game nights, parties, road trips and family
            dinners. Pass one phone around the table, play together on several phones, or
            take on the computer. No ads, no account.
          </p>
          <div className={s.chips}>
            <span className={s.chip}>
              <span className={s.soon} />
              Google Play — coming soon
            </span>
            <span className={s.chip}>
              <span className={s.soon} />
              App Store — coming soon
            </span>
            <span className={s.chip}>Version 1.0</span>
            <span className={s.chip}>React Native · TypeScript</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className={s.sectionTitle}>Screenshots</h2>
        <p className={s.sectionSubtitle}>Scroll sideways to see all seven.</p>
        <div className={s.screens}>
          {SCREENS.map((alt, i) => (
            <div className={s.screen} key={alt}>
              <Image
                src={`/gamelings/screens/${i + 1}.jpg`}
                alt={alt}
                width={540}
                height={960}
                sizes="220px"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className={s.sectionTitle}>Five games</h2>
        <p className={s.sectionSubtitle}>Quick to learn, made for playing together.</p>
        <div className={s.grid}>
          {GAMES.map((game) => (
            <article className={`${s.panel} ${s.game}`} key={game.name}>
              <span
                className={s.gameIcon}
                aria-hidden="true"
                style={{ background: `linear-gradient(135deg, ${game.colors[0]}, ${game.colors[1]})` }}
              >
                {game.icon}
              </span>
              <div>
                <div className={s.cardTitle}>{game.name}</div>
                <p className={s.cardText}>{game.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className={s.sectionTitle}>Play your way</h2>
        <p className={s.sectionSubtitle}>Every game works on one phone; most work three ways.</p>
        <div className={s.grid}>
          {WAYS.map((way) => (
            <article className={s.panel} key={way.title}>
              <div className={s.cardTitle}>{way.title}</div>
              <p className={s.cardText}>{way.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className={s.sectionTitle}>Free to play, with an optional Pro</h2>
        <p className={s.sectionSubtitle}>No ads and no subscription.</p>
        <div className={s.grid}>
          <article className={s.panel}>
            <div className={s.cardTitle}>Free</div>
            <ul className={s.list}>
              <li>Every game on one phone</li>
              <li>Every game against the computer</li>
              <li>Joining a game on someone else’s phone</li>
              <li>Hosting Four in a Row on several phones</li>
            </ul>
          </article>
          <article className={`${s.panel} ${s.pro}`}>
            <div className={s.cardTitle}>Gamelings Pro</div>
            <ul className={s.list}>
              <li>Host any game on several phones (friends join free)</li>
              <li>70+ word categories in Imposter Hunt</li>
              <li>Undercover mode and premium card styles</li>
              <li>A 30-day pass or Lifetime: one-time purchases that never renew</li>
            </ul>
          </article>
        </div>
      </section>

      <section>
        <h2 className={s.sectionTitle}>Technical overview</h2>
        <p className={s.sectionSubtitle}>
          Games run on the phones themselves; the relay only passes moves along and stores nothing.
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
        <h2 className={s.sectionTitle}>Availability</h2>
        <p className={s.sectionSubtitle}>
          Coming soon to Google Play and the App Store, published by Bluedeer IT AB.
        </p>
        <div className={s.links}>
          <span>
            <Link className={s.link} href="/gamelings/privacy">
              Privacy policy
            </Link>{" "}
            <span className={s.dim}>·</span>{" "}
            <Link className={s.link} href="/gamelings/sv/privacy" hrefLang="sv">
              Svenska
            </Link>
          </span>
          <span>
            <Link className={s.link} href="/gamelings/terms">
              Terms of use
            </Link>{" "}
            <span className={s.dim}>·</span>{" "}
            <Link className={s.link} href="/gamelings/sv/terms" hrefLang="sv">
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
