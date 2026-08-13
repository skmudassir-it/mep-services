import Link from "next/link";
import { Home, ArrowLeft, Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 pt-32 pb-20">
      <div className="blob left-[10%] top-[10%] h-72 w-72 bg-accent/20" />
      <div className="blob bottom-[5%] right-[10%] h-80 w-80 bg-primary/15" />
      <div className="glass relative max-w-lg rounded-3xl p-12 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#2a5a92] text-white shadow-lg shadow-primary/25">
          <Wrench className="h-8 w-8" />
        </span>
        <p className="mt-6 text-6xl font-extrabold text-primary">404</p>
        <h1 className="mt-2 text-2xl font-bold text-primary">This page lost its airflow</h1>
        <p className="mt-3 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s route
          you back to a working system.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-gradient">
            <Home className="h-4 w-4" /> Back home
          </Link>
          <Link href="/contact" className="btn-glass">
            <ArrowLeft className="h-4 w-4" /> Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
