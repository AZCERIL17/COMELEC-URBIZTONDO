# COMELEC URBIZTONDO e-Gov Hub • Pangasinan

**Your Digital Gateway to Local Government Services**
*Serbisyong Tapat, Halalang Maayos — Connecting communities with modern, secure, and transparent electoral services for all 21 barangays.*

Official municipal electoral portal for the **Commission on Elections (COMELEC) — Office of the Election Officer, Urbiztondo, Pangasinan** (District 2, Region I).

---

## 🏛️ Project Overview

This portal serves as the primary informational and civic engagement hub for the citizens and registered voters of Urbiztondo's 21 barangays. It is designed to provide transparent, accurate, and up-to-date electoral administration data in full compliance with Commission on Elections issuances and statutory enactments.

### Key Electoral Figures (Certified Project of Precincts — POP)
* **Total Barangays**: 21 (100% District 2 Coverage)
* **Total Voting Centers**: 21 (1 official school center per barangay)
* **Total Clustered Precincts**: 132 (Clusters 1 to 132)
* **Total Established Precincts**: 292
* **Total Regular Barangay Registered Voters**: **42,999**
* **Total Sangguniang Kabataan (SK) Registered Voters**: **17,627**
* **Total Combined Electors**: **60,626**
* **Election Officer**: Eric M. Austria
* **Election Assistant II**: Jocelyn V. Reyes

---

## 🚀 Key Modules & Features

1. **"What do you need today?" Quick Services Hub**:
   - Fast, intuitive navigation cards directing citizens to the most common frontline tasks: Voter's Certification, 21 Barangays directory, official forms, appointment service requests, statutory calendar, and valid IDs checklist.

2. **Official Project of Precincts (POP) Interactive Directory**:
   - Deep-dive barangay search covering all 21 barangays.
   - Displays designated Voting Center names, cluster IDs, established precinct counts, and exact voter counts for both regular and SK youth electors.

3. **Republic Act No. 12326 Statutory Advisory**:
   - Reflects the enactment of **Republic Act No. 12326** (signed September 24, 2026), fixing official terms to 5 years and postponing the BSKE to **November 2028**.
   - Clear notices on the suspension of Certificates of Candidacy (COC) filing originally scheduled for Sept 28 – Oct 5, 2026.
   - Notices regarding the resumption of nationwide Continuing Voter Registration from November 2026 to July 30, 2027.

4. **Appointment Service Request Flow (Corrected)**:
   - Replaced misleading automated booking terminology with **"Request an Appointment"**.
   - Explicitly clarifies that the portal does **not** host live calendar availability; it generates an official **Service Request Reference Slip** to expedite in-person queueing and preparation at the Municipal Hall front desk.
   - Date selection is validated with a `min` boundary, preventing selection of past dates.
   - Avoids false dynamic voting center assignment; explains that voting centers are statutory polling venues per the POP.

5. **Official COMELEC Forms Repository & Verification Strip**:
   - Prevents pretending that the portal stores local PDF copies; links directly to **comelec.gov.ph** central repository.
   - Features an **Official-Source Verification Strip** to guarantee document integrity.

6. **Interactive Media Gallery**:
   - Electoral photo and video documentation with user insertion, local persistence, full-screen playback lightbox, and default reset capability.

7. **Voter Requirements & Valid IDs Checklist**:
   - Interactive photo-matched modal detailing accepted government-issued IDs, PSA birth certificate requirements, and express priority lane guidelines under Republic Act No. 10366.

---

## ♿ Accessibility (A11y) Architecture

* **Skip-to-Content Link**: Accessible keyboard anchor at the top of the DOM allowing screen reader and keyboard users to bypass navigation and jump straight to `<main id="main-content">`.
* **Focus States**: High-contrast, visible focus rings (`focus-visible:ring-2 focus-visible:ring-sky-500`) across all interactive elements, buttons, form controls, and tab triggers.
* **Scroll Padding**: All target anchors (`#home`, `#quick-services`, `#announcements`, `#calendar`, `#faq`, `#forms`, `#barangays`, `#officials`, `#contact`) implement `scroll-mt-20` to prevent sticky navbar occlusion during hash-link navigation.
* **Semantic Landmarks & ARIA**:
  - Proper `<header>`, `<main>`, `<section>`, and `<footer>` HTML5 landmarks.
  - Modals feature `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` attributes with escape/close controls.
* **Readability Controls**: Includes a dialect greeting and an in-app font-scaling toggle (Standard vs. Large).

---

## 💻 Tech Stack & Architecture

* **Frontend Framework**: React 18 (Vite, TypeScript)
* **Styling**: Tailwind CSS
* **Icons**: Lucide React
* **Code Standard**: Modular, functional components with custom hooks (`useOfficialsPhotos`, `useGallery`).
* **Design Constitution**: Clean civic typography (Plus Jakarta Sans, Cinzel), anti-slop visual hierarchy, responsive viewports, and zero mock fallbacks.

---

## 🛠️ Local Development & Build Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (port 3000)
npm run dev

# 3. Type check & Lint
npm run lint

# 4. Production build
npm run build
```

---

## 🌐 Production Deployment Recommendations

1. **Hosting Environment**:
   - Deploy as a high-performance static SPA using platforms such as Google Cloud Run, Firebase Hosting, Cloudflare Pages, or Vercel.
   - Serve over HTTPS with HTTP/2 or HTTP/3 enabled.

2. **Security Headers**:
   Configure web server / CDN response headers:
   ```http
   Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
   X-Content-Type-Options: nosniff
   X-Frame-Options: SAMEORIGIN
   Referrer-Policy: strict-origin-when-cross-origin
   Permissions-Policy: geolocation=(), camera=(), microphone=()
   ```

3. **Asset Caching Policy**:
   - Static assets (`/assets/*.js`, `/assets/*.css`, images): Cache-Control `public, max-age=31536000, immutable`.
   - HTML entry point (`/index.html`): Cache-Control `no-cache, must-revalidate`.

4. **Time-Sensitive Statutory Verification**:
   - Philippine election dates and regulations are subject to statutory amendments and COMELEC En Banc resolutions. When deploying in production, ensure integration with automated RSS or API alerts from the official COMELEC portal (`comelec.gov.ph`).

---

## ⚖️ Legal Disclaimer

This portal is maintained for public information purposes on behalf of the Office of the Election Officer, Urbiztondo, Pangasinan. Electoral timelines and legal rules reflect **Republic Act No. 12326**, **COMELEC Resolution No. 11191**, **Republic Act No. 8189**, and official COMELEC En Banc directives. Official legal notices and national issuances should always be verified against **comelec.gov.ph**.
