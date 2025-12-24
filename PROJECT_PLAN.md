# BC Group Website - Project Plan

## 🎯 Project Overview
Modern, conversion-optimized multi-service platform for BC Group, serving as a digital hub for all service offerings in Berlin with strong local presence and SEO optimization.

---

## 📋 Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom CSS for unique effects
- **Animations**: Framer Motion (for scroll animations & hero slider)
- **Carousel**: Swiper.js (for hero slider, modern & performant)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Image Optimization**: Next.js Image component with Unsplash/Pexels stock images
- **Smooth Scroll**: React Scroll or Locomotive Scroll

### Navigation Structure
**Top Navigation Menu (Sticky Header)**
- **Company** ▼ (Dropdown)
  - Über uns
  - Standorte
  - Karriere
- **Service** ▼ (Dropdown)
  - Entrümpelung
  - Abriss
  - Reinigung
  - Hausmeisterservice
  - Umzug & Transport
  - Kurierdienst
- **News** (Direct link)
- **Locations** (Direct link)
- **Karriere** ▼ (Dropdown)
  - Jobs
  - Bewerbung
  - Vorteile
- **Kontakt** (Direct link)

**Mobile Navigation**
- Hamburger menu (right side)
- Full-screen overlay on click
- Large, readable menu items
- Stacked vertically
- Close icon (X) top-right

### Features
- Server-Side Rendering (SSR) for SEO
- Responsive design (mobile-first)
- Performance optimization (Core Web Vitals)
- Contact forms with validation
- WhatsApp integration
- Photo upload functionality
- Multi-language support (DE primary)

---

## 🏗️ Site Structure

### 1. Homepage (`/`)
**Purpose**: Platform presentation & service overview
**Layout Inspiration**: Stoelting Gruppe - Full-screen sections with smooth scroll

**Sections**:

#### 1.1 Full-Screen Hero Carousel (Auto-rotating)
**3-4 rotating hero slides with full-screen backgrounds**:

**Slide 1**: Main Brand Statement
- Full-screen background image (team/Berlin cityscape)
- Large centered headline: "WIR MACHEN." + "SEIT [X] JAHREN" (animated)
- Subline: "Ihr Servicepartner vor Ort"
- Scroll indicator (animated arrow/text: "Nach unten scrollen")
- Minimal, bold typography
- Dark overlay for text legibility

**Slide 2-4**: Individual Service Highlights
- Each slide showcases one major service category
- Full-screen service-specific imagery
- Bold service name + tagline
- "MEHR INFOS" CTA button
- Auto-advance every 5-6 seconds
- Navigation dots at bottom
- Pause on hover

#### 1.2 Company Introduction Section (Full-screen)
**Split Layout - 50/50 Text & Image**
- Left: Large-format service image
- Right: Content block
  - Headline: "DIE BC GROUP"
  - Subheadline: "INDIVIDUELL, PASSGENAU, FLEXIBEL"
  - 2-3 paragraphs about company mission
  - Key message: Maßgeschneiderte Servicelösungen für Berlin
  - Emphasis on customer focus & flexibility
- Background: Clean white or light gray
- Generous whitespace

#### 1.3 Service Overview Section (Full-screen)
**Horizontal Scrolling Service Cards / Full-width Grid**
- Section headline: "BEI DER BC GROUP KOMMT ALLERHAND GUTES ZUSAMMEN"
- 6 large service cards in 2 rows of 3 (desktop) or horizontal scroll (mobile)
- Each card:
  - High-quality service image (full-bleed)
  - Service icon (top-left overlay)
  - Service name in bold
  - Short tagline (1 line)
  - "MEHR INFOS" button (minimal, outline style)
  - Hover effect: Image zoom + overlay darkening
- Cards:
  1. **ENTRÜMPELUNG** - "Professionelle Entrümpelung und Entsorgung"
  2. **ABRISS** - "Fachgerechter Abriss und Rückbau"
  3. **REINIGUNG** - "Ihr Dienstleister für Sauberkeit"
  4. **HAUSMEISTER** - "Zuverlässige Objektbetreuung"
  5. **UMZUG** - "Stressfreie Umzüge in Berlin"
  6. **KURIER** - "Schnelle und sichere Lieferungen"

#### 1.4 Values/Benefits Section (Full-screen)
**Image + Text Block**
- Large atmospheric image (team collaboration/Berlin)
- Text overlay or side panel:
  - Headline: "QUALITÄT, TRANSPARENZ, ZUVERLÄSSIGKEIT"
  - 3-4 key value propositions as bullet points:
    - ✓ Zertifizierte Standards & Qualitätssicherung
    - ✓ Lokale Präsenz in ganz Berlin
    - ✓ Flexible Einzellösungen oder Komplettservice
    - ✓ Persönliche Betreuung durch erfahrene Teams
  - "Mehr über uns" CTA

#### 1.5 News/Blog Section
**Modern Card Layout**
- Section headline: "AKTUELLES - NEUIGKEITEN RUND UM DIE BC GROUP"
- 3-4 featured blog posts in card layout
- Each card:
  - Featured image
  - Publication date
  - Post title (bold, 2 lines max)
  - Excerpt (2-3 lines)
  - "Mehr lesen" link
- "Alle News ansehen" CTA button
- Light gray background

#### 1.6 CTA Contact Section (Full-screen)
**Bold, Conversion-focused**
- Large headline: "GERNE BEANTWORTEN WIR IHRE FRAGEN PERSÖNLICH"
- Sub-text: "Jetzt beraten lassen"
- Two-column layout:
  - Primary CTA button: "ANGEBOT ANFORDERN"
  - Secondary: WhatsApp quick contact
- Background: Gradient or subtle pattern
- High contrast for visibility

#### 1.7 Contact Info Bar
**Clean, Structured Information**
- 3-column layout:
  - **KONTAKT**: Address, phone, email
  - **SERVICE**: Quick links to all 6 services
  - **ZERTIFIKATE**: Trust badges/certification logos in row
- White background
- Minimal styling
- Icons for phone/email/location

#### 1.8 Footer
**Comprehensive but Minimal**
- Company info & copyright
- Legal links (AGB, Impressum, Datenschutz)
- Social media icons (Instagram, Facebook, YouTube)
- Dark background with light text
- Single row layout (desktop) / Stacked (mobile)

---

### 2. Service Pages

#### 2.1 Entrümpelung & Entsorgung (`/services/entruempelung`)
**SEO Focus**: "Entrümpelung Berlin"
**Layout**: Full-screen sections with alternating image/text blocks

**Sections**:

**1. Service Hero** (Full-screen)
- Large background image (entrümpelung in action)
- Dark overlay
- Centered headline: "ENTRÜMPELUNG" + tagline
- Scroll indicator

**2. Service Introduction** (Split 50/50)
- Left: Large service image
- Right: Description (200-300 words)
- Key benefits as bullet points
- Primary CTA: "Jetzt Angebot anfordern"

**3. Process Timeline** (Full-width)
- Horizontal timeline (5 steps)
- Icons + numbers + descriptions
- Clean, minimal design
- Light background

**4. Special Cases Grid** (3-column)
- Messie-Entrümpelung
- Kellerentrümpelung
- Dachbodenentrümpelung
- Each with image, title, description

**5. Bezirksauswahl** (Interactive Map Section)
- Berlin districts map
- Clickable districts
- "Jetzt Verfügbarkeit prüfen" CTA

**6. Pricing Transparency** (Clean table/cards)
- Clear pricing structure
- "Was beeinflusst die Kosten?"
- Calculator CTA

**7. Photo Upload Section**
- "Fotos hochladen für genaues Angebot"
- Drag & drop interface
- Large, inviting design

**8. FAQ Accordion** (Full-width)
- 8-10 common questions
- Clean accordion design
- Light gray background

**9. CTA Section** (Full-screen)
- Bold headline: "Bereit für Ihre Entrümpelung?"
- Large CTA buttons
- WhatsApp + Phone + Form options

**Footer**

**Subsections**:
- `/services/entruempelung/kosten` - Cost calculator
- `/services/entruempelung/ablauf` - Process details
- `/services/entruempelung/bezirke` - District-specific info

#### 2.2 Abriss (`/services/abriss`)
**SEO Focus**: "Abrissunternehmen Berlin"

**Sections**:
- Service overview
- Safety & compliance section
- Types of demolition (Entkernung, Teilabriss, Vollabriss)
- Equipment showcase
- Cost overview
- Contact form
- Before/After gallery

#### 2.3 Reinigung (`/services/reinigung`)
**SEO Focus**: "Gebäudereinigung Berlin"

**Sections**:
- Service categories grid:
  - Büroreinigung
  - Praxisreinigung
  - Fensterreinigung
  - Grundreinigung
  - Hotelreinigung
- Cleaning process
- Quality standards
- Booking calendar integration
- Recurring service options

#### 2.4 Hausmeisterservice (`/services/hausmeisterservice`)
**SEO Focus**: "Hausmeisterservice Berlin"

**Sections**:
- Service portfolio
- Object maintenance types
- Garden care
- Staircase cleaning
- Emergency services
- Contract options
- Request form

#### 2.5 Umzug & Transport (`/services/umzug`)
**SEO Focus**: "Umzug Berlin"

**Sections**:
- Moving types (Privatumzug, Seniorenumzug, Firmenumzug, International)
- Transport services
- Packing service
- Moving checklist download
- Volume calculator
- Date picker booking
- Insurance options

#### 2.6 Kurierdienst (`/services/kurierdienst`)
**SEO Focus**: "Kurierdienst Berlin"

**Sections**:
- B2B focus presentation
- Specialized services:
  - Apotheken
  - Kanzleien
  - Arztpraxen
  - Dokumentenkuriere
- Contract options
- Same-day delivery
- Tracking system preview
- Request quote form

---

### 3. Additional Pages

#### 3.1 About (`/ueber-uns`)
- Company story
- Team introduction
- Values & mission
- Certifications & partnerships

#### 3.2 Contact (`/kontakt`)
- Multi-channel contact options
- Contact form
- Office address with map
- Opening hours
- WhatsApp QR code
- Email addresses per service

#### 3.3 Blog/Ratgeber (`/ratgeber`)
**Articles** (10-12 initial posts):
- "Entrümpelung richtig planen: Der ultimative Guide"
- "Kosten einer Entrümpelung in Berlin"
- "Messie-Wohnung entrümpeln: Was Sie wissen müssen"
- "Büroreinigung: Darauf sollten Sie achten"
- "Umzug planen: Checkliste für einen stressfreien Umzug"
- "Hausmeisterservice vs. Eigenverwaltung"
- "Abriss in Berlin: Genehmigungen und Ablauf"
- etc.

#### 3.4 Service Areas (`/service-gebiete`)
- Interactive Berlin map
- List of districts served
- Service availability per area

#### 3.5 FAQ (`/faq`)
- Categorized by service
- Searchable
- Most common questions

#### 3.6 Legal Pages
- `/impressum` - Imprint
- `/datenschutz` - Privacy Policy
- `/agb` - Terms & Conditions

---

## 🎨 Design System
**Inspired by Stoelting Gruppe - Minimalist, Bold, Clean**

### Color Palette
```
Primary: #1a1a1a (Deep Black - for text & headers)
Secondary: #0066CC (Professional Blue - for accents)
Accent: #FF6B35 (Action Orange - for CTAs)
Neutral-Dark: #2d2d2d (Dark sections)
Neutral-Light: #f5f5f5 (Light sections)
White: #FFFFFF (Clean backgrounds)
Overlay: rgba(0, 0, 0, 0.4) (for hero images)
```

### Typography
**Bold & Minimal Approach**
- **Display Headings**: Inter Black / 48-72px / Uppercase / Letter-spacing: 2px
  - Used for: "WIR MACHEN", "DIE BC GROUP"
- **Section Headlines**: Inter Bold / 32-42px / Sentence case
- **Subheadlines**: Inter SemiBold / 18-24px
- **Body Text**: Inter Regular / 16-18px / Line-height: 1.7
- **Captions**: Inter Medium / 14px
- **Buttons**: Inter Bold / 14-16px / Uppercase / Letter-spacing: 1px

### Layout Principles
- **Full-screen sections** (100vh or min-height: 100vh)
- **Generous whitespace** (60-120px vertical padding)
- **Maximum content width**: 1400px
- **Grid system**: 12-column grid with 24px gutters
- **Section alternation**: White → Light Gray → White pattern
- **No borders**: Use spacing & subtle shadows instead
- **Minimal UI**: Focus on content, reduce chrome

### Component Library

#### Buttons
- **Primary**: Black background, white text, minimal border-radius (2px)
- **Secondary**: White background, black border, black text
- **Ghost**: Transparent, white text (on dark backgrounds)
- **Hover**: Subtle scale (1.02) + shadow
- **Size**: Medium (48px height), Large (56px height)

#### Cards
- **Service Cards**: No border, subtle shadow, hover: scale + shadow increase
- **Blog Cards**: Minimal style, image + text + link
- **Clean edges**: Border-radius: 0-4px maximum

#### Navigation
- **Header**: Sticky, transparent → solid on scroll
- **Logo**: Top-left, medium size
- **Menu**: Right-aligned, horizontal, uppercase
- **Mobile**: Hamburger → full-screen overlay menu
- **Height**: 80px (desktop), 60px (mobile)

#### Forms
- **Minimal design**: Bottom-border only (no full borders)
- **Large inputs**: 56px height
- **Focus state**: Thicker bottom border + subtle color
- **Labels**: Float above input when focused

#### Animations
- **Smooth & Subtle**: Ease-in-out transitions
- **Duration**: 300-400ms standard, 600ms for hero
- **Scroll animations**: Fade-in + slight Y-translate (30px)
- **Hero carousel**: Fade transition, 5-6s interval
- **Hover effects**: Scale (1.02-1.05), opacity changes

#### Special Elements
- **Full-screen Hero Slider**: Crossfade transitions, auto-advance
- **Scroll Indicator**: Animated arrow + "Nach unten scrollen" text
- **Image Overlays**: Dark gradient for text legibility
- **Section Dividers**: Minimal or none, use spacing
- **Loading States**: Skeleton screens, minimal spinners

---

## 🎭 UI/UX Patterns (Stoelting-Inspired)

### Full-Screen Section Pattern
```jsx
<section className="min-h-screen flex items-center justify-center px-6 py-20">
  {/* Content centered vertically and horizontally */}
</section>
```

### Split Image/Text Pattern
```jsx
<section className="min-h-screen grid md:grid-cols-2">
  <div className="order-2 md:order-1">{/* Image */}</div>
  <div className="order-1 md:order-2">{/* Text content */}</div>
</section>
```

### Hero Slider Pattern
- Auto-rotating full-screen slides
- Crossfade transitions (800ms)
- Navigation dots at bottom center
- Pause on hover
- Keyboard navigation (arrow keys)
- Swipe support on mobile

### Hover Effects
- **Cards**: Scale 1.02 + shadow increase + image zoom 1.05
- **Buttons**: Subtle scale 1.02 + slight darkening
- **Images**: Zoom effect on parent overflow-hidden
- **Links**: Underline animation (left to right)

### Scroll Animations
- **Trigger point**: Element 20% in viewport
- **Animation**: Fade in + translateY(-30px → 0)
- **Stagger**: Children animate with 100ms delay
- **Duration**: 600ms ease-out

### Loading States
- **Initial page load**: Minimal logo animation
- **Image loading**: Blur-up placeholder
- **Form submission**: Button loading spinner
- **Content sections**: Skeleton screens

---

## 🚀 Key Features Implementation

### 1. Booking Funnel System
**Multi-step form with progress bar**
- Step 1: Service selection
- Step 2: Details (address, size, date)
- Step 3: Additional options
- Step 4: Photo upload (optional)
- Step 5: Contact info
- Step 6: Confirmation

### 2. Photo Upload
- Drag & drop interface
- Multiple files support
- Preview thumbnails
- Client-side compression
- Secure upload to cloud storage

### 3. WhatsApp Integration
- Floating action button
- Pre-filled messages per service
- Click-to-chat functionality

### 4. Cost Calculator
- Interactive calculator for each service
- Real-time price estimation
- Option selection (rooms, sqm, extras)
- "Get detailed quote" CTA

### 5. Service Area Map
- Interactive Berlin districts map
- Clickable districts
- District-specific info overlay
- "Check availability" feature

### 6. Blog System
- Category filtering
- Search functionality
- Related articles
- Social sharing buttons
- SEO optimized (meta tags, structured data)

---

## 📱 Responsive Breakpoints & Mobile Strategy
**Mobile-First Approach**

### Breakpoints (Tailwind CSS)
```javascript
{
  'sm': '640px',   // Small tablets
  'md': '768px',   // Tablets
  'lg': '1024px',  // Laptops
  'xl': '1280px',  // Desktops
  '2xl': '1536px'  // Large desktops
}
```

### Layout Adaptations

**Mobile (320px - 767px)**:
- Single column layout
- Full-screen sections (min-height: 100vh)
- Hamburger navigation (full-screen overlay)
- Stacked service cards (vertical scroll)
- Touch-optimized buttons (min 44px height)
- Reduced font sizes (60% of desktop)
- Simplified hero (single slide, no auto-advance)
- Reduced animations (performance)
- Tap-to-call/WhatsApp buttons prominent

**Tablet (768px - 1023px)**:
- 2-column grid for service cards
- Maintained full-screen sections
- Standard navigation (may collapse)
- Moderate font sizes (80% of desktop)
- Full animation suite
- Touch and hover support

**Desktop (1024px+)**:
- 3-column grid for service cards
- Full navigation menu
- Hero carousel with auto-advance
- Full-size typography
- Complete hover effects
- Maximum 1400px content width

### Mobile-Specific Features
- **Click-to-call links**: tel: protocol
- **WhatsApp integration**: wa.me links
- **Form optimization**: Large inputs, native selectors
- **Image optimization**: Serve smaller images
- **Reduced motion**: Simpler animations
- **Touch gestures**: Swipe for carousel
- **Fixed CTA button**: Floating at bottom (mobile only)

---

## 🔍 SEO Strategy

### Technical SEO
- Semantic HTML5
- Structured data (JSON-LD)
- XML sitemap
- robots.txt
- Open Graph tags
- Twitter Cards
- Fast loading (< 2s)
- Mobile-first indexing

### Content SEO
- Keyword-optimized pages
- Local SEO (Berlin focus)
- Internal linking strategy
- Alt tags for all images
- Meta descriptions per page
- H1-H6 hierarchy

### Keywords Target
- Primary: "Entrümpelung Berlin"
- "Abrissunternehmen Berlin"
- "Gebäudereinigung Berlin"
- "Hausmeisterservice Berlin"
- "Umzug Berlin"
- "Kurierdienst Berlin"
- + Long-tail variations per district

---

## 📊 Performance Goals
- Lighthouse Score: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

---

## 🎯 Conversion Optimization
- Multiple CTAs per page (top, middle, bottom)
- Trust signals (certifications, reviews)
- Social proof (testimonials, statistics)
- Clear value propositions
- Low-friction contact options
- Mobile-optimized forms
- Progress indicators in funnels

---

## 🏃 Sprint Implementation Plan

### ✅ Sprint 0: Project Setup & Planning (Week 1) - COMPLETED
**Duration**: 5 days
**Goal**: Establish development environment and foundation

**Sprint Tasks**:
- [x] Initialize Next.js 14 project with App Router
- [x] Install and configure dependencies (Tailwind CSS, Framer Motion, Swiper.js, Lucide React)
- [x] Set up Git repository and version control
- [x] Configure ESLint, Prettier, and code standards
- [x] Create project folder structure
- [x] Set up environment variables
- [x] Document development setup instructions

**Sprint Deliverables**:
- ✅ Working development environment
- ✅ Project repository with initial commit
- ✅ Development documentation

**Definition of Done**:
- ✅ Project runs locally without errors (http://localhost:3000)
- ✅ All team members can run the project
- ✅ Code standards are enforced

---

### ⏳ Sprint 1: Design System & Core Components (Week 2) - IN PROGRESS
**Duration**: 5 days
**Goal**: Build reusable design system and component library

**Sprint Tasks**:
- [ ] Define color palette and typography system
- [ ] Create Tailwind config with custom theme
- [ ] Build core UI components:
  - [ ] Button component (Primary, Secondary, Ghost variants)
  - [ ] Card component (base + service card variant)
  - [ ] Input/Form components (Input, Select, Textarea)
  - [ ] Modal component
  - [ ] Accordion component
- [ ] Implement responsive navigation header with dropdown menus
- [ ] Implement footer component
- [ ] Create component documentation/Storybook (optional)
- [ ] Set up typography & color system
- [ ] Implement responsive breakpoints

**Sprint Deliverables**:
- ✅ Complete design system in Tailwind config
- ✅ 10+ reusable components
- ✅ Navigation and Footer components

**Definition of Done**:
- All components are responsive
- Components follow accessibility standards
- Design system is documented

---

### Sprint 2: Homepage Development (Week 3)
**Duration**: 5 days
**Goal**: Build complete homepage with all sections

**Sprint Tasks**:
- [ ] Section 1.1: Full-screen hero carousel (auto-rotating) using Swiper.js
  - [ ] 3-4 rotating hero slides with full-screen backgrounds
  - [ ] Crossfade transitions
  - [ ] Navigation dots
  - [ ] Auto-advance every 5-6 seconds
  - [ ] Pause on hover
  - [ ] Scroll indicator
- [ ] Section 1.2: Company introduction (50/50 split layout)
- [ ] Section 1.3: Service overview grid (6 service cards)
  - [ ] Horizontal scrolling on mobile
  - [ ] Hover effects (image zoom + overlay)
- [ ] Section 1.4: Values/Benefits section
- [ ] Section 1.5: News/Blog preview section
- [ ] Section 1.6: CTA contact section
- [ ] Section 1.7: Contact info bar
- [ ] Integrate Framer Motion animations (scroll effects, fades)
- [ ] Source and optimize stock images (Unsplash/Pexels)
- [ ] Smooth scroll integration (React Scroll or Locomotive Scroll)
- [ ] Mobile responsive optimization

**Sprint Deliverables**:
- ✅ Complete homepage with all 7 sections
- ✅ Smooth animations and transitions
- ✅ Mobile-responsive layout

**Definition of Done**:
- Homepage loads in < 2 seconds
- All sections are responsive on mobile/tablet/desktop
- Images are optimized (WebP, lazy loading)
- Carousel works smoothly without janky animations

---

### Sprint 3: Entrümpelung Service Page (Week 4)
**Duration**: 5 days
**Goal**: Build first service page as template for others

**Sprint Tasks**:
- [ ] Create service page layout structure
- [ ] Hero section with service-specific imagery
- [ ] Service description section
- [ ] Process timeline (5 steps visualization)
- [ ] Berlin districts dropdown/selection
- [ ] Special cases section (Messie, Keller, Dachboden)
- [ ] Pricing transparency section
- [ ] Photo upload form component (drag & drop, multiple files)
- [ ] FAQ accordion for service
- [ ] CTA section with booking link
- [ ] Create subsections:
  - [ ] `/services/entruempelung/kosten` - Cost calculator
  - [ ] `/services/entruempelung/ablauf` - Process details
  - [ ] `/services/entruempelung/bezirke` - District info
- [ ] Mobile responsive optimization

**Sprint Deliverables**:
- ✅ Complete Entrümpelung service page
- ✅ Photo upload functionality
- ✅ Cost calculator tool
- ✅ Reusable service page template

**Definition of Done**:
- Page is SEO optimized for "Entrümpelung Berlin"
- Photo upload works with multiple files
- Cost calculator provides estimates
- Mobile-responsive

---

### Sprint 4: Remaining Service Pages (Week 5)
**Duration**: 5 days
**Goal**: Complete all 5 remaining service pages using template

**Sprint Tasks**:
- [ ] Abriss service page (`/services/abriss`)
  - [ ] Service overview with safety section
  - [ ] Types of demolition (Entkernung, Teilabriss, Vollabriss)
  - [ ] Equipment showcase
  - [ ] Before/After gallery
  - [ ] Cost overview
- [ ] Reinigung service page (`/services/reinigung`)
  - [ ] Service categories grid (Büroreinigung, Praxisreinigung, etc.)
  - [ ] Quality standards section
  - [ ] Booking calendar integration placeholder
  - [ ] Recurring service options
- [ ] Hausmeisterservice page (`/services/hausmeisterservice`)
  - [ ] Service portfolio
  - [ ] Contract options
  - [ ] Emergency services section
  - [ ] Garden care and staircase cleaning
- [ ] Umzug service page (`/services/umzug`)
  - [ ] Moving types section (Privatumzug, Seniorenumzug, etc.)
  - [ ] Volume calculator
  - [ ] Moving checklist download
  - [ ] Date picker booking
  - [ ] Insurance options
- [ ] Kurierdienst page (`/services/kurierdienst`)
  - [ ] B2B focus presentation
  - [ ] Specialized services (Apotheken, Kanzleien, Arztpraxen)
  - [ ] Tracking system preview
  - [ ] Contract options
- [ ] Optimize all service page content and images
- [ ] SEO optimization for each service page

**Sprint Deliverables**:
- ✅ 5 complete service pages
- ✅ All service-specific features implemented
- ✅ Consistent design across all pages

**Definition of Done**:
- All 6 service pages are live
- Each page has unique, SEO-optimized content
- All interactive features work (calculators, forms)
- Mobile-responsive

---

### Sprint 5: Booking Funnel System (Week 6)
**Duration**: 5 days
**Goal**: Implement multi-step booking funnel with progress tracking

**Sprint Tasks**:
- [ ] Design booking funnel UI/UX flow
- [ ] Build multi-step form system with React Hook Form:
  - [ ] Step 1: Service selection component
  - [ ] Step 2: Details (address, size, date picker)
  - [ ] Step 3: Additional options/extras
  - [ ] Step 4: Photo upload integration
  - [ ] Step 5: Contact information form
  - [ ] Step 6: Confirmation summary
- [ ] Progress bar component
- [ ] Form state management
- [ ] Validation with Zod schemas
- [ ] Data persistence (localStorage for draft forms)
- [ ] Form submission and email integration
- [ ] Success/error toast notifications
- [ ] WhatsApp integration:
  - [ ] Floating action button
  - [ ] Pre-filled messages per service
  - [ ] Click-to-chat functionality
- [ ] Mobile-optimized form flow

**Sprint Deliverables**:
- ✅ Complete booking funnel system
- ✅ Form validation and error handling
- ✅ Email integration for submissions
- ✅ WhatsApp quick contact feature

**Definition of Done**:
- Users can complete booking in < 3 minutes
- Form data is validated and sanitized
- Email notifications are sent on submission
- Mobile-friendly form flow
- WhatsApp integration works on mobile

---

### Sprint 6: Content Pages & Blog (Week 7)
**Duration**: 5 days
**Goal**: Build supporting pages and blog system

**Sprint Tasks**:
- [ ] About page (`/ueber-uns`)
  - [ ] Company story section
  - [ ] Team introduction with photos
  - [ ] Values & mission statement
  - [ ] Certifications display
- [ ] Contact page (`/kontakt`)
  - [ ] Contact form with validation
  - [ ] Office address with embedded map
  - [ ] Opening hours
  - [ ] WhatsApp QR code
  - [ ] Service-specific email addresses
- [ ] Blog system (`/ratgeber`)
  - [ ] Blog listing page with filtering
  - [ ] Blog post template
  - [ ] Category system
  - [ ] Search functionality
  - [ ] Social sharing buttons
  - [ ] Related articles section
- [ ] Create 3-5 initial blog posts with content
- [ ] Service areas page (`/service-gebiete`)
  - [ ] Interactive Berlin districts map
  - [ ] District list with service availability
- [ ] FAQ page (`/faq`)
  - [ ] Categorized FAQ sections
  - [ ] Search functionality
  - [ ] 20+ FAQ entries
- [ ] 404 error page
- [ ] Karriere section (basic)

**Sprint Deliverables**:
- ✅ About, Contact, Blog, Service Areas, FAQ pages
- ✅ Blog CMS structure
- ✅ 3-5 published blog articles
- ✅ Interactive map for service areas

**Definition of Done**:
- All content pages are complete and populated
- Blog system allows easy content management
- Map is interactive and displays correct data
- FAQ is searchable and categorized

---

### Sprint 7: Legal Pages & GDPR Compliance (Week 8)
**Duration**: 3 days
**Goal**: Complete legal compliance and data protection

**Sprint Tasks**:
- [ ] Impressum page (`/impressum`) with all required information
- [ ] Datenschutz/Privacy Policy page (`/datenschutz`)
- [ ] AGB/Terms & Conditions page (`/agb`)
- [ ] Cookie consent banner (GDPR compliant)
- [ ] GDPR compliance review for all forms
- [ ] Contact form email setup and testing
- [ ] Form data handling and storage (secure)
- [ ] Email template design for notifications
- [ ] Test all forms with real email accounts

**Sprint Deliverables**:
- ✅ All legal pages complete
- ✅ GDPR-compliant forms and cookie consent
- ✅ Working email system

**Definition of Done**:
- Legal pages contain all required information
- Forms comply with GDPR
- Cookie consent works properly
- Email notifications work reliably

---

### Sprint 8: SEO Implementation (Week 8-9)
**Duration**: 5 days
**Goal**: Optimize for search engines and local SEO

**Sprint Tasks**:
- [ ] Meta tags for all pages (title, description)
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card tags
- [ ] JSON-LD structured data implementation:
  - [ ] Organization schema
  - [ ] LocalBusiness schema
  - [ ] Service schemas for each service page
  - [ ] BreadcrumbList
  - [ ] Article schema for blog posts
- [ ] XML sitemap generation (automatic)
- [ ] robots.txt configuration
- [ ] Alt tags for all images
- [ ] Internal linking strategy implementation
- [ ] H1-H6 heading hierarchy review
- [ ] URL structure optimization (clean, keyword-rich)
- [ ] Google Business Profile integration prep
- [ ] Local SEO keywords integration:
  - "Entrümpelung Berlin"
  - "Abrissunternehmen Berlin"
  - "Gebäudereinigung Berlin"
  - "Hausmeisterservice Berlin"
  - "Umzug Berlin"
  - "Kurierdienst Berlin"
  - + District-specific variations

**Sprint Deliverables**:
- ✅ SEO-optimized meta data on all pages
- ✅ Structured data for rich snippets
- ✅ XML sitemap and robots.txt
- ✅ Local SEO implementation

**Definition of Done**:
- All pages have unique meta titles/descriptions
- Structured data validates without errors (Google Rich Results Test)
- Internal linking is logical and complete
- Site is ready for Google Search Console

---

### Sprint 9: Performance Optimization (Week 9)
**Duration**: 5 days
**Goal**: Achieve Lighthouse score > 90 and fast load times

**Sprint Tasks**:
- [ ] Image optimization audit:
  - [ ] Convert all images to WebP with fallbacks
  - [ ] Implement lazy loading for all images
  - [ ] Add blur placeholders (Next.js Image)
  - [ ] Optimize image sizes for different viewports
  - [ ] Use responsive images (srcset)
- [ ] Code splitting and bundle optimization
- [ ] Implement caching strategies (service worker optional)
- [ ] Font optimization:
  - [ ] Preload critical fonts
  - [ ] Use font-display: swap
- [ ] Remove unused CSS/JavaScript
- [ ] Minify CSS and JavaScript (automatic in Next.js production)
- [ ] CDN setup for static assets (Vercel automatically handles this)
- [ ] Lighthouse audit and fixes:
  - [ ] Performance
  - [ ] Accessibility
  - [ ] Best Practices
  - [ ] SEO
- [ ] Core Web Vitals optimization:
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Mobile performance optimization
- [ ] Third-party script optimization

**Sprint Deliverables**:
- ✅ Lighthouse score > 90 across all metrics
- ✅ First Contentful Paint < 1.5s
- ✅ Time to Interactive < 3s
- ✅ Optimized asset delivery

**Definition of Done**:
- Lighthouse Performance score > 90
- All Core Web Vitals in "Good" range (green)
- Page load time < 2 seconds on 4G
- Mobile performance matches desktop

---

### Sprint 10: Testing & QA (Week 10)
**Duration**: 5 days
**Goal**: Comprehensive testing and bug fixes

**Sprint Tasks**:
- [ ] Cross-browser testing:
  - [ ] Chrome (latest)
  - [ ] Firefox (latest)
  - [ ] Safari (macOS & iOS)
  - [ ] Edge (latest)
- [ ] Mobile device testing:
  - [ ] iOS (iPhone 12+)
  - [ ] Android (various devices)
- [ ] Tablet testing (iPad, Android tablets)
- [ ] Form submission testing (all forms):
  - [ ] Contact forms
  - [ ] Booking funnel
  - [ ] Photo upload
  - [ ] Newsletter signup
- [ ] Link checking (internal and external)
- [ ] Image loading verification
- [ ] Animation performance testing
- [ ] Accessibility testing (WCAG 2.1 Level AA):
  - [ ] Keyboard navigation
  - [ ] Screen reader compatibility
  - [ ] Color contrast
  - [ ] Focus indicators
- [ ] Contact form email delivery testing
- [ ] WhatsApp integration testing
- [ ] Booking funnel end-to-end testing
- [ ] SEO validation:
  - [ ] Meta tags
  - [ ] Structured data (Google Rich Results Test)
  - [ ] XML sitemap
- [ ] Create bug tracking spreadsheet
- [ ] Fix critical and high-priority bugs
- [ ] User acceptance testing (UAT)

**Sprint Deliverables**:
- ✅ Test report with all findings
- ✅ All critical bugs fixed
- ✅ Accessibility compliance verified
- ✅ UAT approval

**Definition of Done**:
- No critical or high-priority bugs remain
- Site works on all major browsers/devices
- All forms and features function correctly
- Accessibility standards met (WCAG AA)
- UAT sign-off received

---

### Sprint 11: Content Population & Polish (Week 11)
**Duration**: 5 days
**Goal**: Finalize content and visual polish

**Sprint Tasks**:
- [ ] Final copywriting review and edits
- [ ] Add testimonials (adapt/create 10-15 authentic testimonials)
- [ ] Populate all service descriptions (200-300 words each)
- [ ] Add FAQ answers (50+ questions across all categories)
- [ ] Create 7-10 additional blog posts:
  - "Entrümpelung richtig planen: Der ultimative Guide"
  - "Kosten einer Entrümpelung in Berlin"
  - "Messie-Wohnung entrümpeln: Was Sie wissen müssen"
  - "Büroreinigung: Darauf sollten Sie achten"
  - "Umzug planen: Checkliste für einen stressfreien Umzug"
  - "Hausmeisterservice vs. Eigenverwaltung"
  - "Abriss in Berlin: Genehmigungen und Ablauf"
  - etc.
- [ ] Source and add final stock images (30-40 high-quality images)
- [ ] Review and optimize all headlines
- [ ] Add trust badges and certifications
- [ ] Create and add team photos (stock alternatives)
- [ ] Final design polish:
  - [ ] Spacing consistency check
  - [ ] Color consistency check
  - [ ] Typography refinements
  - [ ] Animation timing adjustments
- [ ] Proofread all content for grammar and spelling errors
- [ ] Final mobile UX review
- [ ] Check all CTAs are working and trackable

**Sprint Deliverables**:
- ✅ All content complete and proofread
- ✅ 10-15 blog articles published
- ✅ Visual design polished
- ✅ Ready for launch

**Definition of Done**:
- All placeholder content replaced (no lorem ipsum)
- No [TBD] or placeholder markers remain
- Content is grammatically correct and professionally written
- Design is consistent across all pages
- All images are properly attributed if required

---

### Sprint 12: Deployment & Launch (Week 12)
**Duration**: 5 days
### Sprint 12: Deployment & Launch (Week 12)
**Duration**: 5 days
**Goal**: Deploy to production and go live

**Sprint Tasks**:
- [ ] Set up hosting on Vercel:
  - [ ] Create Vercel account and link project
  - [ ] Configure deployment settings
- [ ] Configure custom domain (bcgroup.de):
  - [ ] Purchase/transfer domain
  - [ ] Configure DNS records (A, CNAME)
  - [ ] Set up domain in Vercel
- [ ] Set up SSL certificate (automatic with Vercel)
- [ ] Set up environment variables for production
- [ ] Deploy to production (main branch)
- [ ] Post-deployment smoke testing:
  - [ ] All pages load correctly
  - [ ] Forms submit successfully
  - [ ] Images load properly
  - [ ] Navigation works
- [ ] Set up Google Analytics 4:
  - [ ] Create GA4 property
  - [ ] Add tracking code
  - [ ] Test event tracking
- [ ] Set up Google Tag Manager (optional)
- [ ] Set up Google Search Console:
  - [ ] Verify domain ownership
  - [ ] Submit XML sitemap
  - [ ] Set up property in GSC
- [ ] Set up monitoring and error tracking (Sentry or similar)
- [ ] Configure email service for production (SMTP or service like SendGrid)
- [ ] Create backup strategy (Vercel automatic + manual backups)
- [ ] Final performance check on live site
- [ ] Prepare launch announcement (social media, email)
- [ ] Go live! 🚀

**Sprint Deliverables**:
- ✅ Live website on production domain (bcgroup.de)
- ✅ Analytics and tracking configured
- ✅ Monitoring and backup systems in place
- ✅ Launch complete

**Definition of Done**:
- Site is accessible via custom domain
- HTTPS is working correctly
- Analytics is tracking visitors
- All forms send emails successfully
- Site performs well under traffic
- Monitoring alerts are configured

---

## 📊 Sprint Metrics & Tracking

### Velocity Tracking
- **Story points per sprint** (estimate vs. actual)
- **Sprint burndown charts** (track daily progress)
- **Velocity trends** (measure improvement over time)
- **Blocker identification** (track impediments)

### Quality Metrics
- **Bug count per sprint** (new vs. resolved)
- **Code review completion rate** (% reviewed before merge)
- **Test coverage percentage** (aim for > 80%)
- **Lighthouse scores** (Performance, Accessibility, Best Practices, SEO)
- **Build success rate** (% of successful deployments)

### Sprint Ceremonies

#### Sprint Planning (Monday morning, 2 hours)
- Review sprint goals
- Break down user stories into tasks
- Estimate story points
- Assign tasks to team members
- Set sprint commitment

#### Daily Standup (Every day, 15 minutes)
- What did I complete yesterday?
- What will I work on today?
- Any blockers or impediments?

#### Sprint Review (Friday afternoon, 1 hour)
- Demo completed features
- Gather stakeholder feedback
- Accept/reject user stories
- Update product backlog

#### Sprint Retrospective (Friday afternoon, 1 hour)
- What went well?
- What could be improved?
- Action items for next sprint
- Team morale check

### Sprint Board Columns
1. **Backlog** - Not started, future work
2. **To Do** - Ready for current sprint
3. **In Progress** - Currently working on
4. **In Review** - Code review/QA in progress
5. **Done** - Completed & verified

### Task Status Labels
- 🔴 **Blocked** - Cannot proceed due to dependency
- 🟡 **In Progress** - Actively being worked on
- 🟢 **Done** - Completed and meets Definition of Done
- 🔵 **Ready for Review** - Awaiting code review/QA
- ⚪ **To Do** - Not started yet

---

## 🎯 Sprint Success Criteria

Each sprint must meet the following criteria:
- ✅ **All planned tasks completed** (or justified in retrospective)
- ✅ **Code reviewed and merged** (no unreviewed code in main branch)
- ✅ **Features tested on multiple devices** (mobile, tablet, desktop)
- ✅ **No critical bugs introduced** (regression testing passed)
- ✅ **Documentation updated** (README, component docs, API docs)
- ✅ **Definition of Done met for all tasks**
- ✅ **Sprint goals achieved** (primary objectives met)

### Additional Success Indicators
- **Team satisfaction** (happy, motivated team)
- **Stakeholder satisfaction** (client approval)
- **Technical debt managed** (not accumulating)
- **Velocity stable** (predictable output)

---

## 🛠️ Sprint Tools & Resources

### Project Management
- **Jira / Linear / GitHub Projects** - Sprint board and backlog
- **Figma** - Design files and mockups
- **Notion / Confluence** - Documentation

### Development
- **VS Code** - Code editor
- **Git / GitHub** - Version control
- **Vercel** - Hosting and deployment
- **Postman / Insomnia** - API testing

### Communication
- **Slack / Discord** - Team communication
- **Zoom / Google Meet** - Video calls
- **Loom** - Async video updates

### Testing & Quality
- **Lighthouse** - Performance testing
- **BrowserStack** - Cross-browser testing
- **WAVE / axe DevTools** - Accessibility testing
- **Google Search Console** - SEO monitoring

---

## 📝 Sprint Backlog Template

### User Story Format
```
As a [user type],
I want [feature/functionality],
So that [benefit/value].
```

### Acceptance Criteria Format
```
Given [context],
When [action],
Then [expected result].
```

### Task Estimation (Story Points)
- **1 point** - 1-2 hours (trivial)
- **2 points** - 2-4 hours (simple)
- **3 points** - 4-8 hours (moderate)
- **5 points** - 1-2 days (complex)
- **8 points** - 2-3 days (very complex)
- **13 points** - 3-5 days (epic, should be broken down)

---

## 🚀 Sprint Workflow Example

### Example Sprint 2 Workflow:

**Monday (Sprint Planning)**
- Team commits to building all homepage sections
- Tasks assigned to developers
- Design assets reviewed and approved

**Tuesday-Thursday (Development)**
- Hero carousel implemented
- Service grid built
- Animations added
- Daily standups track progress

**Friday Morning (Final Development)**
- Bug fixes
- Code reviews
- Merge to main branch

**Friday Afternoon (Review & Retro)**
- Demo homepage to stakeholders
- Gather feedback
- Retrospective: What went well, what to improve
- Plan Sprint 3

---

## 🎓 Definition of Done (Sprint-Level)

A sprint is considered "done" when:

### Code Quality
- ✅ All code is reviewed and approved
- ✅ No linting errors
- ✅ Code follows project conventions
- ✅ No console errors in production

### Testing
- ✅ Manual testing completed
- ✅ Cross-browser testing passed
- ✅ Mobile responsive testing passed
- ✅ No critical bugs

### Documentation
- ✅ README updated if needed
- ✅ Component documentation updated
- ✅ API changes documented
- ✅ Changelog updated

### Deployment
- ✅ Code merged to main branch
- ✅ Deployed to staging/production
- ✅ Post-deployment verification passed
- ✅ No rollbacks needed

### Stakeholder
- ✅ Demo completed
- ✅ Stakeholder feedback received
- ✅ Acceptance criteria met
- ✅ Sprint goals achieved

---

## 📈 Success Metrics (Overall Project)

### Technical Metrics
- **Lighthouse Score**: > 90 across all categories
- **Page Load Time**: < 2 seconds
- **Time to Interactive**: < 3 seconds
- **Cumulative Layout Shift**: < 0.1
- **First Contentful Paint**: < 1.5 seconds

### Business Metrics
- **Conversion Rate**: > 3% (contact form submissions)
- **Average Session Duration**: > 2 minutes
- **Bounce Rate**: < 50%
- **Mobile Traffic**: Track percentage
- **Contact Form Submissions**: Track weekly
- **WhatsApp Clicks**: Track engagement

### SEO Metrics
- **Organic Traffic**: Track growth
- **Keyword Rankings**: Top 3 for primary keywords
  - "Entrümpelung Berlin"
  - "Abrissunternehmen Berlin"
  - "Gebäudereinigung Berlin"
  - "Hausmeisterservice Berlin"
  - "Umzug Berlin"
  - "Kurierdienst Berlin"
- **Indexed Pages**: All pages indexed within 2 weeks
- **Backlinks**: Track quality backlinks

---

**Estimated Timeline**: 12 weeks (12 sprints)
**Estimated Pages**: 25-30 pages
**Team Size**: 1-3 developers
**Methodology**: Agile Scrum with 1-week sprints
- [ ] Email setup (service-specific addresses)
- [ ] Vercel deployment setup:
  - Production environment
  - Environment variables
  - Custom domain
  - SSL certificate
- [ ] Form backend configuration
- [ ] Final testing on production
- [ ] Monitoring setup:
  - Error tracking (Sentry)
  - Performance monitoring
  - Uptime monitoring
- [ ] Create backup/rollback plan
- [ ] Launch! 🚀
- [ ] Post-launch monitoring (48 hours)
- [ ] Initial SEO submission (Google Search Console)

**Deliverable**: Live, production website

---

### Post-Launch (Ongoing)
- [ ] Weekly analytics review
- [ ] Monthly blog post publication (2-4 posts)
- [ ] Quarterly content updates
- [ ] Performance monitoring
- [ ] SEO ranking tracking
- [ ] User feedback integration
- [ ] A/B testing for conversions

---

## � Stock Image Strategy
**Stoelting-Style: Professional, Authentic, Clean**

### Visual Style Guidelines
- **Quality**: High-resolution (min 1920px width)
- **Composition**: Clean, uncluttered, professional
- **Color grading**: Slightly desaturated for modern look
- **People**: Diverse, authentic, in professional contexts
- **Lighting**: Natural, not overly dramatic
- **Focus**: Sharp, clear subjects
- **Avoid**: Overly staged, cheesy stock photo looks

### Sources
- **Unsplash** (primary - free, high-quality, curated)
- **Pexels** (secondary - free, good variety)
- **Pixabay** (backup - free alternative)

### Image Categories Needed

#### 1. Hero/Full-Screen Backgrounds (10-15 images)
- Berlin cityscape (skyline, TV tower, landmarks)
- Professional service teams in action
- Modern office/building interiors
- Clean, minimal workplace scenes
- Abstract professional backgrounds

**Search terms**: "professional team", "berlin skyline", "modern office", "clean workspace", "business people"

#### 2. Service-Specific Images (30-40 images)

**Entrümpelung**:
- Workers clearing/cleaning spaces
- Empty rooms being cleaned
- Professional cleaning equipment
- Before/after spaces

**Abriss**:
- Construction/demolition equipment
- Safety gear
- Building sites
- Professional contractors

**Reinigung**:
- Professional cleaners at work
- Modern clean offices
- Cleaning equipment
- Sparkling clean spaces

**Hausmeisterservice**:
- Maintenance workers
- Building maintenance
- Garden care
- Professional handyman

**Umzug**:
- Moving boxes
- Movers at work
- Moving truck
- New home/apartment

**Kurierdienst**:
- Delivery person with packages
- Courier bike/van
- Package delivery
- Professional courier

#### 3. Supporting Images (20-30 images)
- Team collaboration
- Happy customers
- Certifications/quality badges
- Berlin neighborhoods
- Handshake/partnership imagery
- Technology/modern tools

### Image Specifications

**Hero Images**:
- Resolution: 1920x1080px minimum (16:9)
- Format: JPG (optimized) or WebP
- File size: < 500KB (after optimization)
- Overlay-ready: Can handle dark overlay

**Service Cards**:
- Resolution: 800x600px minimum (4:3)
- Format: JPG or WebP
- File size: < 200KB
- Aspect ratio: Flexible, cropped in CSS

**Blog Thumbnails**:
- Resolution: 1200x630px (OG image ratio)
- Format: JPG or WebP
- File size: < 300KB

### Optimization Strategy
- **Next.js Image Component**: Automatic optimization
- **Format**: WebP with JPG fallback
- **Responsive**: Generate 4-5 sizes (320w, 640w, 1024w, 1920w, 2560w)
- **Lazy Loading**: Below-the-fold images
- **Blur Placeholder**: Low-quality image placeholder (LQIP)
- **Priority Loading**: Hero images only
- **CDN**: Serve from Vercel CDN (automatic)

### Implementation Example
```jsx
import Image from 'next/image';

<Image
  src="/images/hero-berlin.jpg"
  alt="BC Group Berlin Services"
  fill
  className="object-cover"
  quality={85}
  priority // Only for hero images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Generated at build
/>
```

---

## 📧 Contact Integration

### Email Structure
- info@bcgroup.de (general)
- entruempelung@bcgroup.de
- abriss@bcgroup.de
- reinigung@bcgroup.de
- hausmeister@bcgroup.de
- umzug@bcgroup.de
- kurier@bcgroup.de

### Form Handling
- Server-side validation
- Email notifications
- User confirmation emails
- CRM integration ready
- GDPR compliant

---

## 🎨 Animation Strategy
**Principle: Subtle, Smooth, Performance-First**

### Hero Carousel Animation
```javascript
// Auto-rotating hero slides
- Transition: Crossfade (opacity 0 → 1)
- Duration: 800ms
- Interval: 5-6 seconds
- Easing: ease-in-out
- Preload next image
- Pause on user interaction
```

### Scroll Animations (Framer Motion)
```javascript
// Fade in + slide up pattern
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
```

### Image Hover Effects
```css
/* Parent container */
.image-container { overflow: hidden; }

/* Image scale on hover */
.image-container img {
  transition: transform 400ms ease-out;
}
.image-container:hover img {
  transform: scale(1.05);
}
```

### Button Interactions
- **Hover**: Scale 1.02, subtle shadow
- **Active**: Scale 0.98
- **Duration**: 200ms
- **Easing**: ease-in-out

### Page Transitions
- Minimal fade (300ms) between routes
- No complex page transitions
- Focus on content, not fancy effects

### Performance Optimization
- **GPU Acceleration**: transform, opacity only
- **Will-change**: Only on active animations
- **Reduce motion**: Respect prefers-reduced-motion
- **Intersection Observer**: Lazy-trigger animations
- **RequestAnimationFrame**: For custom animations

### Micro-interactions
- Form input focus: Border color transition
- Success states: Checkmark animation
- Loading: Minimal spinner (rotate 360°)
- Scroll indicator: Bounce animation
- Menu open/close: Stagger menu items (50ms delay each)

---

## ✅ Success Metrics
- Conversion rate: > 3%
- Average session duration: > 2 min
- Bounce rate: < 50%
- Contact form submissions: Track weekly
- WhatsApp clicks: Track engagement
- SEO rankings: Top 3 for primary keywords
- Page speed: < 2s load time

---

## 🔄 Maintenance Plan
- Monthly blog posts (2-4)
- Quarterly content updates
- Regular performance audits
- SEO monitoring
- User feedback integration
- A/B testing for CTAs

---

## 📝 Content Requirements

### Copywriting Needs
- Hero headlines per service
- Service descriptions (200-300 words each)
- Value propositions
- CTA copy variations
- FAQ answers (50+ questions)
- Blog articles (10-12 initial)
- Testimonials (adapt/create 10-15)

### Visual Assets
- Logo (BC Group)
- Service icons (6 unique)
- Trust badges/certifications
- Team photos (stock alternatives)
- Service action photos (30-40)
- Background patterns/textures

---

## 🚦 Next Steps
1. Approve project plan
2. Set up development environment
3. Create detailed wireframes/mockups
4. Begin Phase 1 implementation
5. Iterative review cycles

---

**Estimated Timeline**: 6-7 weeks
**Estimated Pages**: 25-30 pages
**Tech Stack**: Next.js 14 + Tailwind CSS + Framer Motion
**Hosting Recommendation**: Vercel (optimal for Next.js)

---

*This plan provides a complete roadmap for building a modern, conversion-optimized multi-service platform that positions BC Group as the go-to service provider in Berlin.*
