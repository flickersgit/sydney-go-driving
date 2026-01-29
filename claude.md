# Sydney Go Driving Website

## Deployment

- **Live URL**: https://sydneygodriving.com.au
- **GitHub Repo**: https://github.com/flickersgit/sydney-go-driving
- **GitHub Pages**: https://flickersgit.github.io/sydney-go-driving
- **Branch**: master

### DNS Configuration
| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | flickersgit.github.io |

---

## Business Information

### About
Sydney Go Driving adalah sekolah mengemudi profesional yang berlokasi di Sydney, Australia. Menyediakan layanan pembelajaran mengemudi dengan instruktur yang sabar dan berpengalaman.

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

*Catatan: Pembayaran 50% di muka untuk semua paket*

### Key Selling Points
- Instruktur sabar dan berpengalaman
- Pendekatan pengajaran personal (disesuaikan dengan gaya belajar siswa)
- Metodologi berbasis dorongan semangat
- Membantu siswa lulus ujian pada percobaan pertama
- Komunikasi ramah dan harga wajar

### Testimonials
1. "Very patient and adapts his teaching style to the student's experience and learning style" - Membantu pengemudi gugup lebih percaya diri
2. "Great instruction and really professional, friendly communication and reasonable price"
3. "Helped me pass my test on my first attempt - encouraging, patient with solid teaching methods"

---

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Tailwind CSS (CDN)
- **Fonts**: Google Fonts (Poppins, Inter)
- **Hosting**: GitHub Pages

## Project Structure
```
/
├── index.html          # Single-page landing
├── CNAME               # Custom domain config
├── claude.md           # Project documentation
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── main.js         # JavaScript (menu, form, animations)
└── images/             # Folder untuk gambar
```

## Design Guidelines

### Brand Colors
- **Primary**: Biru (#1E40AF) - Kepercayaan & profesionalisme
- **Secondary**: Hijau (#059669) - CTA & aksi positif
- **Accent**: Kuning (#F59E0B) - Highlight & perhatian
- **Background**: Putih (#FFFFFF) & Abu-abu terang (#F3F4F6)

### Typography
- **Headings**: Poppins (Bold)
- **Body**: Inter (Regular)

### Design Principles
- Mobile-first responsive design
- Clean dan profesional
- Mudah dinavigasi
- CTA yang jelas untuk booking

## Features

### Implemented
- [x] Hero section dengan tagline dan CTA "Book Now"
- [x] Daftar paket/harga dengan pricing cards
- [x] Section keunggulan (Why Choose Us)
- [x] Testimoni pelanggan (3 testimonials)
- [x] Formulir booking dengan integrasi WhatsApp
- [x] Floating WhatsApp button
- [x] Responsive navigation dengan hamburger menu
- [x] Footer dengan kontak dan social links
- [x] Smooth scroll navigation
- [x] Scroll animations

### Future Enhancements
- [ ] Hero image/video background
- [ ] Google Maps embed untuk area layanan
- [ ] More testimonials dengan carousel/slider
- [ ] Blog/artikel tips mengemudi
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
- Fokus pada kesan profesional dan terpercaya
- Highlight testimoni untuk social proof
- Semua nomor telepon clickable (tel: dan wa.me)
