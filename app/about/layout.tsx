import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tars Marketing",
  description: "Welcome to Tars Marketing — your digital growth partner. Learn about our mission to empower brands through strategic marketing and innovative development.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
