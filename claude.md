# Sydney Go Driving Website

## Deployment

- **Live URL**: https://sydneygodriving.com.au
- **GitHub Repo**: https://github.com/flickersgit/sydney-go-driving
- **GitHub Pages**: https://flickersgit.github.io/sydney-go-driving
- **Branch**: master

### DNS Management: Cloudflare
- **DNS Provider**: Cloudflare (gratis)
- **Domain Registrar**: Crazy Domains (https://www.crazydomains.com.au)
- **Email Hosting**: Syrahost cPanel
- **Cloudflare Nameservers**: felicity.ns.cloudflare.com, haley.ns.cloudflare.com

### DNS Records (di Cloudflare)
**Website (GitHub Pages):**
| Type | Name | Value | Proxy |
|------|------|-------|-------|
| A | @ | 185.199.108.153 | Proxied |
| A | @ | 185.199.109.153 | Proxied |
| A | @ | 185.199.110.153 | Proxied |
| A | @ | 185.199.111.153 | Proxied |
| CNAME | www | flickersgit.github.io | Proxied |

**Email (Syrahost):**
| Type | Name | Value | Proxy |
|------|------|-------|-------|
| A | mail | 203.170.86.153 | DNS only |
| A | cpanel | 203.170.86.153 | DNS only |
| CNAME | webmail | webmail.au.syrahost.com | DNS only |
| MX | @ | mail.sydneygodriving.com.au (priority 0) | - |
| TXT | @ | v=spf1 +a +mx ... | - |
| TXT | default._domainkey | v=DKIM1; k=r... | - |

### Cloudflare Settings
- **SSL/TLS Mode**: Full
- **Always Use HTTPS**: On
- **Automatic HTTPS Rewrites**: On
- **Browser Cache TTL**: 1 year (untuk assets statis)

### Setup Notes
- Nameservers diganti di Crazy Domains ke Cloudflare NS
- Email tetap menggunakan Syrahost hosting
- AAAA records tidak diperlukan (sudah dihapus)
- cPanel diakses via cpanel.sydneygodriving.com.au

---

## Business Information

### About
Sydney Go Driving adalah sekolah mengemudi profesional yang berlokasi di Sydney, Australia. Instruktur: **Gono Soehiantono** dengan pengalaman 13+ tahun.

### Contact
- **Phone/SMS**: 0450 995 898
- **WhatsApp**: [+61 450 995 898](https://wa.me/61450995898)
- **Website**: sydneygodriving.com.au
- **Facebook**: [Sydney GO Driving School](https://www.facebook.com/sydneygodriving)

### Services & Pricing
| Paket | Harga | Keterangan |
|-------|-------|------------|
| Single Lesson | $80 | 1 jam |
| 5-Hour Package | $390 | Hemat $10 |
| 10-Hour Package | $750 | Hemat $50 |
| Test Preparation | $230 | Persiapan ujian |

*Hero section menampilkan "From $75/hour"*
*Pembayaran 50% di muka untuk semua paket*

### Vehicle
- Toyota Yaris Cross 2022 (Auto)
- Dual controls, 5-star ANCAP rating

### Key Selling Points
- Instruktur sabar dan berpengalaman (13+ tahun)
- Pendekatan pengajaran personal
- Membantu siswa lulus ujian pada percobaan pertama
- Komunikasi ramah dan harga wajar

---

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Tailwind CSS (CDN)
- **Fonts**: Plus Jakarta Sans (headings), DM Sans (body)
- **Hosting**: GitHub Pages (gratis)
- **CDN/SSL**: Cloudflare (gratis)

## Project Structure
```
/
├── index.html              # Single-page landing
├── 404.html                # Smart redirect for sitelinks
├── CNAME                   # Custom domain config
├── sitemap.xml             # Sitemap untuk Google
├── robots.txt              # Search engine instructions
├── claude.md               # Project documentation
├── css/
│   └── style.css           # Custom styles & animations
├── js/
│   └── main.js             # Menu, form, scroll animations
└── images/
    ├── gono-denoised.png   # Foto instruktur (original, 34KB)
    ├── gono-optimized.webp # Foto instruktur (WebP, 6.5KB)
    ├── gono-nobg.png       # Foto instruktur (no background)
    ├── gono-profile.jpeg   # Foto instruktur (original)
    ├── gono-sharp.png      # Foto instruktur (sharpened)
    ├── yaris-cross.png     # Toyota Yaris Cross (original, 5.3MB)
    ├── yaris-cross-optimized.png  # Toyota Yaris Cross (optimized, 71KB)
    └── yaris-cross-optimized.webp # Toyota Yaris Cross (WebP, 15KB)
```

---

## SEO & Performance

### PageSpeed Scores (Mobile)
| Metric | Score |
|--------|-------|
| Performance | 82 |
| Accessibility | 88 |
| Best Practices | 100 |
| SEO | 92 |

### SEO Features
- **Canonical URL**: Mencegah duplicate content
- **Sitemap**: sitemap.xml untuk Google crawling
- **Robots.txt**: Instruksi untuk search engines
- **Structured Data**: JSON-LD schema (DrivingSchool)
- **Meta Tags**: Title, description, keywords
- **404.html**: Smart redirect untuk Google sitelinks

### Structured Data (JSON-LD)
- Schema type: `DrivingSchool`
- Includes: Business info, services, pricing, aggregate rating
- Validates at: https://validator.schema.org

**Required fields untuk aggregateRating:**
```json
"aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "3"
}
```
*Note: `bestRating` dan `worstRating` wajib untuk Google rich results*

### Image Optimization
| Image | Original | Optimized | Savings |
|-------|----------|-----------|---------|
| yaris-cross | 5.3 MB | 15 KB (WebP) | 99.7% |
| gono-denoised | 34 KB | 6.5 KB (WebP) | 81% |

### Performance Optimizations
- [x] WebP images dengan PNG fallback
- [x] Image preloading untuk hero section
- [x] Deferred Google Fonts loading
- [x] Preconnect untuk external origins
- [x] Explicit width/height pada images (CLS)
- [ ] Tailwind CSS purge (future improvement)

---

## Google Search Results Control

### 1. Meta Tags (Basic Display)
```html
<title>Your Title | Brand</title>  <!-- 50-60 chars, blue clickable link -->
<meta name="description" content="...">  <!-- 150-160 chars, snippet below title -->
```

### 2. JSON-LD Structured Data (Rich Results)
Enables star ratings, price ranges, business info in search results.

**Common Schema Types:**
| Business Type | Schema | Rich Features |
|---------------|--------|---------------|
| Local business | `LocalBusiness` | Map, hours, reviews |
| Driving school | `DrivingSchool` | Services, pricing |
| Restaurant | `Restaurant` | Menu, reservations |
| Product | `Product` | Price, availability |
| Article | `Article` | Publish date, author |
| FAQ | `FAQPage` | Expandable Q&A |
| How-to | `HowTo` | Step-by-step |

### 3. Sitelinks (Auto-generated by Google)
Google creates sitelinks from:
- Clear anchor IDs: `id="contact"`, `id="pricing"`
- Heading hierarchy: `<h1>`, `<h2>`, etc.
- Navigation structure

**For single-page sites:** Use `404.html` to redirect sitelink paths to anchors:
- `/contact` → `/#contact`
- `/pricing` → `/#pricing`

### 4. Testing Tools
- **Schema Validator**: https://validator.schema.org
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Google Search Console**: URL Inspection → View crawled page

---

## Design Guidelines

### Brand Colors
- **Primary**: Blue gradient (#1E40AF → #2563EB)
- **Accent**: Emerald (#059669) - untuk highlights
- **Text**: Slate (#0f172a, #475569)
- **Background**: Gradient (slate-50 → blue-50 → emerald-50)

### Typography
- **Display/Headings**: Plus Jakarta Sans (600-800 weight)
- **Body**: DM Sans (400-600 weight)

### Design Principles
- Premium, professional aesthetic
- Mobile-first responsive
- Blue gradient buttons (semua CTA)
- Soft shadows dan depth layers
- Staggered fade-in animations

---

## Features

### Hero Section
- Dual circle composition (Gono + Toyota Yaris Cross)
- Gradient background dengan blur effects
- "13+ Years" badge di atas foto
- "From $75/hr" price badge
- Decorative spinning ring
- Wave divider di bottom

### Implemented
- [x] Premium hero dengan dual circles
- [x] Blue gradient CTA buttons
- [x] Pricing cards (4 packages)
- [x] Why Choose Us section
- [x] Testimonials (3 reviews)
- [x] Contact form dengan WhatsApp integration
- [x] Floating WhatsApp button
- [x] Responsive navigation
- [x] Footer dengan quick links
- [x] Smooth scroll & animations
- [x] SEO structured data
- [x] Sitemap & robots.txt
- [x] Smart 404.html redirect

### Future Enhancements
- [ ] Google Maps untuk area layanan
- [ ] Testimonial carousel
- [ ] Blog/tips mengemudi
- [ ] Online booking calendar
- [ ] Tailwind CSS build (reduce 124KB → ~15KB)

---

## SEO Keywords
- driving school sydney
- learn to drive sydney
- driving lessons near me
- driving instructor sydney
- learner driver lessons

## Git Commands
```bash
# Push changes
git add -A && git commit -m "Update message" && git push

# Pull latest
git pull origin master
```

## Useful Links
- **Google Search Console**: https://search.google.com/search-console
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Schema Validator**: https://validator.schema.org
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Cloudflare Dashboard**: https://dash.cloudflare.com

## Notes
- Target audience: Learner drivers di Sydney
- Semua buttons pakai blue gradient
- WhatsApp integration untuk booking
- Foto Gono sudah di-denoise dan remove background
- Toyota Yaris Cross image dari Toyota official press
- Images menggunakan WebP dengan PNG fallback
