/**
 * TYLER EXPRESS AUTO CARE — 8-PAGE MULTI-PAGE APPLICATION & PHOTOREALISTIC ENGINE
 * Persists Trilingual State (EN / ES / VI) via localStorage across all 8 pages,
 * renders shared global navigation/footer, and powers all interactive tools.
 */

(function () {
  "use strict";

  const DATA = window.TYLER_DATA;

  // Persistent Global State
  const state = {
    lang: localStorage.getItem("tyler_lang") || "en",
    activeCaseIndex: 0,
    activeHotspotIndex: 0,
    sliderPct: 50,
    catalogCategory: "all",
    catalogSearch: "",
    reviewFilter: "all",
    diag: {
      year: "2019",
      make: "Toyota",
      model: "Camry",
      mileage: "60,000 – 95,000 mi",
      symptomId: "brakes",
      obdCodeObj: null
    },
    photoEst: {
      carrier: "State Farm",
      deductible: 500,
      tier: "moderate",
      photosLoaded: [false, false, false, false]
    },
    booking: {
      step: 1,
      facility: "mechanical",
      serviceId: "svc-oil-express",
      timeSlot: "Morning Drop-Off (8:00 AM – 11:00 AM)"
    }
  };

  function t(path) {
    const parts = path.split(".");
    let cur = DATA.i18n[state.lang];
    for (const p of parts) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
        cur = cur[p];
      } else {
        return path;
      }
    }
    return cur;
  }

  /* ==========================================================================
     GLOBAL SHELL: TOP UTILITY BAR, 8-PAGE NAVBAR, FOOTER & STICKY MOBILE BAR
     ========================================================================== */
  function renderGlobalShell() {
    const currentPage = document.body.getAttribute("data-page") || "home";
    const shellHeader = document.getElementById("globalHeaderMount");
    const shellFooter = document.getElementById("globalFooterMount");

    if (shellHeader) {
      shellHeader.innerHTML = `
        <div class="utility-bar">
          <div class="container utility-bar-inner">
            <div class="shop-status-cluster">
              <div id="liveShopStatusPill" class="status-pill is-open">
                <span class="pulse-dot"></span>
                <span id="liveShopStatusText">BAYS OPEN NOW — Walk-Ins Welcome</span>
              </div>
              <span id="vegasClockBadge" class="vegas-clock-badge">LV TIME: --:-- PT</span>
              <a href="book.html#night-drop-guide" class="night-drop-inline-link" data-i18n="status.nightDropLink">
                24/7 Night Drop Guide →
              </a>
            </div>

            <div class="utility-right-cluster">
              <div class="utility-phones">
                <a href="tel:+17029694596" class="utility-phone-link">
                  <span>🔧 Mechanical (Kenny):</span>
                  <strong>(702) 969-4596</strong>
                </a>
                <a href="tel:+17253663245" class="utility-phone-link collision-phone">
                  <span>💥 Collision (Hector):</span>
                  <strong>(725) 366-3245</strong>
                </a>
              </div>

              <div class="lang-switcher" role="group" aria-label="Language Switcher">
                <button type="button" class="lang-btn ${state.lang === "en" ? "active" : ""}" data-lang="en">🇺🇸 EN</button>
                <button type="button" class="lang-btn ${state.lang === "es" ? "active" : ""}" data-lang="es">🇲🇽 ES</button>
                <button type="button" class="lang-btn ${state.lang === "vi" ? "active" : ""}" data-lang="vi">🇻🇳 VI</button>
              </div>
            </div>
          </div>
        </div>

        <div id="langRoutingBanner" class="lang-routing-banner">
          <div class="container lang-routing-inner">
            <span id="langRoutingText"></span>
            <a id="langRoutingCta" href="tel:+17253663245" class="lang-routing-cta"></a>
          </div>
        </div>

        <header class="site-header">
          <div class="container header-inner">
            <a href="index.html" class="brand-logo">
              <div class="brand-emblem">TE</div>
              <div>
                <span class="brand-title">TYLER EXPRESS AUTO CARE</span>
                <span class="brand-sub">TWAIN AVE (MECH) • SIRIUS AVE (COLLISION)</span>
              </div>
            </a>

            <nav class="main-nav" aria-label="8-Page Primary Navigation">
              <a href="index.html" class="nav-link ${currentPage === "home" ? "active" : ""}" data-i18n="nav.home">Home</a>
              <a href="mechanical.html" class="nav-link ${currentPage === "mechanical" ? "active" : ""}" data-i18n="nav.mechanical">Mechanical Hub</a>
              <a href="collision.html" class="nav-link ${currentPage === "collision" ? "active-amber" : ""}" data-i18n="nav.collision">Collision &amp; Body</a>
              <a href="services.html" class="nav-link ${currentPage === "services" ? "active" : ""}" data-i18n="nav.services">All 25 Services</a>
              <a href="diagnostic-estimator.html" class="nav-link ${currentPage === "diagnostics" ? "active" : ""}" data-i18n="nav.diagnostics">Symptom Checker</a>
              <a href="photo-estimate.html" class="nav-link ${currentPage === "photo-estimate" ? "active-amber" : ""}" data-i18n="nav.photoEstimate">Photo Estimate</a>
              <a href="reviews.html" class="nav-link ${currentPage === "reviews" ? "active" : ""}" data-i18n="nav.reviews">5.0★ Reviews</a>
            </nav>

            <div>
              <a href="book.html" class="btn btn-primary-blue" style="padding: 0.58rem 1.05rem; font-size: 0.84rem;" data-i18n="nav.book">
                Book Bay
              </a>
            </div>
          </div>
        </header>
      `;
    }

    if (shellFooter) {
      shellFooter.innerHTML = `
        <footer class="site-footer">
          <div class="container">
            <div class="footer-grid">
              <div>
                <div style="display: flex; align-items: center; gap: 0.7rem; margin-bottom: 0.8rem;">
                  <div class="brand-emblem">TE</div>
                  <div>
                    <div style="font-family: var(--font-display); font-weight: 800; color: #FFFFFF; font-size: 1.05rem;">
                      TYLER EXPRESS AUTO CARE
                    </div>
                    <div class="mono" style="font-size: 0.7rem; color: #34D399;">5.0 ★ VERIFIED CARFAX TOP-RATED SHOP</div>
                  </div>
                </div>
                <p style="margin-bottom: 0.75rem; color: #CBD5E1;">
                  "No Shortcuts to Get the Job Done — Upfront Pricing &amp; Live In-Progress Repair Photos Sent Directly to Your Phone."
                </p>
                <div class="mono" style="font-size: 0.72rem; color: #64748B;">
                  Tyler Express Complete Auto Repair LLC &amp; Tyler Express Collision Repair
                </div>
              </div>

              <div>
                <h4 style="font-family: var(--font-display); color: #38BDF8; font-weight: 800; margin-bottom: 0.6rem;">
                  Facility 1 — Mechanical Hub
                </h4>
                <p style="color: #FFFFFF; font-weight: 700;">3915 W Twain Ave, Las Vegas, NV 89103</p>
                <p>Operations Lead: Trung "Kenny" Chau</p>
                <p>Phone: <a href="tel:+17029694596" style="color: #FFFFFF; font-weight: 700;">(702) 969-4596</a></p>
                <p>Email: kenny@tylerexpressauto.com</p>
                <p>Alt: Tylerexpress888@gmail.com</p>
              </div>

              <div>
                <h4 style="font-family: var(--font-display); color: #FBBF24; font-weight: 800; margin-bottom: 0.6rem;">
                  Facility 2 — Collision &amp; Body Center
                </h4>
                <p style="color: #FFFFFF; font-weight: 700;">3070 W Sirius Ave Unit 108, Las Vegas, NV 89102</p>
                <p>Operations Lead: Hector Montes</p>
                <p>Phone: <a href="tel:+17253663245" style="color: #FFFFFF; font-weight: 700;">(725) 366-3245</a></p>
                <p>Email: hector@tylerexpressauto.com</p>
                <p>Alt: Tylerexpresscollision@gmail.com</p>
              </div>

              <div>
                <h4 style="font-family: var(--font-display); color: #FFFFFF; font-weight: 800; margin-bottom: 0.6rem;">
                  8-Page Site Directory
                </h4>
                <ul class="footer-links">
                  <li><a href="index.html">1. Home &amp; Dual-Shop Portal</a></li>
                  <li><a href="mechanical.html">2. Mechanical Hub (Twain Ave)</a></li>
                  <li><a href="collision.html">3. Collision Studio (Sirius Ave)</a></li>
                  <li><a href="services.html">4. All 25 Services &amp; Desert A/C</a></li>
                  <li><a href="diagnostic-estimator.html">5. Virtual Diagnostic Terminal</a></li>
                  <li><a href="photo-estimate.html">6. 60-Sec Photo &amp; Deductible Calc</a></li>
                  <li><a href="reviews.html">7. Verified 5.0★ CARFAX Reviews</a></li>
                  <li><a href="book.html">8. Book Bay &amp; 24/7 Night Drop</a></li>
                </ul>
              </div>
            </div>

            <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.35rem; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem; font-size: 0.79rem;">
              <span>© 2026 Tyler Express Auto Care. All Rights Reserved.</span>
              <span>Mon–Fri: 8:00 AM – 6:00 PM • Sat: 8:00 AM – 2:00 PM • Sun: Closed (24/7 Emergency Tow-In &amp; Night Drop Active)</span>
            </div>
          </div>
        </footer>

        <div class="sticky-mobile-bar" role="navigation" aria-label="Mobile Quick Actions">
          <a href="tel:+17029694596" class="mobile-thumb-btn mech">
            <span>📞 (702) 969-4596</span>
            <span data-i18n="stickyMobile.callMech">Call Kenny (Mech)</span>
          </a>
          <a href="tel:+17253663245" class="mobile-thumb-btn col">
            <span>📞 (725) 366-3245</span>
            <span data-i18n="stickyMobile.callCol">Call Hector (Body)</span>
          </a>
          <a href="book.html" class="mobile-thumb-btn book">
            <span>📅 60-Sec</span>
            <span data-i18n="stickyMobile.bookEst">Book / Photo Quote</span>
          </a>
        </div>
      `;
    }

    // Bind language switcher clicks
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });
  }

  function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem("tyler_lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = t(el.getAttribute("data-i18n"));
      if (typeof val === "string" && val !== el.getAttribute("data-i18n")) {
        el.textContent = val;
      }
    });

    // Cultural Routing Banner
    const banner = document.getElementById("langRoutingBanner");
    const bannerText = document.getElementById("langRoutingText");
    const bannerCta = document.getElementById("langRoutingCta");
    const lb = DATA.i18n[lang]?.langBanner;

    if (banner && lb) {
      if (lb.active) {
        banner.classList.add("visible");
        bannerText.textContent = lb.text;
        bannerCta.textContent = lb.cta;
        bannerCta.setAttribute("href", lang === "es" ? "tel:+17253663245" : "tel:+17029694596");
      } else {
        banner.classList.remove("visible");
      }
    }

    updateLiveShopStatus();
    if (document.getElementById("baStudioMount")) renderBeforeAfterStudio();
    if (document.getElementById("servicesCatalogGrid")) {
      renderServiceCategoryTabs();
      renderServicesCatalog();
    }
    if (document.getElementById("symptomCardsGrid")) {
      renderSymptomCards();
      renderDiagnosticOutput();
    }
    if (document.getElementById("weeklyHoursList")) {
      renderWeeklyHours();
    }
  }

  /* ==========================================================================
     LIVE LAS VEGAS SHOP STATUS (America/Los_Angeles)
     ========================================================================== */
  function getLasVegasTimeParts() {
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      weekday: "short",
      hour: "numeric",
      minute: "2-digit",
      hour12: false
    }).formatToParts(now);

    const map = {};
    parts.forEach((p) => { map[p.type] = p.value; });
    const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    const dayIndex = dayMap[map.weekday] ?? now.getDay();
    const hour = parseInt(map.hour || "12", 10);
    const minute = parseInt(map.minute || "0", 10);
    const displayClock = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      weekday: "short",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).format(now);

    return { dayIndex, hour, minute, displayClock };
  }

  function updateLiveShopStatus() {
    const { dayIndex, hour, minute, displayClock } = getLasVegasTimeParts();
    const dec = hour + minute / 60;
    let isOpen = false;
    if (dayIndex >= 1 && dayIndex <= 5) isOpen = dec >= 8 && dec < 18;
    else if (dayIndex === 6) isOpen = dec >= 8 && dec < 14;

    const pill = document.getElementById("liveShopStatusPill");
    const text = document.getElementById("liveShopStatusText");
    const clock = document.getElementById("vegasClockBadge");

    if (clock) clock.textContent = `LV TIME: ${displayClock} PT`;
    if (pill && text) {
      pill.classList.toggle("is-open", isOpen);
      pill.classList.toggle("is-closed", !isOpen);
      text.textContent = isOpen ? t("status.openNow") : t("status.afterHours");
    }
  }

  /* ==========================================================================
     PHOTOREALISTIC BEFORE & AFTER SLIDER ENGINE + INTERACTIVE HOTSPOT PINS
     ========================================================================== */
  function initBeforeAfterStudio() {
    const mount = document.getElementById("baStudioMount");
    if (!mount) return;
    renderBeforeAfterStudio();
  }

  function renderBeforeAfterStudio() {
    const mount = document.getElementById("baStudioMount");
    if (!mount) return;

    const cs = DATA.caseStudies[state.activeCaseIndex] || DATA.caseStudies[0];
    const activeHotspot = cs.hotspots[state.activeHotspotIndex] || cs.hotspots[0];

    mount.innerHTML = `
      <div class="ba-studio-wrapper">
        <div class="case-study-tabs">
          ${DATA.caseStudies
            .map(
              (item, idx) => `
              <button type="button" class="case-tab-btn ${idx === state.activeCaseIndex ? "active" : ""}" data-case-idx="${idx}">
                ${item.title[state.lang]}
              </button>
            `
            )
            .join("")}
        </div>

        <div class="ba-studio-grid">
          <div>
            <div id="baViewport" class="ba-viewport" tabindex="0" aria-label="Photorealistic Before and After Collision Comparison Slider">
              <!-- AFTER LAYER (Full Pristine Photo) -->
              <div class="ba-photo-layer ba-layer-after">
                <img src="${cs.afterImg}" alt="After Repair — ${cs.title.en}" />
              </div>

              <!-- BEFORE LAYER (Clipped Damaged Photo — 100% Reference-Locked) -->
              <div id="baLayerBefore" class="ba-photo-layer ba-layer-before" style="clip-path: inset(0 ${100 - state.sliderPct}% 0 0);">
                <img src="${cs.beforeImg}" alt="Before Repair — ${cs.title.en}" />
              </div>

              <span class="ba-corner-label ba-label-before">${t("slider.beforeBadge")}</span>
              <span class="ba-corner-label ba-label-after">${t("slider.afterBadge")}</span>

              <!-- Brushed Metal Divider Handle -->
              <div id="baHandle" class="ba-handle" style="left: ${state.sliderPct}%;">
                <div class="ba-handle-knob">↔</div>
              </div>

              <!-- Pulsing Numbered Damage Hotspot Pins (1-4) -->
              <div class="ba-hotspots-layer">
                ${cs.hotspots
                  .map(
                    (pin, pIdx) => `
                    <button
                      type="button"
                      class="hotspot-pin ${pIdx === state.activeHotspotIndex ? "active" : ""}"
                      style="left: ${pin.x}%; top: ${pin.y}%;"
                      data-pin-idx="${pIdx}"
                      title="${pin.title}"
                    >
                      ${pin.id}
                    </button>
                  `
                  )
                  .join("")}
              </div>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.85rem; flex-wrap: wrap; gap: 1rem;">
              <span class="mono" style="font-size: 0.76rem; color: #94A3B8;">
                ← Drag Metal Divider or Use Left/Right Arrow Keys (0%–100%) →
              </span>
              <div style="display: flex; align-items: center; gap: 0.65rem;">
                <span class="mono" style="font-size: 0.74rem; color: #FBBF24;">BEFORE</span>
                <input type="range" id="baRangeSlider" min="2" max="98" value="${state.sliderPct}" style="width: 190px; accent-color: #F59E0B; cursor: pointer;" />
                <span class="mono" style="font-size: 0.74rem; color: #34D399;">AFTER</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Repair Telemetry HUD -->
          <div class="ba-hud-panel">
            <div>
              <div class="mono" style="font-size: 0.72rem; color: #38BDF8; font-weight: 800; margin-bottom: 0.25rem;">
                SIRIUS AVE TELEMETRY HUD • ${cs.facility}
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.45rem;">
                ${cs.title[state.lang]}
              </h3>
              <p style="font-size: 0.84rem; color: #CBD5E1; margin-bottom: 0.75rem;">
                ${cs.summary[state.lang]}
              </p>

              <div class="mono" style="font-size: 0.72rem; color: #FBBF24;">
                ${t("slider.hotspotPrompt")}
              </div>

              <div class="hud-hotspot-card" id="hudActivePinCard">
                <div style="font-family: var(--font-display); font-weight: 800; font-size: 0.92rem; color: #FFFFFF; margin-bottom: 0.25rem;">
                  🎯 ${activeHotspot.title}
                </div>
                <p style="font-size: 0.82rem; color: #E2E8F0; margin-bottom: 0.4rem;">
                  ${activeHotspot.spec}
                </p>
                <div class="mono" style="font-size: 0.74rem; color: #34D399; font-weight: 800;">
                  ✓ ${activeHotspot.metric}
                </div>
              </div>

              <div class="ba-metrics-strip">
                ${cs.metrics
                  .map(
                    (m) => `
                    <div class="ba-metric-card">
                      <div class="ba-metric-val">${m.value}</div>
                      <div class="ba-metric-lbl">${m.label}</div>
                    </div>
                  `
                  )
                  .join("")}
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin-top: 1rem;">
              <a href="photo-estimate.html" class="btn btn-collision-amber" style="font-size: 0.8rem; padding: 0.65rem;">
                📸 60-Sec Photo Quote
              </a>
              <a href="book.html?facility=collision&service=svc-collision-recon" class="btn btn-outline-dark" style="font-size: 0.8rem; padding: 0.65rem;">
                📅 Book Collision Bay
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind Case Study Tab switches
    mount.querySelectorAll(".case-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activeCaseIndex = parseInt(btn.getAttribute("data-case-idx"), 10);
        state.activeHotspotIndex = 0;
        renderBeforeAfterStudio();
      });
    });

    // Bind Hotspot Pin clicks & hovers
    mount.querySelectorAll(".hotspot-pin").forEach((pinBtn) => {
      const selectPin = (e) => {
        e.stopPropagation();
        state.activeHotspotIndex = parseInt(pinBtn.getAttribute("data-pin-idx"), 10);
        const currentCs = DATA.caseStudies[state.activeCaseIndex];
        const pin = currentCs.hotspots[state.activeHotspotIndex];
        mount.querySelectorAll(".hotspot-pin").forEach((b, i) => {
          b.classList.toggle("active", i === state.activeHotspotIndex);
        });
        const card = document.getElementById("hudActivePinCard");
        if (card && pin) {
          card.innerHTML = `
            <div style="font-family: var(--font-display); font-weight: 800; font-size: 0.92rem; color: #FFFFFF; margin-bottom: 0.25rem;">
              🎯 ${pin.title}
            </div>
            <p style="font-size: 0.82rem; color: #E2E8F0; margin-bottom: 0.4rem;">
              ${pin.spec}
            </p>
            <div class="mono" style="font-size: 0.74rem; color: #34D399; font-weight: 800;">
              ✓ ${pin.metric}
            </div>
          `;
        }
      };
      pinBtn.addEventListener("click", selectPin);
      pinBtn.addEventListener("mouseenter", selectPin);
    });

    // Bind Slider Dragging (Mouse, Touch, Range Input, Keyboard Arrows)
    const viewport = document.getElementById("baViewport");
    const rangeSlider = document.getElementById("baRangeSlider");
    const beforeLayer = document.getElementById("baLayerBefore");
    const handle = document.getElementById("baHandle");

    function updatePosition(pct) {
      const clamped = Math.max(2, Math.min(98, pct));
      state.sliderPct = clamped;
      if (beforeLayer) beforeLayer.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
      if (handle) handle.style.left = `${clamped}%`;
      if (rangeSlider) rangeSlider.value = String(Math.round(clamped));
    }

    if (rangeSlider) {
      rangeSlider.addEventListener("input", () => updatePosition(parseFloat(rangeSlider.value)));
    }

    if (viewport) {
      let dragging = false;
      const moveFromClientX = (clientX) => {
        const rect = viewport.getBoundingClientRect();
        updatePosition(((clientX - rect.left) / rect.width) * 100);
      };

      viewport.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("hotspot-pin")) return;
        dragging = true;
        moveFromClientX(e.clientX);
      });
      window.addEventListener("mousemove", (e) => {
        if (dragging) moveFromClientX(e.clientX);
      });
      window.addEventListener("mouseup", () => {
        dragging = false;
      });

      viewport.addEventListener("touchstart", (e) => {
        if (e.target.classList.contains("hotspot-pin")) return;
        if (e.touches && e.touches[0]) moveFromClientX(e.touches[0].clientX);
      }, { passive: true });
      viewport.addEventListener("touchmove", (e) => {
        if (e.touches && e.touches[0]) moveFromClientX(e.touches[0].clientX);
      }, { passive: true });

      viewport.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          updatePosition(state.sliderPct - 5);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          updatePosition(state.sliderPct + 5);
        }
      });
    }
  }

  /* ==========================================================================
     PAGE 4: /services — 25-SERVICE FILTERABLE CATALOG
     ========================================================================== */
  function initServicesPage() {
    const grid = document.getElementById("servicesCatalogGrid");
    if (!grid) return;

    const searchInput = document.getElementById("serviceSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        state.catalogSearch = searchInput.value.trim().toLowerCase();
        renderServicesCatalog();
      });
    }

    renderServiceCategoryTabs();
    renderServicesCatalog();
  }

  function renderServiceCategoryTabs() {
    const tabsEl = document.getElementById("serviceCategoryTabs");
    if (!tabsEl) return;

    const cats = [
      { id: "all", label: "All", count: 25 },
      { id: "brakes", label: "Brakes & Suspension", count: 5 },
      { id: "ac", label: "Desert A/C & Cooling", count: 4 },
      { id: "engine", label: "Engine & Diagnostics", count: 5 },
      { id: "transmission", label: "Transmission & Drivetrain", count: 3 },
      { id: "collision", label: "Collision, Paint & Frame", count: 5 },
      { id: "oil", label: "Express Oil & Fleet Care", count: 3 }
    ];

    tabsEl.innerHTML = cats
      .map(
        (c) => `
        <button type="button" class="cat-tab-btn ${state.catalogCategory === c.id ? "active" : ""}" data-cat-id="${c.id}">
          <span>${c.label}</span>
          <span class="cat-count-badge">(${c.count})</span>
        </button>
      `
      )
      .join("");

    tabsEl.querySelectorAll(".cat-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.catalogCategory = btn.getAttribute("data-cat-id");
        renderServiceCategoryTabs();
        renderServicesCatalog();
      });
    });
  }

  function renderServicesCatalog() {
    const grid = document.getElementById("servicesCatalogGrid");
    if (!grid) return;

    const filtered = DATA.services.filter((s) => {
      const matchCat = state.catalogCategory === "all" || s.category === state.catalogCategory;
      if (!matchCat) return false;
      if (!state.catalogSearch) return true;
      const tStr = s.title[state.lang].toLowerCase();
      const dStr = s.desc[state.lang].toLowerCase();
      return tStr.includes(state.catalogSearch) || dStr.includes(state.catalogSearch);
    });

    grid.innerHTML = filtered
      .map((s) => {
        const isCol = s.facility === "collision";
        const badgeText = isCol ? "Sirius Ave Collision (Hector)" : "Twain Ave Mechanical (Kenny)";
        const badgeStyle = isCol
          ? "background: rgba(245,158,11,0.16); color: #B45309;"
          : "background: rgba(2,132,199,0.12); color: #0369A1;";
        return `
          <article class="card-light">
            <div>
              <div style="display: flex; justify-content: space-between; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
                <span class="mono" style="font-size: 0.7rem; font-weight: 800; padding: 0.2rem 0.55rem; border-radius: 5px; ${badgeStyle}">
                  ${badgeText}
                </span>
                <span class="mono" style="font-size: 0.7rem; font-weight: 700; background: rgba(16,185,129,0.12); color: #047857; padding: 0.2rem 0.55rem; border-radius: 5px;">
                  ${s.turnaround}
                </span>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.08rem; font-weight: 800; margin-bottom: 0.45rem;">
                ${s.title[state.lang]}
              </h3>
              <p style="font-size: 0.88rem; color: var(--text-muted-light); margin-bottom: 1.15rem;">
                ${s.desc[state.lang]}
              </p>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.85rem; border-top: 1px solid #E2E8F0;">
              <span style="font-size: 0.74rem; font-weight: 700; color: #475569;">🛡️ Warranty-Safe OEM Spec</span>
              <a href="book.html?facility=${s.facility}&service=${encodeURIComponent(s.id)}" style="font-family: var(--font-display); font-weight: 800; font-size: 0.84rem; color: ${isCol ? "#B45309" : "#0284C7"}; text-decoration: none;">
                Book This Service →
              </a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  /* ==========================================================================
     PAGE 5: /diagnostic-estimator — VIRTUAL DIAGNOSTIC ADVISOR & OBD-II
     ========================================================================== */
  function initDiagnosticsPage() {
    const symptomGrid = document.getElementById("symptomCardsGrid");
    if (!symptomGrid) return;

    const yearSelect = document.getElementById("diagYearSelect");
    const makeSelect = document.getElementById("diagMakeSelect");
    const modelSelect = document.getElementById("diagModelSelect");
    const mileageSelect = document.getElementById("diagMileageSelect");

    if (yearSelect) {
      let yHtml = "";
      for (let y = 2026; y >= 1995; y--) {
        yHtml += `<option value="${y}" ${y === 2019 ? "selected" : ""}>${y}</option>`;
      }
      yearSelect.innerHTML = yHtml;
      yearSelect.addEventListener("change", () => {
        state.diag.year = yearSelect.value;
        renderDiagnosticOutput();
      });
    }

    if (makeSelect) {
      makeSelect.innerHTML = Object.keys(DATA.vehicleModels)
        .map((m) => `<option value="${m}">${m}</option>`)
        .join("");
      makeSelect.addEventListener("change", () => setDiagMake(makeSelect.value));
    }

    if (modelSelect) {
      modelSelect.addEventListener("change", () => {
        state.diag.model = modelSelect.value;
        renderDiagnosticOutput();
      });
    }

    if (mileageSelect) {
      mileageSelect.addEventListener("change", () => {
        state.diag.mileage = mileageSelect.value;
        renderDiagnosticOutput();
      });
    }

    document.querySelectorAll("#diagMakePills .brand-pill-btn").forEach((btn) => {
      btn.addEventListener("click", () => setDiagMake(btn.getAttribute("data-make")));
    });

    const obdInput = document.getElementById("obdCodeInput");
    const obdBtn = document.getElementById("obdDecodeBtn");

    function decodeCode(raw) {
      const code = (raw || "").trim().toUpperCase();
      if (!code) return;
      if (obdInput) obdInput.value = code;
      if (DATA.obdCodes[code]) {
        state.diag.obdCodeObj = DATA.obdCodes[code];
        state.diag.symptomId = DATA.obdCodes[code].symptomId;
      } else {
        state.diag.obdCodeObj = {
          code,
          symptomId: "check-engine",
          title: `${code} — Live OEM Freeze-Frame Telemetry Code`,
          detail: `Code ${code} requires bi-directional scan tool inspection at our 3915 W Twain Ave hub. Present Voucher TYLER-VIP-25 for $25 OFF.`
        };
      }
      renderSymptomCards();
      renderDiagnosticOutput();
    }

    if (obdBtn && obdInput) {
      obdBtn.addEventListener("click", () => decodeCode(obdInput.value));
      obdInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          decodeCode(obdInput.value);
        }
      });
    }

    document.querySelectorAll(".obd-chip").forEach((chip) => {
      chip.addEventListener("click", () => decodeCode(chip.getAttribute("data-obd")));
    });

    const printBtn = document.getElementById("printVoucherBtn");
    if (printBtn) {
      printBtn.addEventListener("click", () => window.print());
    }

    setDiagMake("Toyota");
    renderSymptomCards();
    renderDiagnosticOutput();
  }

  function setDiagMake(make) {
    if (!DATA.vehicleModels[make]) return;
    state.diag.make = make;
    state.diag.model = DATA.vehicleModels[make][0];
    const makeSelect = document.getElementById("diagMakeSelect");
    const modelSelect = document.getElementById("diagModelSelect");
    if (makeSelect) makeSelect.value = make;
    if (modelSelect) {
      modelSelect.innerHTML = DATA.vehicleModels[make]
        .map((m) => `<option value="${m}">${m}</option>`)
        .join("");
    }
    document.querySelectorAll("#diagMakePills .brand-pill-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-make") === make);
    });
    renderDiagnosticOutput();
  }

  function renderSymptomCards() {
    const grid = document.getElementById("symptomCardsGrid");
    if (!grid) return;
    grid.innerHTML = DATA.symptoms
      .map(
        (sym) => `
        <button type="button" class="symptom-card-btn ${sym.id === state.diag.symptomId ? "active" : ""}" data-sym="${sym.id}">
          <span style="font-size: 1.35rem;">${sym.icon}</span>
          <span style="font-weight: 700; font-size: 0.85rem;">${sym.title[state.lang]}</span>
        </button>
      `
      )
      .join("");

    grid.querySelectorAll(".symptom-card-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.diag.symptomId = btn.getAttribute("data-sym");
        state.diag.obdCodeObj = null;
        renderSymptomCards();
        renderDiagnosticOutput();
      });
    });
  }

  function renderDiagnosticOutput() {
    const sym = DATA.symptoms.find((s) => s.id === state.diag.symptomId) || DATA.symptoms[0];
    const vehicleReadout = document.getElementById("diagReadoutVehicle");
    const codeReadout = document.getElementById("diagReadoutCode");
    const urgencyBar = document.getElementById("diagUrgencyBar");
    const urgencyText = document.getElementById("diagUrgencyText");
    const obdBanner = document.getElementById("obdDecodedBanner");
    const vegasImpact = document.getElementById("diagVegasImpactText");
    const culpritsList = document.getElementById("diagCulpritsList");
    const techAdvice = document.getElementById("diagTechAdviceText");
    const bookLink = document.getElementById("sendDiagnosisToBayLink");

    if (vehicleReadout) {
      vehicleReadout.textContent = `${state.diag.year} ${state.diag.make} ${state.diag.model} (${state.diag.mileage})`;
    }
    if (codeReadout) {
      codeReadout.textContent = state.diag.obdCodeObj ? state.diag.obdCodeObj.code : sym.obdCode;
    }
    if (urgencyBar && urgencyText) {
      urgencyBar.style.width = `${sym.urgencyScore}%`;
      const isCrit = sym.urgencyLevel === "critical";
      urgencyBar.style.backgroundColor = isCrit ? "#EF4444" : "#F59E0B";
      urgencyText.style.color = isCrit ? "#F87171" : "#FBBF24";
      urgencyText.textContent = sym.urgencyBadge[state.lang];
    }
    if (obdBanner) {
      if (state.diag.obdCodeObj) {
        obdBanner.style.display = "block";
        obdBanner.innerHTML = `
          <div class="mono" style="font-weight: 800; color: #FBBF24; font-size: 0.8rem;">${state.diag.obdCodeObj.title}</div>
          <div style="font-size: 0.84rem; color: #F8FAFC; margin-top: 0.25rem;">${state.diag.obdCodeObj.detail}</div>
        `;
      } else {
        obdBanner.style.display = "none";
      }
    }
    if (vegasImpact) vegasImpact.textContent = sym.vegasImpact[state.lang];
    if (culpritsList) {
      culpritsList.innerHTML = sym.culprits[state.lang].map((c) => `<li>▸ ${c}</li>`).join("");
    }
    if (techAdvice) techAdvice.textContent = sym.techAdvice[state.lang];

    if (bookLink) {
      const params = new URLSearchParams({
        facility: sym.facility,
        service: sym.serviceId,
        symptom: sym.title.en + (state.diag.obdCodeObj ? ` (${state.diag.obdCodeObj.code})` : ""),
        year: state.diag.year,
        make: state.diag.make,
        model: state.diag.model
      });
      bookLink.setAttribute("href", `book.html?${params.toString()}`);
    }
  }

  /* ==========================================================================
     PAGE 6: /photo-estimate — 60-SEC SMARTPHONE UPLOADER & DEDUCTIBLE SLIDER
     ========================================================================== */
  function initPhotoEstimatePage() {
    const slots = document.querySelectorAll(".photo-slot-card");
    if (!slots.length) return;

    slots.forEach((card, idx) => {
      const input = card.querySelector(".slot-file-input");
      const img = card.querySelector(".slot-preview-img");
      const tag = card.querySelector(".slot-status-tag");

      card.addEventListener("click", (e) => {
        if (e.target !== input && input) input.click();
      });

      if (input) {
        input.addEventListener("change", () => {
          const f = input.files && input.files[0];
          if (f) {
            const reader = new FileReader();
            reader.onload = (ev) => {
              img.src = ev.target.result;
              card.classList.add("has-image");
              state.photoEst.photosLoaded[idx] = true;
              if (tag) tag.textContent = `✓ ${f.name.slice(0, 22)}`;
            };
            reader.readAsDataURL(f);
          }
        });
      }

      card.addEventListener("dragover", (e) => {
        e.preventDefault();
        card.style.borderColor = "#F59E0B";
      });
      card.addEventListener("dragleave", () => {
        card.style.borderColor = "";
      });
      card.addEventListener("drop", (e) => {
        e.preventDefault();
        card.style.borderColor = "";
        const f = e.dataTransfer?.files?.[0];
        if (f && f.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (ev) => {
            img.src = ev.target.result;
            card.classList.add("has-image");
            state.photoEst.photosLoaded[idx] = true;
            if (tag) tag.textContent = `✓ ${f.name.slice(0, 22)}`;
          };
          reader.readAsDataURL(f);
        }
      });
    });

    // Load Real Photorealistic Collision Photos Demo Button
    const demoBtn = document.getElementById("loadDemoCrashPhotosBtn");
    if (demoBtn) {
      demoBtn.addEventListener("click", () => {
        const realPhotos = [
          "assets/images/case1-before.png",
          "assets/images/case2-before.png",
          "assets/images/case3-before.png",
          "assets/images/case1-after.png"
        ];
        const labels = [
          "✓ Full 3/4 Vehicle Impact Photo",
          "✓ Close-Up Bumper & Panel Photo",
          "✓ Side Door & VIN Area Photo",
          "✓ Reference / Policy Photo Attached"
        ];
        slots.forEach((card, idx) => {
          const img = card.querySelector(".slot-preview-img");
          const tag = card.querySelector(".slot-status-tag");
          if (img) img.src = realPhotos[idx];
          card.classList.add("has-image");
          state.photoEst.photosLoaded[idx] = true;
          if (tag) tag.textContent = labels[idx];
        });
      });
    }

    const dedSlider = document.getElementById("deductibleRangeSlider");
    const carrierSelect = document.getElementById("insCarrierSelect");
    const tierSelect = document.getElementById("damageScopeSelect");

    function updateReliefMath() {
      const ded = parseInt(dedSlider?.value || "500", 10);
      state.photoEst.deductible = ded;
      const tier = tierSelect?.value || "moderate";
      state.photoEst.tier = tier;
      state.photoEst.carrier = carrierSelect?.value || "State Farm";

      let relief = Math.round(ded * 0.7);
      if (tier === "major") relief = ded;
      else if (tier === "minor") relief = Math.min(ded, 250);

      const outPocket = Math.max(0, ded - relief);

      const lbl = document.getElementById("dedSliderReadout");
      const stdEl = document.getElementById("calcStdDed");
      const relEl = document.getElementById("calcRelCredit");
      const outEl = document.getElementById("calcOutPocket");

      if (lbl) lbl.textContent = `$${ded.toLocaleString()} Policy Deductible`;
      if (stdEl) stdEl.textContent = `$${ded.toLocaleString()}.00`;
      if (relEl) relEl.textContent = `- Up to $${relief.toLocaleString()}.00 Covered`;
      if (outEl) outEl.textContent = `$${outPocket.toLocaleString()}.00 Estimated Out-of-Pocket`;
    }

    if (dedSlider) dedSlider.addEventListener("input", updateReliefMath);
    if (carrierSelect) carrierSelect.addEventListener("change", updateReliefMath);
    if (tierSelect) tierSelect.addEventListener("change", updateReliefMath);

    const form = document.getElementById("photoEstimateForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("photoEstName").value || "Las Vegas Driver";
        const phone = document.getElementById("photoEstPhone").value || "(702) 555-0199";
        const ticket = "SIRIUS-" + Math.floor(100000 + Math.random() * 900000);
        const out = document.getElementById("collisionTicketOutput");
        if (out) {
          out.style.display = "block";
          out.innerHTML = `
            <div class="mono" style="color: #047857; font-weight: 800; margin-bottom: 0.35rem;">
              ✓ PRIORITY COLLISION TICKET #${ticket} GENERATED
            </div>
            <p style="font-size: 0.9rem; margin-bottom: 0.75rem;">
              <strong>Driver:</strong> ${name} (${phone}) • <strong>Carrier:</strong> ${state.photoEst.carrier} ($${state.photoEst.deductible} Deductible)<br/>
              <strong>Assigned Lead:</strong> Hector Montes • 3070 W Sirius Ave Unit 108, Las Vegas, NV 89102
            </p>
            <div style="display: flex; gap: 0.65rem; flex-wrap: wrap;">
              <a href="tel:+17253663245" class="btn btn-collision-amber">📞 Call Hector: (725) 366-3245</a>
              <a href="sms:+17253663245?body=Hi%20Hector%2C%20my%20Priority%20Collision%20Ticket%20is%20${ticket}%20(${encodeURIComponent(name)})." class="btn btn-primary-blue">💬 Text Ticket to Hector</a>
            </div>
          `;
        }
      });
    }

    updateReliefMath();
  }

  /* ==========================================================================
     PAGE 7: /reviews — VERIFIED 5.0★ CARFAX REVIEW WALL
     ========================================================================== */
  function initReviewsPage() {
    const grid = document.getElementById("reviewsWallGrid");
    if (!grid) return;

    document.querySelectorAll("#reviewFilterTabs .cat-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#reviewFilterTabs .cat-tab-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.reviewFilter = btn.getAttribute("data-rev-filter");
        renderReviewsWall();
      });
    });

    const openModalBtn = document.getElementById("openVipReviewModalBtn");
    const modal = document.getElementById("vipReviewModal");
    const closeBtn = document.getElementById("closeVipReviewModalBtn");
    if (openModalBtn && modal) {
      openModalBtn.addEventListener("click", () => modal.classList.add("open"));
    }
    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    }

    renderReviewsWall();
  }

  function renderReviewsWall() {
    const grid = document.getElementById("reviewsWallGrid");
    if (!grid) return;

    const list = DATA.reviews.filter((r) => {
      if (state.reviewFilter === "all") return true;
      return r.filters.includes(state.reviewFilter);
    });

    grid.innerHTML = list
      .map(
        (r) => `
        <article class="card-light">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem;">
              <span style="color: #F59E0B; font-size: 1.05rem; letter-spacing: 2px;">★★★★★ 5.0</span>
              <span class="mono" style="font-size: 0.68rem; background: rgba(16,185,129,0.14); color: #047857; padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 800;">
                ${r.date}
              </span>
            </div>
            <p style="font-size: 0.95rem; font-style: italic; color: var(--text-dark); margin-bottom: 1.15rem;">
              ${r.quote}
            </p>
          </div>
          <div style="border-top: 1px solid #E2E8F0; padding-top: 0.75rem;">
            <div style="font-family: var(--font-display); font-weight: 800; font-size: 0.88rem;">${r.vehicle}</div>
            <div class="mono" style="font-size: 0.72rem; color: #0284C7; margin-top: 2px;">${r.serviceTag}</div>
          </div>
        </article>
      `
      )
      .join("");
  }

  /* ==========================================================================
     PAGE 8: /book — 4-STEP BAY SCHEDULER (URL QUERY READER) & NIGHT DROP
     ========================================================================== */
  function initBookPage() {
    renderWeeklyHours();

    const serviceSelect = document.getElementById("bookServiceSelect");
    if (!serviceSelect) return;

    // Populate all 25 services
    serviceSelect.innerHTML = DATA.services
      .map(
        (s) =>
          `<option value="${s.id}">[${s.facility === "collision" ? "Sirius Ave Collision" : "Twain Ave Mechanical"}] ${s.title.en}</option>`
      )
      .join("");

    // Default date to tomorrow
    const dateInput = document.getElementById("bookDateInput");
    if (dateInput) {
      dateInput.value = new Date(Date.now() + 86400000).toISOString().split("T")[0];
    }

    // Read URL Query Parameters (?facility=, ?service=, ?symptom=, ?year=, ?make=, ?model=)
    const params = new URLSearchParams(window.location.search);
    const qFacility = params.get("facility");
    const qService = params.get("service");
    const qSymptom = params.get("symptom");
    const qYear = params.get("year");
    const qMake = params.get("make");
    const qModel = params.get("model");

    if (qFacility === "collision" || qFacility === "mechanical") {
      setBookFacility(qFacility);
    }
    if (qService && DATA.services.some((s) => s.id === qService)) {
      serviceSelect.value = qService;
      const matched = DATA.services.find((s) => s.id === qService);
      if (matched) setBookFacility(matched.facility);
    }
    if (qYear) document.getElementById("bookYear").value = qYear;
    if (qMake) document.getElementById("bookMake").value = qMake;
    if (qModel) document.getElementById("bookModel").value = qModel;
    if (qSymptom) {
      document.getElementById("bookNotesInput").value = `Diagnostic Triage: ${qSymptom} • Voucher TYLER-VIP-25 Applied`;
    }

    if (qFacility || qService || qSymptom) {
      const prefillBanner = document.getElementById("schedulerPrefillBanner");
      if (prefillBanner) {
        prefillBanner.style.display = "block";
        prefillBanner.textContent = `✓ Auto-Preselected from Your Previous Step: ${
          state.booking.facility === "collision"
            ? "3070 W Sirius Ave Unit 108 (Hector Montes)"
            : "3915 W Twain Ave (Trung 'Kenny' Chau)"
        }`;
      }
    }

    document.querySelectorAll("[data-choose-facility]").forEach((card) => {
      card.addEventListener("click", () => setBookFacility(card.getAttribute("data-choose-facility")));
    });

    const form = document.getElementById("bayBookingForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const passId = "TYLER-" + Math.floor(10000 + Math.random() * 90000);
        const isCol = state.booking.facility === "collision";
        const hub = isCol ? DATA.business.collision : DATA.business.mechanical;
        const veh = `${document.getElementById("bookYear").value} ${document.getElementById("bookMake").value} ${document.getElementById("bookModel").value}`;
        const svcText = serviceSelect.options[serviceSelect.selectedIndex]?.text || "Scheduled Service";
        const dateVal = document.getElementById("bookDateInput").value;
        const timeVal = document.getElementById("bookTimeSlotSelect").value;
        const driver = document.getElementById("bookDriverName").value || "Valued Customer";
        const phone = document.getElementById("bookDriverPhone").value || "(702) 555-0199";

        const passOut = document.getElementById("digitalPassOutput");
        if (passOut) {
          passOut.style.display = "block";
          passOut.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 0.9rem; margin-bottom: 1rem;">
              <div>
                <div class="mono" style="color: #34D399; font-size: 0.76rem; font-weight: 800;">✓ OFFICIAL DIGITAL APPOINTMENT PASS</div>
                <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 900;">Pass #${passId}</h3>
              </div>
              <span class="mono" style="background: #10B981; color: #042F2E; padding: 0.35rem 0.75rem; border-radius: 6px; font-weight: 900;">
                VOUCHER TYLER-VIP-25 ACTIVE
              </span>
            </div>
            <p style="margin-bottom: 0.5rem;"><strong>Facility:</strong> ${hub.name} — ${hub.address}</p>
            <p style="margin-bottom: 0.5rem;"><strong>Operations Lead:</strong> ${hub.lead} (${hub.phoneDisplay})</p>
            <p style="margin-bottom: 0.5rem;"><strong>Vehicle &amp; Service:</strong> ${veh} • ${svcText}</p>
            <p style="margin-bottom: 1rem;"><strong>Arrival Window:</strong> ${dateVal} • ${timeVal} • Driver: ${driver} (${phone})</p>
            <div style="display: flex; gap: 0.65rem; flex-wrap: wrap;">
              <button type="button" class="btn btn-emerald" onclick="window.print()">🖨️ Print / Save Appointment Pass</button>
              <a href="${hub.smsHref}?body=Confirming%20Tyler%20Express%20Pass%20${passId}%20for%20${encodeURIComponent(veh)}%20on%20${dateVal}." class="btn btn-primary-blue">📲 Text Confirmation to ${isCol ? "Hector" : "Kenny"}</a>
            </div>
          `;
          passOut.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    // Overnight Key Drop Notification Quick-Form
    const nightForm = document.getElementById("overnightDropForm");
    if (nightForm) {
      nightForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const hubChoice = document.getElementById("nightDropHubSelect").value;
        const name = document.getElementById("nightDropName").value;
        const veh = document.getElementById("nightDropVehicle").value;
        const envNum = "DROP-" + Math.floor(1000 + Math.random() * 9000);
        const isCol = hubChoice === "collision";
        const phoneTarget = isCol ? "+17253663245" : "+17029694596";
        const out = document.getElementById("nightDropConfirmBox");
        if (out) {
          out.style.display = "block";
          out.innerHTML = `
            <div class="mono" style="color: #34D399; font-weight: 800;">✓ OVERNIGHT DROP ALERT #${envNum} LOGGED</div>
            <p style="font-size: 0.86rem; margin: 0.35rem 0 0.75rem;">
              Write <strong>#${envNum}</strong> on your key drop envelope. Click below to send an instant wake-up SMS to ${isCol ? "Hector (Sirius Ave)" : "Kenny (Twain Ave)"} for 8:00 AM check-in:
            </p>
            <a href="sms:${phoneTarget}?body=OVERRIGHT%20KEY%20DROP%20${envNum}%3A%20${encodeURIComponent(name)}%20-%20${encodeURIComponent(veh)}" class="btn btn-collision-amber">
              📲 Send Overnight Drop Text to ${isCol ? "Hector" : "Kenny"} →
            </a>
          `;
        }
      });
    }
  }

  function setBookFacility(fac) {
    state.booking.facility = fac;
    const mCard = document.getElementById("cardChooseMech");
    const cCard = document.getElementById("cardChooseCol");
    if (mCard && cCard) {
      mCard.style.borderColor = fac === "mechanical" ? "#38BDF8" : "rgba(148,163,184,0.2)";
      cCard.style.borderColor = fac === "collision" ? "#F59E0B" : "rgba(148,163,184,0.2)";
    }
  }

  function renderWeeklyHours() {
    const listEl = document.getElementById("weeklyHoursList");
    if (!listEl) return;
    const { dayIndex } = getLasVegasTimeParts();
    const days = DATA.i18n[state.lang].locations.days;
    const vals = DATA.i18n[state.lang].locations.hoursValues;
    const todayBadge = DATA.i18n[state.lang].locations.todayBadge;
    const order = [1, 2, 3, 4, 5, 6, 0];

    listEl.innerHTML = order
      .map((idx) => {
        const isToday = idx === dayIndex;
        return `
          <li class="hours-row ${isToday ? "is-today" : ""}">
            <span>${days[idx]} ${isToday ? `<span class="today-pill">${todayBadge}</span>` : ""}</span>
            <span class="mono" style="font-size: 0.8rem;">${vals[idx]}</span>
          </li>
        `;
      })
      .join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderGlobalShell();
    initBeforeAfterStudio();
    initServicesPage();
    initDiagnosticsPage();
    initPhotoEstimatePage();
    initReviewsPage();
    initBookPage();
    applyLanguage(state.lang);
    setInterval(updateLiveShopStatus, 30000);
  });
})();
