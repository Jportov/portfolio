import "../globals.css";
import { RootDocument } from "../components/RootDocument";
import { buildMetadata } from "../lib/metadata";

export const metadata = buildMetadata("en");

export default function RootLayout({ children }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
