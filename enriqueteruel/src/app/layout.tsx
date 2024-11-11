import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enrique Teruel",
  description: "Portfolio Enrique Teruel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
