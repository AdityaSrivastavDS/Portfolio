// Component-style rendering for the static portfolio. Keeps deployment simple while making content easy to update.
const portfolio = {
  skillGroups: [
    {
      title: "Data Analytics & BI",
      icon: "fas fa-chart-bar",
      summary: "Turning raw business data into decision-ready dashboards, KPIs, and insight narratives.",
      skills: ["SQL", "Power BI", "Tableau", "MS Excel", "IBM Cognos", "SPSS Modeler", "Data Cleaning", "KPI Design"]
    },
    {
      title: "Data Science & ML",
      icon: "fas fa-brain",
      summary: "Building and evaluating practical models with a focus on explainability and usable outputs.",
      skills: ["Python", "Pandas", "NumPy", "TensorFlow", "Machine Learning", "NLP", "Computer Vision", "Model Evaluation"]
    },
    {
      title: "Databases, Cloud & Systems",
      icon: "fas fa-server",
      summary: "Working across data storage, cloud tooling, and scalable deployment foundations.",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "AWS", "Azure", "Google Cloud", "Apache Spark", "Git"]
    },
    {
      title: "Product & Consulting",
      icon: "fas fa-bullseye",
      summary: "Connecting user problems, stakeholder needs, workflows, and measurable product outcomes.",
      skills: ["Product Management", "Requirements", "Process Mapping", "Documentation", "UAT", "User Flows", "Prioritization", "Stakeholder Communication", "SAP ECC/S4 Hana", "CPI", "Jira", "Notion"]
    },
    {
      title: "Frontend & Prototyping",
      icon: "fas fa-code",
      summary: "Creating clean interfaces and prototypes that make analytical products easier to use.",
      skills: ["JavaScript", "React", "HTML5", "CSS3", "Flask", "Figma", "Canva", "Netlify"]
    },
    {
      title: "Communication & Leadership",
      icon: "fas fa-users",
      summary: "Explaining technical ideas, enabling communities, and aligning teams around outcomes.",
      skills: ["Workshops", "Hackathons", "Technical Writing", "Presentations", "Community Building", "Cross-functional Collaboration"]
    }
  ],
  experience: [
    {
      company: "Prospecta Software",
      role: "Solutions Consultant | Noida",
      period: "Jun 2026 - Present",
      points: [
        "Promoted to Solutions Consultant, leading client engagement sessions to define complex business problems and architect scalable technical solutions.",
        "Mentor Associate Consultants and junior team members, fostering technical excellence and best practices in project delivery.",
        "Drive optimization initiatives on the MDO platform, improving system performance and data quality standards across clients.",
        "Lead end-to-end solution design from discovery through implementation, ensuring strategic alignment with business objectives."
      ]
    },
    {
      company: "Prospecta Software",
      role: "Associate Consultant | Noida",
      period: "Nov 2025 - May 2026",
      points: [
        "Translate client needs into structured requirements, workflows, blueprints, test cases, and implementation plans.",
        "Configure MDO datasets, business rules, and data workflows to improve data quality and process reliability.",
        "Write DAXE logic for data processing and support projects from implementation through UAT."
      ]
    },
    {
      company: "Digipodium",
      role: "Data Science Intern | Industrial Training",
      period: "Feb 2025 - May 2025",
      points: [
        "Built and deployed a real-time driver monitoring system using CNN-based computer vision.",
        "Cleaned and transformed datasets for model training, validation, and insight generation.",
        "Collaborated with ML teammates on hyperparameter tuning and cross-validation."
      ]
    },
    {
      company: "HP",
      role: "Corporate Venture Capital & Business Analytics Intern",
      period: "May 2024 - Jul 2024",
      points: [
        "Researched market trends to identify promising technology ventures for further evaluation.",
        "Created financial models and projections to improve forecasting quality and investment analysis.",
        "Presented insights and recommendations to support senior management decisions."
      ]
    },
    {
      company: "Peroptyx",
      role: "Data Analyst",
      period: "Mar 2024",
      points: [
        "Reviewed geographic data for accuracy, completeness, and quality standards.",
        "Analyzed spatial patterns and inconsistencies to improve map performance and usability.",
        "Helped streamline validation workflows and improve review efficiency."
      ]
    },
    {
      company: "360DigiTMG",
      role: "Data Science Trainee",
      period: "Oct 2023 - Nov 2023",
      link: "https://www.linkedin.com/in/adityasrivastav1/details/experience/edit/forms/2324181248/",
      points: [
        "Completed focused training across data science workflows, analytics foundations, and model-building concepts.",
        "Practiced data preprocessing, exploratory analysis, and applied machine-learning exercises.",
        "Strengthened Python, statistics, and data storytelling foundations for later project work."
      ]
    },
    {
      company: "Morgan Stanley",
      role: "Trainee",
      period: "Nov 2022 - Feb 2023",
      link: "https://www.linkedin.com/in/adityasrivastav1/details/experience/edit/forms/2559122842/",
      points: [
        "Completed early professional training exposure across business, technology, and financial-services workflows.",
        "Built foundational understanding of structured problem solving, documentation, and workplace communication.",
        "Used the experience as an entry point into analytics-led business and technology thinking."
      ]
    },
    {
      company: "Headstarter AI",
      role: "Software Engineer Fellow",
      period: "Apr 2024 - Sep 2024",
      points: [
        "Built product features and prototypes with measurable improvements in performance and engagement.",
        "Developed a market trends dashboard to help businesses analyze sales data.",
        "Created an AI-powered inventory management prototype for stock tracking workflows."
      ]
    }
  ],
  community: [
    {
      company: "Microsoft",
      role: "Student Ambassador | Volunteering",
      period: "Oct 2023 - Feb 2025",
      points: [
        "Led technical sessions across AI, cloud, and data topics for student communities.",
        "Organized hackathons and cloud skill challenges that encouraged real-world problem solving.",
        "Worked with a global ambassador community to share resources, certifications, and industry learning."
      ]
    },
    {
      company: "AWS",
      role: "Community Builder | AI Engineering",
      period: "Mar 2025 - Jan 2026",
      link: "https://www.linkedin.com/in/adityasrivastav1/details/experience/edit/forms/2597823242/",
      points: [
        "Contributed to the AWS AI Engineering community through learning, technical exploration, and ecosystem participation.",
        "Focused on practical AI engineering patterns, cloud-backed experimentation, and community knowledge sharing.",
        "Connected cloud and AI concepts to portfolio projects, workshops, and student enablement."
      ]
    },
    {
      company: "Google Developer Club",
      role: "Project Lead",
      period: "May 2024 - Jun 2025",
      points: [
        "Led project-focused initiatives for student developers, helping turn ideas into practical builds.",
        "Supported collaboration across design, development, data, and presentation workflows.",
        "Helped teams scope project goals, divide ownership, and move from concept to demo."
      ]
    },
    {
      company: "Google Developer Club",
      role: "Data Science Team Lead",
      period: "Feb 2023 - Apr 2024",
      points: [
        "Guided data-science learning and peer collaboration within the developer community.",
        "Supported workshops and practice sessions across Python, analytics, and machine-learning foundations.",
        "Helped students connect theory with small applied projects and portfolio-ready outcomes."
      ]
    }
  ],
  achievements: [
    {
      value: "MVP",
      title: "Microsoft MVP Award Nominee",
      icon: "fas fa-award",
      text: "Nominated for the Microsoft Most Valuable Professional Award in 2024 and 2025."
    },
    {
      value: "2+",
      title: "Live Projects",
      icon: "fas fa-rocket",
      text: "Deployed product surfaces including an NLP review analyzer and multilingual booking platform."
    },
    {
      value: "1.5+",
      title: "Years Experience",
      icon: "fas fa-briefcase",
      text: "Hands-on work across consulting, analytics, product prototypes, ML, and business problem solving."
    },
    {
      value: "10+",
      title: "Hackathons Enabled",
      icon: "fas fa-medal",
      text: "Organized and supported events that helped students solve practical technology challenges."
    },
    {
      value: "100+",
      title: "Cloud Skill Challenges",
      icon: "fas fa-cloud",
      text: "Helped learners build applied cloud confidence through Microsoft community initiatives."
    },
    {
      value: "AWS",
      title: "AI Engineering Community",
      icon: "fas fa-network-wired",
      text: "Community Builder experience focused on AI engineering, learning, and technical contribution."
    },
    {
      value: "MSA",
      title: "Microsoft Student Ambassador",
      icon: "fas fa-certificate",
      text: "Recognition for community leadership, technical workshops, and student enablement."
    }
  ],
  wins: [
    { title: "MVP", subtitle: "Microsoft award nominee", note: "Nominated for Microsoft Most Valuable Professional Award in 2024 and 2025." },
    { title: "Promotion", subtitle: "Solutions Consultant", note: "Moved from associate to solution ownership in under a year." },
    { title: "GDSC", subtitle: "Project and data science lead", note: "Led community project and data-science initiatives across 2023 - 2025." },
    { title: "50k+", subtitle: "Daily logs interpreted", note: "ML anomaly dashboard work for enterprise onboarding workflows." },
    { title: "100+", subtitle: "Cloud challenges enabled", note: "Community-led learning events and technical sessions." },
    { title: "2+", subtitle: "Live product surfaces", note: "Shipped practical analytics and AI-first tooling." },
    { title: "10+", subtitle: "Hackathons facilitated", note: "Hands-on mentorship and problem framing support." },
    { title: "AWS", subtitle: "AI engineering community", note: "Contributor focused on practical AI implementation." },
    { title: "MSA", subtitle: "Microsoft Student Ambassador", note: "Technical outreach, workshops, and ecosystem support." },
    { title: "Cross-functional", subtitle: "Consulting x Data x Product", note: "Delivery at the intersection of business and technical execution." }
  ]
};

const projectFilters = [
  { label: "Featured", value: "featured" },
  { label: "Data & BI", value: "data" },
  { label: "ML / AI", value: "ml" },
  { label: "Product Builds", value: "product" }
];

const fallbackProjects = [
  {
    name: "PoseGuard",
    role: "ML / Computer Vision",
    summary: "Real-time driver monitoring system for unsafe posture and distraction detection.",
    problem: "Driver distraction is difficult to identify consistently without automated monitoring.",
    approach: "Used Python, OpenCV, and CNN workflows to detect posture and distraction patterns.",
    impact: "Logged 80+ distraction events and created an alert-ready monitoring flow.",
    image: "poseguard",
    stack: ["Python", "OpenCV", "CNN", "TensorFlow"],
    focus: ["featured", "ml", "data"],
    links: { view: "", code: "https://github.com/AdityaSrivastavDS/PoseGuard" }
  }
];

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initNavigation() {
  const header = qs("#site-header");
  const menuButton = qs("#menu-toggle");
  const nav = qs("#site-nav");
  const scrollTop = qs("#scroll-top");

  const syncScrollState = () => {
    const isScrolled = window.scrollY > 24;
    header?.classList.toggle("is-scrolled", isScrolled);
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

function initActiveSections() {
  const navLinks = qsa(".site-nav a");
  const linkById = new Map(navLinks.map((link) => [link.getAttribute("href")?.replace("#", ""), link]));
  const observedSections = qsa("main section[id]");
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.remove("active"));
      linkById.get(entry.target.id)?.classList.add("active");
    });
  }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

  observedSections.forEach((section) => observer.observe(section));
}

function initReveal() {
  const items = qsa(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  items.forEach((item) => observer.observe(item));
}

function initThemeToggle() {
  return;
}

function initCursor() {
  return;
}

function initTypedText() {
  const target = qs(".typing-text");
  if (!target || prefersReducedMotion) return;

  const words = ["business analytics", "ML-backed products", "dashboard storytelling", "product discovery", "data quality"];
  let wordIndex = 0;
  let charIndex = words[0].length;
  let deleting = true;

  const tick = () => {
    const current = words[wordIndex];
    target.textContent = current.slice(0, charIndex);

    if (deleting) {
      charIndex -= 1;
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    } else {
      charIndex += 1;
      if (charIndex === words[wordIndex].length) {
        deleting = true;
        window.setTimeout(tick, 900);
        return;
      }
    }
    window.setTimeout(tick, deleting ? 44 : 72);
  };

  window.setTimeout(tick, 900);
}

function renderSkills() {
  const container = qs("#skillsContainer");
  if (!container) return;

  container.innerHTML = portfolio.skillGroups.map((group) => `
    <article class="capability-card reveal">
      <div class="capability-card__top">
        <span class="capability-card__icon"><i class="${group.icon}" aria-hidden="true"></i></span>
        <div>
          <h3>${group.title}</h3>
          <p>${group.summary}</p>
        </div>
      </div>
      <div class="skill-pills" aria-label="${group.title} skills">
        ${group.skills.map((skill) => `<span class="pill">${skill}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

async function getProjects() {
  try {
    const response = await fetch("./projects/projects.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Project data unavailable");
    return await response.json();
  } catch (error) {
    console.warn(error);
    return fallbackProjects;
  }
}

function projectImage(project) {
  return `./assets/images/projects/${project.image}.png`;
}

function renderProjectFilters(projects) {
  const container = qs("#projectFilters");
  if (!container) return;

  container.innerHTML = projectFilters.map((filter, index) => `
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

function linkOrDisabled(href, label, iconClass) {
  if (!href) {
    return `<span class="icon-link is-disabled" aria-disabled="true"><i class="${iconClass}" aria-hidden="true"></i>${label}</span>`;
  }

  return `<a class="icon-link" href="${href}" target="_blank" rel="noopener" data-analytics="project-${label.toLowerCase().replace(/\s+/g, "-")}"><i class="${iconClass}" aria-hidden="true"></i>${label}</a>`;
}

function projectSignal(project) {
  const source = `${project.impact || ""} ${project.summary || ""}`;
  const match = source.match(/(\d+\+?%?|\d+\+|\d+\s*\+\s*|\d+\/?\d*)/);
  if (match) return `~ ${match[0].replace(/\s+/g, "").replace(/\+$/, "+")} measurable signal`;
  return "~ practical delivery signal";
}

function compactCopy(text, maxWords = 18) {
  const cleaned = String(text || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return "";

  const words = cleaned.split(" ");
  if (words.length <= maxWords) return cleaned;
  return `${words.slice(0, maxWords).join(" ")}...`;
}

function projectPoints(project) {
  return [
    compactCopy(project.problem || "Business context clarified before tool selection."),
    compactCopy(project.approach || "Implementation designed around reliability and adoption."),
    compactCopy(project.impact || "Delivered a measurable improvement in workflow clarity.")
  ];
}

function renderProjects(projects, filter = "featured") {
  const container = qs("#projectsContainer");
  if (!container) return;

  const selected = projects
    .filter((project) => Array.isArray(project.focus) && project.focus.includes(filter))
    .slice(0, 6);

  container.innerHTML = selected.map((project) => `
    <article class="case-card reveal">
      <div class="case-card__image">
        <img src="${projectImage(project)}" alt="${project.name} preview" loading="lazy">
      </div>
      <div class="case-card__body">
        <div class="case-card__kicker">
          <span class="case-card__category">${project.category || project.role || "Project"}</span>
          <span class="case-card__signal">${projectSignal(project)}</span>
        </div>
        <h3>${project.name}</h3>
        <p class="case-card__stack">${(project.stack || []).slice(0, 4).join(" - ") || "Applied systems"}</p>
        <p class="project-summary">${project.summary || project.desc || ""}</p>
        <ul class="case-card__points">
          ${projectPoints(project).map((point) => `<li>${point}</li>`).join("")}
        </ul>
        <div class="project-tags">
          ${(project.stack || []).slice(0, 5).map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          ${linkOrDisabled(project.links?.view, "Live", "fas fa-external-link-alt")}
          ${linkOrDisabled(project.links?.code, "Code", "fas fa-code")}
        </div>
      </div>
    </article>
  `).join("") || `<p class="loading-copy">No projects found for this filter yet.</p>`;

  initReveal();
}

function renderRoleList(container, items, openFirst = false) {
  if (!container) return;

  container.innerHTML = items.map((item, index) => `
    <details class="experience-item interactive-panel reveal" ${openFirst && index === 0 ? "open" : ""}>
      <summary class="experience-item__summary">
        <span class="panel-index">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>${item.company}</h3>
          <h4>${item.role}</h4>
        </div>
        <span>${item.period}</span>
        <i class="fas fa-plus" aria-hidden="true"></i>
      </summary>
      <ul>
        ${item.points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
      ${item.link ? `<a class="panel-link" href="${item.link}" target="_blank" rel="noopener"><i class="fab fa-linkedin-in" aria-hidden="true"></i> View credential</a>` : ""}
    </details>
  `).join("");
}

function renderExperience() {
  renderRoleList(qs("#experienceTimeline"), portfolio.experience, true);
}

function renderCommunity() {
  renderRoleList(qs("#communityTimeline"), portfolio.community, true);
}

function renderAchievements() {
  const container = qs("#achievementsGrid");
  if (!container) return;

  container.innerHTML = portfolio.achievements.map((achievement) => `
    <article class="proof-item reveal">
      <i class="${achievement.icon}" aria-hidden="true"></i>
      <strong>${achievement.value}</strong>
      <h3>${achievement.title}</h3>
      <p>${achievement.text}</p>
    </article>
  `).join("");
}

function getUniverseSkills() {
  const seen = new Set();
  const flat = [];

  portfolio.skillGroups.forEach((group) => {
    group.skills.forEach((skill) => {
      const key = skill.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      flat.push({ skill, group: group.title });
    });
  });

  return flat.slice(0, 28);
}

function renderSkillsOrbit() {
  const container = qs("#skillsOrbit");
  if (!container) return;

  const nodes = getUniverseSkills();
  container.innerHTML = `
    <div class="skills-orbit__center">SKILLS</div>
    ${nodes.map((node, index) => {
      const ring = index % 4;
      const radius = 86 + ring * 44;
      const angle = (360 / nodes.length) * index;
      return `
        <button class="skills-orbit__node" type="button" style="--angle:${angle}deg; --radius:${radius}px" data-skill="${node.skill}" data-group="${node.group}" aria-label="${node.skill}: ${node.group}">
          <span>${node.skill}</span>
        </button>
      `;
    }).join("")}
  `;
}

function initSkillsOrbitInteraction() {
  const orbit = qs("#skillsOrbit");
  const profile = qs("#skillsOrbitProfile");
  if (!orbit || !profile) return;

  const nodes = qsa(".skills-orbit__node", orbit);
  nodes.forEach((node) => {
    const showSkill = () => {
      const skill = node.dataset.skill;
      const group = node.dataset.group;
      profile.innerHTML = `<strong>${skill}</strong><p>${group}. Used as part of the portfolio's consulting, analytics, and product delivery workflow.</p>`;
    };

    node.addEventListener("mouseenter", showSkill);
    node.addEventListener("focus", showSkill);
  });

  if (!prefersReducedMotion) {
    let rotation = 0;
    const tick = () => {
      rotation = (rotation + 0.035) % 360;
      orbit.style.setProperty("--orbit-rotation", `${rotation}deg`);
      window.requestAnimationFrame(tick);
    };
    window.requestAnimationFrame(tick);
  }
}

function initCardFocusStates() {
  const selector = [
    ".thesis-board article",
    ".education-item",
    ".interactive-panel",
    ".case-card",
    ".proof-item",
    ".capability-card",
    ".win-tile"
  ].join(", ");
  const cards = qsa(selector);

  cards.forEach((card) => {
    if (card.dataset.focusReady === "true") return;
    card.dataset.focusReady = "true";

    const setActive = () => {
      const group = card.parentElement;
      if (!group) return;
      qsa(selector, group).forEach((item) => item.classList.remove("is-highlighted"));
      card.classList.add("is-highlighted");
    };

    const clearActive = () => card.classList.remove("is-highlighted");

    card.addEventListener("mouseenter", setActive);
    card.addEventListener("focusin", setActive);
    card.addEventListener("mouseleave", clearActive);
  });
}

function syncHashScroll() {
  if (!window.location.hash) return;
  const target = document.getElementById(window.location.hash.slice(1));
  if (!target) return;
  window.setTimeout(() => target.scrollIntoView({ block: "start" }), 80);
}

function renderWins() {
  const container = qs("#winsGrid");
  if (!container) return;

  container.innerHTML = portfolio.wins.map((item) => `
    <article class="win-tile reveal">
      <h3>${item.title}</h3>
      <strong>${item.subtitle}</strong>
      <p>${item.note}</p>
    </article>
  `).join("");
}

function initContactForm() {
  const form = qs("#contact-form");
  const status = qs("#form-status");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "Sending...";

    if (!window.emailjs) {
      const formData = new FormData(form);
      const subject = encodeURIComponent(`Portfolio message from ${formData.get("name") || "visitor"}`);
      const body = encodeURIComponent(`${formData.get("message") || ""}\n\nFrom: ${formData.get("email") || ""}`);
      window.location.href = `mailto:adityasrivastav729@gmail.com?subject=${subject}&body=${body}`;
      status.textContent = "Opening your email app...";
      return;
    }

    try {
      window.emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");
      await window.emailjs.sendForm("contact_service", "template_contact", "#contact-form");
      form.reset();
      status.textContent = "Message sent. Thank you for reaching out.";
    } catch (error) {
      console.error(error);
      status.textContent = "Could not send right now. Please email me directly.";
    }
  });
}

function initAnalyticsHooks() {
  window.portfolioTrack = window.portfolioTrack || function portfolioTrack(eventName, detail = {}) {
    window.dispatchEvent(new CustomEvent("portfolio:analytics", { detail: { eventName, ...detail } }));
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...detail });
  };

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-analytics]");
    if (!target) return;
    window.portfolioTrack("portfolio_interaction", {
      action: target.dataset.analytics,
      label: target.textContent.trim()
    });
  });
}

function initEnhancedInteractions() {
  // Add smooth hover glow effect to cards
  const cards = qsa(".case-card, .capability-card, .proof-item, .experience-item, .education-item");
  
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty("--mouse-x", x + "px");
      card.style.setProperty("--mouse-y", y + "px");
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--mouse-x", "50%");
      card.style.setProperty("--mouse-y", "50%");
    });
  });

  // Smooth scroll parallax for hero section
  const heroSection = qs(".hero");
  if (heroSection && !prefersReducedMotion) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const parallaxElements = qsa(".hero::before, .hero::after", heroSection);
      const intensity = Math.min(scrollY * 0.3, 100);
      heroSection.style.setProperty("--parallax", intensity + "px");
    }, { passive: true });
  }

  // Animate buttons on click
  const buttons = qsa(".btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", function(e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");
      
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Smooth reveal for metric tickers
  const metrics = qsa(".metric-ticker a, .metric-ticker span");
  metrics.forEach((metric, index) => {
    metric.style.setProperty("--index", index);
    metric.style.animation = `slideUp 0.6s ease-out ${index * 0.1}s backwards`;
  });
}

function initScrollAnimations() {
  return;
}

document.addEventListener("visibilitychange", () => {
  const favicon = qs("#favicon");
  if (document.visibilityState === "visible") {
    document.title = "Aditya Srivastav | Data Analyst, Consultant & Product Portfolio";
    favicon?.setAttribute("href", "assets/images/favicon.png");
  } else {
    document.title = "Aditya Srivastav | Data & Product Portfolio";
    favicon?.setAttribute("href", "assets/images/favhand.png");
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  initNavigation();
  initActiveSections();
  initThemeToggle();
  initCursor();
  initTypedText();
  initAnalyticsHooks();
  initEnhancedInteractions();
  initScrollAnimations();
  renderSkills();
  renderSkillsOrbit();
  initSkillsOrbitInteraction();
  renderExperience();
  renderCommunity();
  renderAchievements();
  renderWins();
  initCardFocusStates();

  const projects = await getProjects();
  renderProjectFilters(projects);
  renderProjects(projects);
  initCardFocusStates();
  syncHashScroll();
  initContactForm();
  initReveal();
});
