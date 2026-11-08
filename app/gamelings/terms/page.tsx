import type { Metadata } from "next";
import { Email, LegalPage, legalAlternates } from "../LegalPage";
import s from "../legal.module.css";

export const metadata: Metadata = {
  title: "Gamelings terms of use",
  description: "The rules for playing Gamelings, kept short and plain.",
  alternates: legalAlternates("en", "terms"),
};

export default function GamelingsTermsPage() {
  return (
    <LegalPage lang="en" kind="terms">
      <div className={s.hero}>
        <h1>Gamelings terms of use</h1>
        <p className={s.note}>Last updated: 6 November 2026</p>
        <p className={s.lede}>These are the rules for playing Gamelings. We have kept them short and plain. By playing, you agree to them.</p>
      </div>

      <h2>Who we are</h2>
      <p>Gamelings is made by Bluedeer IT AB, Olle Edfeldts väg 8, 243 93 Höör, Sweden (company reg. no. 559337-9562, VAT no. SE559337956201). Questions: <Email />.</p>

      <h2>Who can play</h2>
      <p>Gamelings is for players aged 13 and up. If you are under 18, ask a parent or guardian before you buy anything. Younger children are welcome to play along with their family.</p>

      <h2>Playing together</h2>
      <p>In a room on several phones, everyone sees the name and avatar you choose. Pick a name that is kind: not rude, hateful or sexual, not someone else’s name, and with no contact details such as a phone number. Only join rooms with people you know, and leave a room if anything in it feels wrong.</p>

      <h2>Purchases</h2>
      <ul>
        <li>You buy through Google Play or the App Store. Their terms apply to the payment, and they handle refunds.</li>
        <li>The 30-day pass gives you Pro for 30 days from the purchase. It is a one-time purchase and doesn’t renew. If you buy another pass before the first one ends, the new 30 days start when the first pass ends.</li>
        <li>Lifetime gives you Pro for as long as Gamelings is offered. You can restore it on a new phone with the same store account (Settings → Restore purchases).</li>
        <li>With Pro you can host every game in a room on several phones. The friends who join don’t need Pro.</li>
        <li>What you buy gives you the right to use it in Gamelings. It has no money value, and it can’t be exchanged for money or moved to someone else.</li>
        <li>What you buy is delivered at once. As the stores explain when you buy, the 14-day right of withdrawal for digital content ends when it is delivered. If something you bought didn’t arrive, write to us.</li>
        <li>If a purchase is refunded, the Pro it gave is taken back.</li>
      </ul>

      <h2>The app can change</h2>
      <p>We keep working on Gamelings, so games, word categories and rules can change, and new ones are added. If we ever stop offering the app, we will tell you in the app in good time and stop selling anything that could no longer be used.</p>

      <h2>The app</h2>
      <p>You get a personal, non-commercial right to use Gamelings. Don’t copy, sell or rework the app or its content, except where the law allows it. On iPhone, Apple’s standard licence agreement for apps also applies.</p>

      <h2>If something goes wrong</h2>
      <p>We do our best to keep Gamelings working, but rooms on several phones need an internet connection and can sometimes be unavailable, and the app can have bugs. As far as the law allows, we are not responsible for losses caused by that. Nothing in these terms limits the rights you have as a consumer under the law of the country where you live.</p>

      <h2>Changes</h2>
      <p>If we change these terms, we update them here and change the date at the top. If a change matters for you, we will also tell you in the app.</p>

      <h2>Law and complaints</h2>
      <p>Swedish law applies, together with the consumer protection of the country where you live. If you have a complaint, write to <Email /> first. Consumers in Sweden can also turn to the National Board for Consumer Disputes (Allmänna reklamationsnämnden, Box 174, 101 23 Stockholm, arn.se); we take part in its procedure.</p>
    </LegalPage>
  );
}
