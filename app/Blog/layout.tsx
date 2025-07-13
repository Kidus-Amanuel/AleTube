import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Blog",
  description: "Ale Tube Blog ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
