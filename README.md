# Bobrin Design System

    Design tokens, brand assets, and component library for **Edward Bobrin Photography** (bobrin.com).

    ## Contents

    ```
    bobrin-design-system/
    ├── tokens/
    │   ├── index.css          # Full Tailwind/CSS variable token definitions
    │   ├── colors.ts          # Mobile (React Native / Expo) color tokens
    │   └── tokens.json        # W3C Design Token (DTCG) format
    ├── components/            # 55 Shadcn/Radix UI components, Bobrin-themed
    ├── content/
    │   └── index.ts           # Portfolio content — works, collections, copy
    ├── mockups/
    │   └── LandingPage.tsx    # High-fidelity rebrand prototype (React)
    └── assets/
      ├── logo-signature-v1.png   # Circular seal logo (white, high-res)
      ├── logo-signature-v2.png   # Signature script logo, variant A (white, high-res)
      └── logo-signature-v3.png   # Signature script logo, variant B (white, high-res)
    ```

    ## Brand Tokens (quick reference)

    | Token | Value | Usage |
    |-------|-------|-------|
    | Background | `#0a0a0a` | Deep dark base |
    | Foreground | `#f0ebe3` | Warm cream text |
    | Primary / Accent | `#7eb4d4` | Soft steel blue |
    | Muted | `#8a8070` | Muted taupe/gold |
    | Card | `#111111` | Elevated surface |
    | Border | `#2a2a2a` | Subtle dividers |
    | Font sans | `Inter` | Body & UI |
    | Font serif | `Cormorant Garamond` | Headings & display |

    ## Usage

    The `tokens/index.css` file is a Tailwind v4 theme that can be dropped into any Vite + React project.  
    The `tokens/colors.ts` file exports the same values for React Native / Expo apps.  
    The `components/` directory is a Shadcn-compatible component library pre-wired to the Bobrin tokens.

    © Edward Bobrin Photography · bobrin.com
    