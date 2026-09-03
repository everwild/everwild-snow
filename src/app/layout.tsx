import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_SC } from "next/font/google";
import { I18nProvider } from "@/lib/i18n-provider";
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
  title: "ESA - EVERWILD Snow Adventure - NAGANO",
  description:
    "EVERWILD Snow Adventure - Japan winter experience provider. Ski & snowboard lessons, guided skiing, winter hiking, mountaineering, accommodation and transport. Based in Nagano, available nationwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${notoSansSC.variable}`}
    >
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
