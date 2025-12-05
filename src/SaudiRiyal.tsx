import React from "react";

export interface SaudiRiyalProps {
  /**
   * The weight variant of the Saudi Riyal symbol
   * @default "normal"
   */
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  /**
   * Additional CSS classes
   */
  className?: string;
}

const weightStyles = {
  light: { WebkitTextStroke: "0px" },
  normal: { WebkitTextStroke: "0.3px" },
  medium: { WebkitTextStroke: "0.5px" },
  semibold: { WebkitTextStroke: "0.7px" },
  bold: { WebkitTextStroke: "1px" },
  extrabold: { WebkitTextStroke: "1.3px" },
};

/**
 * Saudi Riyal currency symbol component
 *
 * @example
 * ```tsx
 * import { SaudiRiyal } from '@mohamedmossa/saudi-riyal-font';
 *
 * function Price() {
 *   return (
 *     <div>
 *       <SaudiRiyal weight="bold" /> 99.99
 *     </div>
 *   );
 * }
 * ```
 */
export const SaudiRiyal: React.FC<SaudiRiyalProps> = ({
  weight = "normal",
  className = "",
}) => {
  return (
    <span className={`font-riyal ${className}`} style={weightStyles[weight]}>
      {"\uE001"}
    </span>
  );
};
