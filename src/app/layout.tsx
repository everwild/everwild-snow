import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_SC } from "next/font/google";
import { headers } from "next/headers";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sc",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: "EVERWILD Snow Adventure",
  title: {
    default: "EVERWILD Snow Adventure",
    template: "EVERWILD Snow Adventure | %s",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const locale = headerList.get("x-locale");
  const lang = locale === "zh" ? "zh-CN" : "en";

  return (
    <html
      lang={lang}
      className={`${notoSans.variable} ${notoSansSC.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
