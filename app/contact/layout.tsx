import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tars Marketing",
  description: "Let's talk. Get in touch with Tars Marketing for your next digital project. Email us at hello@tars.media or call +1 (234) 567-890.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
