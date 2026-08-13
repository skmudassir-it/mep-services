"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { PROJECTS } from "@/lib/site-data";
import { motion } from "framer-motion";

const CATEGORIES = ["All", "Commercial", "Healthcare", "Manufacturing", "Institutional"] as const;

export function PortfolioGrid() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by category">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              active === c
                ? "bg-gradient-to-r from-primary to-[#2a5a92] text-white shadow-md shadow-primary/25"
                : "border border-primary/15 bg-white/50 text-muted-foreground backdrop-blur-md hover:border-primary/30 hover:text-primary"
            }`}
            aria-pressed={active === c}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <motion.article
            key={p.slug}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card group h-full overflow-hidden"
          >
            <Link href={`/projects/${p.slug}`} className="block">
              <div className="relative overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.title} — ${p.category} project by MEP Services`}
                  width={1200}
                  height={675}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-md">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold text-primary">{p.title}</h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">{p.service}</p>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {p.challenge}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-accent" /> {p.client}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-accent" /> {p.year}
                  </span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  View Details <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-muted-foreground">No projects in this category yet.</p>
      ) : null}
    </div>
  );
}
