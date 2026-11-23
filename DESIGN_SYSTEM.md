# Spesifikasi Karakteristik & Sistem Desain: **SEKA YASA**
*(Master Design System & Brand Blueprint — Warm Javanese Modern Studio / Enterprise Software House)*

Dokumen ini merangkum seluruh aturan visual, arsitektur 6 halaman, struktur navigasi Mega-Menu, tipografi 3-tingkat yang ramping, palet warna kayu soga & emas amber, hingga standar komponen interaktif yang membentuk website **Seka Yasa**.

---

## 1. Filosofi Utama & Aturan Mutlak "Anti-AI Slop"

Karakteristik desain ini dibangun di atas konsep **"Warm Javanese Modern Studio"**: memadukan kehangatan warna kayu soga (`#775229`), emas amber (`#F7B05F`), dan espresso gelap (`#1A1208`) dengan ketelitian arsitektur *Software House* kelas profesional.

### 7 Prinsip Anti-AI Slop & Craft Floor:
1. **Dilarang memakai *Capsule Pill Badge* generik di atas setiap judul:** Gunakan teks indeks arsitektural polos berukuran kecil (`01 · Masalah di Lapangan & Arsitektur Solusi`).
2. **Dilarang memakai pola "3 Kartu Kotak Kembar" berulang-ulang:** Gunakan **Interactive Problem → Solution Architecture Explorer**, **12-Column Asymmetric Bento Grid (7:5 & 5:7)**, serta **Wide Alternating Showcases**.
3. **Tipografi Ramping & 3 Tingkat Hirarki Ukuran (Besar, Sedang, Kecil):** Gunakan pasangan font **`Manrope`** (`400`, `500`, `600` — tanpa bobot `800` yang terlalu tebal) untuk judul dan **`Plus Jakarta Sans`** (`400`, `500`, `600`) untuk teks bacaan dan antarmuka.
4. **Satu Oval Floating Navbar Terpadu dengan Mega-Menu:** Seluruh elemen navigasi (Logo di kiri, 5 Menu utama + *Interactive Mega-Menu Dropdown* di tengah, dan tombol CTA *Konsultasi* di kanan) menyatu di dalam **1 bar oval melayang** (`max-width: 1240px; height: 54px; border-radius: 999px`) yang konsisten di semua halaman.
5. **Setiap Halaman Memiliki Komponen Eksplorasi Aktif:** Pengunjung tidak sekadar membaca teks statis, melainkan dapat berinteraksi dengan *Hero System Preview Switcher*, *Problem → Solution Architecture Explorer*, *Industry Solutions Switcher*, *Case Study Category Filter*, *Interactive FAQ Accordion*, serta *3-Click System Configurator*.
6. **Sentuhan Karakter Jawa Modern yang Halus (*Tactile Javanese Craft*):**
   * Animasi pembuka (*session-once*) merakit lambang Gunungan Aksara `logo-mark.svg` dan kaligrafi `SEKA YASA` per huruf.
   * Latar Hero dengan *Architectural Blueprint Grid*, motif *Kawung* monoline tipis, dan *interactive cursor spotlight*.
   * Garis pembatas seksi menggunakan **1px Kawung Monoline Architectural Seam** (`.kawung-seam`).
7. **Visual Sistem Enterprise Nyata (*No Toy UI*):** Gambar sistem menampilkan kompleksitas operasional sesungguhnya (`assets/erp-complex-v2.jpg`, `assets/pos-complex-v2.jpg`, `assets/sim-complex-v2.jpg`).

---

## 2. Sistem Palet Warna & Hirarki Kontras

| Token CSS | Nama Warna | Kode HEX / Nilai | Fungsi & Penggunaan Spesifik |
| :--- | :--- | :--- | :--- |
| `--amber` | **Golden Amber (Emas Soga)** | `#F7B05F` | Tombol aksi utama (CTA) di latar gelap, indikator tab aktif, titik status sistem, dan aksen Mega-Menu. |
| `--amber-hover` | **Amber Hover** | `#E89E4A` | Warna saat tombol utama (`--amber`) disentuh kursor. |
| `--soga` | **Soga Wood Brown** | `#775229` | Aksen utama di latar terang: nomor indeks (`01 · ...`), tombol di seksi terang, dan label kategori modul. |
| `--soga-dark` | **Deep Soga** | `#583B1B` | State *hover* untuk tombol berwarna `--soga`. |
| `--soga-tint` | **Warm Soga Tint** | `#F2EBE1` | Latar badge kategori solusi kecil (`Sistem Kasir (POS)`) dan kotak pratinjau pesan WhatsApp. |
| `--espresso` | **Deep Espresso** | `#1A1208` | Latar utama **Hero Full-Screen**, Floating Pill Navbar, Header halaman dalam, panel arsitektur solusi, dan Footer. |
| `--espresso-surface` | **Elevated Espresso** | `#23190D` | Latar kartu gelap di dalam Bento Grid dan bingkai peta lokasi. |
| `--cream` | **Warm Alabaster** | `#FAF7F2` | Latar utama halaman terang (hangat dan nyaman di mata). |
| `--cream-alt` | **Warm Sand** | `#F3EDE4` | Latar seksi selang-seling untuk membedakan bab secara lembut. |
| `--text-primary` | **Espresso Ink** | `#1A1208` | Warna teks judul utama di atas latar terang. |
| `--text-secondary` | **Warm Umber Gray** | `#524538` | Warna teks penjelasan/paragraf di atas latar terang. |
| `--text-on-dark` | **Warm Ivory** | `#F7F3EC` | Warna teks judul utama di atas latar gelap (`--espresso`). |
| `--text-on-dark-muted`| **Muted Sand** | `#C4B5A2` | Warna teks deskripsi dan menu non-aktif di atas latar gelap. |
| `--line-light` | **Hairline Soga Divider** | `rgba(119, 82, 41, 0.18)` | Garis pembatas horizontal/vertikal `1px` di seksi terang. |

---

## 3. Sistem Tipografi Ramping 3-Tingkat (Besar, Sedang, Kecil)

* **`--font-display`**: `'Manrope', 'Plus Jakarta Sans', sans-serif` (Bobot ramping `400` dan `500` untuk judul utama, `600` hanya untuk aksen kecil).
* **`--font-sans`**: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif` (Bobot `400`, `500`, `600`, dilengkapi `font-variant-numeric: tabular-nums` untuk indeks dan tabel data).

| Tingkat Hirarki | Elemen | Ukuran (`font-size`) | Ketebalan (`font-weight`) | `line-height` & `letter-spacing` |
| :--- | :--- | :--- | :--- | :--- |
| **1. BESAR (Focal Anchors)** | **Judul Hero (`h1`)** | `clamp(2.6rem, 4.4vw, 4.25rem)` | `400` (Baris 1) & `500` (Aksen Emas) | `1.08` / `-0.032em` |
| **1. BESAR (Focal Anchors)** | **Judul Seksi (`h2`)** | `clamp(1.95rem, 2.9vw, 2.75rem)` | `500` (Medium Ramping) | `1.14` / `-0.026em` |
| **2. SEDANG (Sub-headings & Leads)** | **Judul Kartu / Proyek (`h3`)** | `1.18rem – 1.78rem` | `500` (Medium) | `1.22` / `-0.018em` |
| **2. SEDANG (Sub-headings & Leads)** | **Paragraf Pengantar (`.hero-lead`, `.split-desc`)** | `0.95rem – 1.02rem` | `400` (Regular) | `1.65` |
| **3. KECIL (Details & Micro-Metadata)** | **Deskripsi Baris, Tabel & Modul** | `0.85rem – 0.9rem` | `400` – `500` | `1.6` |
| **3. KECIL (Details & Micro-Metadata)** | **Indeks Seksi (`01 · ...`) & Badge** | `0.73rem – 0.78rem` | `600` (SemiBold) | `1.4` / `0.1em` (Uppercase) |

---

## 4. Arsitektur Navigasi & 6 Halaman Software House Profesional

### Struktur Floating Oval Navbar (`initSharedLayout()` di `app.js`):
`[Logo Seka Yasa]` — `Beranda` (`index.html`) | `Layanan & Solusi ▾` (`services.html` + Mega-Menu Dropdown 4 Pilar & 4 Sektor Industri) | `Studi Kasus` (`projects.html`) | `Cara Kerja` (`process.html`) | `Perusahaan` (`about.html`) — `[Konsultasi]` (`contact.html`).

| File Halaman | Peran & Komponen Utama |
| :--- | :--- |
| **1. `index.html` (Beranda)** | • Session-once SVG Gunungan & `SEKA YASA` calligraphic intro animation.<br>• Centered Hero + **Interactive System Preview Switcher** (ERP / POS / SIM).<br>• **Interactive Problem → Solution Architecture Explorer** (Input → Proses → Output).<br>• **12-Column Asymmetric Bento Grid** (Standar Rekayasa Software House).<br>• 3 Wide Alternating Case Study Showcases, Ringkasan Cara Kerja, & Peta Lokasi Surabaya. |
| **2. `services.html` (Layanan & Solusi)** | • **4 Pilar Layanan Utama** (POS Multi-Cabang, ERP Gudang & Produksi, SIM Keuangan & HRIS, Aplikasi Web Custom) lengkap dengan rincian 6 modul per pilar.<br>• **Interactive Industry Solutions Switcher** (Retail & Grosir, F&B, Manufaktur, Jasa & Korporasi).<br>• **Tabel Perbandingan Objektif:** Spreadsheet Manual vs Aplikasi SaaS Langganan Umum vs Sistem Custom Seka Yasa. |
| **3. `projects.html` (Studi Kasus)** | • **Interactive Category Filter Pills** (Semua, ERP, POS, SIM & HRIS).<br>• 3 Studi Kasus Mendalam dengan **Before/After Operational Flow Strip**, rincian Kondisi Awal, Arsitektur Solusi, dan Dampak Lapangan. |
| **4. `process.html` (Cara Kerja)** | • **5-Stage Engineering & Implementation Lifecycle** (Discovery → Arsitektur Data → Rekayasa Bertahap → UAT & Migrasi → Pelatihan & Go-Live) beserta luaran (*deliverables*) tiap tahap.<br>• **Standar Keamanan Data & Arsitektur** (RBAC, Audit Trail, Automated Backup, Multi-Device Web).<br>• **Interactive FAQ Accordion** (6 pertanyaan krusial pengambil keputusan). |
| **5. `about.html` (Perusahaan)** | • Cerita & Filosofi *Saka Guru & Yasa* beserta anatomi lambang Gunungan Aksara.<br>• 3 Prinsip Rekayasa (*Tata, Titi, Tentrem*).<br>• Komitmen Studio Seka Yasa Surabaya sebagai mitra teknis jangka panjang. |
| **6. `contact.html` (Konsultasi)** | • **3-Click Interactive System Configurator** yang otomatis menyusun **Rekomendasi Arsitektur Modul** sekaligus **Pratinjau Pesan WhatsApp** siap kirim + Peta Lokasi Surabaya. |
