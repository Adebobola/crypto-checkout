import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crypto Checkout",
  description: "Crypto to cash checkout experience",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: "#111827" }}
      >
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
