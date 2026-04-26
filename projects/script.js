const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Data & BI", value: "data" },
  { label: "ML / AI", value: "ml" },
  { label: "Product Builds", value: "product" },
  { label: "Learning Systems", value: "learning" }
];

function initNavigation() {
  const header = qs("#site-header");
  const menuButton = qs("#menu-toggle");
  const nav = qs("#site-nav");
  const scrollTop = qs("#scroll-top");

  const syncScrollState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
    scrollTop?.classList.toggle("is-visible", window.scrollY > 520);
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  qsa(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav?.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", syncScrollState, { passive: true });
  syncScrollState();
}

function initThemeToggle() {
  return;
}

function initCursor() {
  return;
}

function initReveal() {
  const items = qsa(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

async function getProjects() {
  const response = await fetch("./projects.json", { cache: "no-store" });
  if (!response.ok) throw new Error("Unable to load project data");
  return response.json();
}

function projectImage(project) {
  return `../assets/images/projects/${project.image}.png`;
}

function linkOrDisabled(href, label, iconClass) {
  if (!href) {
    return `<span class="icon-link is-disabled" aria-disabled="true"><i class="${iconClass}" aria-hidden="true"></i>${label}</span>`;
  }
  return `<a class="icon-link" href="${href}" target="_blank" rel="noopener"><i class="${iconClass}" aria-hidden="true"></i>${label}</a>`;
}

function normalizedFocus(project) {
  const focus = new Set(project.focus || []);
  if (project.category === "Learning Resource") focus.add("learning");
  return focus;
}

function renderFilters(projects) {
  const container = qs("#allProjectFilters");
  if (!container) return;

  container.innerHTML = filters.map((filter, index) => `
    <button class="filter-button ${index === 0 ? "is-active" : ""}" type="button" data-filter="${filter.value}">
      ${filter.label}
    </button>
  `).join("");

  container.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    qsa(".filter-button", container).forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects(projects, button.dataset.filter);
  });
}

function renderProjects(projects, filter = "all") {
  const container = qs("#allProjectsGrid");
  if (!container) return;

  const selected = filter === "all"
    ? projects
    : projects.filter((project) => normalizedFocus(project).has(filter));

  container.innerHTML = selected.map((project) => `
    <article class="case-card reveal">
      <div class="case-card__image">
        <img src="${projectImage(project)}" alt="${project.name} preview" loading="lazy">
      </div>
      <div class="case-card__body">
        <div class="case-card__meta">
          <span>${project.role || project.category}</span>
        </div>
        <h3>${project.name}</h3>
        <p class="project-summary">${project.summary || project.desc || ""}</p>
        <div class="impact-map">
          <div><strong>Problem</strong><span>${project.problem}</span></div>
          <div><strong>Approach</strong><span>${project.approach}</span></div>
          <div><strong>Impact</strong><span>${project.impact}</span></div>
        </div>
        <div class="project-tags">
          ${(project.stack || []).map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          ${linkOrDisabled(project.links?.view, "Live", "fas fa-external-link-alt")}
          ${linkOrDisabled(project.links?.code, "Code", "fas fa-code")}
        </div>
      </div>
    </article>
  `).join("") || `<p class="loading-copy">No projects match this filter yet.</p>`;

  initReveal();
}

document.addEventListener("visibilitychange", () => {
  const favicon = qs("#favicon");
  if (document.visibilityState === "visible") {
    document.title = "Projects | Aditya Srivastav";
    favicon?.setAttribute("href", "../assets/images/favicon.png");
  } else {
    document.title = "Aditya Srivastav | Project Archive";
    favicon?.setAttribute("href", "../assets/images/favhand.png");
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  initNavigation();
  initThemeToggle();
  initCursor();
  initReveal();

  try {
    const projects = await getProjects();
    renderFilters(projects);
    renderProjects(projects);
  } catch (error) {
    console.error(error);
    qs("#allProjectsGrid").innerHTML = `<p class="loading-copy">Project data could not load. Please try again later.</p>`;
  }
});
