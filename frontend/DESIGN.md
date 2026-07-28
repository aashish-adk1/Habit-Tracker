---
name: Serene Achievement
colors:
  surface: '#f6fafb'
  surface-dim: '#d6dbdc'
  surface-bright: '#f6fafb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4f5'
  surface-container: '#eaefef'
  surface-container-high: '#e5e9ea'
  surface-container-highest: '#dfe3e4'
  on-surface: '#171c1d'
  on-surface-variant: '#3e494b'
  inverse-surface: '#2c3132'
  inverse-on-surface: '#edf1f2'
  outline: '#6e797b'
  outline-variant: '#bdc9cb'
  surface-tint: '#006875'
  primary: '#006672'
  on-primary: '#ffffff'
  primary-container: '#00818f'
  on-primary-container: '#f7feff'
  inverse-primary: '#6fd5e6'
  secondary: '#53599a'
  on-secondary: '#ffffff'
  secondary-container: '#b0b6fe'
  on-secondary-container: '#3f4585'
  tertiary: '#8b4c0f'
  on-tertiary: '#ffffff'
  tertiary-container: '#a86427'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9bf0ff'
  primary-fixed-dim: '#6fd5e6'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#e0e0ff'
  secondary-fixed-dim: '#bec2ff'
  on-secondary-fixed: '#0c1253'
  on-secondary-fixed-variant: '#3b4180'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77f'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6f3900'
  background: '#f6fafb'
  on-background: '#171c1d'
  surface-variant: '#dfe3e4'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-md:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system is engineered for high-performance productivity tools that prioritize mental clarity and professional growth. The brand personality is "Quietly Confident"—it eschews the sterile coldness of typical SaaS platforms in favor of a warm, premium environment that fosters focus and achievement.

The aesthetic follows a **Modern Corporate** style with **Minimalist** leanings. By pairing a high-contrast typography scale with a warm, creamy surface palette, the UI reduces eye strain while maintaining a sophisticated, authoritative presence. The interaction model is calm and deliberate, avoiding unnecessary flourishes to keep the user's "achievement" at the center of the experience.

## Colors
The palette is rooted in a "Warm Professionalism" logic. 

- **Primary (Pacific Cyan):** Used for primary actions, progress indicators, and active states. It provides a crisp, energetic contrast against the warm background.
- **Secondary (Dusty Grape):** Reserved for secondary navigational elements, category tagging, and subtle accents that require distinction from the primary action path.
- **Surfaces:** The foundation is `#FDFCF8`, providing a soft, paper-like quality. The `#F5F3ED` container color is used to create structural grouping and depth without the need for heavy borders.
- **Text:** High-readability near-black (`#1A1C1E`) ensures WCAG AAA compliance for body text, maintaining clarity against the light cream backgrounds.

## Typography
This design system utilizes **Manrope** exclusively to maintain a modern, geometric, yet highly readable appearance. 

- **Headlines:** Use a tighter letter-spacing and heavier weights (700-800) to create a strong visual anchor.
- **Body Text:** Set with generous line-height to maximize legibility against the cream surface.
- **Labels:** Uppercase styling is recommended for `label-md` to differentiate metadata from body content.
- **Hierarchy:** Use font weight rather than color shifts to denote hierarchy where possible, keeping the text color consistent to protect accessibility.

## Layout & Spacing
The design system employs a **Fixed Grid** philosophy for desktop (12 columns) and a **Fluid Grid** for mobile (4 columns). 

- **Rhythm:** An 8px linear scale governs all padding and margin decisions. 
- **Desktop:** Center-aligned content with a max-width of 1280px. Use 24px gutters to allow the UI to breathe.
- **Mobile:** 16px side margins are required. 
- **Reflow:** On tablet transitions, cards should shift from multi-column to single-column stacks, increasing vertical spacing (`xl`) to maintain the "serene" feel.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Ambient Shadows**, avoiding harsh borders.

- **Level 0 (Surface):** The base Creamy White (`#FDFCF8`).
- **Level 1 (Container):** The Light Beige (`#F5F3ED`) used for sidebars or card backgrounds to create a subtle recessed look.
- **Level 2 (Raised):** Used for active cards and modals. Employs a very soft, diffused shadow: `0 8px 24px rgba(26, 28, 30, 0.06)`.
- **Interaction:** Upon hover, elements should transition from Level 1 to Level 2 with a 200ms ease-in-out curve.

## Shapes
The shape language is defined by a consistent **8px (0.5rem)** radius. This "Rounded" setting strikes a balance between the clinical sharpness of finance apps and the overly playful nature of social media apps.

- **Small Components:** Checkboxes and small tags use a 4px radius.
- **Standard Components:** Buttons, input fields, and cards use the base 8px radius.
- **Large Components:** Modals and main content containers use a 16px (1rem) radius to soften the overall layout.

## Components

- **Buttons:** 
  - *Primary:* Solid Pacific Cyan with white text. High-contrast, 8px radius.
  - *Secondary:* Ghost style with a Pacific Cyan outline or a solid Light Beige background with Secondary (Dusty Grape) text.
- **Input Fields:** 
  - Background: Surface Container (`#F5F3ED`).
  - Border: 1px solid transparent, becoming 2px solid Pacific Cyan on focus.
- **Cards:** 
  - Use Surface Container for the background. No border. Apply Level 2 shadows only on hover to indicate interactivity.
- **Chips/Tags:** 
  - Use Secondary (Dusty Grape) at 10% opacity for the background, with 100% opacity Secondary color for the text. 
- **Lists:** 
  - High-density lists should use a 1px border-bottom in a slightly darker shade of the Surface Container to maintain vertical rhythm without visual noise.
- **Checkboxes:** 
  - 4px radius. When checked, use the Primary color with a white checkmark icon.