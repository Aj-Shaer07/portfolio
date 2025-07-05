
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
            [--aurora-color-3:theme(colors.aurora.purple)]

            pointer-events-none
            absolute
            -inset-20
            opacity-30
            blur-[100px]
            will-change-transform

            [background-image:radial-gradient(at_20%_40%,var(--aurora-color-1)_0px,transparent_50%),radial-gradient(at_80%_20%,var(--aurora-color-2)_0px,transparent_50%),radial-gradient(at_60%_80%,var(--aurora-color-3)_0px,transparent_50%)]
            animate-aurora
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
