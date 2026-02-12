import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Tars Marketing",
  description: "Explore our digital services: PPC (Google Ads), Web Development, Strategic Social Advertising, and Creative Design. We build high-performance solutions for your brand.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
