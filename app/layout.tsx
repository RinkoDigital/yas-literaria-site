import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") || incomingHeaders.get("host") || "localhost:3000";
  const protocol = incomingHeaders.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;

  return {
    title: "YAS Literária | Histórias, memória e pesquisa",
    description:
      "Uma biblioteca digital imersiva com a YAS, assistente de pesquisa documental baseada em fontes.",
    openGraph: {
      title: "YAS Literária | Histórias, memória e pesquisa",
      description:
        "Entre em uma biblioteca imersiva e consulte o arquivo documental com respostas fundamentadas nas fontes.",
      type: "website",
      locale: "pt_BR",
      images: [{ url: image, width: 1200, height: 630, alt: "YAS Literária — Histórias, memória e pesquisa" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "YAS Literária | Histórias, memória e pesquisa",
      description:
        "Biblioteca digital imersiva e pesquisa documental em um só lugar.",
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
