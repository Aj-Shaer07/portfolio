
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      className={cn(
        "relative min-h-dvh bg-transparent transition-bg",
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--aurora-color-1:theme(colors.aurora.purple)]
            [--aurora-color-2:theme(colors.aurora.green)]
            [--aurora-color-3:theme(colors.aurora.new-purple)]

            pointer-events-none
            absolute
            -inset-20
            opacity-30
            blur-[100px]
            will-change-transform

            [background-image:radial-gradient(at_var(--mouse-x)_var(--mouse-y),var(--aurora-color-1)_0px,transparent_50%),radial-gradient(at_calc(var(--mouse-x)-200px)_calc(var(--mouse-y)+100px),var(--aurora-color-2)_0px,transparent_50%),radial-gradient(at_calc(var(--mouse-x)+200px)_calc(var(--mouse-y)-100px),var(--aurora-color-3)_0px,transparent_50%)]
            transition-all duration-1000 ease-out
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
