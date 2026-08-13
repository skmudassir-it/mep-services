import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AlertBanner } from "@/components/alert-banner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mep-services.amsitservices.com"),
  title: {
    default: "AMS BIM Services — Architecture, MEP Engineering & BIM",
    template: "%s | AMS BIM Services",
  },
  description:
    "AMS BIM Services delivers architectural design, MEP engineering and BIM coordination in Revit — perfect solutions for owners, architects and builders.",
  openGraph: {
    title: "AMS BIM Services — Architecture, MEP Engineering & BIM",
    description:
      "Architecture, MEP engineering and BIM coordination delivered through coordinated Revit models.",
    type: "website",
    url: "https://mep-services.amsitservices.com",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 675, alt: "AMS BIM Services engineering" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-16">
        <AlertBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
