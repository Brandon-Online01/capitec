import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find branches",
  description: "Find Capitec branches and ATMs near you. View opening hours and save your favourites.",
};

export default function FinderLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
