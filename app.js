/**
 * SEKA YASA — Scroll Animations, Parallax & Executive WhatsApp Assessment Script
 */

const SEKA_CONFIG = {
  // Ganti nomor WhatsApp resmi Seka Yasa Surabaya di sini (format 628...)
  whatsappNumber: "6281234567890"
};

document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal();
  initNavbarAndProgress();
  initHeroInteractiveBg();
  initDiagnosisWidget();
});

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
