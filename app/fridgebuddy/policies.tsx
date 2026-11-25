import type { ReactNode } from "react";
import type { Lang } from "./PrivacyPage";
import s from "./legal.module.css";

// The text of FridgeBuddy's privacy policy. Every language has the same sections, so a change
// in one is easy to carry over to the others. Keep it true to the app:
// - data stays on the phone (Room + DataStore, Android backup on);
// - barcodes, dates and names are read on the phone with ML Kit (1.0: Play services' scanner);
// - barcode numbers go to Open Food Facts;
// - shared names, and from 1.1 categories and use-by, live in Firestore (the "(default)" database in eur3: Belgium and the
//   Netherlands), with Firebase anonymous auth;
// - Premium is a Google Play one-time purchase, checked on the phone.

const UPDATED = "2026-11-25";

function Email() {
  return (
    <a className={s.email} href="mailto:contact@triple7.se">
      contact@triple7.se
    </a>
  );
}

type PolicyText = {
  title: string;
  description: string;
  languages: string;
  byline: string;
  updated: string;
  lede: string;
  who: [string, ReactNode];
  phone: [string, string[], string];
  camera: [string, ReactNode];
  lookup: [string, ReactNode];
  shared: [string, string, string, string];
  purchases: [string, string];
  helpers: [string, [string, string, string], [string, string, string][], string];
  never: [string, string[]];
  legal: [string, string];
  children: [string, string];
  rights: [string, string, ReactNode[]];
  changes: [string, string];
};

const google = (hl: string, text: string) => (
  <a href={`https://policies.google.com/privacy?hl=${hl}`}>{text}</a>
);
const off = (host: string) => <a href={`https://${host}.openfoodfacts.org`}>Open Food Facts</a>;
const COMPANY_ADDRESS = "Bluedeer IT AB, Olle Edfeldts väg 8, 243 93 Höör";

const TEXT: Record<Lang, PolicyText> = {
  en: {
    title: "FridgeBuddy privacy policy",
    description:
      "FridgeBuddy has no accounts, no ads and no tracking. What’s in your fridge stays on your phone.",
    languages: "Language",
    byline: "FridgeBuddy · An app from Triple7 Studios, published by Bluedeer IT AB",
    updated: "Last updated: 25 November 2026",
    lede: "FridgeBuddy has no accounts and no ads, and nothing tracks you. What’s in your fridge stays on your phone. Only barcode numbers leave it, to look up product names, and what you choose to share with other users: names and categories.",
    who: [
      "Who we are",
      <>
        FridgeBuddy is made by Triple7 Studios and published by {COMPANY_ADDRESS}, Sweden (company
        reg. no. 559337-9562). Bluedeer IT AB decides how your data is used, so it is the
        “controller” under the EU’s data protection law (GDPR). In this policy, “we” means Bluedeer
        IT AB. Questions: <Email />.
      </>,
    ],
    phone: [
      "What stays on your phone",
      [
        "Your products, their best-before dates and quantities.",
        "Your history and statistics: what you ate and what you threw away.",
        "Your shopping list.",
        "The names you gave scanned barcodes, and the categories and kinds of date you chose.",
        "Your settings: reminders, language, theme, and whether you have Premium.",
      ],
      "We never receive any of this. If Android backup is on, Android includes it in your phone’s backup to your Google account, which you control in the phone’s settings. Deleting the app deletes it from the phone.",
    ],
    camera: [
      "The camera",
      <>
        The camera is only used while you scan. Barcodes, best-before dates and product names are
        read on your phone with Google ML Kit, and the pictures are never saved or sent. (Version
        1.0 read barcodes with the code scanner in Google Play services, which only gave the app the
        barcode number.) Google Play services and ML Kit may send Google anonymous technical data,
        such as the phone model, app version and performance figures, to keep them working; see{" "}
        {google("en", "Google’s privacy policy")}.
      </>,
    ],
    lookup: [
      "Looking up product names",
      <>
        When you scan a barcode, its number is sent to {off("world")}, an open food database run
        by a non-profit in France, to find the product’s name. Like any website, they see your IP
        address. Nothing else is sent.
      </>,
    ],
    shared: [
      "Names and categories shared between users",
      "When you scan a barcode, the app can ask FridgeBuddy’s own service what other users have said about it: a name, if Open Food Facts doesn’t know the product, and (from version 1.1) its category and whether it has a use-by date. The barcode number is sent. For this, the app signs in anonymously: Firebase gives this installation of the app a random ID that isn’t linked to your name, email address or Google account.",
      "Sharing is off until you say yes, the first time it would help. After that, when you save a scanned product, the barcode, the random ID and the time are stored, with the name you gave it if Open Food Facts doesn’t know it, and (from version 1.1) the category you chose and whether it has a use-by date. Others only see a name or a category once two users agree on it or we have approved it. Barcodes that only work in one shop, such as on weighed goods, are never shared. Reporting a wrong name sends the barcode, the name shown, the random ID and the time. You can stop sharing at any time in Settings → Scanning.",
      "This data is stored with Google Firebase on servers in the EU (Belgium and the Netherlands). The anonymous sign-in is handled by Firebase Authentication, which Google may also process in the USA. Shared names and categories are kept as long as they are useful to others.",
    ],
    purchases: [
      "Purchases",
      "FridgeBuddy Premium is a one-time purchase through Google Play, which handles the payment; we never see your card details. The app only receives Google Play’s confirmation that unlocks Premium.",
    ],
    helpers: [
      "Who helps us run the app",
      ["Company", "What they do for us", "Where"],
      [
        ["Google (Firebase)", "Stores shared names and categories and handles the anonymous sign-in", "EU; the sign-in also the USA"],
        ["Google (Play services, ML Kit, Google Play)", "Reading barcodes and text on the phone, and purchases", "Google’s own privacy policy applies"],
        ["Open Food Facts", "Product names for barcodes", "France"],
      ],
      "When data goes to the USA, it is protected by the EU–US Data Privacy Framework or the EU’s standard contractual clauses.",
    ],
    never: [
      "What we never do",
      [
        "No ads, no advertising ID, no tracking across other apps or websites.",
        "No analytics or crash-reporting tools.",
        "No accounts, no email address or phone number.",
        "No selling or renting of data to anyone.",
      ],
    ],
    legal: [
      "Our legal grounds (GDPR)",
      "Looking up names and purchases are needed to provide what you asked for (contract). Sharing names and categories is based on your consent, which you can withdraw in Settings.",
    ],
    children: ["Children", "FridgeBuddy is not directed at children under 13."],
    rights: [
      "Your rights",
      "You can ask to see, correct, export or delete your data, object to how we use it, or ask us to limit it.",
      [
        "Everything on your phone: delete the app, or clear its data in the phone’s settings.",
        <>
          Names and categories you shared: write to <Email /> with the barcode. We don’t know who
          you are, so without it we can’t tell which are yours.
        </>,
        "Complaints: you can contact Sweden’s data protection authority, IMY (imy.se), or the authority where you live.",
      ],
    ],
    changes: ["Changes", "If we change this policy, we update it here and change the date at the top."],
  },

  sv: {
    title: "FridgeBuddys integritetspolicy",
    description:
      "FridgeBuddy har inga konton, ingen reklam och ingen spårning. Det som finns i ditt kylskåp stannar i din telefon.",
    languages: "Språk",
    byline: "FridgeBuddy · En app från Triple7 Studios, utgiven av Bluedeer IT AB",
    updated: "Senast uppdaterad: 25 november 2026",
    lede: "FridgeBuddy har inga konton och ingen reklam, och ingenting spårar dig. Det som finns i ditt kylskåp stannar i din telefon. Bara streckkodsnummer lämnar den, för att hitta varunamn, och det du väljer att dela med andra användare: namn och kategorier.",
    who: [
      "Vilka vi är",
      <>
        FridgeBuddy görs av Triple7 Studios och ges ut av {COMPANY_ADDRESS} (org.nr 559337-9562).
        Bluedeer IT AB bestämmer hur din data används och är därför ”personuppgiftsansvarig” enligt
        EU:s dataskyddsförordning (GDPR). I den här policyn betyder ”vi” Bluedeer IT AB. Frågor:{" "}
        <Email />.
      </>,
    ],
    phone: [
      "Det här stannar i din telefon",
      [
        "Dina varor, deras bäst före-datum och antal.",
        "Din historik och statistik: vad du ätit och vad du slängt.",
        "Din inköpslista.",
        "Namnen du gett skannade streckkoder, och kategorierna och datumtyperna du valt.",
        "Dina inställningar: påminnelser, språk, tema och om du har Premium.",
      ],
      "Vi får aldrig del av något av detta. Om Android-säkerhetskopiering är påslagen tar Android med det i telefonens säkerhetskopia till ditt Google-konto, som du styr i telefonens inställningar. Tar du bort appen raderas det från telefonen.",
    ],
    camera: [
      "Kameran",
      <>
        Kameran används bara medan du skannar. Streckkoder, bäst före-datum och varunamn läses i din
        telefon med Google ML Kit, och bilderna sparas eller skickas aldrig. (Version 1.0 läste
        streckkoder med kodskannern i Google Play-tjänster, som bara gav appen streckkodsnumret.)
        Google Play-tjänster och ML Kit kan skicka anonym teknisk data till Google, till exempel
        telefonmodell, appversion och prestandauppgifter, för att fungera; se{" "}
        {google("sv", "Googles integritetspolicy")}.
      </>,
    ],
    lookup: [
      "Uppslag av varunamn",
      <>
        När du skannar en streckkod skickas numret till {off("se")}, en öppen livsmedelsdatabas som
        drivs av en ideell organisation i Frankrike, för att hitta varans namn. Som alla webbplatser
        ser de din IP-adress. Inget annat skickas.
      </>,
    ],
    shared: [
      "Namn och kategorier som delas mellan användare",
      "När du skannar en streckkod kan appen fråga FridgeBuddys egen tjänst vad andra användare har sagt om den: ett namn, om Open Food Facts inte känner till varan, och (från version 1.1) dess kategori och om den har sista förbrukningsdag. Streckkodsnumret skickas. För det loggar appen in anonymt: Firebase ger den här installationen av appen ett slumpmässigt id som inte är kopplat till ditt namn, din e-postadress eller ditt Google-konto.",
      "Delning är avstängd tills du säger ja, första gången den skulle hjälpa. Därefter lagras, när du sparar en skannad vara, streckkoden, det slumpmässiga id:t och tidpunkten, tillsammans med namnet du gav varan om Open Food Facts inte känner till den, och (från version 1.1) kategorin du valde och om den har sista förbrukningsdag. Andra ser ett namn eller en kategori först när två användare är överens om det eller vi har godkänt det. Streckkoder som bara gäller i en butik, till exempel på vägda varor, delas aldrig. En rapport om fel namn skickar streckkoden, namnet som visades, det slumpmässiga id:t och tidpunkten. Du kan när som helst sluta dela under Inställningar → Skanning.",
      "Den här datan lagras hos Google Firebase på servrar i EU (Belgien och Nederländerna). Den anonyma inloggningen sköts av Firebase Authentication, som Google även kan behandla i USA. Delade namn och kategorier sparas så länge de är till nytta för andra.",
    ],
    purchases: [
      "Köp",
      "FridgeBuddy Premium är ett engångsköp via Google Play, som sköter betalningen; vi ser aldrig dina kortuppgifter. Appen får bara Google Plays bekräftelse som låser upp Premium.",
    ],
    helpers: [
      "Vilka som hjälper oss att driva appen",
      ["Företag", "Vad de gör åt oss", "Var"],
      [
        ["Google (Firebase)", "Lagrar delade namn och kategorier och sköter den anonyma inloggningen", "EU; inloggningen även USA"],
        ["Google (Play-tjänster, ML Kit, Google Play)", "Läser streckkoder och text i telefonen, och köpen", "Googles egen integritetspolicy gäller"],
        ["Open Food Facts", "Varunamn utifrån streckkoder", "Frankrike"],
      ],
      "När data går till USA skyddas den av EU–US Data Privacy Framework eller EU:s standardavtalsklausuler.",
    ],
    never: [
      "Det här gör vi aldrig",
      [
        "Ingen reklam, inget reklam-id, ingen spårning i andra appar eller på andra webbplatser.",
        "Inga verktyg för analys eller kraschrapporter.",
        "Inga konton, ingen e-postadress eller telefonnummer.",
        "Vi säljer eller hyr aldrig ut data till någon.",
      ],
    ],
    legal: [
      "Rättslig grund (GDPR)",
      "Uppslag av namn och köp behövs för att ge dig det du bett om (avtal). Delning av namn och kategorier bygger på ditt samtycke, som du kan återkalla i Inställningar.",
    ],
    children: ["Barn", "FridgeBuddy riktar sig inte till barn under 13 år."],
    rights: [
      "Dina rättigheter",
      "Du kan begära att få se, rätta, exportera eller radera din data, invända mot hur vi använder den eller begära att vi begränsar den.",
      [
        "Allt i din telefon: ta bort appen, eller rensa dess data i telefonens inställningar.",
        <>
          Namn och kategorier du delat: skriv till <Email /> med streckkoden. Vi vet inte vem du är,
          så utan den kan vi inte se vad som är ditt.
        </>,
        "Klagomål: du kan kontakta Integritetsskyddsmyndigheten, IMY (imy.se), eller myndigheten där du bor.",
      ],
    ],
    changes: ["Ändringar", "Om vi ändrar policyn uppdaterar vi den här och ändrar datumet högst upp."],
  },

  de: {
    title: "Datenschutzerklärung für FridgeBuddy",
    description:
      "FridgeBuddy hat keine Konten, keine Werbung und kein Tracking. Was in deinem Kühlschrank ist, bleibt auf deinem Handy.",
    languages: "Sprache",
    byline: "FridgeBuddy · Eine App von Triple7 Studios, herausgegeben von Bluedeer IT AB",
    updated: "Zuletzt aktualisiert: 25. November 2026",
    lede: "FridgeBuddy hat keine Konten und keine Werbung, und nichts verfolgt dich. Was in deinem Kühlschrank ist, bleibt auf deinem Handy. Nur Strichcodenummern verlassen es, um Produktnamen nachzuschlagen, und was du mit anderen Nutzern teilen möchtest: Namen und Kategorien.",
    who: [
      "Wer wir sind",
      <>
        FridgeBuddy wird von Triple7 Studios entwickelt und von {COMPANY_ADDRESS}, Schweden
        (Org.-Nr. 559337-9562) herausgegeben. Bluedeer IT AB entscheidet, wie deine Daten verwendet
        werden, und ist daher „Verantwortlicher“ im Sinne der Datenschutz-Grundverordnung (DSGVO).
        In dieser Erklärung meint „wir“ Bluedeer IT AB. Fragen: <Email />.
      </>,
    ],
    phone: [
      "Was auf deinem Handy bleibt",
      [
        "Deine Produkte, ihre Mindesthaltbarkeitsdaten und Mengen.",
        "Dein Verlauf und deine Statistik: was du gegessen und was du weggeworfen hast.",
        "Deine Einkaufsliste.",
        "Die Namen, die du gescannten Strichcodes gegeben hast, und die gewählten Kategorien und Datumsarten.",
        "Deine Einstellungen: Erinnerungen, Sprache, Farbschema und ob du Premium hast.",
      ],
      "Wir erhalten nichts davon. Ist die Android-Sicherung aktiviert, nimmt Android es in die Sicherung deines Handys in deinem Google-Konto auf, die du in den Einstellungen des Handys steuerst. Wenn du die App löschst, wird es vom Handy gelöscht.",
    ],
    camera: [
      "Kamera",
      <>
        Die Kamera wird nur beim Scannen verwendet. Strichcodes, Mindesthaltbarkeitsdaten und
        Produktnamen werden auf deinem Handy mit Google ML Kit gelesen; die Bilder werden nie
        gespeichert oder gesendet. (Version 1.0 las Strichcodes mit dem Codescanner der Google
        Play-Dienste, der der App nur die Strichcodenummer gab.) Die Google Play-Dienste und ML Kit
        können anonyme technische Daten an Google senden, etwa Gerätemodell, App-Version und
        Leistungswerte, damit sie funktionieren; siehe{" "}
        {google("de", "die Datenschutzerklärung von Google")}.
      </>,
    ],
    lookup: [
      "Produktnamen nachschlagen",
      <>
        Wenn du einen Strichcode scannst, wird seine Nummer an {off("de")} gesendet, eine offene
        Lebensmitteldatenbank einer gemeinnützigen Organisation in Frankreich, um den Produktnamen
        zu finden. Wie jede Website sieht sie deine IP-Adresse. Sonst wird nichts gesendet.
      </>,
    ],
    shared: [
      "Zwischen Nutzern geteilte Namen und Kategorien",
      "Wenn du einen Strichcode scannst, kann die App den eigenen Dienst von FridgeBuddy fragen, was andere Nutzer dazu gesagt haben: einen Namen, wenn Open Food Facts das Produkt nicht kennt, und (ab Version 1.1) seine Kategorie und ob es ein Verbrauchsdatum hat. Dabei wird die Strichcodenummer gesendet. Dafür meldet sich die App anonym an: Firebase gibt dieser Installation der App eine zufällige ID, die nicht mit deinem Namen, deiner E-Mail-Adresse oder deinem Google-Konto verknüpft ist.",
      "Teilen ist aus, bis du zustimmst – beim ersten Mal, wenn es helfen würde. Danach werden, wenn du ein gescanntes Produkt hinzufügst, der Strichcode, die zufällige ID und der Zeitpunkt gespeichert, zusammen mit dem von dir vergebenen Namen, wenn Open Food Facts das Produkt nicht kennt, und (ab Version 1.1) der gewählten Kategorie und ob es ein Verbrauchsdatum hat. Andere sehen einen Namen oder eine Kategorie erst, wenn sich zwei Nutzer einig sind oder wir sie freigegeben haben. Strichcodes, die nur in einem Geschäft gelten, etwa auf abgewogener Ware, werden nie geteilt. Eine Meldung „Falscher Name“ sendet den Strichcode, den angezeigten Namen, die zufällige ID und den Zeitpunkt. Du kannst das Teilen jederzeit unter Einstellungen → Scannen beenden.",
      "Diese Daten werden bei Google Firebase auf Servern in der EU (Belgien und Niederlande) gespeichert. Die anonyme Anmeldung übernimmt Firebase Authentication, das Google auch in den USA verarbeiten kann. Geteilte Namen und Kategorien werden aufbewahrt, solange sie anderen nützen.",
    ],
    purchases: [
      "Käufe",
      "FridgeBuddy Premium ist ein einmaliger Kauf über Google Play, das die Zahlung abwickelt; deine Kartendaten sehen wir nie. Die App erhält nur die Bestätigung von Google Play, die Premium freischaltet.",
    ],
    helpers: [
      "Wer uns beim Betrieb der App hilft",
      ["Unternehmen", "Was sie für uns tun", "Wo"],
      [
        ["Google (Firebase)", "Speichert geteilte Namen und Kategorien und übernimmt die anonyme Anmeldung", "EU; die Anmeldung auch USA"],
        ["Google (Play-Dienste, ML Kit, Google Play)", "Lesen von Strichcodes und Text auf dem Handy, und Käufe", "Es gilt Googles eigene Datenschutzerklärung"],
        ["Open Food Facts", "Produktnamen zu Strichcodes", "Frankreich"],
      ],
      "Gehen Daten in die USA, sind sie durch das EU-US Data Privacy Framework oder die Standardvertragsklauseln der EU geschützt.",
    ],
    never: [
      "Was wir nie tun",
      [
        "Keine Werbung, keine Werbe-ID, kein Tracking über andere Apps oder Websites.",
        "Keine Analyse- oder Absturzberichts-Tools.",
        "Keine Konten, keine E-Mail-Adresse oder Telefonnummer.",
        "Wir verkaufen oder vermieten keine Daten.",
      ],
    ],
    legal: [
      "Rechtsgrundlagen (DSGVO)",
      "Das Nachschlagen von Namen und Käufe sind nötig, um dir zu geben, worum du gebeten hast (Vertrag). Das Teilen von Namen und Kategorien beruht auf deiner Einwilligung, die du in den Einstellungen widerrufen kannst.",
    ],
    children: ["Kinder", "FridgeBuddy richtet sich nicht an Kinder unter 13 Jahren."],
    rights: [
      "Deine Rechte",
      "Du kannst verlangen, deine Daten einzusehen, zu berichtigen, zu exportieren oder zu löschen, ihrer Verwendung widersprechen oder eine Einschränkung verlangen.",
      [
        "Alles auf deinem Handy: Lösche die App oder ihre Daten in den Einstellungen des Handys.",
        <>
          Geteilte Namen und Kategorien: Schreib an <Email /> mit dem Strichcode. Wir wissen nicht,
          wer du bist, und können ohne diese Angabe nicht erkennen, was von dir ist.
        </>,
        "Beschwerden: bei der schwedischen Datenschutzbehörde IMY (imy.se) oder der Behörde an deinem Wohnort.",
      ],
    ],
    changes: ["Änderungen", "Ändern wir diese Erklärung, aktualisieren wir sie hier und ändern das Datum oben."],
  },

  fr: {
    title: "Politique de confidentialité de FridgeBuddy",
    description:
      "FridgeBuddy n’a ni compte, ni publicité, ni suivi. Le contenu de votre frigo reste sur votre téléphone.",
    languages: "Langue",
    byline: "FridgeBuddy · Une application de Triple7 Studios, publiée par Bluedeer IT AB",
    updated: "Dernière mise à jour : 25 novembre 2026",
    lede: "FridgeBuddy n’a ni compte ni publicité, et rien ne vous suit. Le contenu de votre frigo reste sur votre téléphone. Seuls les numéros de code-barres en sortent, pour trouver le nom des produits, ainsi que ce que vous choisissez de partager avec d’autres utilisateurs : noms et catégories.",
    who: [
      "Qui sommes-nous",
      <>
        FridgeBuddy est développée par Triple7 Studios et publiée par {COMPANY_ADDRESS}, Suède
        (n° d’entreprise 559337-9562). Bluedeer IT AB décide de l’utilisation de vos données et en
        est donc le « responsable du traitement » au sens du règlement européen sur la protection
        des données (RGPD). Dans cette politique, « nous » désigne Bluedeer IT AB. Questions :{" "}
        <Email />.
      </>,
    ],
    phone: [
      "Ce qui reste sur votre téléphone",
      [
        "Vos produits, leurs dates de péremption et leurs quantités.",
        "Votre historique et vos statistiques : ce que vous avez mangé et ce que vous avez jeté.",
        "Votre liste de courses.",
        "Les noms que vous avez donnés aux codes-barres scannés, et les catégories et types de date choisis.",
        "Vos réglages : rappels, langue, thème, et si vous avez Premium.",
      ],
      "Nous n’en recevons jamais rien. Si la sauvegarde Android est activée, Android l’inclut dans la sauvegarde de votre téléphone sur votre compte Google, que vous gérez dans les réglages du téléphone. Supprimer l’application l’efface du téléphone.",
    ],
    camera: [
      "L’appareil photo",
      <>
        L’appareil photo n’est utilisé que pendant un scan. Les codes-barres, les dates de
        péremption et les noms de produits sont lus sur votre téléphone avec Google ML Kit ; les
        images ne sont jamais enregistrées ni envoyées. (La version 1.0 lisait les codes-barres avec
        le lecteur de codes des services Google Play, qui ne transmettait à l’application que le
        numéro.) Les services Google Play et ML Kit peuvent envoyer à Google des données techniques
        anonymes, comme le modèle du téléphone, la version de l’application et des mesures de
        performance, pour fonctionner ; voir les{" "}
        {google("fr", "règles de confidentialité de Google")}.
      </>,
    ],
    lookup: [
      "Recherche du nom des produits",
      <>
        Lorsque vous scannez un code-barres, son numéro est envoyé à {off("fr")}, une base de
        données alimentaire ouverte gérée par une association à but non lucratif en France, pour
        trouver le nom du produit. Comme tout site web, elle voit votre adresse IP. Rien d’autre
        n’est envoyé.
      </>,
    ],
    shared: [
      "Noms et catégories partagés entre utilisateurs",
      "Quand vous scannez un code-barres, l’application peut demander au service de FridgeBuddy ce que d’autres utilisateurs en ont dit : un nom, si Open Food Facts ne connaît pas le produit, et (à partir de la version 1.1) sa catégorie et s’il a une date limite de consommation. Le numéro du code-barres est envoyé. Pour cela, l’application se connecte de façon anonyme : Firebase attribue à cette installation de l’application un identifiant aléatoire, qui n’est lié ni à votre nom, ni à votre adresse e-mail, ni à votre compte Google.",
      "Le partage est désactivé tant que vous ne l’acceptez pas, la première fois qu’il serait utile. Ensuite, quand vous enregistrez un produit scanné, le code-barres, l’identifiant aléatoire et l’heure sont conservés, avec le nom que vous lui avez donné s’il est inconnu d’Open Food Facts, et (à partir de la version 1.1) la catégorie choisie et s’il a une date limite de consommation. Un nom ou une catégorie n’est montré aux autres que lorsque deux utilisateurs sont d’accord ou que nous l’avons approuvé. Les codes-barres valables dans un seul magasin, par exemple sur les produits pesés, ne sont jamais partagés. Un signalement « Nom incorrect » envoie le code-barres, le nom affiché, l’identifiant aléatoire et l’heure. Vous pouvez arrêter de partager à tout moment dans Paramètres → Scan.",
      "Ces données sont stockées chez Google Firebase sur des serveurs dans l’UE (Belgique et Pays-Bas). La connexion anonyme est gérée par Firebase Authentication, que Google peut aussi traiter aux États-Unis. Les noms et catégories partagés sont conservés tant qu’ils sont utiles aux autres.",
    ],
    purchases: [
      "Achats",
      "FridgeBuddy Premium est un achat unique via Google Play, qui gère le paiement ; nous ne voyons jamais vos données de carte. L’application reçoit seulement la confirmation de Google Play qui débloque Premium.",
    ],
    helpers: [
      "Qui nous aide à faire fonctionner l’application",
      ["Entreprise", "Ce qu’elle fait pour nous", "Où"],
      [
        ["Google (Firebase)", "Stocke les noms et catégories partagés et gère la connexion anonyme", "UE ; la connexion aussi aux États-Unis"],
        ["Google (services Google Play, ML Kit, Google Play)", "Lecture des codes-barres et du texte sur le téléphone, et achats", "Les règles de confidentialité de Google s’appliquent"],
        ["Open Food Facts", "Noms de produits à partir des codes-barres", "France"],
      ],
      "Lorsque des données vont aux États-Unis, elles sont protégées par le Data Privacy Framework UE–États-Unis ou par les clauses contractuelles types de l’UE.",
    ],
    never: [
      "Ce que nous ne faisons jamais",
      [
        "Pas de publicité, pas d’identifiant publicitaire, pas de suivi dans d’autres applications ou sites.",
        "Pas d’outils de mesure d’audience ni de rapports de plantage.",
        "Pas de compte, pas d’adresse e-mail ni de numéro de téléphone.",
        "Nous ne vendons ni ne louons jamais de données.",
      ],
    ],
    legal: [
      "Bases juridiques (RGPD)",
      "La recherche de noms et les achats sont nécessaires pour vous fournir ce que vous avez demandé (contrat). Le partage de noms et de catégories repose sur votre consentement, que vous pouvez retirer dans les Paramètres.",
    ],
    children: ["Enfants", "FridgeBuddy ne s’adresse pas aux enfants de moins de 13 ans."],
    rights: [
      "Vos droits",
      "Vous pouvez demander à consulter, rectifier, exporter ou effacer vos données, vous opposer à leur utilisation ou en demander la limitation.",
      [
        "Tout ce qui est sur votre téléphone : supprimez l’application, ou effacez ses données dans les réglages du téléphone.",
        <>
          Les noms et catégories que vous avez partagés : écrivez à <Email /> avec le code-barres.
          Nous ne savons pas qui vous êtes : sans lui, nous ne pouvons pas savoir ce qui vient de
          vous.
        </>,
        "Réclamations : l’autorité suédoise de protection des données, IMY (imy.se), ou celle de votre pays (en France, la CNIL).",
      ],
    ],
    changes: ["Modifications", "Si nous modifions cette politique, nous la mettons à jour ici et changeons la date en haut."],
  },

  es: {
    title: "Política de privacidad de FridgeBuddy",
    description:
      "FridgeBuddy no tiene cuentas, ni anuncios, ni seguimiento. Lo que hay en tu nevera se queda en tu teléfono.",
    languages: "Idioma",
    byline: "FridgeBuddy · Una app de Triple7 Studios, publicada por Bluedeer IT AB",
    updated: "Última actualización: 25 de noviembre de 2026",
    lede: "FridgeBuddy no tiene cuentas ni anuncios, y nada te sigue. Lo que hay en tu nevera se queda en tu teléfono. Solo salen de él los números de código de barras, para buscar nombres de productos, y lo que decides compartir con otros usuarios: nombres y categorías.",
    who: [
      "Quiénes somos",
      <>
        FridgeBuddy la desarrolla Triple7 Studios y la publica {COMPANY_ADDRESS}, Suecia (n.º de
        empresa 559337-9562). Bluedeer IT AB decide cómo se usan tus datos, por lo que es el
        «responsable del tratamiento» según el Reglamento General de Protección de Datos de la UE
        (RGPD). En esta política, «nosotros» significa Bluedeer IT AB. Preguntas: <Email />.
      </>,
    ],
    phone: [
      "Lo que se queda en tu teléfono",
      [
        "Tus productos, sus fechas de consumo preferente y cantidades.",
        "Tu historial y estadísticas: lo que comiste y lo que tiraste.",
        "Tu lista de la compra.",
        "Los nombres que diste a códigos de barras escaneados, y las categorías y tipos de fecha que elegiste.",
        "Tus ajustes: recordatorios, idioma, tema y si tienes Premium.",
      ],
      "Nunca recibimos nada de esto. Si la copia de seguridad de Android está activada, Android lo incluye en la copia de tu teléfono en tu cuenta de Google, que controlas en los ajustes del teléfono. Al borrar la app se elimina del teléfono.",
    ],
    camera: [
      "La cámara",
      <>
        La cámara solo se usa mientras escaneas. Los códigos de barras, las fechas y los nombres de
        productos se leen en tu teléfono con Google ML Kit; las imágenes nunca se guardan ni se
        envían. (La versión 1.0 leía los códigos de barras con el escáner de códigos de los
        servicios de Google Play, que solo daba a la app el número.) Los servicios de Google Play y
        ML Kit pueden enviar a Google datos técnicos anónimos, como el modelo del teléfono, la
        versión de la app y datos de rendimiento, para funcionar; consulta la{" "}
        {google("es", "política de privacidad de Google")}.
      </>,
    ],
    lookup: [
      "Búsqueda de nombres de productos",
      <>
        Cuando escaneas un código de barras, su número se envía a {off("es")}, una base de datos
        abierta de alimentos gestionada por una organización sin ánimo de lucro en Francia, para
        encontrar el nombre del producto. Como cualquier sitio web, ve tu dirección IP. No se envía
        nada más.
      </>,
    ],
    shared: [
      "Nombres y categorías compartidos entre usuarios",
      "Cuando escaneas un código de barras, la app puede preguntar al servicio propio de FridgeBuddy qué han dicho otros usuarios sobre él: un nombre, si Open Food Facts no conoce el producto, y (desde la versión 1.1) su categoría y si tiene fecha de caducidad. Se envía el número del código de barras. Para ello, la app inicia sesión de forma anónima: Firebase asigna a esta instalación de la app un identificador aleatorio que no está vinculado a tu nombre, tu correo ni tu cuenta de Google.",
      "Compartir está desactivado hasta que aceptes, la primera vez que sería útil. Después, cuando guardas un producto escaneado, se almacenan el código de barras, el identificador aleatorio y la hora, junto con el nombre que le diste si Open Food Facts no lo conoce, y (desde la versión 1.1) la categoría que elegiste y si tiene fecha de caducidad. Otros solo ven un nombre o una categoría cuando dos usuarios coinciden o lo hemos aprobado. Los códigos de barras que solo valen en una tienda, como los de productos pesados, nunca se comparten. Un aviso de «Nombre incorrecto» envía el código de barras, el nombre mostrado, el identificador aleatorio y la hora. Puedes dejar de compartir cuando quieras en Ajustes → Escaneo.",
      "Estos datos se almacenan en Google Firebase, en servidores de la UE (Bélgica y Países Bajos). El inicio de sesión anónimo lo gestiona Firebase Authentication, que Google también puede tratar en Estados Unidos. Los nombres y categorías compartidos se conservan mientras sean útiles para otros.",
    ],
    purchases: [
      "Compras",
      "FridgeBuddy Premium es una compra única a través de Google Play, que gestiona el pago; nunca vemos los datos de tu tarjeta. La app solo recibe la confirmación de Google Play que desbloquea Premium.",
    ],
    helpers: [
      "Quién nos ayuda a hacer funcionar la app",
      ["Empresa", "Qué hace por nosotros", "Dónde"],
      [
        ["Google (Firebase)", "Guarda los nombres y categorías compartidos y gestiona el inicio de sesión anónimo", "UE; el inicio de sesión también EE. UU."],
        ["Google (servicios de Google Play, ML Kit, Google Play)", "Lectura de códigos de barras y texto en el teléfono, y compras", "Se aplica la política de privacidad de Google"],
        ["Open Food Facts", "Nombres de productos a partir de códigos de barras", "Francia"],
      ],
      "Cuando los datos van a Estados Unidos, están protegidos por el Marco de Privacidad de Datos UE-EE. UU. o por las cláusulas contractuales tipo de la UE.",
    ],
    never: [
      "Lo que nunca hacemos",
      [
        "Sin anuncios, sin identificador publicitario, sin seguimiento en otras apps o sitios web.",
        "Sin herramientas de analítica ni de informes de fallos.",
        "Sin cuentas, sin correo electrónico ni número de teléfono.",
        "Nunca vendemos ni alquilamos datos a nadie.",
      ],
    ],
    legal: [
      "Bases legales (RGPD)",
      "Buscar nombres y las compras son necesarios para darte lo que pides (contrato). Compartir nombres y categorías se basa en tu consentimiento, que puedes retirar en Ajustes.",
    ],
    children: ["Menores", "FridgeBuddy no está dirigida a menores de 13 años."],
    rights: [
      "Tus derechos",
      "Puedes pedir ver, corregir, exportar o borrar tus datos, oponerte a cómo los usamos o pedirnos que limitemos su uso.",
      [
        "Todo lo que hay en tu teléfono: borra la app, o sus datos en los ajustes del teléfono.",
        <>
          Los nombres y categorías que compartiste: escribe a <Email /> con el código de barras. No
          sabemos quién eres, así que sin él no podemos saber qué es tuyo.
        </>,
        "Reclamaciones: la autoridad sueca de protección de datos, IMY (imy.se), o la de tu país (en España, la AEPD).",
      ],
    ],
    changes: ["Cambios", "Si cambiamos esta política, la actualizamos aquí y cambiamos la fecha de arriba."],
  },

  da: {
    title: "Privatlivspolitik for FridgeBuddy",
    description:
      "FridgeBuddy har ingen konti, ingen reklamer og ingen sporing. Det, der er i dit køleskab, bliver på din telefon.",
    languages: "Sprog",
    byline: "FridgeBuddy · En app fra Triple7 Studios, udgivet af Bluedeer IT AB",
    updated: "Sidst opdateret: 25. november 2026",
    lede: "FridgeBuddy har ingen konti og ingen reklamer, og intet sporer dig. Det, der er i dit køleskab, bliver på din telefon. Kun stregkodenumre forlader den, for at finde varenavne, og det, du vælger at dele med andre brugere: navne og kategorier.",
    who: [
      "Hvem vi er",
      <>
        FridgeBuddy er lavet af Triple7 Studios og udgivet af {COMPANY_ADDRESS}, Sverige (org.nr.
        559337-9562). Bluedeer IT AB bestemmer, hvordan dine data bruges, og er derfor
        »dataansvarlig« efter EU’s databeskyttelsesforordning (GDPR). I denne politik betyder »vi«
        Bluedeer IT AB. Spørgsmål: <Email />.
      </>,
    ],
    phone: [
      "Det bliver på din telefon",
      [
        "Dine varer, deres bedst før-datoer og antal.",
        "Din historik og statistik: hvad du har spist, og hvad du har smidt ud.",
        "Din indkøbsliste.",
        "De navne, du har givet scannede stregkoder, og de kategorier og datotyper, du har valgt.",
        "Dine indstillinger: påmindelser, sprog, tema, og om du har Premium.",
      ],
      "Vi modtager aldrig noget af det. Hvis Android-backup er slået til, tager Android det med i telefonens backup til din Google-konto, som du styrer i telefonens indstillinger. Når du sletter appen, slettes det fra telefonen.",
    ],
    camera: [
      "Kameraet",
      <>
        Kameraet bruges kun, mens du scanner. Stregkoder, bedst før-datoer og varenavne læses på din
        telefon med Google ML Kit, og billederne gemmes eller sendes aldrig. (Version 1.0 læste
        stregkoder med kodescanneren i Google Play-tjenester, som kun gav appen stregkodenummeret.)
        Google Play-tjenester og ML Kit kan sende anonyme tekniske data til Google, fx telefonmodel,
        appversion og ydelsestal, for at fungere; se{" "}
        {google("da", "Googles privatlivspolitik")}.
      </>,
    ],
    lookup: [
      "Opslag af varenavne",
      <>
        Når du scanner en stregkode, sendes nummeret til {off("dk")}, en åben fødevaredatabase
        drevet af en almennyttig organisation i Frankrig, for at finde varens navn. Som enhver
        hjemmeside ser de din IP-adresse. Intet andet sendes.
      </>,
    ],
    shared: [
      "Navne og kategorier, der deles mellem brugere",
      "Når du scanner en stregkode, kan appen spørge FridgeBuddys egen tjeneste, hvad andre brugere har sagt om den: et navn, hvis Open Food Facts ikke kender varen, og (fra version 1.1) dens kategori, og om den har sidste anvendelsesdato. Stregkodenummeret sendes. Til det logger appen anonymt ind: Firebase giver denne installation af appen et tilfældigt id, som ikke er knyttet til dit navn, din e-mailadresse eller din Google-konto.",
      "Deling er slået fra, indtil du siger ja – første gang det ville hjælpe. Derefter opbevares, når du gemmer en scannet vare, stregkoden, det tilfældige id og tidspunktet sammen med navnet, du gav varen, hvis Open Food Facts ikke kender den, og (fra version 1.1) den kategori, du valgte, og om den har sidste anvendelsesdato. Andre ser først et navn eller en kategori, når to brugere er enige om det, eller vi har godkendt det. Stregkoder, der kun gælder i én butik, fx på vejede varer, deles aldrig. En rapport om forkert navn sender stregkoden, det viste navn, det tilfældige id og tidspunktet. Du kan til enhver tid stoppe med at dele under Indstillinger → Scanning.",
      "Disse data opbevares hos Google Firebase på servere i EU (Belgien og Holland). Det anonyme login håndteres af Firebase Authentication, som Google også kan behandle i USA. Delte navne og kategorier gemmes, så længe de er til nytte for andre.",
    ],
    purchases: [
      "Køb",
      "FridgeBuddy Premium er et engangskøb via Google Play, som står for betalingen; vi ser aldrig dine kortoplysninger. Appen får kun Google Plays bekræftelse, som låser Premium op.",
    ],
    helpers: [
      "Hvem hjælper os med at drive appen",
      ["Virksomhed", "Hvad de gør for os", "Hvor"],
      [
        ["Google (Firebase)", "Gemmer delte navne og kategorier og håndterer det anonyme login", "EU; login også USA"],
        ["Google (Play-tjenester, ML Kit, Google Play)", "Læser stregkoder og tekst på telefonen, og køb", "Googles egen privatlivspolitik gælder"],
        ["Open Food Facts", "Varenavne ud fra stregkoder", "Frankrig"],
      ],
      "Når data går til USA, er de beskyttet af EU-US Data Privacy Framework eller EU’s standardkontraktbestemmelser.",
    ],
    never: [
      "Det gør vi aldrig",
      [
        "Ingen reklamer, intet reklame-id, ingen sporing på tværs af andre apps eller hjemmesider.",
        "Ingen værktøjer til analyse eller nedbrudsrapporter.",
        "Ingen konti, ingen e-mailadresse eller telefonnummer.",
        "Vi sælger eller udlejer aldrig data til nogen.",
      ],
    ],
    legal: [
      "Retsgrundlag (GDPR)",
      "Opslag af navne og køb er nødvendige for at give dig det, du har bedt om (aftale). Deling af navne og kategorier bygger på dit samtykke, som du kan trække tilbage i Indstillinger.",
    ],
    children: ["Børn", "FridgeBuddy er ikke rettet mod børn under 13 år."],
    rights: [
      "Dine rettigheder",
      "Du kan bede om at se, rette, eksportere eller slette dine data, gøre indsigelse mod, hvordan vi bruger dem, eller bede os begrænse brugen.",
      [
        "Alt på din telefon: slet appen, eller ryd dens data i telefonens indstillinger.",
        <>
          Navne og kategorier, du har delt: skriv til <Email /> med stregkoden. Vi ved ikke, hvem du
          er, så uden den kan vi ikke se, hvad der er dit.
        </>,
        "Klager: den svenske databeskyttelsesmyndighed IMY (imy.se) eller myndigheden, hvor du bor (i Danmark Datatilsynet).",
      ],
    ],
    changes: ["Ændringer", "Hvis vi ændrer politikken, opdaterer vi den her og ændrer datoen øverst."],
  },

  nb: {
    title: "Personvernerklæring for FridgeBuddy",
    description:
      "FridgeBuddy har ingen kontoer, ingen reklame og ingen sporing. Det som er i kjøleskapet ditt, blir på telefonen din.",
    languages: "Språk",
    byline: "FridgeBuddy · En app fra Triple7 Studios, utgitt av Bluedeer IT AB",
    updated: "Sist oppdatert: 25. november 2026",
    lede: "FridgeBuddy har ingen kontoer og ingen reklame, og ingenting sporer deg. Det som er i kjøleskapet ditt, blir på telefonen din. Bare strekkodenumre forlater den, for å finne varenavn, og det du velger å dele med andre brukere: navn og kategorier.",
    who: [
      "Hvem vi er",
      <>
        FridgeBuddy er laget av Triple7 Studios og utgitt av {COMPANY_ADDRESS}, Sverige (org.nr.
        559337-9562). Bluedeer IT AB bestemmer hvordan dataene dine brukes, og er derfor
        «behandlingsansvarlig» etter personvernforordningen (GDPR). I denne erklæringen betyr «vi»
        Bluedeer IT AB. Spørsmål: <Email />.
      </>,
    ],
    phone: [
      "Dette blir på telefonen din",
      [
        "Varene dine, best før-datoene deres og antall.",
        "Historikken og statistikken din: hva du har spist, og hva du har kastet.",
        "Handlelisten din.",
        "Navnene du har gitt skannede strekkoder, og kategoriene og datotypene du har valgt.",
        "Innstillingene dine: påminnelser, språk, tema og om du har Premium.",
      ],
      "Vi mottar aldri noe av dette. Hvis Android-sikkerhetskopiering er slått på, tar Android det med i telefonens sikkerhetskopi til Google-kontoen din, som du styrer i telefonens innstillinger. Når du sletter appen, slettes det fra telefonen.",
    ],
    camera: [
      "Kameraet",
      <>
        Kameraet brukes bare mens du skanner. Strekkoder, best før-datoer og varenavn leses på
        telefonen din med Google ML Kit, og bildene lagres eller sendes aldri. (Versjon 1.0 leste
        strekkoder med kodeskanneren i Google Play-tjenester, som bare ga appen strekkodenummeret.)
        Google Play-tjenester og ML Kit kan sende anonyme tekniske data til Google, for eksempel
        telefonmodell, appversjon og ytelsestall, for å fungere; se{" "}
        {google("no", "Googles personvernregler")}.
      </>,
    ],
    lookup: [
      "Oppslag av varenavn",
      <>
        Når du skanner en strekkode, sendes nummeret til {off("no")}, en åpen matvaredatabase drevet
        av en ideell organisasjon i Frankrike, for å finne varens navn. Som alle nettsteder ser de
        IP-adressen din. Ingenting annet sendes.
      </>,
    ],
    shared: [
      "Navn og kategorier som deles mellom brukere",
      "Når du skanner en strekkode, kan appen spørre FridgeBuddys egen tjeneste hva andre brukere har sagt om den: et navn, hvis Open Food Facts ikke kjenner varen, og (fra versjon 1.1) kategorien og om den har siste forbruksdag. Strekkodenummeret sendes. For dette logger appen inn anonymt: Firebase gir denne installasjonen av appen en tilfeldig ID som ikke er knyttet til navnet ditt, e-postadressen din eller Google-kontoen din.",
      "Deling er slått av til du sier ja – første gang det ville hjelpe. Deretter lagres, når du legger til en skannet vare, strekkoden, den tilfeldige ID-en og tidspunktet, sammen med navnet du ga varen hvis Open Food Facts ikke kjenner den, og (fra versjon 1.1) kategorien du valgte og om den har siste forbruksdag. Andre ser et navn eller en kategori først når to brukere er enige om det, eller vi har godkjent det. Strekkoder som bare gjelder i én butikk, for eksempel på veide varer, deles aldri. En rapport om feil navn sender strekkoden, navnet som ble vist, den tilfeldige ID-en og tidspunktet. Du kan når som helst slutte å dele under Innstillinger → Skanning.",
      "Disse dataene lagres hos Google Firebase på servere i EU (Belgia og Nederland). Den anonyme innloggingen håndteres av Firebase Authentication, som Google også kan behandle i USA. Delte navn og kategorier lagres så lenge de er til nytte for andre.",
    ],
    purchases: [
      "Kjøp",
      "FridgeBuddy Premium er et engangskjøp via Google Play, som håndterer betalingen; vi ser aldri kortopplysningene dine. Appen får bare Google Plays bekreftelse som låser opp Premium.",
    ],
    helpers: [
      "Hvem som hjelper oss å drive appen",
      ["Selskap", "Hva de gjør for oss", "Hvor"],
      [
        ["Google (Firebase)", "Lagrer delte navn og kategorier og håndterer den anonyme innloggingen", "EU; innloggingen også USA"],
        ["Google (Play-tjenester, ML Kit, Google Play)", "Leser strekkoder og tekst på telefonen, og kjøp", "Googles egne personvernregler gjelder"],
        ["Open Food Facts", "Varenavn ut fra strekkoder", "Frankrike"],
      ],
      "Når data går til USA, er de beskyttet av EU–US Data Privacy Framework eller EUs standardkontraktsklausuler.",
    ],
    never: [
      "Dette gjør vi aldri",
      [
        "Ingen reklame, ingen reklame-ID, ingen sporing på tvers av andre apper eller nettsteder.",
        "Ingen verktøy for analyse eller krasjrapporter.",
        "Ingen kontoer, ingen e-postadresse eller telefonnummer.",
        "Vi selger eller leier aldri ut data til noen.",
      ],
    ],
    legal: [
      "Rettslig grunnlag (GDPR)",
      "Oppslag av navn og kjøp er nødvendige for å gi deg det du har bedt om (avtale). Deling av navn og kategorier bygger på samtykket ditt, som du kan trekke tilbake i Innstillinger.",
    ],
    children: ["Barn", "FridgeBuddy er ikke rettet mot barn under 13 år."],
    rights: [
      "Rettighetene dine",
      "Du kan be om å se, rette, eksportere eller slette dataene dine, protestere mot hvordan vi bruker dem, eller be oss begrense bruken.",
      [
        "Alt på telefonen din: slett appen, eller tøm dataene dens i telefonens innstillinger.",
        <>
          Navn og kategorier du har delt: skriv til <Email /> med strekkoden. Vi vet ikke hvem du
          er, så uten den kan vi ikke se hva som er ditt.
        </>,
        "Klager: den svenske tilsynsmyndigheten IMY (imy.se) eller myndigheten der du bor (i Norge Datatilsynet).",
      ],
    ],
    changes: ["Endringer", "Hvis vi endrer erklæringen, oppdaterer vi den her og endrer datoen øverst."],
  },
};

function Body({ t }: { t: PolicyText }) {
  return (
    <>
      <div className={s.hero}>
        <h1>{t.title}</h1>
        <p className={s.note}>
          <time dateTime={UPDATED}>{t.updated}</time>
        </p>
        <p className={s.lede}>{t.lede}</p>
      </div>

      <h2>{t.who[0]}</h2>
      <p>{t.who[1]}</p>

      <h2>{t.phone[0]}</h2>
      <ul>
        {t.phone[1].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{t.phone[2]}</p>

      <h2>{t.camera[0]}</h2>
      <p>{t.camera[1]}</p>

      <h2>{t.lookup[0]}</h2>
      <p>{t.lookup[1]}</p>

      <h2>{t.shared[0]}</h2>
      <p>{t.shared[1]}</p>
      <p>{t.shared[2]}</p>
      <p>{t.shared[3]}</p>

      <h2>{t.purchases[0]}</h2>
      <p>{t.purchases[1]}</p>

      <h2>{t.helpers[0]}</h2>
      <div className={s.tableWrap}>
        <table>
          <thead>
            <tr>
              {t.helpers[1].map((head) => (
                <th key={head}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.helpers[2].map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>{t.helpers[3]}</p>

      <h2>{t.never[0]}</h2>
      <ul>
        {t.never[1].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{t.legal[0]}</h2>
      <p>{t.legal[1]}</p>

      <h2>{t.children[0]}</h2>
      <p>{t.children[1]}</p>

      <h2>{t.rights[0]}</h2>
      <p>{t.rights[1]}</p>
      <ul>
        {t.rights[2].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>{t.changes[0]}</h2>
      <p>{t.changes[1]}</p>
    </>
  );
}

export const POLICIES: Record<
  Lang,
  { title: string; description: string; languages: string; byline: string; body: ReactNode }
> = Object.fromEntries(
  (Object.keys(TEXT) as Lang[]).map((lang) => {
    const t = TEXT[lang];
    return [
      lang,
      { title: t.title, description: t.description, languages: t.languages, byline: t.byline, body: <Body t={t} /> },
    ];
  }),
) as Record<Lang, { title: string; description: string; languages: string; byline: string; body: ReactNode }>;
