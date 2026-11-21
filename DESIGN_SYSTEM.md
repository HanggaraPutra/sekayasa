# Spesifikasi Karakteristik & Sistem Desain: **SEKA YASA**
*(Master Design System & Brand Blueprint untuk Replikasi di Proyek Website Berikutnya)*

Dokumen ini merangkum seluruh aturan visual, struktur tata letak (*layout*), tipografi, warna, gaya bahasa, hingga kode CSS inti yang membentuk karakteristik website **Seka Yasa**. Gunakan dokumen ini sebagai acuan baku agar setiap website lain yang Anda buat memiliki identitas dan kualitas desain yang **serupa, konsisten, dan bebas dari kesan template AI (*Anti-AI Slop*)**.

---

## 1. Filosofi Utama & Aturan Mutlak "Anti-AI Slop"

Karakteristik desain ini dibangun di atas konsep **"Warm Javanese Modern Studio"**: memadukan kehangatan warna kayu soga, emas amber, dan espresso gelap dengan tata letak editorial asimetris yang lebar, tenang, dan langsung berfokus pada masalah klien.

### 7 Larangan Mutlak (Agar Website Tidak Terlihat Buatan AI):
1. **Dilarang memakai *Capsule Pill Badge* di atas judul:** Jangan pernah menaruh kapsul kecil dengan titik menyala (seperti `[● TANTANGAN OPERASIONAL]`) di atas setiap judul seksi. Ganti dengan teks indeks polos berukuran kecil (`01 / Masalah di Lapangan`).
2. **Dilarang mengulang pola "3 Kartu Kotak Kembar":** Jangan membuat deretan 3 kartu putih bundar yang identik di setiap seksi. Gunakan **Layout Split Asimetris** (judul di kiri, daftar baris horizontal dengan garis pembatas tipis di kanan).
3. **Dilarang memakai *Floating Badges* & *3D Tilt* pada gambar:** Gambar layar/perangkat harus tampil rata (*flat*), bersih, dan utuh di dalam bingkai—tanpa dimiringkan 3D dan tanpa ditempeli kotak-kotak teks melayang yang menutupi gambar.
4. **Dilarang memberi garis bawah warna-warni atau huruf miring di setiap ujung judul:** Biarkan ketegasan judul muncul dari ukuran font, ketebalan (`700 Bold`), dan kalimat yang pendek.
5. **Dilarang membuat container yang sempit di tengah:** Batas kiri-kanan halaman harus lebar (`width: 92%; max-width: 1540px`) agar halaman terasa luas dan bernapas.
6. **Dilarang menulis paragraf yang lebar dan bertele-tele:** Walaupun layar lebar, lebar teks per poin dibatasi (`max-width: 540px–560px`) dan maksimal **1 kalimat padat** per poin masalah.
7. **Dilarang menampilkan visual aplikasi "mainan" (*toy UI*):** Gambar sistem/aplikasi harus menampilkan kompleksitas nyata sesuai sektor industri (grafik multi-seri, matriks gudang, tabel pelacakan batch/PO, analitik cabang) agar memancarkan kompetensi teknis.

---

## 2. Sistem Palet Warna & Hirarki Kontras

Desain ini menggunakan **pola ritme kontras bergantian** (*Gelap Hangat di Pembuka → Terang Bersih di Isi Utama → Gelap Hangat di Penutup*):

| Token CSS | Nama Warna | Kode HEX / Nilai | Fungsi & Penggunaan Spesifik |
| :--- | :--- | :--- | :--- |
| `--amber` | **Golden Amber (Emas Soga)** | `#F7B05F` | Tombol aksi utama (CTA) di atas latar gelap, garis *scroll progress*, indikator menu aktif, dan penanda lokasi di Hero. |
| `--amber-hover` | **Amber Hover** | `#E89E4A` | Warna saat tombol utama (`--amber`) disentuh kursor. |
| `--soga` | **Soga Wood Brown** | `#775229` | Aksen utama di atas latar terang: nomor indeks (`01`, `02`), tombol di seksi terang, garis vertikal *timeline*, dan label solusi. |
| `--soga-dark` | **Deep Soga** | `#583B1B` | State *hover* untuk tombol berwarna `--soga`. |
| `--soga-tint` | **Warm Soga Tint** | `#F2EBE1` | Latar badge kategori solusi kecil (`Sistem Kasir (POS)`) dan kotak pratinjau pesan WhatsApp. |
| `--espresso` | **Deep Espresso** | `#1A1208` | Latar utama **Hero Full-Screen (`100vh`)**, Navbar, Header halaman dalam, seksi penutup, dan Footer. |
| `--espresso-surface` | **Elevated Espresso** | `#23190D` | Latar bingkai gambar dan kartu peta di dalam seksi gelap. |
| `--cream` | **Warm Alabaster** | `#FAF7F2` | Latar utama halaman terang (nyaman di mata, tidak menyilaukan seperti putih `#FFFFFF` murni). |
| `--cream-alt` | **Warm Sand** | `#F3EDE4` | Latar seksi selang-seling (seperti seksi *Showcase Karya*) untuk membedakan bab tanpa garis kaku. |
| `--text-primary` | **Espresso Ink** | `#1A1208` | Warna teks judul utama di atas latar terang. |
| `--text-secondary` | **Warm Umber Gray** | `#524538` | Warna teks penjelasan/paragraf di atas latar terang. |
| `--text-on-dark` | **Warm Ivory** | `#F7F3EC` | Warna teks judul utama di atas latar gelap (`--espresso`). |
| `--text-on-dark-muted`| **Muted Sand** | `#C4B5A2` | Warna teks deskripsi dan menu non-aktif di atas latar gelap. |
| `--line-light` | **Hairline Soga Divider** | `rgba(119, 82, 41, 0.18)` | Garis pembatas horizontal/vertikal `1px` di seksi terang. |

---

## 3. Sistem Tipografi & Kendali Keterbacaan

Menggunakan **satu keluarga font Sans-Serif humanis-geometris** yang bersih, bulat, dan modern: **`Plus Jakarta Sans`** (Google Fonts, bobot `400`, `500`, `600`, `700`).

### Skala Ukuran & Aturan Lebar Baca (*Measure*)
| Elemen | Ukuran (`font-size`) | Ketebalan (`font-weight`) | `line-height` & `letter-spacing` | Batas Lebar Maksimal (`max-width`) |
| :--- | :--- | :--- | :--- | :--- |
| **Judul Hero (`h1`)** | `clamp(2.25rem, 3.6vw, 3.5rem)` | `700` (Bold) | `1.18` / `-0.02em` | `100%` kolom kiri Hero |
| **Judul Seksi (`h2`)** | `clamp(1.75rem, 2.5vw, 2.4rem)` | `700` (Bold) | `1.24` / `-0.015em` | `440px` (di kolom kiri split) atau `680px` |
| **Sub-Judul Baris (`h3`)**| `1.25rem – 1.38rem` | `700` (Bold) | `1.30` / `normal` | Satu baris bersama badge solusi |
| **Paragraf Pengantar Hero**| `1.12rem` (`18px`) | `400` (Regular) | `1.75` | `680px` |
| **Teks Isi Poin Masalah** | `0.98rem` (`15.7px`) | `400` (Regular) | `1.60` | **`540px – 560px`** *(Wajib dibatasi agar to-the-point)* |
| **Indeks Seksi (`01 / ...`)**| `0.84rem` (`13.5px`) | `600` (SemiBold)| `1.4` / `0.04em` | Warna `--soga` (terang) atau `--amber` (gelap) |

---

## 4. Arsitektur Tata Letak (Grid Lebar & Asimetris)

### Empat Pola Layout Inti (*Signature Layout Patterns*)

#### Pola A — *Full-Screen Dark Hero* (`100vh`)
* **Kanvas:** `min-height: 100vh`, latar `--espresso` (`#1A1208`) dengan *radial-gradient* hangat `rgba(119, 82, 41, 0.32)` di sisi kanan belakang gambar.
* **Karakter Jawa Halus:** Siluet SVG lambang utama (`logo-mark.svg`) berukuran `480px` diletakkan `position: absolute; right: 2%; top: 50%; opacity: 0.055;`.
* **Proporsi Kolom:** `grid-template-columns: 1.08fr 0.92fr; gap: 4.5rem;`.
* **Bawah Hero:** Penunjuk gulir minimal di kiri bawah (`left: 4%`) berupa garis tipis `36px` berwarna `#F7B05F` + teks *"Gulir ke bawah..."*.

#### Pola B — *Asymmetric Sticky Split* (Pengganti 3 Kartu Kotak)
* **Proporsi Kolom:** `grid-template-columns: 0.72fr 1.08fr; gap: 5rem; justify-content: space-between;`.
* **Kolom Kiri (*Sticky*):** `position: sticky; top: 7.5rem; max-width: 440px;`. Berisi nomor bab (`01 / ...`), judul pendek yang tegas, dan 1 kalimat pengantar.
* **Kolom Kanan (*Editorial Row List*):** `max-width: 720px; justify-self: end;`. Setiap item dipisahkan garis horizontal `1px solid rgba(119, 82, 41, 0.18)` dengan struktur `grid-template-columns: 48px 1fr;`. Judul masalah di kiri, badge solusi (`background: #F2EBE1; color: #775229; border-radius: 6px;`) di kanan atas, dan 1 kalimat penjelasan di bawahnya (`max-width: 560px`).

#### Pola C — *Wide Alternating Feature Showcases*
* Digunakan untuk memamerkan karya/produk secara visual.
* **Baris Ganjil:** Gambar besar di kiri (`1.15fr`), penjelasan + tag fitur persegi (`border-radius: 8px`) + tautan garis bawah (`border-bottom: 1.5px solid #775229`) di kanan (`0.85fr`).
* **Baris Genap (`.reverse`):** Penjelasan di kiri (`0.85fr`), gambar besar di kanan (`1.15fr`).

#### Pola D — *Vertical Bordered Step Timeline*
* Di kolom kanan split asimetris, langkah-langkah kerja disusun vertikal dengan garis samping kiri tegas: `border-left: 2px solid #775229; padding-left: 2.25rem; max-width: 680px;`.

---

## 5. Struktur Pemisahan 4 Halaman & Aturan *Copywriting*

| Halaman | Fokus Utama Isi | Hal yang Dilarang Masuk di Halaman Ini |
| :--- | :--- | :--- |
| **1. `index.html` (Beranda)** | **100% Fokus Masalah & Solusi Klien** dalam 5 layar penuh (Hero → 3 Kendala Lapangan → Cuplikan 3 Karya → 3 Langkah Kerja → CTA & Lokasi). | Dilarang menaruh sejarah perusahaan atau arti nama yang panjang di Beranda. |
| **2. `projects.html` (Karya)** | Bedah mendalam 3 sistem utama dengan visual kompleks + tabel 3 baris bersih (`Kondisi Awal`, `Solusi Sistem`, `Hasil di Lapangan`). | Dilarang memakai tabel simulasi ramai atau teks klaim tanpa konteks masalah. |
| **3. `about.html` (Tentang)** | Filosofi nama & lambang Jawa, latar belakang perusahaan, serta 3 prinsip kerja (*Tata, Titi, Tentrem*). | Dilarang mengulang katalog produk secara berlebihan. |
| **4. `contact.html` (Konsultasi)**| Widget interaktif **3-Klik Pilihan Kebutuhan → Rangkuman Otomatis ke WhatsApp** + Info Lokasi & Google Maps. | Dilarang menampilkan daftar harga kaku (harga dibahas saat konsultasi). |

---

## 6. Standar & Master Prompt untuk Generate Gambar (Visual Sistem Kompleks)

Agar setiap website yang Anda buat memancarkan **kompetensi teknis (*engineering competence*)** dan tidak terlihat seperti gambar ilustrasi generik atau *dashboard* mainan, seluruh gambar sistem yang di-*generate* wajib mengikuti formula berikut:

### A. Lokasi 3 File Gambar Kompleks di Proyek Ini
1. **ERP Manufaktur, Multi-Gudang & Distribusi:** `assets/ref-erp-dashboard.jpg`
2. **POS & Backoffice Jaringan Retail/F&B Multi-Cabang:** `assets/ref-pos-tablet.jpg`
3. **Sistem Informasi Manajemen Keuangan, AR/AP Aging & HRIS Payroll:** `assets/ref-sim-enterprise.jpg`

### B. 5 Aturan Anatomi Gambar Sistem (Wajib Ada di Setiap Prompt Gambar)
1. **Setting & Pencahayaan Studio:** Perangkat keras nyata (Monitor Pro Lebar / Laptop Pro / Terminal Touchscreen POS) di atas meja arsitektural gelap (`Deep Espresso #1A1208`) dengan pencahayaan studio hangat agar menyatu dengan latar Hero website.
2. **Warna Antarmuka di Dalam Layar:**
   * *Workspace Utama:* Terang, tajam, dan bersih (`Warm Alabaster #FAF7F2` & kartu putih `#FFFFFF`) agar data kompleks mudah dibaca.
   * *Sidebar Navigasi:* Gelap tegas (`Deep Espresso #1A1208`) dengan indikator menu aktif `Golden Amber #F7B05F`.
   * *Warna Grafik & Status Data:* Kombinasi `Golden Amber #F7B05F` dan `Soga Brown #775229`.
3. **Kepadatan Data (*Enterprise Complexity*):** Dilarang membuat layar yang hanya berisi 3 kotak besar kosong. Layar wajib memuat minimal **4 modul fungsional nyata** sesuai sektor bisnisnya:
   * Baris metrik KPI dengan grafik mikro (*sparklines*) & persentase pertumbuhan.
   * Grafik analitik multi-seri (misal: *Supply Chain & COGS/HPP Chart*, *Cashflow Waterfall*, atau *Hourly Branch Heatmap*).
   * Matriks visual / indikator status operasional (misal: *Warehouse Rack Utilization Grid A1–D4*, *Departmental Budget Gauges*, atau *SKU Modifier Grid*).
   * Tabel data operasional padat dengan status pil (*Batch Tracking*, *Purchase Order Approval*, *AR Invoice Aging Schedule*, atau *Shift Cash Reconciliation*).
4. **Komposisi Perangkat (*Device Framing*):**
   * Gunakan **Monitor Lebar + Laptop** untuk sistem *backoffice* korporat (ERP / Keuangan / HRIS).
   * Gunakan **Dual-Device (Monitor Backoffice di belakang + Tablet Touchscreen di depan)** untuk sistem operasional lapangan yang terhubung ke kantor pusat (POS / Klinik / Perhotelan / Logistik).
5. **Ketajaman UI (*Crisp Screen Clarity*):** Seluruh elemen tabel, grafik, dan struktur panel di dalam layar harus terlihat tajam seperti tangkapan layar aplikasi nyata (*custom-engineered Odoo Enterprise / SAP Fiori / NetSuite level*), bukan lukisan abstrak.

### C. Template Master Prompt untuk Generate Gambar Sektor Bisnis Baru
Salin dan sesuaikan bagian `[NAMA SEKTOR & MODUL SPESIFIK]` pada prompt berikut saat men-generate gambar untuk proyek website baru:

```text
High-resolution studio product photography of a sleek wide pro desktop monitor and laptop resting on a dark espresso architectural desk (#1A1208) with warm ambient studio lighting. The screen displays a highly detailed, complex, realistic Enterprise Web Application for [NAMA SEKTOR BISNIS, misal: Logistics & Fleet Management / Hospital SIMRS / Construction ERP].
Inside the screen interface:
- Theme & Palette: Crisp light workspace (#FAF7F2 and #FFFFFF cards), deep espresso left navigation sidebar (#1A1208) with an active Golden Amber (#F7B05F) highlight, and chart/status accents in Golden Amber (#F7B05F) and Soga Wood Brown (#775229).
- Complex Functional Modules (not a simple toy dashboard):
  1. Top filter & branch/unit selector bar with 4 detailed KPI cards featuring mini sparklines.
  2. A multi-series analytics chart showing [METRIK UTAMA SEKTOR, misal: Real-Time Fleet Utilization & Fuel Cost / Inpatient Bed Occupancy & Revenue].
  3. A visual operational matrix or gauge panel showing [MATRIKS OPERASIONAL, misal: Live Warehouse Rack Grid / Project Milestone & Budget Gauges].
  4. A structured enterprise data table at the bottom with status pills tracking [DATA TRANSAKSI, misal: Purchase Orders & Batch Production / AR Invoice Aging & Payroll Verification].
Photorealistic hardware, ultra-crisp UI screen clarity, high-end enterprise software engineering showcase, 16:9 aspect ratio.
```

---

## 7. Master Prompt Siap Pakai (Copy-Paste untuk Proyek Website Baru)

```text
Buatkan website multi-halaman (index.html, projects.html, about.html, contact.html) dengan karakteristik desain "Warm Javanese Modern Studio (Anti-AI Slop)" dengan spesifikasi wajib berikut:

1. PALET WARNA:
- Latar Gelap (Hero Full-Screen 100vh, Navbar, Inner Header, Closing Section, Footer): Deep Espresso (#1A1208) dan permukaan (#23190D).
- Latar Terang (Isi Utama): Warm Alabaster (#FAF7F2) dan Warm Sand (#F3EDE4) secara bergantian.
- Aksen Utama: Golden Amber (#F7B05F) untuk CTA di latar gelap & indikator aktif; Soga Wood Brown (#775229) untuk indeks, tombol, dan garis aksen di latar terang; Soga Tint (#F2EBE1) untuk badge solusi.
- Garis Pembatas: 1px solid rgba(119, 82, 41, 0.18).

2. TIPOGRAFI & PORSI TEKS:
- Gunakan font 'Plus Jakarta Sans' (400, 500, 600, 700) untuk seluruh halaman.
- Gaya bahasa: Natural, profesional, lugas, dan to-the-point.
- Batasi lebar teks penjelasan poin maksimal 540px–560px dan cukup 1 kalimat padat per poin masalah.

3. TATA LETAK (WIDE & ASYMMETRIC):
- Gunakan container lebar: width: 92%; max-width: 1540px; margin: 0 auto.
- Halaman utama terdiri dari 5 bagian penuh (min-height: 88vh–100vh) yang fokus pada masalah klien (pindahkan cerita/sejarah perusahaan khusus ke halaman About).
- Bagian Masalah menggunakan Layout Split Asimetris (0.72fr : 1.08fr): kolom kiri sticky (max-width: 440px), kolom kanan berupa daftar baris horizontal dengan garis pembatas 1px (max-width: 720px).
- Bagian Karya menggunakan baris showcase lebar bergantian (kiri-kanan lalu kanan-kiri) dengan gambar aplikasi/sistem yang detail, kompleks, dan spesifik sesuai sektor industri.
- Bagian Cara Kerja menggunakan split asimetris dengan daftar langkah bergaris vertikal kiri (border-left: 2px solid #775229).

4. ATURAN ANTI-AI SLOP (WAJIB DITAATI):
- JANGAN gunakan badge kapsul kecil dengan titik menyala di atas judul; gunakan teks indeks polos (contoh: "01 / Masalah di Lapangan").
- JANGAN gunakan pola "3 kartu kotak kembar" berulang-ulang.
- JANGAN miringkan gambar 3D dan JANGAN tempelkan floating badges di atas gambar.
- JANGAN beri garis bawah warna-warni atau huruf miring di setiap ujung judul.
```

