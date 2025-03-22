import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ModelManagement - Coming Soon",
  description: "The world's modeling platform, connecting talent with professionals. Coming Soon!",
  icons: {
    icon: '/images/model.logo.svg',
  },
  openGraph: {
    title: "ModelManagement - Coming Soon",
    description: "The world's modeling platform, connecting talent with professionals. Coming Soon!",
    url: "https://modelmanagement.com",
    siteName: "Model Management",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ModelManagement - Coming Soon",
    description: "The world's modeling platform, connecting talent with professionals. Coming Soon!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
