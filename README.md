# Saudi Riyal Font

A custom font package for displaying the Saudi Riyal (ر.س) currency symbol in Next.js applications with proper weight variations.

## Installation

```bash
npm install @mohamedmossa/saudi-riyal-font
```

## Usage

### 1. Add the font to your Next.js layout

```tsx
// app/layout.tsx
import { saudiRiyalFont } from "@mohamedmossa/saudi-riyal-font";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={saudiRiyalFont.variable}>{children}</body>
    </html>
  );
}
```

### 2. Add the CSS variable to your globals.css

```css
/* app/globals.css */
.font-riyal {
  font-family: var(--font-saudi-riyal);
}
```

### 3. Use the SaudiRiyal component

```tsx
import { SaudiRiyal } from "@mohamedmossa/saudi-riyal-font";

function ProductPrice() {
  return (
    <div className="text-2xl">
      <SaudiRiyal weight="bold" /> 299.99
    </div>
  );
}
```

## API Reference

### `SaudiRiyal` Component

#### Props

| Prop        | Type                                                                     | Default    | Description                 |
| ----------- | ------------------------------------------------------------------------ | ---------- | --------------------------- |
| `weight`    | `"light" \| "normal" \| "medium" \| "semibold" \| "bold" \| "extrabold"` | `"normal"` | Visual weight of the symbol |
| `className` | `string`                                                                 | `""`       | Additional CSS classes      |

#### Weight Examples

```tsx
<SaudiRiyal weight="light" />     // Thin stroke
<SaudiRiyal weight="normal" />    // Default stroke
<SaudiRiyal weight="medium" />    // Medium stroke
<SaudiRiyal weight="semibold" />  // Semi-bold stroke
<SaudiRiyal weight="bold" />      // Bold stroke
<SaudiRiyal weight="extrabold" /> // Extra bold stroke
```

## Font Files

The package includes the following font formats:

- WOFF2 (recommended, smallest size)
- WOFF
- TTF
- EOT
- SVG

## License

MIT

## Author

Mohamed Mossa

## Keywords

saudi-riyal, currency, font, next.js, react, typography, ر.س
