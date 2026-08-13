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
    default: "MEP Services — HVAC, MEP Engineering & Duct Manufacturing",
    template: "%s | MEP Services",
  },
  description:
    "HVAC design and installation, MEP engineering, BIM & Revit coordination, duct manufacturing and energy audits — precision solutions from one accountable team.",
  openGraph: {
    title: "MEP Services — HVAC, MEP Engineering & Duct Manufacturing",
    description:
      "Design, engineering, manufacturing and service. HVAC and MEP solutions delivered with precision and coordination.",
    type: "website",
    url: "https://mep-services.amsitservices.com",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 675, alt: "MEP Services HVAC engineering" }],
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
