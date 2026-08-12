import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OCTO — Technology Studio",
  description: "Sistemas digitales que impulsan negocios.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
