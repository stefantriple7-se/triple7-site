import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IM_Fell_English } from "next/font/google";
import s from "./wisplight.module.css";

// A showcase of Wisplight, which has its own site (wisplight.se, with the
// privacy policy and support). Screenshots are the English Play screenshots
// from the GhostHunter repo (docs/store), scaled down to 540x960; the ghosts
// and gadgets come from wisplight.se.

const fell = IM_Fell_English({ subsets: ["latin"], weight: "400" });

const APP_STORE = "https://apps.apple.com/app/id6824061247";
const GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=se.bluedeer.ghosthunt";

export const metadata: Metadata = {
  title: "Wisplight – Triple7 Studios",
  description:
    "An outdoor ghost hunt in augmented reality: follow the radar, find glowing ghosts through the camera and catch them with the Spook-Vac. On iOS and Android.",
};

const SCREENS = [
  "The Spirit Radar leading to a hidden ghost",
  "A ghost in the Spook-Vac’s beam",
  "Caught! A Drifter and ten points",
  "The Spirit Pouch: the ghosts caught so far",
  "A caught ghost, turned in 3D",
  "Picking the colour of the Spook-Vac’s beam",
  "The country leaderboard",
  "Halloween Night: twice the ghosts",
];

const STEPS = [
  {
    title: "Follow the radar",
    text: "The Spirit Radar shows which way to walk and how close the nearest ghost is. No map, just the hunt.",
  },
  {
    title: "Hunt within 30 metres",
    text: "Get close and tap Hunt. The camera reveals the ghost, floating around you where you stand.",
  },
  {
    title: "Hold the beam",
    text: "Keep the Spook-Vac on the ghost while it dodges, hops and hides, and pull it in before it slips away.",
  },
];

const GHOSTS = [
  { id: "drifter", name: "Drifter", rarity: "Common", color: "#8596A7", text: "Wanders slowly and eases away from the beam. A steady hand catches it." },
  { id: "jitter", name: "Jitter", rarity: "Uncommon", color: "#54BB97", text: "Hovers almost still, then dashes off in a blink." },
  { id: "shy", name: "Shy", rarity: "Rare", color: "#96B8F5", text: "Backs away from the beam and creeps back when you let go." },
  { id: "allhallow", name: "Allhallow", rarity: "Legendary", color: "#FFE891", text: "Comes out on Halloween Night only." },
];

const KIT = [
  { id: "radar", name: "Spirit Radar", text: "Points to the ghosts around you." },
  { id: "spookvac", name: "Spook-Vac", text: "Your ghost vacuum, with new colours as you level up." },
  { id: "lantern", name: "Spirit Lantern", text: "More ghosts around you for 5 minutes." },
  { id: "charm", name: "Glow Charm", text: "Double XP for 5 minutes." },
  { id: "cell", name: "Power Cell", text: "Free hunts for 5 minutes." },
];

const TECH = [
  {
    title: "Engine & AR",
    items: [
      "Unity 6 LTS with the Universal Render Pipeline",
      "AR Foundation: ARKit on iPhone, ARCore on Android",
      "UI Toolkit for every screen",
    ],
  },
  {
    title: "Ghosts in the real world",
    items: [
      "A radar instead of a map",
      "Spawns follow the area and the time, so friends walking together see the same ghosts",
      "The exact position never leaves the phone",
    ],
  },
  {
    title: "Backend & purchases",
    items: [
      "Firebase: Firestore, Cloud Functions in TypeScript, Remote Config, App Check",
      "Global and per-country leaderboards, with the same daily points limit for everyone",
      "Purchases through RevenueCat",
    ],
  },
  {
    title: "The look",
    items: [
      "Glowing ghosts drawn by a hand-written URP shader",
      "Brass-and-glass gadgets, sounds and haptics",
      "In English, Swedish, German, French and Spanish",
    ],
  },
];

export default function WisplightPage() {
  return (
    <main className={s.page}>
      <Link href="/" className={s.back}>
        ← Triple7 Studios
      </Link>

      <section className={s.hero}>
        <Image className={s.icon} src="/wisplight/icon.png" alt="" width={120} height={120} priority />
        <div>
          <span className={s.kicker}>An outdoor ghost hunt in augmented reality</span>
          <h1 className={`${s.title} ${fell.className}`}>Wisplight</h1>
          <p className={`${s.tagline} ${fell.className}`}>Follow the light. Catch the wisp.</p>
          <p className={s.lede}>
            Ghosts drift through your streets, and Wisplight shows you where. Follow the radar
            outside, get close, and the camera reveals a glowing ghost floating around you.
          </p>
          <div className={s.chips}>
            <span className={s.chip}>
              <span className={s.live} />
              App Store — Live
            </span>
            <span className={s.chip}>
              <span className={s.live} />
              Google Play — Live
            </span>
            <span className={s.chip}>Unity · AR Foundation · Firebase</span>
            <span className={s.chip}>Ages 13+</span>
          </div>
          <p className={s.role}>
            Role: co-developer in a two-person team, building the AR ghost hunt and all the
            in-app screens. Published by Bluedeer IT AB.
          </p>
        </div>
      </section>

      <section>
        <h2 className={s.sectionTitle}>Screenshots</h2>
        <p className={s.sectionSubtitle}>Scroll sideways to see all eight.</p>
        <div className={s.screens}>
          {SCREENS.map((alt, i) => (
            <div className={s.screen} key={alt}>
              <Image
                src={`/wisplight/screens/${i + 1}.jpg`}
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
        <h2 className={s.sectionTitle}>How a hunt goes</h2>
        <p className={s.sectionSubtitle}>Outside, the radar leads the way.</p>
        <div className={s.grid}>
          {STEPS.map((step, i) => (
            <article className={s.panel} key={step.title}>
              <span className={s.step}>{i + 1}</span>
              <div className={s.cardTitle}>{step.title}</div>
              <p className={s.cardText}>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className={s.sectionTitle}>Ghosts, common to legendary</h2>
        <p className={s.sectionSubtitle}>
          Every ghost stays a shadow until you catch one, and each kind comes in rarer shades.
        </p>
        <div className={s.grid4}>
          {GHOSTS.map((ghost) => (
            <article className={`${s.panel} ${s.ghost}`} key={ghost.id}>
              <Image src={`/wisplight/ghosts/${ghost.id}.png`} alt="" width={320} height={320} />
              <span className={s.rarity} style={{ color: ghost.color }}>
                {ghost.rarity}
              </span>
              <div className={s.cardTitle}>{ghost.name}</div>
              <p className={s.cardText}>{ghost.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className={s.sectionTitle}>Brass, glass and a little glow</h2>
        <p className={s.sectionSubtitle}>The kit every hunter carries.</p>
        <div className={s.grid}>
          {KIT.map((item) => (
            <article className={`${s.panel} ${s.kit}`} key={item.id}>
              <Image src={`/wisplight/kit/${item.id}.png`} alt="" width={192} height={192} />
              <div>
                <div className={s.cardTitle}>{item.name}</div>
                <p className={s.cardText}>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className={s.sectionTitle}>Fair and private</h2>
        <p className={s.sectionSubtitle}>Free to play, with optional in-app purchases.</p>
        <article className={s.panel}>
          <ul className={s.list}>
            <li>No ads and no ad tracking.</li>
            <li>Your exact position never leaves your phone.</li>
            <li>The daily points limit is the same for everyone, so money can’t buy rank.</li>
            <li>Each catch attempt uses a battery charge, and charges come back over time.</li>
          </ul>
        </article>
      </section>

      <section>
        <h2 className={s.sectionTitle}>Technical overview</h2>
        <p className={s.sectionSubtitle}>
          Built for Halloween 2026, with a backend that scales from zero to many players.
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
        <h2 className={s.sectionTitle}>Get Wisplight</h2>
        <p className={s.sectionSubtitle}>
          Needs location and camera access, and a phone that supports augmented reality. Best
          played outdoors.
        </p>
        <div className={s.stores}>
          <a className={s.storeBadge} href={GOOGLE_PLAY} target="_blank" rel="noreferrer">
            <Image src="/googleplay.png" alt="Get it on Google Play" width={182} height={54} />
          </a>
          <a className={s.storeButton} href={APP_STORE} target="_blank" rel="noreferrer">
            Download on the App Store
          </a>
        </div>
        <div className={s.links}>
          <a className={s.link} href="https://wisplight.se/" target="_blank" rel="noreferrer">
            wisplight.se
          </a>
          <a className={s.link} href="https://wisplight.se/privacy" target="_blank" rel="noreferrer">
            Privacy policy
          </a>
          <a className={s.link} href="https://wisplight.se/terms" target="_blank" rel="noreferrer">
            Terms of use
          </a>
          <a className={s.link} href="mailto:support@wisplight.se">
            support@wisplight.se
          </a>
        </div>
      </section>

      <footer className={s.footer}>Triple7 Studios · Apps, games &amp; digital products</footer>
    </main>
  );
}
