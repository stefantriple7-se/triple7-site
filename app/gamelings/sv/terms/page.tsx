import type { Metadata } from "next";
import { Email, LegalPage, legalAlternates } from "../../LegalPage";
import s from "../../legal.module.css";

export const metadata: Metadata = {
  title: "Gamelings användarvillkor",
  description: "Reglerna för att spela Gamelings, korta och tydliga.",
  alternates: legalAlternates("sv", "terms"),
};

export default function GamelingsTermsSvPage() {
  return (
    <LegalPage lang="sv" kind="terms">
      <div className={s.hero}>
        <h1>Gamelings användarvillkor</h1>
        <p className={s.note}>Senast uppdaterade: 11 november 2026</p>
        <p className={s.lede}>Det här är reglerna för att spela Gamelings. Vi har hållit dem korta och tydliga. När du spelar godkänner du dem.</p>
      </div>

      <h2>Vilka vi är</h2>
      <p>Gamelings görs av Triple7 Studios och ges ut av Bluedeer IT AB, Olle Edfeldts väg 8, 243 93 Höör (org.nr 559337-9562, momsreg.nr SE559337956201). Villkoren är ett avtal mellan dig och Bluedeer IT AB (”vi”). Frågor: <Email />.</p>

      <h2>Vem kan spela</h2>
      <p>Gamelings är till för spelare från 13 år. Är du under 18, fråga en förälder eller vårdnadshavare innan du köper något. Yngre barn är välkomna att spela med sin familj.</p>

      <h2>Spela tillsammans</h2>
      <p>I ett rum på flera telefoner ser alla namnet och figuren du väljer. Välj ett snällt namn: inte grovt, hatiskt eller sexuellt, inte någon annans namn, och utan kontaktuppgifter som telefonnummer. Gå bara med i rum med personer du känner, och lämna rummet om något känns fel.</p>

      <h2>Köp</h2>
      <ul>
        <li>Du köper via Google Play eller App Store. Deras villkor gäller för betalningen, och de sköter återbetalningar.</li>
        <li>30-dagarspasset ger dig Pro i 30 dagar från köpet. Det är ett engångsköp och förnyas inte. Köper du ett nytt pass innan det första tar slut, börjar de nya 30 dagarna när det första passet tar slut.</li>
        <li>För alltid ger dig Pro så länge Gamelings finns. Du kan återställa köpet på en ny telefon med samma butikskonto (Inställningar → Återställ köp).</li>
        <li>Med Pro kan du starta alla spel i ett rum på flera telefoner. Vännerna som går med behöver inte Pro.</li>
        <li>Det du köper ger dig rätt att använda det i Gamelings. Det har inget penningvärde och kan inte bytas mot pengar eller flyttas till någon annan.</li>
        <li>Det du köper levereras direkt. Som butikerna förklarar vid köpet upphör ångerrätten på 14 dagar för digitalt innehåll när det har levererats. Om något du har köpt inte kom fram, skriv till oss.</li>
        <li>Om ett köp återbetalas tas Pro-tiden det gav tillbaka.</li>
      </ul>

      <h2>Appen kan ändras</h2>
      <p>Vi fortsätter att utveckla Gamelings, så spel, ordkategorier och regler kan ändras och nya tillkomma. Om vi någon gång slutar erbjuda appen säger vi till i appen i god tid och slutar sälja sådant som inte längre skulle gå att använda.</p>

      <h2>Appen</h2>
      <p>Du får en personlig rätt att använda Gamelings, inte i kommersiellt syfte. Kopiera, sälj eller bearbeta inte appen eller dess innehåll, utom där lagen tillåter det. På iPhone gäller också Apples standardlicensavtal för appar.</p>

      <h2>Om något går fel</h2>
      <p>Vi gör vårt bästa för att Gamelings ska fungera, men rum på flera telefoner kräver internet och kan ibland vara otillgängliga, och appen kan ha buggar. I den mån lagen tillåter ansvarar vi inte för förluster som det orsakar. Inget i de här villkoren begränsar de rättigheter du har som konsument enligt lagen i landet där du bor.</p>

      <h2>Ändringar</h2>
      <p>Om vi ändrar villkoren uppdaterar vi dem här och ändrar datumet överst. Om en ändring berör dig säger vi till i appen också.</p>

      <h2>Lag och klagomål</h2>
      <p>Svensk lag gäller, tillsammans med konsumentskyddet i landet där du bor. Har du ett klagomål, skriv först till <Email />. Konsumenter i Sverige kan också vända sig till Allmänna reklamationsnämnden (ARN, Box 174, 101 23 Stockholm, arn.se); vi medverkar i nämndens förfarande.</p>
    </LegalPage>
  );
}
