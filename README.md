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

<!-- bobrin-design-system:sync:start -->
## Keeping this design system current

The source of truth is the Bobrin portfolio repository that contains:

- artifacts/portfolio/src/index.css (web tokens)
- artifacts/portfolio-mobile/constants/colors.ts (React Native tokens)
- artifacts/portfolio/src/components/ui/ (shared UI components)
- attached_assets/Edward-Bobrin*-white-high-res_*.png (logo PNGs)

This repository is the reusable GitHub mirror at https://github.com/embobrin/bobrin-design-system. To sync it manually,
run pnpm sync:design-system from the source repository with a checkout of this repository
passed as the target directory. The same sync runs automatically on changes to those source
paths and weekly through GitHub Actions. The action needs a fine-grained
DESIGN_SYSTEM_REPO_TOKEN secret whose access is limited to this repository's contents.
<!-- bobrin-design-system:sync:end -->
