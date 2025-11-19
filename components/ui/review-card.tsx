import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  className?: string;
}

export function ReviewCard({
  name,
  service,
  rating,
  comment,
  date,
  className,
}: ReviewCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-[350px] flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{service}</p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              )}
            />
          ))}
        </div>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-gray-700">{comment}</p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
}
