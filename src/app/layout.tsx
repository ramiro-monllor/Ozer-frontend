import type { Metadata } from "next";
import { Poppins } from 'next/font/google';

import Providers from './Providers';

import "./globals.css";

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
  },
  title: "Ozer App",
  description: "Ozer App",
  keywords: 'finanzas, facturas, administracion',
  authors: [{ name: 'Ozer' }],
  publisher: 'Ozer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
