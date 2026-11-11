import type { Metadata } from "next";
import { Email, LegalPage, legalAlternates } from "../LegalPage";
import s from "../legal.module.css";

export const metadata: Metadata = {
  title: "Gamelings privacy policy",
  description: "Gamelings has no accounts, no ads and no tracking. Your players, scores and settings stay on your phone.",
  alternates: legalAlternates("en", "privacy"),
};

export default function GamelingsPrivacyPage() {
  return (
    <LegalPage lang="en" kind="privacy">
      <div className={s.hero}>
        <h1>Gamelings privacy policy</h1>
        <p className={s.note}>Last updated: 11 November 2026</p>
        <p className={s.lede}>Gamelings has no accounts and no ads, and nothing tracks you. The players you add, your scores and your settings stay on your phone. Only two things ever leave it: game messages when you play on several phones, and purchases.</p>
      </div>

      <h2>Who we are</h2>
      <p>Gamelings is made by Triple7 Studios and published by Bluedeer IT AB, Olle Edfeldts väg 8, 243 93 Höör, Sweden (company reg. no. 559337-9562, VAT no. SE559337956201). Bluedeer IT AB decides how your data is used, so it is the “controller” under the EU’s data protection law (GDPR). In this policy, “we” means Bluedeer IT AB. Questions: <Email />.</p>

      <h2>What stays on your phone</h2>
      <ul>
        <li>The players you add: the names you type, and their colours and avatars.</li>
        <li>Your settings: language, sound, vibration, card style.</li>
        <li>Games in progress and scores, so you can carry on where you left off.</li>
        <li>Whether you have Pro, and until when.</li>
        <li>A random ID for this installation of the app. It is made on your phone and isn’t linked to you, your phone or your store account. It is only used in rooms on several phones (see below).</li>
        <li>The camera picture, when you scan a room’s QR code. It is read on your phone and never saved or sent anywhere.</li>
      </ul>
      <p>We never receive any of this. Deleting the app deletes all of it.</p>

      <h2>Playing on several phones</h2>
      <p>When you start or join a room, the phones in it send each other game messages through our relay server, which runs on Cloudflare. They contain:</p>
      <ul>
        <li>the room’s four-letter code and the random installation ID;</li>
        <li>the name, colour and avatar you choose for yourself in the room;</li>
        <li>the game itself: moves, scores, and each player’s own cards or secret word, sent only to that player’s phone.</li>
      </ul>
      <p>The relay passes each message on to the other phones in the same room straight away. It doesn’t keep the messages, and it keeps no logs of rooms or players. While a room is open, the relay keeps a random key that tells it which phone started the room; it is deleted when the room closes. To deliver the messages, Cloudflare sees your phone’s IP address, as with any connection on the internet.</p>
      <p>Everyone in the room sees the name and avatar you choose. A nickname is fine: it doesn’t have to be your real name.</p>

      <h2>Purchases</h2>
      <p>You can buy Gamelings Pro as a 30-day pass or for life. You pay through Google Play or the App Store; we never see your card details. RevenueCat handles the purchases for us. Each time the app starts, RevenueCat receives a random ID it makes for this installation of the app, your IP address, your store country and basic phone details such as the system and app version. When you buy, it also receives what you bought, the store’s transaction number and the dates. No advertising IDs, and nothing else about you.</p>
      <p>The purchase history is kept so that you get what you paid for and can restore Lifetime on a new phone. You can ask us to delete it at any time (see “Your rights”).</p>

      <h2>What we never do</h2>
      <ul>
        <li>No ads, no advertising ID, no tracking across other apps or websites.</li>
        <li>No analytics or crash-reporting tools.</li>
        <li>No accounts, no sign-in, no email address or phone number.</li>
        <li>No chat. The only text anyone types is player names.</li>
        <li>No selling or renting of data to anyone.</li>
      </ul>

      <h2>Who helps us run the app</h2>
      <div className={s.tableWrap}>
      <table>
        <thead><tr><th>Company</th><th>What they do for us</th><th>Where</th></tr></thead>
        <tbody>
          <tr><td>Cloudflare, Inc.</td><td>Runs the relay that passes game messages between phones in a room</td><td>Cloudflare’s network, usually in a data centre near the players. It may include the USA</td></tr>
          <tr><td>RevenueCat, Inc.</td><td>Handles purchases and restores them</td><td>USA</td></tr>
          <tr><td>Google and Apple (the app stores)</td><td>Take your payment and deliver the app</td><td>Their own privacy policies apply</td></tr>
        </tbody>
      </table>
      </div>
      <p>When data goes to the USA, it is protected by the EU–US Data Privacy Framework or the EU’s standard contractual clauses.</p>

      <h2>Our legal grounds (GDPR)</h2>
      <p>Everything above is needed to provide what you asked for (contract): rooms on several phones, and your purchases.</p>

      <h2>Children</h2>
      <p>Gamelings is for players aged 13 and up, and it is not directed at children under 13. We don’t ask for names, contact details or photos. The names typed into the app stay on the phone, and in a room only the people in that room see them.</p>

      <h2>Your rights</h2>
      <p>You can ask to see, correct, export or delete your data, object to how we use it, or ask us to limit it.</p>
      <ul>
        <li>Everything on your phone: delete the app.</li>
        <li>Your purchase history at RevenueCat: write to <Email /> with the order number from your Google Play or App Store receipt, so we can find it. We don’t know who you are, so without it we can’t tell which purchases are yours.</li>
        <li>Complaints: you can contact Sweden’s data protection authority, IMY (imy.se), or the authority where you live.</li>
      </ul>

      <h2>Changes</h2>
      <p>If we change this policy, we update it here and change the date at the top. If a change matters for you, we will also tell you in the app.</p>
    </LegalPage>
  );
}
