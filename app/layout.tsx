import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Cohort2Banner } from "./components/Cohort2-Banner";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

const geistSans = Mona_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forge Studios | Building world-class digital products",
  description:
    "We are a team of passionate engineers and desginers who are dedicated to creating innovative and user-centric digital products that solve real-world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}  antialiased`}>
        <Cohort2Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
