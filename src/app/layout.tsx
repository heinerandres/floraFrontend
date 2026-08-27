import type { Metadata } from "next";
/* import { GoogleAnalytics } from '@next/third-parties/google';
import { Providers } from "@/src/redux/provider"; */

import { Cormorant_Garamond, Montserrat } from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        { children }
        {/* <Providers>{children}</Providers>  */}
        {/* <GoogleAnalytics gaId="G-91SJZG5HQ4" /> */}
      </body>
    </html>
  );
}
