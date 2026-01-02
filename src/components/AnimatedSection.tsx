import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import useScrollAnimation from "@/hooks/useScrollAnimation";

type AnimationVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "fade";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationVariant;
  delay?: number;
  duration?: number;
}

const AnimatedSection = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 600,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const baseStyles = "transition-all ease-out";
  
  const hiddenStyles: Record<AnimationVariant, string> = {
    "fade-up": "opacity-0 translate-y-12",
    "fade-down": "opacity-0 -translate-y-12",
    "fade-left": "opacity-0 translate-x-12",
    "fade-right": "opacity-0 -translate-x-12",
    "scale": "opacity-0 scale-90",
    "fade": "opacity-0",
  };

  const visibleStyles = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      className={cn(
        baseStyles,
        isVisible ? visibleStyles : hiddenStyles[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
