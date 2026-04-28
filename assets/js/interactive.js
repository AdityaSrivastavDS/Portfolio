// ===== CYBERPUNK NEON INTERACTIVE EFFECTS =====

// ===== PARALLAX SCROLLING (THROTTLED) =====
const initParallax = () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  let ticking = false;
  let lastMouseX = 0;
  let lastMouseY = 0;
  
  window.addEventListener('mousemove', (e) => {
    lastMouseX = e.clientX / window.innerWidth;
    lastMouseY = e.clientY / window.innerHeight;
    
    if (!ticking) {
      requestAnimationFrame(() => {
        const mouseX = lastMouseX;
        const mouseY = lastMouseY;
        
        parallaxElements.forEach(el => {
          const speed = el.getAttribute('data-parallax') || 0.5;
          const x = mouseX * 50 * speed;
          const y = mouseY * 50 * speed;
          
          el.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        ticking = false;
      });
      ticking = true;
    }
  });
};

// ===== SCROLL PARALLAX DEPTH EFFECT (THROTTLED) =====
const initScrollParallax = () => {
  let ticking = false;
  let lastScrollY = 0;
  
  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = lastScrollY;
        
        // Move background radially as user scrolls
        document.body.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
        
        // Create depth layers
        const cards = document.querySelectorAll('[data-depth]');
        cards.forEach(card => {
          const depth = parseFloat(card.getAttribute('data-depth')) || 1;
          card.style.transform = `translateY(${scrollY * depth * 0.02}px)`;
        });
        
        ticking = false;
      });
      
      ticking = true;
    }
  });
};

// ===== MOUSE TRACKING GLOW EFFECT (OPTIMIZED) =====
const initMouseGlow = () => {
  let mouseX = 0;
  let mouseY = 0;
  let isAnimating = false;
  
  const glowEl = document.createElement('div');
  glowEl.className = 'mouse-glow';
  glowEl.style.cssText = `
    position: fixed;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, transparent 70%);
    pointer-events: none;
    z-index: 1;
    mix-blend-mode: screen;
    filter: blur(40px);
    display: none;
    will-change: left, top;
  `;
  document.body.appendChild(glowEl);
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(() => {
        const x = mouseX - 200;
        const y = mouseY - 200;
        glowEl.style.left = x + 'px';
        glowEl.style.top = y + 'px';
        glowEl.style.display = 'block';
        isAnimating = false;
      });
    }
  });
};

// ===== EXPANDABLE EXPERIENCE CARDS =====
const initExpandableCards = () => {
  const experienceItems = document.querySelectorAll('.experience-item');
  
  experienceItems.forEach(item => {
    const header = item.querySelector('.experience-item__top');
    if (!header) return;
    
    // Make expandable
    header.style.cursor = 'pointer';
    header.addEventListener('click', () => {
      item.classList.toggle('is-expanded');
      
      // Add neon glow on expand
      if (item.classList.contains('is-expanded')) {
        item.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.4), inset 0 0 20px rgba(255, 0, 110, 0.1)';
        item.style.borderColor = 'rgba(0, 255, 255, 0.8)';
      } else {
        item.style.boxShadow = '';
        item.style.borderColor = '';
      }
    });
  });
  
  // Add CSS for expanded state
  const style = document.createElement('style');
  style.textContent = `
    .experience-item {
      cursor: pointer;
      transition: all 300ms ease;
    }
    
    .experience-item.is-expanded {
      transform: scale(1.02);
    }
    
    .experience-item.is-expanded .experience-item__top::after {
      content: '−';
    }
    
    .experience-item__top::after {
      content: '+';
      margin-left: auto;
      font-size: 1.8rem;
      color: var(--neon-cyan);
      transition: all 200ms ease;
    }
  `;
  document.head.appendChild(style);
};

// ===== CASE CARD 3D TILT EFFECT =====
const initCardTilt = () => {
  const cards = document.querySelectorAll('.case-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
};

// ===== NEON TEXT FLICKER EFFECT =====
const initNeonFlicker = () => {
  const headings = document.querySelectorAll('h1, h2, h3, .eyebrow');
  
  headings.forEach(heading => {
    if (!heading.textContent.includes('Data') && !heading.textContent.includes('Aditya')) return;
    
    heading.addEventListener('mouseenter', () => {
      heading.style.animation = 'neonFlicker 0.3s ease-in-out';
      heading.style.textShadow = '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.4)';
    });
    
    heading.addEventListener('mouseleave', () => {
      heading.style.animation = 'none';
      heading.style.textShadow = 'none';
    });
  });
  
  // Add neon flicker animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes neonFlicker {
      0%, 100% { opacity: 1; }
      14% { opacity: 0.95; }
      15% { opacity: 0.97; }
      49% { opacity: 0.92; }
      50% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
};

// ===== INTERACTIVE BUTTON RIPPLE EFFECT =====
const initButtonRipple = () => {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent 70%);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
      `;
      
      if (!this.style.position || this.style.position === 'static') {
        this.style.position = 'relative';
      }
      
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
  // Add ripple animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
};

// ===== SECTION VISIBILITY ANIMATION =====
const initSectionAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // Add neon glow to section
        if (Math.random() > 0.5) {
          entry.target.style.boxShadow = `0 0 30px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(255, 0, 110, 0.05)`;
        }
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
};

// ===== NEON BORDER ANIMATION ON SCROLL (THROTTLED) =====
const initNeonBorders = () => {
  const cards = document.querySelectorAll('[class*="card"], [class*="item"]');
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isVisible && Math.random() > 0.95) {
            // Random neon color pulse
            const colors = ['var(--neon-cyan)', 'var(--neon-pink)', 'var(--neon-purple)'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            card.style.borderColor = randomColor;
            setTimeout(() => {
              card.style.borderColor = '';
            }, 300);
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  });
};

// ===== FLOATING PARTICLES EFFECT (DISABLED FOR PERFORMANCE) =====
const initFloatingParticles = () => {
  // Disabled due to performance impact - removed 20 particles with continuous animations
  // If needed in future, use CSS only animations instead of DOM-based particles
};

// ===== KEYBOARD SHORTCUTS FOR INTERACTIVITY =====
const initKeyboardShortcuts = () => {
  document.addEventListener('keydown', (e) => {
    // Press 'G' for glow toggle
    if (e.key.toLowerCase() === 'g') {
      const glow = document.querySelector('.mouse-glow');
      if (glow) {
        glow.style.display = glow.style.display === 'none' ? 'block' : 'none';
      }
    }
    
    // Press 'N' for neon color cycle
    if (e.key.toLowerCase() === 'n') {
      document.body.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
      setTimeout(() => {
        document.body.style.filter = 'none';
      }, 300);
    }
  });
};

// ===== INIT ALL EFFECTS =====
const initCyberpunkEffects = () => {
  console.log('🌐 Initializing Cyberpunk Neon Effects...');
  
  initParallax();
  initScrollParallax();
  initMouseGlow();
  initExpandableCards();
  initCardTilt();
  initNeonFlicker();
  initButtonRipple();
  initSectionAnimations();
  initNeonBorders();
  initFloatingParticles();
  initKeyboardShortcuts();
  
  console.log('✨ Cyberpunk effects loaded!');
};

// Start effects when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCyberpunkEffects);
} else {
  initCyberpunkEffects();(DISABLED FOR PERFORMANCE) =====
const initKeyboardShortcuts = () => {
  // Disabled heavy filter operations for performance
  // filter: hue-rotate() causes expensive repaints