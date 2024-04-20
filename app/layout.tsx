import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://familysupermarket.vercel.app/'),
    title: 'Family Supermercados',
    description: 'Site do Family Supermercados - produtos em atacado e varejo',
    openGraph: {
      images: '/main-logo.jpg',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
