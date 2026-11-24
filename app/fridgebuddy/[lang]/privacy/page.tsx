import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LANGS, PrivacyPage, isLang, privacyMetadata } from "../../PrivacyPage";

// English lives at /fridgebuddy/privacy; every other language at /fridgebuddy/<lang>/privacy.
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.filter((lang) => lang !== "en").map((lang) => ({ lang }));
}

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return isLang(lang) ? privacyMetadata(lang) : {};
}

export default async function FridgeBuddyTranslatedPrivacyPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang) || lang === "en") notFound();
  return <PrivacyPage lang={lang} />;
}
