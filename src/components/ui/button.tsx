import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Adapted from shadcn/ui Button (MIT). Registry access was unavailable in the
 * build environment, so the component was vendored manually and restyled to
 * the Archi-tec Allied token system (docs/research/skills-used.md).
 */
const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.14em] transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-navy text-cream hover:bg-navy-soft",
        onDark: "bg-beige text-navy hover:bg-cream",
        outline: "border border-navy text-navy hover:bg-navy hover:text-cream",
        outlineOnDark: "border border-beige text-beige hover:bg-beige hover:text-navy",
        ghost: "text-navy underline-offset-8 hover:underline",
      },
      size: {
        default: "px-7 py-3",
        sm: "px-5 py-2.5",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}

export { Button, buttonVariants };
