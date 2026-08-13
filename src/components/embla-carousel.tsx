"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function EmblaCarousel({ items }: { items: { quote: string; name: string; role: string }[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-5">
          {items.map((t, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_60%] lg:flex-[0_0_45%]">
              <figure className="glass-card flex h-full flex-col p-8">
                <Quote className="h-8 w-8 text-accent/60" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-primary/10 pt-4">
                  <p className="font-semibold text-primary">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-white/50 text-primary backdrop-blur-md transition-all hover:bg-white/80"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === selectedIndex ? "w-6 bg-accent" : "w-2 bg-primary/25 hover:bg-primary/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-white/50 text-primary backdrop-blur-md transition-all hover:bg-white/80"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
