import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی زینو تحریر",
  description: "فروشگاه اینترنتی لوازم تحریر زینو - خرید آنلاین لوازم التحریر با بهترین قیمت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-[#f8f8f8]">
        {children}
      </body>
    </html>
  );
}
