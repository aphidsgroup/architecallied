import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * Brand lockup: monogram image + lowercase wordmark (per supplied slides).
 * Logo colours are preserved from source assets — never recoloured in CSS.
 */
export function Logo({
  variant,
  className,
}: {
  variant: "onDark" | "onLight";
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Image
        src={variant === "onDark" ? "/brand/logo-gold.png" : "/brand/logo-black.png"}
        alt=""
        width={64}
        height={32}
        priority
        className="h-7 w-auto md:h-8"
      />
      <span
        className={cn(
          "text-lg font-normal lowercase leading-none tracking-wide md:text-xl",
          variant === "onDark" ? "text-beige" : "text-navy",
        )}
      >
        {site.displayName}
      </span>
    </span>
  );
}
