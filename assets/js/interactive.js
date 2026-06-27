(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  function initCardSpotlight() {
    const cards = qsa(".case-card, .capability-card, .proof-item, .experience-item, .education-item");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
      });
    });
  }

  function initMetricRow() {
    const metrics = qsa(".metric-ticker span");
    if (!metrics.length) return;

    metrics.forEach((metric, index) => {
      metric.style.opacity = "0";
      metric.style.transform = "translateY(10px)";
      metric.style.transition = "opacity 360ms ease, transform 360ms ease";

      window.setTimeout(() => {
        metric.style.opacity = "1";
        metric.style.transform = "translateY(0)";
      }, 70 * (index + 1));
    });
  }

  function initSoftParallax() {
    if (prefersReducedMotion || window.innerWidth < 960) return;

    const heroCopy = qs(".hero__copy");
    const heroCard = qs(".decision-console");
    if (!heroCopy || !heroCard) return;

    let frame = null;

    window.addEventListener("mousemove", (event) => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const xRatio = (event.clientX / window.innerWidth - 0.5) * 2;
        const yRatio = (event.clientY / window.innerHeight - 0.5) * 2;

        heroCopy.style.transform = `translate(${xRatio * -4}px, ${yRatio * -3}px)`;
        heroCard.style.transform = `translate(${xRatio * 5}px, ${yRatio * 4}px)`;
        frame = null;
      });
    });
  }

  function initSectionAnchors() {
    qsa(".section").forEach((section) => {
      section.style.scrollMarginTop = "9rem";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initCardSpotlight();
    initMetricRow();
    initSoftParallax();
    initSectionAnchors();
  });
})();
