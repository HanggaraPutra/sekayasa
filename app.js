/**
 * SEKA YASA — Unified Software House Architecture & Interactive Engine
 * Handles:
 * 1. Single-source 5-Menu Oval Navbar + Interactive Mega-Menu + 4-Col Sitemap Footer
 * 2. Session-once Intricate SVG Gunungan & Per-Letter SEKA YASA Intro Animation
 * 3. Hero Interactive System Switcher & Drafting-Lamp Cursor Spotlight
 * 4. Interactive Problem -> Solution Architecture Explorer
 * 5. Services Page Interactive Industry Switcher
 * 6. Case Studies Category Filter & Process Page FAQ Accordion
 * 7. Contact Page 3-Click Configurator + Architecture Recommendation + WhatsApp Generator
 */

const SEKA_CONFIG = {
  // Ganti nomor WhatsApp resmi Seka Yasa Surabaya di sini (format 628...)
  whatsappNumber: "6281234567890"
};

document.addEventListener("DOMContentLoaded", () => {
  initSharedLayout();
  initOpeningIntro();
  initScrollReveal();
  initNavbarAndProgress();
  initHeroInteractiveBg();
  initHeroPreviewSwitcher();
  initProblemArchitectureExplorer();
  initIndustrySwitcher();
  initCaseStudyFilter();
  initFaqAccordion();
  initDiagnosisWidget();
});

/* ==========================================================================
   1. SHARED SINGLE-SOURCE LAYOUT (5-MENU OVAL NAVBAR + MEGA-MENU + FOOTER)
   ========================================================================== */
function initSharedLayout() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const currentPage = path === "" ? "index.html" : path.toLowerCase();

  const navMount = document.getElementById("seka-navbar");
  if (navMount) {
    const isHome = currentPage === "index.html" ? ' class="active"' : "";
    const isServices = currentPage === "services.html" ? " active" : "";
    const isProjects = currentPage === "projects.html" ? ' class="active"' : "";
    const isProcess = currentPage === "process.html" ? ' class="active"' : "";
    const isAbout = currentPage === "about.html" ? ' class="active"' : "";
    const isContact = currentPage === "contact.html" ? " active-cta" : "";

    navMount.outerHTML = `
      <div class="scroll-progress-bar" id="scroll-progress"></div>
      <header class="site-nav">
        <div class="container nav-inner">
          <a href="index.html" class="nav-brand" aria-label="Seka Yasa Beranda">
            <img src="assets/logo-mark.svg" alt="Seka Yasa" class="nav-logo-mark" />
            <img src="assets/logo-text.svg" alt="SEKA YASA" class="nav-logo-text" />
          </a>

          <nav class="nav-links" aria-label="Menu Utama">
            <a href="index.html"${isHome}>Beranda</a>

            <div class="nav-item-wrap" id="nav-mega-wrap">
              <a href="services.html" class="nav-dropdown-trigger${isServices}" aria-expanded="false">
                <span>Layanan &amp; Solusi</span>
                <span class="nav-caret">▾</span>
              </a>

              <!-- Interactive Software House Mega-Menu -->
              <div class="mega-menu-panel" role="region" aria-label="Menu Layanan dan Solusi">
                <div>
                  <span class="mega-col-title">Sistem Inti yang Kami Bangun</span>
                  <div class="mega-list">
                    <a href="services.html#pos" class="mega-link">
                      <strong>Sistem Kasir &amp; Multi-Outlet (POS)</strong>
                      <span>Kasir tablet/desktop, harga grosir/retail &amp; konsolidasi cabang</span>
                    </a>
                    <a href="services.html#erp" class="mega-link">
                      <strong>Sistem ERP Gudang &amp; Produksi</strong>
                      <span>Multi-gudang, Purchasing (PO), resep/BOM &amp; HPP otomatis</span>
                    </a>
                    <a href="services.html#sim" class="mega-link">
                      <strong>Manajemen Internal &amp; HRIS</strong>
                      <span>Arus kas, umur piutang (AR/AP), absensi &amp; otomasi payroll</span>
                    </a>
                    <a href="services.html#custom" class="mega-link">
                      <strong>Custom Web App &amp; Integrasi</strong>
                      <span>Digitalisasi SOP khusus perusahaan &amp; integrasi sistem</span>
                    </a>
                  </div>
                </div>

                <div>
                  <span class="mega-col-title">Solusi Sektor Industri</span>
                  <div class="mega-list">
                    <a href="services.html#sektor-industri" data-jump-ind="retail" class="mega-link">
                      <strong>Retail, Grosir &amp; Distribusi</strong>
                      <span>Kontrol ribuan SKU, tier harga &amp; stok lintas cabang</span>
                    </a>
                    <a href="services.html#sektor-industri" data-jump-ind="fnb" class="mega-link">
                      <strong>F&amp;B, Restoran &amp; Jaringan Outlet</strong>
                      <span>Potong stok resep otomatis &amp; tutup shift anti-selisih</span>
                    </a>
                    <a href="services.html#sektor-industri" data-jump-ind="manufaktur" class="mega-link">
                      <strong>Manufaktur &amp; Pergudangan</strong>
                      <span>Pelacakan batch produksi (SPK), PO supplier &amp; HPP</span>
                    </a>
                    <a href="services.html#sektor-industri" data-jump-ind="jasa" class="mega-link">
                      <strong>Perusahaan Jasa &amp; Korporasi</strong>
                      <span>Tagihan proyek, pengingat piutang jatuh tempo &amp; HR</span>
                    </a>
                  </div>
                </div>

                <div class="mega-highlight-box">
                  <div>
                    <span class="mega-col-title" style="border:none; margin-bottom:0.4rem; padding:0;">Pendekatan Modular</span>
                    <h4>Mulai dari modul yang paling mendesak dulu.</h4>
                    <p>Tidak harus membangun sistem raksasa sekaligus. Sistem kami dirancang modular agar siap tumbuh mengikuti skala bisnis Anda.</p>
                  </div>
                  <div class="mega-highlight-links">
                    <a href="services.html#perbandingan" class="mega-cta-inline">
                      <span>SaaS Langganan vs Custom</span>
                      <span>→</span>
                    </a>
                    <a href="contact.html" class="mega-cta-inline">
                      <span>Asesmen Kebutuhan (1 Menit)</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a href="projects.html"${isProjects}>Studi Kasus</a>
            <a href="process.html"${isProcess}>Cara Kerja</a>
            <a href="about.html"${isAbout}>Perusahaan</a>
          </nav>

          <a href="contact.html" class="btn btn-amber btn-sm${isContact}">Konsultasi</a>
        </div>
      </header>
    `;
  }

  // Render Unified 4-Column Software House Footer
  const footerMount = document.getElementById("seka-footer");
  if (footerMount) {
    footerMount.outerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-top">
            <div>
              <a href="index.html" class="nav-brand">
                <img src="assets/logo-mark.svg" alt="Seka Yasa" class="nav-logo-mark" />
                <img src="assets/logo-text.svg" alt="SEKA YASA" class="nav-logo-text" />
              </a>
              <p class="footer-desc">
                Seka Yasa — Software house, pengembangan aplikasi web, dan konsultan sistem informasi perusahaan berbasis di Surabaya.
              </p>
            </div>

            <div class="footer-col">
              <h4>Perusahaan</h4>
              <ul>
                <li><a href="index.html">Beranda</a></li>
                <li><a href="about.html">Profil &amp; Filosofi</a></li>
                <li><a href="process.html">Cara Kerja &amp; SLA</a></li>
                <li><a href="process.html#faq">FAQ Pemilik Bisnis</a></li>
                <li><a href="contact.html">Konsultasi &amp; Lokasi</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Layanan &amp; Sistem</h4>
              <ul>
                <li><a href="services.html#pos">Sistem Kasir &amp; Multi-Outlet (POS)</a></li>
                <li><a href="services.html#erp">Inventori &amp; Produksi (ERP)</a></li>
                <li><a href="services.html#sim">Manajemen Internal &amp; HRIS</a></li>
                <li><a href="services.html#custom">Custom Web App &amp; Integrasi</a></li>
                <li><a href="services.html#perbandingan">SaaS vs Sistem Custom</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Studi Kasus</h4>
              <ul>
                <li><a href="projects.html#erp">ERP Manufaktur &amp; Distribusi</a></li>
                <li><a href="projects.html#pos">POS Retail &amp; F&amp;B Multi-Cabang</a></li>
                <li><a href="projects.html#sim">Portal Keuangan, AR/AP &amp; HRIS</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <span>© 2026 Seka Yasa — Surabaya, Jawa Timur.</span>
            <span>Tata Sistemé • Titi Datané • Tentrem Usahané</span>
          </div>
        </div>
      </footer>
    `;
  }

  // Inject Matching Blueprint Grid & Kawung Layers on Inner Page Headers
  const innerHeader = document.querySelector(".inner-header");
  if (innerHeader && !innerHeader.querySelector(".hero-blueprint-grid")) {
    const bgFragment = document.createRange().createContextualFragment(`
      <div class="hero-blueprint-grid" aria-hidden="true"></div>
      <div class="hero-kawung-layer" aria-hidden="true"></div>
    `);
    innerHeader.prepend(bgFragment);
  }

  // Close mega-menu on Escape key
  const megaWrap = document.getElementById("nav-mega-wrap");
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") megaWrap?.classList.remove("mega-open");
  });
}

/* ==========================================================================
   2. OPENING INTRO / SPLASH CURTAIN (SESSION-ONCE SVG LOGO REVEAL)
   ========================================================================== */
function initOpeningIntro() {
  const intro = document.getElementById("seka-intro");
  const skipBtn = document.getElementById("intro-skip");

  if (!intro) {
    document.body.classList.remove("intro-active");
    return;
  }

  if (sessionStorage.getItem("seka_intro_seen") === "1") {
    intro.classList.add("is-done");
    document.body.classList.remove("intro-active");
    return;
  }

  sessionStorage.setItem("seka_intro_seen", "1");

  function choreographPieces(selector, className, baseDelay, stepMs) {
    const els = Array.from(document.querySelectorAll(selector));
    if (!els.length) return;

    const measured = els.map((el) => {
      let cx = 101;
      let cy = 150;
      try {
        const b = el.getBBox();
        cx = b.x + b.width / 2;
        cy = b.y + b.height / 2;
      } catch (_) {}
      return { el, cx, cy };
    });

    measured.sort((a, b) => {
      const rowDiff = Math.round((b.cy - a.cy) / 18);
      if (rowDiff !== 0) return rowDiff;
      return Math.abs(a.cx - 101) - Math.abs(b.cx - 101);
    });

    measured.forEach((item, idx) => {
      const dx = item.cx < 96 ? -14 : item.cx > 106 ? 14 : 0;
      const dy = item.cy > 165 ? 14 : -12;
      const delay = (baseDelay + idx * stepMs).toFixed(3);

      let targetEl = item.el;
      if (item.el.hasAttribute("transform") && item.el.parentNode) {
        const wrapper = document.createElementNS("http://www.w3.org/2000/svg", "g");
        item.el.parentNode.insertBefore(wrapper, item.el);
        wrapper.appendChild(item.el);
        targetEl = wrapper;
      }

      targetEl.style.setProperty("--tx", `${dx}px`);
      targetEl.style.setProperty("--ty", `${dy}px`);
      targetEl.style.setProperty("--delay", `${delay}s`);
      targetEl.classList.add(className);
    });
  }

  choreographPieces(".svg-amber-aksara path, .svg-amber-aksara rect", "svg-piece-amber", 0.3, 0.026);
  choreographPieces(".svg-dark-foreground path, .svg-dark-foreground rect", "svg-piece-dark", 1.12, 0.018);

  const masterWordmark = document.getElementById("seka-wordmark-path");
  if (masterWordmark && masterWordmark.parentNode) {
    const svgNS = "http://www.w3.org/2000/svg";
    const dAttr = masterWordmark.getAttribute("d") || "";
    const subpaths = dAttr.match(/M[^M]+/g) || [];
    const parentSvg = masterWordmark.parentNode;

    if (subpaths.length > 1) {
      const created = subpaths.map((subD) => {
        const p = document.createElementNS(svgNS, "path");
        p.setAttribute("d", subD.trim());
        parentSvg.appendChild(p);
        let x = 0;
        let len = 800;
        try {
          x = p.getBBox().x;
          len = Math.ceil(p.getTotalLength());
        } catch (_) {}
        return { p, x, len };
      });

      masterWordmark.remove();
      created.sort((a, b) => a.x - b.x);

      created.forEach((item, i) => {
        const traceDelay = (1.18 + i * 0.068).toFixed(3);
        const fillDelay = (1.58 + i * 0.068).toFixed(3);
        item.p.style.setProperty("--len", item.len);
        item.p.style.setProperty("--d-trace", `${traceDelay}s`);
        item.p.style.setProperty("--d-fill", `${fillDelay}s`);
        item.p.classList.add("wordmark-letter-stroke");
      });
    }
  }

  let dismissed = false;
  function dismissIntro() {
    if (dismissed) return;
    dismissed = true;
    intro.classList.add("is-leaving");
    document.body.classList.remove("intro-active");
    setTimeout(() => {
      intro.classList.add("is-done");
    }, 900);
  }

  const autoTimer = setTimeout(dismissIntro, 3250);

  skipBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    clearTimeout(autoTimer);
    dismissIntro();
  });

  intro.addEventListener("click", () => {
    clearTimeout(autoTimer);
    dismissIntro();
  });
}

/* ==========================================================================
   3. SMOOTH SCROLL REVEAL & NAVBAR PROGRESS
   ========================================================================== */
function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal-on-scroll");
  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
  );

  revealEls.forEach((el) => observer.observe(el));
}

function initNavbarAndProgress() {
  const nav = document.querySelector(".site-nav");
  const progressBar = document.getElementById("scroll-progress");
  const heroWatermark = document.querySelector(".hero-gunungan-bg");

  function onScroll() {
    const scrollY = window.scrollY;
    if (nav) nav.classList.toggle("nav-scrolled", scrollY > 40);
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollY / docHeight) * 100) : 0;
      progressBar.style.width = `${pct}%`;
    }
    if (heroWatermark && scrollY < 900) {
      heroWatermark.style.transform = `translateY(calc(-50% + ${scrollY * 0.15}px))`;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initHeroInteractiveBg() {
  const hero = document.getElementById("hero-stage");
  const glow = document.getElementById("hero-cursor-glow");
  if (!hero || !glow) return;

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glow.style.setProperty("--mx", `${x.toFixed(2)}%`);
    glow.style.setProperty("--my", `${y.toFixed(2)}%`);
  });
}

/* ==========================================================================
   4. HERO INTERACTIVE SYSTEM PREVIEW SWITCHER (ON INDEX.HTML)
   ========================================================================== */
function initHeroPreviewSwitcher() {
  const tabs = document.querySelectorAll("[data-hero-sys]");
  const imgEl = document.getElementById("hero-preview-img");
  const titleEl = document.getElementById("hero-frame-title");
  const metaEl = document.getElementById("hero-frame-meta");

  if (!tabs.length || !imgEl) return;

  const sysData = {
    erp: {
      src: "assets/erp-complex-v2.jpg",
      alt: "Tampilan Sistem ERP Gudang, Purchasing (PO) & Produksi Seka Yasa",
      title: "Modul ERP Inventori Multi-Gudang, PO Supplier & Kalkulasi HPP Produksi",
      meta: "Multi-Warehouse · BOM & Batch Tracking"
    },
    pos: {
      src: "assets/pos-complex-v2.jpg",
      alt: "Tampilan Sistem POS Kasir & Backoffice Multi-Cabang Seka Yasa",
      title: "Modul POS Terminal Kasir & Konsolidasi Penjualan Multi-Cabang",
      meta: "Retail & F&B · Tier Harga & Shift Lock"
    },
    sim: {
      src: "assets/sim-complex-v2.jpg",
      alt: "Tampilan Portal Manajemen Keuangan, Piutang (AR/AP) & HRIS Payroll",
      title: "Portal Manajemen Internal: Arus Kas, Umur Piutang (AR) & Otomasi Payroll",
      meta: "Financial Ledger · AR Aging & HRIS"
    }
  };

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-hero-sys");
      const info = sysData[key];
      if (!info) return;

      tabs.forEach((b) => b.classList.toggle("active", b === btn));
      imgEl.src = info.src;
      imgEl.alt = info.alt;
      if (titleEl) titleEl.textContent = info.title;
      if (metaEl) metaEl.textContent = info.meta;
    });
  });
}

/* ==========================================================================
   5. INTERACTIVE PROBLEM -> SOLUTION ARCHITECTURE EXPLORER (OPSI 1 NODE-FLOW SVG)
   ========================================================================== */
function initProblemArchitectureExplorer() {
  const cards = document.querySelectorAll("[data-prob-key]");
  const tagEl = document.getElementById("arch-sol-tag");
  const titleEl = document.getElementById("arch-sol-title");
  const summaryEl = document.getElementById("arch-sol-summary");
  const linkEl = document.getElementById("arch-sol-link");

  const svgInTitle = document.getElementById("svg-in-title");
  const svgInSub = document.getElementById("svg-in-sub");
  const svgInMetric = document.getElementById("svg-in-metric");
  const svgMidTitle = document.getElementById("svg-mid-title");
  const svgMidSub = document.getElementById("svg-mid-sub");
  const svgMidBadge = document.getElementById("svg-mid-badge");
  const svgOut1Title = document.getElementById("svg-out1-title");
  const svgOut1Metric = document.getElementById("svg-out1-metric");
  const svgOut2Title = document.getElementById("svg-out2-title");
  const svgOut2Metric = document.getElementById("svg-out2-metric");

  if (!cards.length || !titleEl) return;

  const solutions = {
    pos: {
      tag: "Arsitektur Solusi 01 · POS Multi-Cabang",
      title: "Menghubungkan setiap struk penjualan cabang langsung ke stok gudang dan kas utama.",
      inTitle: "Terminal Kasir POS",
      inSub: "Cabang A & B · Barcode",
      inMetric: "Harga Retail & Grosir",
      midTitle: "Mesin Auto-Deduct",
      midSub: "Potong SKU & Resep BOM",
      midBadge: "Validasi & Kunci Shift Kasir",
      out1Title: "Kartu Stok Cabang",
      out1Metric: "Terpotong detik itu juga",
      out2Title: "Dashboard Omzet HQ",
      out2Metric: "Margin & kas real-time",
      summary: "Pemilik memantau omzet, margin laba kotor, dan sisa stok seluruh cabang secara real-time tanpa menunggu rekap manual tiap malam.",
      href: "services.html#pos",
      linkText: "Pelajari Modul POS →"
    },
    erp: {
      tag: "Arsitektur Solusi 02 · Inventori & Produksi (ERP)",
      title: "Mengunci akurasi barang dari PO supplier datang, mutasi rak gudang, hingga HPP produksi.",
      inTitle: "PO & Barang Masuk",
      inSub: "Supplier · Goods Receipt",
      inMetric: "Verifikasi Qty & Batch",
      midTitle: "Work Order & BOM",
      midSub: "Alokasi Bahan & Waste",
      midBadge: "Kalkulasi HPP per Batch",
      out1Title: "Posisi Multi-Gudang",
      out1Metric: "Alert stok minimum aktif",
      out2Title: "HPP Aktual / Unit",
      out2Metric: "Tersaji saat WO selesai",
      summary: "Selisih stok fisik hilang, peringatan stok minimum muncul sebelum bahan habis, dan Harga Pokok Produksi (HPP) terhitung otomatis.",
      href: "services.html#erp",
      linkText: "Pelajari Modul ERP →"
    },
    sim: {
      tag: "Arsitektur Solusi 03 · Manajemen Internal & HRIS",
      title: "Menyatukan arus kas, jadwal penagihan piutang jatuh tempo, dan penggajian dalam satu portal.",
      inTitle: "Invoice & Absensi",
      inSub: "Tagihan B2B · Jam Kerja",
      inMetric: "Kas & Lembur Terpusat",
      midTitle: "Mesin AR/AP & Payroll",
      midSub: "Umur Piutang & Komisi",
      midBadge: "Otorisasi Hak Akses (RBAC)",
      out1Title: "AR Aging Schedule",
      out1Metric: "Pengingat jatuh tempo H-3",
      out2Title: "Laba-Rugi & Slip Gaji",
      out2Metric: "Tutup buku dalam menit",
      summary: "Penagihan piutang lebih disiplin, tutup buku bulanan dan penerbitan slip gaji selesai dalam hitungan menit dengan hak akses aman per divisi.",
      href: "services.html#sim",
      linkText: "Pelajari Modul SIM & HRIS →"
    }
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.getAttribute("data-prob-key");
      const sol = solutions[key];
      if (!sol) return;

      cards.forEach((c) => c.classList.toggle("active", c === card));
      if (tagEl) tagEl.textContent = sol.tag;
      if (titleEl) titleEl.textContent = sol.title;
      if (summaryEl) summaryEl.textContent = sol.summary;
      if (svgInTitle) svgInTitle.textContent = sol.inTitle;
      if (svgInSub) svgInSub.textContent = sol.inSub;
      if (svgInMetric) svgInMetric.textContent = sol.inMetric;
      if (svgMidTitle) svgMidTitle.textContent = sol.midTitle;
      if (svgMidSub) svgMidSub.textContent = sol.midSub;
      if (svgMidBadge) svgMidBadge.textContent = sol.midBadge;
      if (svgOut1Title) svgOut1Title.textContent = sol.out1Title;
      if (svgOut1Metric) svgOut1Metric.textContent = sol.out1Metric;
      if (svgOut2Title) svgOut2Title.textContent = sol.out2Title;
      if (svgOut2Metric) svgOut2Metric.textContent = sol.out2Metric;
      if (linkEl) {
        linkEl.setAttribute("href", sol.href);
        linkEl.textContent = sol.linkText;
      }
    });
  });
}

/* ==========================================================================
   6. INTERACTIVE INDUSTRY SOLUTIONS SWITCHER (ON SERVICES.HTML)
   ========================================================================== */
function initIndustrySwitcher() {
  const buttons = document.querySelectorAll("[data-ind-tab]");
  const panels = document.querySelectorAll("[data-ind-panel]");
  if (!buttons.length) return;

  function activateIndustry(key) {
    buttons.forEach((btn) => btn.classList.toggle("active", btn.getAttribute("data-ind-tab") === key));
    panels.forEach((panel) => {
      const isMatch = panel.getAttribute("data-ind-panel") === key;
      panel.classList.toggle("active", isMatch);
      panel.classList.toggle("hidden", !isMatch);
    });
  }

  // Initialize active state on page load
  const initialActive = document.querySelector("[data-ind-tab].active")?.getAttribute("data-ind-tab") || "retail";
  activateIndustry(initialActive);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-ind-tab");
      if (key) activateIndustry(key);
    });
  });

  // Support clicking industry links from the Mega-Menu
  document.querySelectorAll("[data-jump-ind]").forEach((link) => {
    link.addEventListener("click", () => {
      const key = link.getAttribute("data-jump-ind");
      if (key) activateIndustry(key);
    });
  });
}

/* ==========================================================================
   7. CASE STUDY CATEGORY FILTER (ON PROJECTS.HTML) & FAQ ACCORDION (PROCESS.HTML)
   ========================================================================== */
function initCaseStudyFilter() {
  const filterBtns = document.querySelectorAll("[data-case-filter]");
  const items = document.querySelectorAll("[data-case-cat]");
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-case-filter");
      filterBtns.forEach((b) => b.classList.toggle("active", b === btn));
      items.forEach((item) => {
        const match = cat === "all" || item.getAttribute("data-case-cat") === cat;
        item.classList.toggle("hidden", !match);
      });
    });
  });
}

function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    trigger?.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      items.forEach((other) => other.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
}

/* ==========================================================================
   8. 3-CLICK CONFIGURATOR + ARCHITECTURE RECOMMENDATION + WA BUILDER
   ========================================================================== */
function initDiagnosisWidget() {
  const industryGroup = document.getElementById("diag-industry");
  const needsGroup = document.getElementById("diag-needs");
  const scaleGroup = document.getElementById("diag-scale");
  const nameInput = document.getElementById("diag-name");
  const previewEl = document.getElementById("wa-preview-text");
  const archRecEl = document.getElementById("diag-arch-recommendation");
  const btnSendWa = document.getElementById("btn-send-wa");

  if (!industryGroup || !needsGroup) return;

  function setupSingleChoice(container) {
    container?.querySelectorAll(".choice-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        container.querySelectorAll(".choice-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        updateMessage();
      });
    });
  }

  function setupMultiChoice(container) {
    container?.querySelectorAll(".choice-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const activeList = container.querySelectorAll(".choice-chip.active");
        if (chip.classList.contains("active") && activeList.length <= 1) return;
        chip.classList.toggle("active");
        updateMessage();
      });
    });
  }

  setupSingleChoice(industryGroup);
  setupMultiChoice(needsGroup);
  setupSingleChoice(scaleGroup);
  nameInput?.addEventListener("input", updateMessage);

  function updateMessage() {
    const industry =
      industryGroup?.querySelector(".choice-chip.active")?.getAttribute("data-val") || "Perusahaan / UMKM";
    const needs = Array.from(needsGroup?.querySelectorAll(".choice-chip.active") || []).map((c) =>
      c.getAttribute("data-val")
    );
    const scale =
      scaleGroup?.querySelector(".choice-chip.active")?.getAttribute("data-val") || "Sedang berkembang";
    const userName = nameInput?.value.trim();

    if (archRecEl) {
      archRecEl.textContent = `Untuk sektor ${industry} (${scale}), kami menyarankan implementasi bertahap dimulai dari modul ${needs[0]} sebagai fondasi data utama${
        needs.length > 1 ? `, lalu diintegrasikan langsung dengan ${needs.slice(1).join(" & ")}` : ""
      }.`;
    }

    const greeting = userName
      ? `Halo Tim Konsultan Seka Yasa Surabaya, saya ${userName}.`
      : `Halo Tim Konsultan Seka Yasa Surabaya, saya ingin menjadwalkan sesi konsultasi sistem informasi.`;

    const msg = `${greeting} Perusahaan/usaha kami bergerak di sektor *${industry}* (skala operasional: *${scale}*). Saat ini kami membutuhkan solusi untuk: *${needs.join(", ")}*. Mohon informasi jadwal diskusi lebih lanjut. Terima kasih.`;

    if (previewEl) {
      previewEl.textContent = `"${msg}"`;
    }

    if (btnSendWa) {
      btnSendWa.setAttribute(
        "href",
        `https://wa.me/${SEKA_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`
      );
    }
  }

  updateMessage();
}
