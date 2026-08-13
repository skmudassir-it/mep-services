import { Star } from "lucide-react";

export function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "fill-primary/10 text-primary/20"}`}
        />
      ))}
    </div>
  );
}
