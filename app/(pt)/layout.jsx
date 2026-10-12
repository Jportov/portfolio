import "../globals.css";
import { RootDocument } from "../components/RootDocument";
import { buildMetadata } from "../lib/metadata";

export const metadata = buildMetadata("pt");

export default function RootLayout({ children }) {
  return <RootDocument lang="pt">{children}</RootDocument>;
}
