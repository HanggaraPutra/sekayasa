/**
 * SEKA YASA — Scroll Animations, Parallax & Executive WhatsApp Assessment Script
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
  initDiagnosisWidget();
});

/* ==========================================================================
   SHARED SINGLE-SOURCE LAYOUT (NAVBAR & FOOTER IDENTICAL ACROSS ALL PAGES)
   ========================================================================== */
function initSharedLayout() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const currentPage = path === "" ? "index.html" : path.toLowerCase();

  const navItems = [
    { href: "index.html", label: "Beranda" },
    { href: "projects.html", label: "Karya &amp; Sistem" },
    { href: "about.html", label: "Tentang Kami" },
    { href: "contact.html", label: "Konsultasi" }
  ];

  // 1. Render Unified Slim Centered Oval Navbar + Scroll Progress Bar
  const navMount = document.getElementById("seka-navbar");
  if (navMount) {
    const linksHtml = navItems
      .map((item) => {
        const isActive = currentPage === item.href ? ' class="active"' : "";
        return `<a href="${item.href}"${isActive}>${item.label}</a>`;
      })
      .join("");

    navMount.outerHTML = `
      <div class="scroll-progress-bar" id="scroll-progress"></div>
      <header class="site-nav">
        <div class="container nav-inner">
          <a href="index.html" class="nav-brand" aria-label="Seka Yasa Beranda">
            <img src="assets/logo-mark.svg" alt="Seka Yasa" class="nav-logo-mark" />
            <img src="assets/logo-text.svg" alt="SEKA YASA" class="nav-logo-text" />
          </a>
          <nav class="nav-links" aria-label="Menu Utama">
            ${linksHtml}
          </nav>
          <a href="contact.html" class="btn btn-amber btn-sm">Hubungi Kami</a>
        </div>
      </header>
    `;
  }

  // 2. Render Unified Footer
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
                Seka Yasa — Software house, pengembangan aplikasi web, dan konsultan sistem informasi perusahaan di Surabaya.
              </p>
            </div>
            <div class="footer-col">
              <h4>Halaman</h4>
              <ul>
                <li><a href="index.html">Beranda</a></li>
                <li><a href="projects.html">Karya &amp; Sistem</a></li>
                <li><a href="about.html">Tentang Kami</a></li>
                <li><a href="contact.html">Konsultasi &amp; Kontak</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Layanan</h4>
              <ul>
                <li><a href="projects.html#pos">Sistem Kasir (POS)</a></li>
                <li><a href="projects.html#erp">Inventori &amp; Produksi (ERP)</a></li>
                <li><a href="projects.html#sim">Manajemen Internal</a></li>
                <li><a href="contact.html">Pengembangan Aplikasi Web</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2026 Seka Yasa — Surabaya, Jawa Timur.</span>
            <span>Tata • Titi • Tentrem</span>
          </div>
        </div>
      </footer>
    `;
  }

  // 3. Inject Matching Blueprint Grid & Kawung Layers on Inner Page Headers
  const innerHeader = document.querySelector(".inner-header");
  if (innerHeader && !innerHeader.querySelector(".hero-blueprint-grid")) {
    const bgFragment = document.createRange().createContextualFragment(`
      <div class="hero-blueprint-grid" aria-hidden="true"></div>
      <div class="hero-kawung-layer" aria-hidden="true"></div>
    `);
    innerHeader.prepend(bgFragment);
  }
}

/* ==========================================================================
   0. OPENING INTRO / SPLASH CURTAIN (SEKA YASA LOGO REVEAL)
   ========================================================================== */
function initOpeningIntro() {
  const intro = document.getElementById("seka-intro");
  const skipBtn = document.getElementById("intro-skip");

  if (!intro) {
    document.body.classList.remove("intro-active");
    return;
  }

  // If already shown in this browsing session, remove intro immediately without replaying
  if (sessionStorage.getItem("seka_intro_seen") === "1") {
    intro.classList.add("is-done");
    document.body.classList.remove("intro-active");
    return;
  }

  // Mark as seen so returning to Beranda (index.html) won't replay the splash screen
  sessionStorage.setItem("seka_intro_seen", "1");

  // 1. Choreograph all 25 amber & 25 dark Gunungan pieces bottom-to-top & center-outward
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

    // Sort bottom-to-top (higher cy first), then center-to-outward
    measured.sort((a, b) => {
      const rowDiff = Math.round((b.cy - a.cy) / 18);
      if (rowDiff !== 0) return rowDiff;
      return Math.abs(a.cx - 101) - Math.abs(b.cx - 101);
    });

    measured.forEach((item, idx) => {
      const dx = item.cx < 96 ? -14 : item.cx > 106 ? 14 : 0;
      const dy = item.cy > 165 ? 14 : -12;
      const delay = (baseDelay + idx * stepMs).toFixed(3);

      // Wrap elements that have an SVG transform="matrix(...)" so CSS transform never overrides their matrix
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

  choreographPieces(".svg-amber-aksara path, .svg-amber-aksara rect", "svg-piece-amber", 0.30, 0.026);
  choreographPieces(".svg-dark-foreground path, .svg-dark-foreground rect", "svg-piece-dark", 1.12, 0.018);

  // 2. Split SEKA YASA wordmark into individual calligraphic letter strokes sorted left-to-right
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

      // Remove original merged path
      masterWordmark.remove();

      // Sort strictly left-to-right so S -> E -> K -> A   Y -> A -> S -> A traces cleanly
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

  // Auto-open curtain cleanly after intricate Gunungan construction + per-letter wordmark settle (~3.25s)
  const autoTimer = setTimeout(dismissIntro, 3250);

  skipBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    clearTimeout(autoTimer);
    dismissIntro();
  });

  // Also allow clicking anywhere on splash to skip immediately
  intro.addEventListener("click", () => {
    clearTimeout(autoTimer);
    dismissIntro();
  });
}

/* ==========================================================================
   1B. HERO INTERACTIVE WARM SPOTLIGHT FOLLOWING CURSOR
   ========================================================================== */
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
   1. SMOOTH SCROLL REVEAL (INTERSECTION OBSERVER)
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
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   2. NAVBAR SCROLL STATE, TOP PROGRESS BAR & SUBTLE HERO PARALLAX
   ========================================================================== */
function initNavbarAndProgress() {
  const nav = document.querySelector(".site-nav");
  const progressBar = document.getElementById("scroll-progress");
  const heroWatermark = document.querySelector(".hero-gunungan-bg");

  function onScroll() {
    const scrollY = window.scrollY;

    if (nav) {
      nav.classList.toggle("nav-scrolled", scrollY > 40);
    }

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

/* ==========================================================================
   3. 3-CLICK WHATSAPP ASSESSMENT WIDGET (ON CONTACT PAGE)
   ========================================================================== */
function initDiagnosisWidget() {
  const industryGroup = document.getElementById("diag-industry");
  const needsGroup = document.getElementById("diag-needs");
  const scaleGroup = document.getElementById("diag-scale");
  const nameInput = document.getElementById("diag-name");
  const previewEl = document.getElementById("wa-preview-text");
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
