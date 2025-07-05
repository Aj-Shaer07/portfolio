
"use client";
import { cn } from "@/lib/utils";
import type React from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative min-h-dvh bg-transparent transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--aurora-color-1:theme(colors.aurora.purple)]
            [--aurora-color-2:theme(colors.aurora.green)]
            [--aurora-color-3:theme(colors.aurora.violet)]

            pointer-events-none
            absolute
            -inset-20
            opacity-30
            blur-[100px]
            will-change-transform
            animate-aurora

            [background-image:radial-gradient(ellipse_at_0%_0%,var(--aurora-color-1),transparent_50%),radial-gradient(ellipse_at_100%_100%,var(--aurora-color-2),transparent_50%),radial-gradient(ellipse_at_50%_50%,var(--aurora-color-3),transparent_50%)]
            [background-size:300%_300%,_200%_200%,_400%_400%]
            `
          )}
        ></div>
      </div>
      {showRadialGradient && <div className="absolute inset-0 bg-background/80 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
