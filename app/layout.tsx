import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OCTO | Technology Studio",
  description: "Ecosistemas digitales que impulsan negocios.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
