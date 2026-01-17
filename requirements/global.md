# Global Design System & Specifications - SolusIcerai.com

## Overview

This document defines the global design system, layout patterns, and visual standards used across all pages of SolusIcerai.com. It ensures consistency, professionalism, and accessibility throughout the website.

---

## Color Palette

### Primary Colors
These colors form the core brand identity.

**Primary Blue** (Trustworthy, Professional)
- Name: "Solusi Blue"
- Hex: `#003366` (dark blue)
- RGB: 0, 51, 102
- Tailwind: `bg-blue-900` (or custom)
- Usage: Headers, primary buttons, accents, links

**Secondary Blue** (Approachable)
- Hex: `#0066CC` (medium blue)
- RGB: 0, 102, 204
- Tailwind: `bg-blue-600`
- Usage: Hover states, secondary elements, CTAs

**Light Blue** (Background accents)
- Hex: `#E8F4F8` (very light blue)
- RGB: 232, 244, 248
- Tailwind: `bg-blue-50`
- Usage: Background sections, subtle highlights

### Accent Colors

**Green** (Success, Positive)
- Hex: `#00AA44` (forest green)
- RGB: 0, 170, 68
- Tailwind: `bg-green-600`
- Usage: Positive messages, success states, check marks

**Red** (Alert, Emergency)
- Hex: `#DD0000` (vibrant red)
- RGB: 221, 0, 0
- Tailwind: `bg-red-600`
- Usage: Emergency sections, warnings, errors

**Orange** (Attention)
- Hex: `#FF9900` (warm orange)
- RGB: 255, 153, 0
- Tailwind: `bg-orange-500`
- Usage: Important notices, highlights

### Neutral Colors

**White** (Background)
- Hex: `#FFFFFF`
- RGB: 255, 255, 255
- Tailwind: `bg-white`
- Usage: Page backgrounds, card backgrounds

**Light Gray** (Subtle background)
- Hex: `#F5F5F5`
- RGB: 245, 245, 245
- Tailwind: `bg-gray-100`
- Usage: Section backgrounds, borders, subtle separations

**Medium Gray** (Text secondary)
- Hex: `#666666`
- RGB: 102, 102, 102
- Tailwind: `text-gray-600`
- Usage: Secondary text, descriptions, helper text

**Dark Gray** (Text primary)
- Hex: `#333333`
- RGB: 51, 51, 51
- Tailwind: `text-gray-800`
- Usage: Body text, main content

**Very Dark** (Text strong)
- Hex: `#000000`
- RGB: 0, 0, 0
- Tailwind: `text-black`
- Usage: Headings, emphasis

**Border Gray**
- Hex: `#CCCCCC`
- RGB: 204, 204, 204
- Tailwind: `border-gray-300`
- Usage: Borders, dividers

### Semantic Color Usage

| Element | Color | Usage |
|---------|-------|-------|
| Primary buttons | Primary Blue | Main CTAs |
| Secondary buttons | Secondary Blue | Alternative actions |
| Success messages | Green | Confirmations |
| Error messages | Red | Errors |
| Warning messages | Orange | Warnings |
| Body text | Dark Gray | Default text |
| Secondary text | Medium Gray | Descriptions |
| Links | Secondary Blue | Navigation links |
| Link hover | Primary Blue | Link interaction |

---

## Typography

### Font Family

**Primary Font: Inter** (Google Fonts)
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
- Clean, modern, professional
- Excellent readability
- Available weights: 400, 500, 600, 700

**Fallback Stack**:
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

### Font Sizes & Scale

**Base Font Size**: 16px (mobile), 18px (desktop)

**Heading Scale**:
```
H1: 48px (mobile: 32px) - font-weight: 700
H2: 36px (mobile: 28px) - font-weight: 700
H3: 28px (mobile: 24px) - font-weight: 600
H4: 24px (mobile: 20px) - font-weight: 600
H5: 20px (mobile: 18px) - font-weight: 600
H6: 18px (mobile: 16px) - font-weight: 500
```

**Body Text**:
```
Large: 18px - font-weight: 400
Body: 16px - font-weight: 400
Small: 14px - font-weight: 400
Tiny: 12px - font-weight: 400
```

**Tailwind Classes**:
- `text-xs` → 12px
- `text-sm` → 14px
- `text-base` → 16px
- `text-lg` → 18px
- `text-xl` → 20px
- `text-2xl` → 24px
- `text-3xl` → 30px
- `text-4xl` → 36px
- `text-5xl` → 48px

### Font Weights

- **400 (Regular)**: Body text, paragraphs
- **500 (Medium)**: Small headings, buttons
- **600 (Semibold)**: Headings, card titles, strong emphasis
- **700 (Bold)**: Page headings, strong emphasis

### Line Height

- **Headings**: 1.2 (tight)
- **Body text**: 1.6 (relaxed)
- **Small text**: 1.5 (comfortable)

### Letter Spacing

- **Headings**: -0.02em (tighter)
- **Body**: 0 (normal)
- **Labels**: 0.02em (slightly wider)

---

## Spacing System

### Spacing Scale

Based on 4px units (Tailwind default):
```
0:    0px
1:    4px
2:    8px
3:    12px
4:    16px
5:    20px
6:    24px
8:    32px
10:   40px
12:   48px
16:   64px
20:   80px
24:   96px
28:   112px
32:   128px
```

### Usage Guidelines

**Padding**:
- Page container: `px-4 md:px-8 lg:px-16`
- Section padding: `py-12 md:py-16 lg:py-24`
- Card padding: `p-6 md:p-8`
- Element padding: `p-4` (button), `p-2` (small element)

**Margin**:
- Between sections: `my-12 md:my-16 lg:my-24`
- Between elements: `my-4 md:my-6`
- Text margins: `mb-4` (paragraphs), `mb-3` (smaller text)

**Gap** (Grid/Flex):
- Grid: `gap-6 md:gap-8`
- Small gaps: `gap-3 md:gap-4`

---

## Buttons

### Button Styles

**Primary Button** (Main CTA)
```
Background: Primary Blue (#003366)
Text Color: White
Padding: 12px 24px (py-3 px-6)
Border Radius: 6px
Font Weight: 600
Font Size: 16px
Hover: Darker shade, slight shadow
Active: Darker shade, inset shadow
Disabled: Gray background, lower opacity
Transition: 200ms ease-in-out
```

**Secondary Button** (Alternative action)
```
Background: Transparent
Border: 2px Secondary Blue (#0066CC)
Text Color: Secondary Blue
Padding: 10px 22px (adjusted for border)
Border Radius: 6px
Font Weight: 600
Hover: Light blue background
Active: Darker border
Disabled: Gray border, lower opacity
```

**Tertiary Button** (Low emphasis)
```
Background: Light Gray (#F5F5F5)
Text Color: Primary Blue
Border: None
Padding: 12px 24px
Border Radius: 6px
Font Weight: 500
Hover: Darker gray background
```

**Ghost Button** (Link-style)
```
Background: Transparent
Text Color: Secondary Blue
Border: None
Padding: 8px 0
Text Decoration: Underline (on hover)
Font Weight: 500
```

### Button Sizes

**Large** (Main CTAs)
```
Padding: py-4 px-8
Font Size: 18px
Min Width: 200px
```

**Default** (Most buttons)
```
Padding: py-3 px-6
Font Size: 16px
Min Width: 140px
```

**Small** (Secondary actions)
```
Padding: py-2 px-4
Font Size: 14px
Min Width: 100px
```

**Extra Small** (Minimal)
```
Padding: py-1 px-3
Font Size: 12px
```

### Button States

- **Hover**: Change background color, add shadow
- **Active**: Inset shadow, slight background change
- **Focus**: Visible focus ring (2px outline)
- **Disabled**: 50% opacity, cursor: not-allowed

---

## Cards & Containers

### Card Styles

**Default Card**
```
Background: White
Border: 1px #CCCCCC
Border Radius: 8px
Padding: 24px (md:32px)
Box Shadow: 0 1px 3px rgba(0,0,0,0.1)
Hover Shadow: 0 4px 6px rgba(0,0,0,0.1)
Transition: 200ms ease-in-out
```

**Elevated Card** (More prominent)
```
Background: White
Border: None
Border Radius: 8px
Padding: 24px (md:32px)
Box Shadow: 0 4px 6px rgba(0,0,0,0.1)
Hover Shadow: 0 10px 15px rgba(0,0,0,0.15)
```

**Flat Card** (Minimal)
```
Background: Light Gray (#F5F5F5)
Border: None
Border Radius: 6px
Padding: 20px
Box Shadow: None
Hover: Background slightly darker
```

### Container Widths

**Full Width**: 100% (no max-width)
**Content Width**: `max-w-6xl` (1152px with padding)
**Section Width**: Full width with horizontal padding
**Narrow Width**: `max-w-3xl` (768px, for text-heavy content)

---

## Forms

### Form Fields

**Input/Textarea**
```
Background: White
Border: 1px #CCCCCC
Border Radius: 6px
Padding: 12px 16px
Font Size: 16px
Font Family: Inherit
Line Height: 1.5

States:
- Default: As above
- Focus: Blue border (2px), blue shadow
- Filled: Blue left border accent (optional)
- Error: Red border, error message below
- Disabled: Gray background, lower opacity
```

**Labels**
```
Font Size: 14px
Font Weight: 500
Color: #333333
Margin Bottom: 8px
Display: Block
```

**Helper Text**
```
Font Size: 12px
Color: #666666
Margin Top: 4px
Display: Block
```

**Error Messages**
```
Font Size: 12px
Color: #DD0000
Margin Top: 4px
Icon: Warning/error icon
```

**Placeholder Text**
```
Color: #999999
Font Style: Italic (optional)
Opacity: 0.6
```

### Form Layout

- **Label**: Above input
- **Input**: Full width on mobile, constrained on desktop
- **Helper/Error**: Below input
- **Spacing**: 16px between fields
- **Multi-column**: 2 columns on desktop, 1 on mobile

---

## Navigation

### Header/Navigation Bar

**Desktop Navigation**
```
Background: White
Border Bottom: 1px #CCCCCC
Height: 80px
Padding: 0 16px (md: 0 32px)
Sticky: Optional (stays at top while scrolling)
Flex Container: Justify between, items center

Logo:
- Size: 160px x 40px
- Position: Left
- Color: Primary Blue

Navigation Links:
- Text Color: Dark Gray
- Font Size: 16px
- Font Weight: 500
- Hover: Primary Blue
- Active: Primary Blue with bottom border (3px)
- Spacing: 32px between items
- Position: Center

CTA Button:
- Style: Primary button (small)
- Position: Right
- Text: "Konsultasi Gratis"
- Link: /contact
```

**Mobile Navigation**
```
Background: White
Height: 64px
Padding: 0 16px

Logo:
- Size: 140px x 35px
- Position: Left

Hamburger Menu:
- Position: Right
- Icon: 3 lines
- Color: Dark Gray
- Size: 24px x 24px

Mobile Menu (when open):
- Full screen or off-canvas
- Background: White
- Slide from right
- Items: Vertical stack
- Item padding: 16px
- Each item: 18px, 600 weight
- Border bottom: 1px divider
- CTA button at bottom: Full width
```

### Breadcrumb Navigation

```
Font Size: 14px
Color: Medium Gray (#666666)
Spacing: 8px between items (use " > " separator)
Links: Secondary Blue, underline on hover
Active item: Dark Gray, no link
Example: Home > About > Our Team
```

### Navigation Links

- **Default**: Secondary Blue, no underline
- **Hover**: Primary Blue, underline
- **Active**: Primary Blue, underline (bold)
- **Visited**: No distinct style (avoid purple)

---

## Footer

### Footer Structure

**Background**: Primary Blue (#003366) or Dark Gray (#333333)
**Text Color**: White
**Layout**: Multi-column grid on desktop, single column on mobile
**Padding**: `py-16 px-4 md:px-8 lg:px-16`

### Footer Columns

**Column 1: Company Info**
- Logo (white version)
- Brief description (2-3 lines)
- Social media links (if applicable)

**Column 2: Quick Links**
- Home
- About Us
- Services
- Articles
- Contact

**Column 3: Services**
- Konsultasi Hukum
- Mediasi
- Litigasi
- Harta Gono-Gini
- Hak Asuh Anak

**Column 4: Contact Info**
- Phone number
- Email
- Address
- Hours

**Column 5: Legal**
- Privacy Policy
- Terms of Service
- Cookie Policy
- Disclaimer

### Footer Bottom

```
Background: Darker shade (or separate line)
Content: Copyright notice + Links
Text: White, 12px
Padding: py-6
Alignment: Centered or split

Example:
"© 2026 Solusi Icerai. Hak Cipta Dilindungi.
Privacy Policy | Terms of Service | Sitemap"
```

### Footer Link Styling

- Default: White, no underline
- Hover: Light Blue (#E8F4F8)
- Active: Light Blue
- Font Weight: 500

### Footer Responsive

- **Desktop**: 4-5 columns + bottom
- **Tablet**: 2 columns (wrap)
- **Mobile**: Single column, stacked
- **Padding**: Adjust for screen size

---

## Sections & Layouts

### Hero Section

**Full Hero**
```
Height: 500px-600px (mobile: 300px-400px)
Background: Gradient or image
Content: Centered or left-aligned
Text Color: White
Heading Size: H1
Heading Weight: 700
Subheading Size: H3
Button: CTA button (primary or ghost)
Overlay: Dark overlay on image (0.3-0.5 opacity)
```

**Section Headers**
```
Heading: H2 (36px)
Subheading: 18px, medium gray
Bottom Border: Optional accent line
Margin Bottom: 32px-48px
Alignment: Centered or left
```

### Content Sections

**Standard Section**
```
Padding: py-16 md:py-24
Background: White or Light Gray
Max Width: Content container
```

**Alternating Sections** (Image + Text)
```
Desktop: Image left, Text right (or vice versa)
Tablet: Stacked
Mobile: Stacked vertically
Image Width: 50% on desktop, 100% on mobile
Text Width: 50% on desktop, 100% on mobile
Gap: 32px-48px
```

### Grid Layouts

**Service Grid**
```
Desktop: 3 columns
Tablet: 2 columns
Mobile: 1 column
Gap: 24px-32px
Card Height: Auto or equal height
```

**Testimonial Grid**
```
Desktop: 3 columns
Tablet: 2 columns
Mobile: 1 column
Card Height: Equal (using flex)
Gap: 24px
```

**Article Grid**
```
Desktop: 3 columns
Tablet: 2 columns
Mobile: 1 column
Card Height: Auto
Gap: 24px
```

---

## Hover & Interaction Effects

### Button Hover
- Background color change
- Slight shadow addition
- Cursor: pointer
- Transition: 200ms ease-in-out

### Card Hover
- Shadow elevation
- Slight scale up (1.02)
- Transition: 200ms ease-in-out

### Link Hover
- Color change to primary blue
- Underline appears (if not present)
- Transition: 150ms ease-in-out

### Input Focus
- Border color: Primary Blue
- Outline: 2px blue ring
- Box shadow: Blue glow
- Transition: 150ms ease-in-out

### Scroll Animations
- Fade in on scroll (optional)
- Stagger effect for lists
- Duration: 500ms-800ms

---

## Accessibility

### Color Contrast

**Minimum Ratios**:
- Normal text: 4.5:1
- Large text (18pt+): 3:1
- UI components: 3:1

**Color Usage**:
- Don't rely on color alone
- Use text labels with icons
- Use patterns in addition to colors
- Ensure color blind friendly palette

### Focus States

```css
/* Visible focus rings */
:focus {
  outline: 2px solid #0066CC;
  outline-offset: 2px;
}

button:focus,
a:focus,
input:focus {
  /* Ensure 2px outline is visible */
}
```

### Text Sizing

- Minimum font size: 14px (for small text)
- Body text: 16px minimum
- Line height: 1.5 minimum
- Line length: 50-75 characters (optimal)

### Images

- All images: Descriptive alt text
- Decorative images: `alt=""`
- Linked images: Descriptive alt text
- Image captions: Use `<figcaption>`

### Forms

- Labels: Always present and associated with inputs
- Error messages: Clear, color + icon
- Required fields: Marked with asterisk (*)
- Help text: Associated with input

---

## Responsive Design

### Breakpoints

```
Mobile:  < 640px (sm)
Tablet:  640px - 1024px (md/lg)
Desktop: > 1024px (xl)
```

**Tailwind Classes**:
- `sm:` → 640px and up
- `md:` → 768px and up
- `lg:` → 1024px and up
- `xl:` → 1280px and up
- `2xl:` → 1536px and up

### Mobile First Approach

- Start with mobile design
- Use `md:`, `lg:` for larger screens
- No `sm:` prefix needed (it's default)

### Fluid Typography

```css
/* Scale font sizes smoothly */
font-size: clamp(16px, 5vw, 32px);

/* For heading scaling */
h1 {
  font-size: clamp(32px, 8vw, 48px);
}
```

### Image Responsive

```jsx
<img
  src="image.jpg"
  alt="Description"
  style={{ maxWidth: '100%', height: 'auto' }}
  loading="lazy"
/>
```

---

## Performance & Optimization

### Image Optimization

- **Format**: WebP with fallback to JPG/PNG
- **Sizes**:
  - Hero images: 1920x1080 (desktop), 1280x720 (tablet), 640x360 (mobile)
  - Card images: 600x400 (desktop), 480x320 (tablet), 320x240 (mobile)
- **Compression**: 70-80% quality
- **Lazy Loading**: `loading="lazy"` for below-fold images

### CSS Optimization

- Tailwind CSS: Production build with purge
- Critical CSS: Inline for above-fold content
- No unused styles in production

### JavaScript

- Code splitting for pages
- Lazy load non-critical scripts
- Defer non-critical JS
- Minimize JavaScript bundle

---

## Dark Mode (Optional)

If implementing dark mode:

**Dark Mode Colors**:
- Background: `#1a1a1a`
- Surface: `#2d2d2d`
- Text: `#f5f5f5`
- Borders: `#444444`
- Primary: `#0090ff` (lighter blue)

**Implementation**:
- Use Tailwind dark mode
- `dark:` prefix for dark styles
- Toggle in user settings
- Respect system preference

---

## Additional Guidelines

### Icon Usage

- Consistent style (outline or filled)
- Size: 24x24px (default), 16x16px (small), 32x32px (large)
- Color: Inherit from text or primary blue
- Spacing: 8px from text

### Borders & Dividers

- Primary: 1px #CCCCCC
- Accent: 2px-3px primary blue
- Subtle: 1px #E8E8E8
- Rounded corners: 6px-8px default

### Shadows

- Subtle: `0 1px 3px rgba(0,0,0,0.1)`
- Medium: `0 4px 6px rgba(0,0,0,0.1)`
- Large: `0 10px 15px rgba(0,0,0,0.15)`
- Focus: `0 0 0 3px rgba(0, 102, 204, 0.1)`

### Animations

- Duration: 150ms-300ms (fast), 400ms-500ms (normal)
- Easing: `ease-in-out` (default), `ease-in`, `ease-out`
- Avoid: Rapid animations, heavy effects

---

**Last Updated**: 2026-01-11
**Status**: Complete - Ready for Implementation
