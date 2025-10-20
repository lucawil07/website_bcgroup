# Design Reference - Stoelting Gruppe Analysis

## 🎨 Visual Design Patterns

### Layout Philosophy
The Stoelting Gruppe website follows a **bold, minimalist, full-screen** approach that creates impact through simplicity and whitespace.

### Key Design Elements

#### 1. **Full-Screen Hero Carousel**
- **Auto-rotating slides** with crossfade transitions
- **Minimal text overlay**: Large, bold headlines
- **Dark overlay** on images for text legibility (rgba(0,0,0,0.4))
- **Scroll indicator**: Animated arrow with text
- **Navigation dots**: Bottom center, subtle
- Slide interval: 5-6 seconds
- Pause on hover/interaction

**Slide Examples**:
1. "WIR MACHEN. SEIT 10 JAHREN" - Brand statement
2. "REINIGUNGS-SERVICE" - Individual service showcase
3. "SICHERHEITS-SERVICE" - Individual service showcase
4. "PERSONAL-SERVICE" - Individual service showcase

---

#### 2. **Typography Hierarchy**

**Display Headlines** (Hero text):
- Font: Sans-serif, bold/black weight
- Size: 48-72px
- Style: UPPERCASE
- Letter-spacing: 2-3px
- Color: White (on dark backgrounds)

**Section Headlines**:
- Font: Sans-serif, bold
- Size: 32-42px
- Style: Sentence case or UPPERCASE
- Color: Dark gray/black

**Body Text**:
- Font: Sans-serif, regular
- Size: 16-18px
- Line-height: 1.6-1.7
- Color: Dark gray (#333)

**Buttons**:
- Font: Sans-serif, bold
- Size: 14-16px
- Style: UPPERCASE
- Letter-spacing: 1px

---

#### 3. **Color Scheme**

**Primary Colors**:
- Deep Black: `#1a1a1a` (headers, text)
- White: `#FFFFFF` (backgrounds, text on dark)
- Light Gray: `#f5f5f5` (alternate sections)

**Accent Colors**:
- Blue: `#0066CC` (links, CTAs)
- Orange: `#FF6B35` (primary actions)

**Overlays**:
- Dark overlay: `rgba(0, 0, 0, 0.4)` on hero images

---

#### 4. **Section Patterns**

**Full-Screen Section**:
```
- Min-height: 100vh
- Padding: 80px 24px
- Content: Vertically & horizontally centered
- Background: Alternates white/light gray
```

**Split Image/Text (50/50)**:
```
Left side: Large image (full-bleed)
Right side: Text content with padding
- Headline
- 2-3 paragraphs
- CTA button
Responsive: Stacks vertically on mobile
```

**Service Cards Grid**:
```
- 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)
- Each card:
  - Full-bleed image
  - Hover effect: Scale image 1.05
  - Overlay with service name
  - "MEHR INFOS" button
  - Subtle shadow
```

---

#### 5. **Navigation**

**Desktop Header**:
- Sticky (remains visible on scroll)
- Height: 80px
- Background: Transparent → White on scroll
- Logo: Left side, medium size
- Menu: Right side, horizontal
- Menu items: UPPERCASE, letter-spacing
- Dropdowns: On hover, simple fade-in

**Mobile Menu**:
- Hamburger icon: Right side (3 lines)
- Click triggers: Full-screen overlay
- Menu items: Large, vertical stack
- Close icon: X, top-right
- Background: White with slight transparency

---

#### 6. **Button Styles**

**Primary Button**:
- Background: Black or accent color
- Text: White, UPPERCASE
- Border-radius: 0-2px (minimal)
- Padding: 14px 32px
- Hover: Subtle scale (1.02) + shadow

**Secondary Button**:
- Background: Transparent/White
- Border: 2px solid black
- Text: Black, UPPERCASE
- Hover: Background fills with black, text turns white

**Ghost Button** (on dark backgrounds):
- Background: Transparent
- Border: 2px solid white
- Text: White, UPPERCASE
- Hover: Background white, text black

---

#### 7. **Image Treatment**

**Hero Images**:
- Full-screen, full-bleed
- Dark overlay (40% opacity)
- High quality, professional
- Object-fit: cover
- Aspect ratio maintained

**Service Images**:
- Clean, professional photography
- Slight desaturation
- Natural lighting
- Focus on action/results

**Hover Effects**:
- Image scale: 1.05 (within overflow-hidden container)
- Transition: 400ms ease-out
- Overlay darkening on hover

---

#### 8. **Spacing & Rhythm**

**Section Padding**:
- Desktop: 80-120px vertical
- Mobile: 60-80px vertical
- Horizontal: 24-48px (responsive)

**Content Spacing**:
- Headline to paragraph: 24px
- Paragraph to paragraph: 16px
- Paragraph to CTA: 32px
- Between sections: 0 (full-bleed sections touch)

**Grid Gaps**:
- Service cards: 24-32px
- Content columns: 48-64px

---

#### 9. **Animation Principles**

**Page Load**:
- Minimal, fast fade-in
- No complex entrance animations

**Scroll Animations**:
- Trigger: 20% in viewport
- Effect: Fade-in + slight Y-translate (30px)
- Duration: 600ms
- Easing: ease-out

**Hover Animations**:
- Quick, subtle (200-300ms)
- Scale changes: 1.02-1.05 max
- Smooth transitions

**Carousel**:
- Crossfade: 800ms
- Auto-advance: 5-6s
- No sliding/swiping effects, just fade

---

#### 10. **Footer Design**

**Layout**:
- Dark background (#1a1a1a or #2d2d2d)
- Light text (white or light gray)
- 3-column grid:
  1. Contact info
  2. Quick links (services)
  3. Certifications/badges

**Content**:
- Contact: Address, phone, email (with icons)
- Service links: Simple list
- Social media: Icon row
- Legal links: Bottom row, small text
- Copyright: Bottom, centered or left

---

#### 11. **Certification/Trust Badges**

**Placement**:
- Footer section
- Contact sections
- About page

**Style**:
- Grayscale or subtle color
- Even spacing between badges
- Clickable (link to certification details)
- Hover: Slight color/scale change

**Examples**:
- VDS certification
- GEFMA membership
- EcoVadis rating
- ISO certifications

---

## 🎯 User Experience Patterns

### Conversion Elements

**Primary CTAs**:
- "JETZT BERATEN LASSEN" - Get consultation
- "ANGEBOT ANFORDERN" - Request quote
- "MEHR INFOS" - More information

**Quick Contact**:
- Phone number: Clickable, prominent
- Email: Visible in footer and contact sections
- WhatsApp: Modern, quick communication
- Contact form: Simple, essential fields only

**Trust Building**:
- Certifications displayed prominently
- Customer reviews/testimonials
- "Seit X Jahren" - Years in business
- Professional imagery

---

## 📐 Layout Examples

### Homepage Structure (Stoelting)

1. **Full-Screen Hero Carousel** (Auto-rotating)
2. **Company Introduction** (Image + Text 50/50)
3. **Service Overview** (3-column grid)
4. **Values Section** (Full-width with overlay)
5. **News Section** (3-column blog cards)
6. **CTA Section** (Centered, bold)
7. **Contact Info Bar** (3 columns)
8. **Footer** (Dark, comprehensive)

---

## 🎨 BC Group Adaptation

### What to Keep:
✅ Full-screen hero carousel
✅ Bold, minimal typography
✅ Clean, professional imagery
✅ Service grid layout
✅ Full-screen section approach
✅ Sticky navigation
✅ Split image/text sections
✅ Certification display
✅ Dark footer

### What to Adapt:
🔄 Add Berlin-specific imagery
🔄 6 services instead of 3
🔄 Add photo upload feature
🔄 Berlin districts map
🔄 More interactive booking funnels
🔄 WhatsApp integration (modern)
🔄 Blog with more SEO content
🔄 Multi-language support (future)

### What to Add (BC Group Specific):
➕ Interactive cost calculators
➕ Photo upload for quotes
➕ Berlin districts map
➕ More detailed service pages
➕ Customer testimonials slider
➕ Process timelines
➕ FAQ accordions
➕ Booking progress indicators

---

## 🚀 Implementation Priorities

### Phase 1 Focus:
1. Hero carousel (auto-rotating)
2. Full-screen sections
3. Service grid with hover effects
4. Navigation (sticky, responsive)
5. Typography system
6. Color system

### Phase 2 Focus:
1. Service pages (full template)
2. Image/text split sections
3. Contact forms
4. Footer comprehensive layout
5. Mobile responsiveness

### Phase 3 Focus:
1. Animations (scroll, hover)
2. Blog layout
3. Advanced features
4. Performance optimization

---

*This design reference ensures BC Group's website matches the modern, professional aesthetic of Stoelting Gruppe while adding features specific to the multi-service model.*
