import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
});
export const metadata: Metadata = {
  title: "Tars Marketing | Digital Growth Partner",
  description: "We empower brands to stand out and scale through strategic social media marketing, high-performance website development, innovative web applications, and results-focused, data-driven advertising.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
