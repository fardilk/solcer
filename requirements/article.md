# Articles/Blog Page Requirements - SolusIcerai.com

## Page Overview

The Articles section serves as a content hub showcasing the firm's legal expertise through educational content. It includes an articles listing page and individual article detail pages. This section builds authority, improves SEO, and provides value to visitors researching divorce law.

**Main URL**: `/articles`
**Article Detail URL**: `/articles/[slug]`
**Route**: Articles
**SEO Title**: "Artikel Hukum Perceraian - SolusIcerai"
**Meta Description**: "Baca artikel dan panduan hukum perceraian dari para ahli. Tips, informasi, dan solusi untuk masalah keluarga Anda."

---

## Page Structure

### PART 1: ARTICLES LISTING PAGE

---

### 1. Page Header/Banner
**Purpose**: Establish context and invite exploration

**Content Requirements**:
- Page title: "Artikel & Panduan"
- Tagline: "Pengetahuan Hukum Perceraian untuk Anda"
- Description: 2-3 sentences about the blog/articles
- Search functionality (optional)
- Breadcrumb navigation (Home > Articles)

**Content Example**:
```
Artikel & Panduan Hukum Perceraian

Pelajari lebih lanjut tentang hukum perceraian di Indonesia melalui
artikel komprehensif kami yang ditulis oleh para ahli. Kami membagikan
tips, panduan, dan informasi untuk membantu Anda memahami proses
perceraian dan hak-hak Anda.
```

---

### 2. Search & Filter Section
**Purpose**: Help users find relevant articles

**Features**:
- **Search Bar**: Full-text search of articles
  - Placeholder: "Cari artikel..."
  - Real-time suggestions (optional)
  - Search within title and content

- **Category Filter**: Filter by topic
  - Categories:
    - Proses Perceraian
    - Harta Gono-Gini
    - Hak Asuh Anak
    - Kekerasan Rumah Tangga
    - Mediasi & Negosiasi
    - Tips & Panduan
    - Peraturan Hukum
    - Berita & Update

- **Date Filter** (optional):
  - Latest articles
  - This month
  - Custom date range

- **Sorting Options**:
  - Newest first
  - Most popular
  - Trending
  - Most commented (if comments enabled)

**Layout**:
- Desktop: Sidebar or top section with filters
- Mobile: Collapsible filter menu
- Clear filter indicators
- Reset filters button

---

### 3. Featured/Pinned Article
**Purpose**: Highlight important or popular content

**Content Requirements**:
- Featured article card (larger than others)
- Large featured image (16:9 aspect ratio)
- Article title
- Brief excerpt
- Author and publish date
- Read time estimate
- "Read Article" link

**Display**:
- Top of articles listing
- Full width or prominent placement
- Different styling to stand out

---

### 4. Articles Grid/List
**Purpose**: Display all available articles

**Article Card Components** (each article shows):
- **Featured Image**:
  - 600x400px (mobile), 800x600px (desktop)
  - Aspect ratio: 16:9
  - Relevant to article topic

- **Article Title**:
  - Compelling and descriptive
  - SEO-optimized
  - Max 70 characters for display

- **Category Tag**:
  - Color-coded
  - Clickable to filter by category

- **Author Information**:
  - Author name (or firm name if generic)
  - Author image/avatar (optional)

- **Publication Date**:
  - Format: "12 Januari 2026"
  - Relative time (optional): "2 hari yang lalu"

- **Read Time**:
  - "5 min read", "8 min read"
  - Calculated based on word count

- **Excerpt**:
  - First 150-200 characters of article
  - Ending with "..."
  - No HTML tags

- **Read More Link**:
  - Button or text link
  - Hover effect

**Layout**:
- Grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Card-based design
- Consistent spacing
- Hover effects on cards
- Smooth transitions

**Pagination**:
- Show 9-12 articles per page
- Pagination controls at bottom
- Page numbers and "Next" button
- URL updates with page parameter: `/articles?page=2`

---

### 5. No Results State
**Purpose**: Handle empty search results

**Content**:
```
Tidak Ada Artikel yang Cocok

Maaf, kami tidak menemukan artikel yang sesuai dengan pencarian Anda.
Coba kata kunci lain atau jelajahi semua kategori kami.

[Lihat Semua Artikel] button
[Hubungi Kami] for help
```

---

### 6. Newsletter Signup
**Purpose**: Build email list and engage readers

**Section Content**:
- Headline: "Tetap Terinformasi"
- Description: "Dapatkan artikel hukum terbaru dan tips langsung di inbox Anda"
- Email input field
- Subscribe button
- Privacy assurance: "Kami tidak akan pernah membagikan email Anda"
- Checkbox: Newsletter opt-in

**Layout**:
- Prominent section on articles page
- Also on article detail page sidebar

---

### 7. Footer
**Purpose**: Navigation and additional information

(Specified in `global.md`)

---

### Articles Listing Page Meta Information
- Title: "Artikel Hukum Perceraian - SolusIcerai"
- Description: "Baca artikel dan panduan hukum perceraian dari para ahli. Tips, informasi, dan solusi untuk masalah keluarga Anda."
- Canonical URL: `https://solusicerai.com/articles`
- OG Image: Featured article image or generic articles image

---

## PART 2: ARTICLE DETAIL PAGE

---

### 1. Article Header Section
**Purpose**: Introduce the article and provide key information

**Content Requirements**:
- **Article Title**:
  - Full title (can be longer than card version)
  - Compelling and SEO-optimized

- **Article Meta Information**:
  - Author name(s)
  - Author avatar/image (small)
  - Publication date: "Dipublikasikan 12 Januari 2026"
  - Last updated date (if applicable): "Diperbarui 11 Januari 2026"
  - Reading time: "Waktu baca: 5 menit"
  - Category tag with link

- **Featured Image**:
  - Large high-quality image
  - 1200x600px minimum
  - Aspect ratio: 2:1
  - Relevant to article content

- **Article Description/Excerpt**:
  - 1-2 sentence summary
  - Appears below title
  - Hints at article content

**Layout**:
- Full width image
- Meta information overlaid on bottom of image (optional)
- Or meta below image
- Clear visual hierarchy

**Breadcrumb Navigation**:
```
Beranda > Artikel > [Category] > [Article Title]
```

---

### 2. Article Navigation Tabs (optional)
**Purpose**: Help readers navigate article sections

**Features** (if article has sections):
- Jump links to major sections
- Fixed position (optional)
- Desktop: Sidebar navigation
- Mobile: Collapsible/scrollable tabs

---

### 3. Article Content Section
**Purpose**: Display the main article content

**Content Structure**:
- Well-formatted text with proper hierarchy
- Heading levels (H2, H3, H4)
- Paragraphs with good spacing
- Bullet lists and numbered lists
- Blockquotes for important statements
- Images within content (with captions)
- Code blocks (if relevant)

**Content Guidelines**:
- Clear, readable typography
- Optimal line length (60-80 characters)
- Generous line spacing
- Ample whitespace
- Left-aligned text
- No walls of text

**Markdown/Rich Text Support**:
- Bold and italics
- Headers (H1-H6)
- Lists (ordered and unordered)
- Blockquotes
- Links
- Images with captions
- Horizontal rules (dividers)

**Content Sections**:
```
1. Introduction
   - Problem statement
   - Article overview
   - Why it matters

2. Background/Context
   - Legal background
   - Regulatory context
   - Relevant laws

3. Main Content
   - Detailed explanation
   - Examples
   - Solutions

4. Key Takeaways
   - Summary points
   - Main lessons
   - Actionable advice

5. Next Steps
   - Recommendations
   - When to seek help
   - CTA to services
```

---

### 4. Author Bio Section
**Purpose**: Establish credibility and author connection

**Content Requirements**:
- Author photo (small, square)
- Author name
- Title/expertise area
- Short bio (2-3 sentences)
- Expertise summary (specializations)
- Optional: Email or contact link

**Layout**:
- Card or box format
- Image left, text right
- At end of article
- Optional: "More from this author" link

**Example**:
```
[Photo]

Budi Santoso, S.H., LL.M.
Senior Attorney - Divorce Law Specialist

Budi adalah salah satu pendiri Solusi Icerai dengan lebih dari 20 tahun
pengalaman dalam hukum perceraian. Beliau telah menangani ribuan kasus
dan adalah penulis artikel hukum yang terampil.

Spesialisasi: Litigasi Perceraian, Harta Gono-Gini, Perselisihan Hak Asuh
```

---

### 5. Table of Contents (optional)
**Purpose**: Help readers navigate longer articles

**Features**:
- Auto-generated from H2 and H3 headings
- Clickable links to sections
- Shows article structure
- Sticky or fixed position on desktop
- Collapsible on mobile

**Placement**:
- Top of article (after introduction)
- Or side panel on desktop
- Below headline and featured image

---

### 6. Call to Action Section
**Purpose**: Drive action from engaged readers

**Content Options** (pick 1-2):
- "Hubungi kami untuk konsultasi": Link to contact page
- "Baca artikel terkait": Link to related articles
- "Pelajari lebih lanjut tentang [service]": Link to services
- "Daftar newsletter": Newsletter signup

**Placement**:
- After main content
- In sidebar
- End of article

---

### 7. Related Articles Section
**Purpose**: Keep readers engaged with more content

**Content Requirements**:
- 3-4 related articles
- Based on category or tags
- Same card format as listing page
- "More Articles" link to see all

**Display**:
- Grid layout (2-3 columns on desktop)
- Same as article listing cards
- Below main content

---

### 8. Reader Engagement Options (optional)
**Purpose**: Encourage interaction and feedback

**Features** (optional):
- **Like/Thumbs Up Button**:
  - "Was this article helpful?"
  - Click to register feedback

- **Share Buttons**:
  - Share on Facebook
  - Share on Twitter/X
  - Share on LinkedIn
  - Copy link to clipboard
  - Email to friend

- **Comments Section** (if enabled):
  - Disqus or similar
  - Moderated comments
  - Threaded discussions
  - Author can reply

- **Suggestions/Feedback Form**:
  - "Help us improve"
  - Suggestion text area
  - Email (optional)

---

### 9. Newsletter Signup Section
**Purpose**: Convert readers into subscribers

(Same as listing page - see above)

---

### 10. Footer
**Purpose**: Navigation and additional information

(Specified in `global.md`)

---

### Article Detail Page Meta Information
- Title: "[Article Title] - SolusIcerai"
- Description: "[Article excerpt or auto-generated from first sentences]"
- Canonical URL: `https://solusicerai.com/articles/[slug]`
- OG Image: Article featured image
- Article schema markup with:
  - Author
  - Publication date
  - Modified date
  - Image
  - Description

---

## Content Management

### Article Structure (Database/CMS)
```
Article {
  id: unique identifier
  slug: URL-friendly version of title
  title: string (max 200 chars)
  description: string (summary, 160 chars)
  featuredImage: {
    url: string
    alt: string
    caption: string
  }
  content: rich text/markdown
  excerpt: string (first 200 chars)
  category: string (reference to category)
  tags: array of strings
  author: {
    id: reference to author
    name: string
    bio: string
    photo: url
  }
  publishedAt: datetime
  updatedAt: datetime
  readTime: calculated integer (minutes)
  status: "draft" | "published" | "archived"
  featured: boolean (pinned article)
  seo: {
    title: string
    description: string
    keywords: array
  }
}
```

### Categories
- Proses Perceraian (Divorce Process)
- Harta Gono-Gini (Asset Division)
- Hak Asuh Anak (Child Custody)
- Kekerasan Rumah Tangga (Domestic Violence)
- Mediasi & Negosiasi (Mediation)
- Tips & Panduan (Tips & Guides)
- Peraturan Hukum (Legal Regulations)
- Berita & Update (News & Updates)

### Tags
- Perceraian
- Aset
- Anak-anak
- Mediasi
- Litigasi
- Hukum Indonesia
- Keluarga
- Etc.

---

## Sample Articles

### Article 1: "5 Langkah Persiapan Awal Sebelum Mengajukan Perceraian"
- Category: Tips & Panduan
- Length: 1500-2000 words
- Sections:
  1. Konsultasi dengan pengacara
  2. Kumpulkan dokumen penting
  3. Pahami hak-hak Anda
  4. Atur keuangan Anda
  5. Siapkan diri secara emosional
- CTA: Link to consultation

### Article 2: "Memahami Harta Gono-Gini dalam Hukum Perceraian Indonesia"
- Category: Harta Gono-Gini
- Length: 2000-2500 words
- Sections:
  1. Definisi dan pengertian
  2. Apa yang termasuk harta gono-gini
  3. Proses pembagian
  4. Contoh kasus nyata
  5. Pertanyaan yang sering diajukan
- CTA: Link to asset division service

### Article 3: "Mediasi vs Litigasi: Mana yang Lebih Baik untuk Anda?"
- Category: Mediasi & Negosiasi
- Length: 1800-2200 words
- Sections:
  1. Apa itu mediasi
  2. Apa itu litigasi
  3. Perbandingan biaya
  4. Perbandingan waktu
  5. Kapan memilih masing-masing
- CTA: Compare services

---

## SEO & Technical Requirements

### Meta Data
- Each article has unique title and description
- Keyword optimization in title and content
- Image alt text optimization
- Internal linking to services and other articles
- External linking to authoritative sources

### Structured Data
- Article schema markup
- BreadcrumbList schema
- Organization schema
- LocalBusiness schema

### Performance
- Images optimized and lazy-loaded
- Content delivery optimized
- Mobile-responsive design
- Fast page load times

### Accessibility
- Heading hierarchy (H2, H3, H4)
- Image alt text
- Link text descriptive
- Color contrast > 4.5:1
- Focus states visible

---

## User Experience

### User Journey
1. User discovers article via:
   - Google search
   - Homepage link
   - Social media
   - Related articles
   - Newsletter

2. User lands on articles listing page
3. User searches or filters for topics
4. User finds relevant article
5. User clicks to read full article
6. User reads article content
7. User engages:
   - Shares article
   - Leaves comment
   - Subscribes to newsletter
   - Clicks CTA (contact/service)
8. User explores related articles
9. User takes action (contact firm)

---

## Technical Implementation Notes

### Components Needed
- ArticleListingPage component
- ArticleGrid component
- ArticleCard component
- ArticleDetailPage component
- ArticleHeader component
- ArticleContent component
- AuthorBio component
- RelatedArticles component
- TableOfContents component
- ShareButtons component
- CommentSection component (optional)
- NewsletterSignup component
- Footer component (shared)

### Data Fetching
- Static generation with revalidation (if using Next.js)
- Or server-side rendering
- Pagination handling
- Search/filter logic
- Related articles algorithm

---

**Last Updated**: 2026-01-11
**Status**: Requirements Ready
