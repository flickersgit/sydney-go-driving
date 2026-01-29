# Sydney Go Driving Website

## Deployment

- **Live URL**: https://sydneygodriving.com.au
- **GitHub Repo**: https://github.com/flickersgit/sydney-go-driving
- **GitHub Pages**: https://flickersgit.github.io/sydney-go-driving
- **Branch**: master

### DNS Configuration (di cPanel Zone Editor atau Domain Registrar)
| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | flickersgit.github.io |

**Note**: Jika pakai hosting dengan nameserver sendiri, edit DNS di cPanel Zone Editor. Jika tidak, ganti nameserver ke registrar dan edit di DNS Manager registrar.

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

## Project Structure
```
/
├── index.html              # Single-page landing
├── CNAME                   # Custom domain config
├── claude.md               # Project documentation
├── css/
│   └── style.css           # Custom styles & animations
├── js/
│   └── main.js             # Menu, form, scroll animations
└── images/
    ├── gono-denoised.png   # Foto instruktur (no background, denoised)
    ├── gono-nobg.png       # Foto instruktur (no background)
    ├── gono-profile.jpeg   # Foto instruktur (original)
    ├── gono-sharp.png      # Foto instruktur (sharpened)
    └── yaris-cross.png     # Toyota Yaris Cross (no background)
```

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

### Future Enhancements
- [ ] Google Maps untuk area layanan
- [ ] Testimonial carousel
- [ ] Blog/tips mengemudi
- [ ] Online booking calendar

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

## Notes
- Target audience: Learner drivers di Sydney
- Semua buttons pakai blue gradient
- WhatsApp integration untuk booking
- Foto Gono sudah di-denoise dan remove background
- Toyota Yaris Cross image dari Toyota official press
