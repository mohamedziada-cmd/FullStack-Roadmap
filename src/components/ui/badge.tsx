import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-forest text-primary-foreground",
        sage: "bg-moss text-forest-deep",
        outline: "border border-line text-muted",
        warn: "bg-warn/15 text-warn",
        ok: "bg-ok/15 text-ok",
        faint: "bg-surface text-muted",
      },
    },
    defaultVariants: {
      variant: "faint",
    },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
