import localFont from "next/font/local";

// Export the font configuration
export const saudiRiyalFont = localFont({
  src: [
    {
      path: "../fonts/SaudiRiyalFont.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-saudi-riyal",
  display: "swap",
});

// Export the component
export { SaudiRiyal } from "./SaudiRiyal";
export type { SaudiRiyalProps } from "./SaudiRiyal";
