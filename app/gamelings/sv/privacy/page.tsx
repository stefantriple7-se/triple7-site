import type { Metadata } from "next";
import { Email, LegalPage, legalAlternates } from "../../LegalPage";
import s from "../../legal.module.css";

export const metadata: Metadata = {
  title: "Gamelings integritetspolicy",
  description: "Gamelings har inga konton, ingen reklam och ingen spårning. Dina spelare, poäng och inställningar stannar i din telefon.",
  alternates: legalAlternates("sv", "privacy"),
};

export default function GamelingsPrivacySvPage() {
  return (
    <LegalPage lang="sv" kind="privacy">
      <div className={s.hero}>
        <h1>Gamelings integritetspolicy</h1>
        <p className={s.note}>Senast uppdaterad: 6 november 2026</p>
        <p className={s.lede}>Gamelings har inga konton och ingen reklam, och inget spårar dig. Spelarna du lägger till, dina poäng och dina inställningar stannar i din telefon. Bara två saker lämnar den: spelmeddelanden när du spelar på flera telefoner, och köp.</p>
      </div>

      <h2>Vilka vi är</h2>
      <p>Gamelings görs av Bluedeer IT AB, Olle Edfeldts väg 8, 243 93 Höör (org.nr 559337-9562, momsreg.nr SE559337956201). Vi bestämmer hur dina uppgifter används och är därför personuppgiftsansvariga enligt EU:s dataskyddsförordning (GDPR). Frågor: <Email />.</p>

      <h2>Det som stannar i din telefon</h2>
      <ul>
        <li>Spelarna du lägger till: namnen du skriver och deras färger och figurer.</li>
        <li>Dina inställningar: språk, ljud, vibration, kortstil.</li>
        <li>Pågående spel och poäng, så att du kan fortsätta där du slutade.</li>
        <li>Om du har Pro, och till när.</li>
        <li>Ett slumpat ID för just den här installationen av appen. Det skapas i telefonen och är inte kopplat till dig, din telefon eller ditt butikskonto. Det används bara i rum på flera telefoner (se nedan).</li>
        <li>Kamerabilden när du skannar ett rums QR-kod. Den läses av i telefonen och sparas eller skickas aldrig någonstans.</li>
      </ul>
      <p>Vi får aldrig något av detta. Tar du bort appen försvinner allt.</p>

      <h2>Spela på flera telefoner</h2>
      <p>När du startar eller går med i ett rum skickar telefonerna i rummet spelmeddelanden till varandra via vår reläserver, som körs hos Cloudflare. Meddelandena innehåller:</p>
      <ul>
        <li>rummets kod på fyra bokstäver och det slumpade installations-ID:t;</li>
        <li>namnet, färgen och figuren du väljer för dig själv i rummet;</li>
        <li>själva spelet: drag, poäng och varje spelares egna kort eller hemliga ord, som bara skickas till den spelarens telefon.</li>
      </ul>
      <p>Reläservern skickar genast vidare varje meddelande till de andra telefonerna i samma rum. Den sparar inte meddelandena och för inga loggar över rum eller spelare. Medan ett rum är öppet sparar reläservern en slumpad nyckel som visar vilken telefon som startade rummet; den raderas när rummet stängs. För att kunna leverera meddelandena ser Cloudflare din telefons IP-adress, som vid all trafik på internet.</p>
      <p>Alla i rummet ser namnet och figuren du väljer. Ett smeknamn går bra: det behöver inte vara ditt riktiga namn.</p>

      <h2>Köp</h2>
      <p>Du kan köpa Gamelings Pro som ett 30-dagarspass eller för alltid. Du betalar via Google Play eller App Store; vi ser aldrig dina kortuppgifter. RevenueCat sköter köpen åt oss. Varje gång appen startar får RevenueCat ett slumpat ID som det skapar för den här installationen av appen, din IP-adress, ditt butiksland och enkla uppgifter om telefonen, som system- och appversion. När du köper får det också veta vad du köpte, butikens transaktionsnummer och datum. Inga reklam-ID:n och inget annat om dig.</p>
      <p>Köphistoriken sparas så att du får det du har betalat för och kan återställa För alltid på en ny telefon. Du kan när som helst be oss radera den (se ”Dina rättigheter”).</p>

      <h2>Det här gör vi aldrig</h2>
      <ul>
        <li>Ingen reklam, inget reklam-ID, ingen spårning mellan andra appar eller webbplatser.</li>
        <li>Inga verktyg för statistik eller kraschrapporter.</li>
        <li>Inga konton, ingen inloggning, ingen e-postadress eller telefonnummer.</li>
        <li>Ingen chatt. Den enda text någon skriver är spelarnamn.</li>
        <li>Vi säljer eller hyr aldrig ut uppgifter till någon.</li>
      </ul>

      <h2>Företag som hjälper oss</h2>
      <div className={s.tableWrap}>
      <table>
        <thead><tr><th>Företag</th><th>Vad de gör åt oss</th><th>Var</th></tr></thead>
        <tbody>
          <tr><td>Cloudflare, Inc.</td><td>Kör reläservern som skickar spelmeddelanden mellan telefonerna i ett rum</td><td>Cloudflares nätverk, oftast i ett datacenter nära spelarna. Det kan omfatta USA</td></tr>
          <tr><td>RevenueCat, Inc.</td><td>Sköter köp och återställer dem</td><td>USA</td></tr>
          <tr><td>Google och Apple (appbutikerna)</td><td>Tar betalt och levererar appen</td><td>Deras egna integritetspolicyer gäller</td></tr>
        </tbody>
      </table>
      </div>
      <p>När uppgifter förs över till USA skyddas de av ramverket för dataskydd mellan EU och USA (Data Privacy Framework) eller EU:s standardavtalsklausuler.</p>

      <h2>Rättslig grund (GDPR)</h2>
      <p>Allt ovan behövs för att ge dig det du har bett om (avtal): rum på flera telefoner och dina köp.</p>

      <h2>Barn</h2>
      <p>Gamelings är till för spelare från 13 år och riktar sig inte till barn under 13. Vi frågar inte efter namn, kontaktuppgifter eller bilder. Namnen som skrivs in i appen stannar i telefonen, och i ett rum ser bara de som är med i rummet dem.</p>

      <h2>Dina rättigheter</h2>
      <p>Du kan begära att få se, rätta, exportera eller radera dina uppgifter, invända mot hur vi använder dem eller be oss begränsa användningen.</p>
      <ul>
        <li>Allt i din telefon: ta bort appen.</li>
        <li>Din köphistorik hos RevenueCat: skriv till <Email /> med ordernumret från ditt kvitto från Google Play eller App Store, så att vi hittar den. Vi vet inte vem du är, så utan det kan vi inte se vilka köp som är dina.</li>
        <li>Klagomål: du kan vända dig till Integritetsskyddsmyndigheten, IMY (imy.se), eller till myndigheten där du bor.</li>
      </ul>

      <h2>Ändringar</h2>
      <p>Om vi ändrar policyn uppdaterar vi den här och ändrar datumet överst. Om en ändring berör dig säger vi till i appen också.</p>
    </LegalPage>
  );
}
