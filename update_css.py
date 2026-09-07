import re

with open('assets/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replacements for hardcoded colors
replacements = {
    '#fffaf5': 'var(--surface)',
    '#fffdf9': 'var(--surface-alt)',
    '#fff8f2': 'var(--text-inverse)',
    '#fff7ef': 'var(--text-inverse)',
    '#3e2930': 'var(--text-nav)',
    '#7a6260': 'var(--text-muted-alt)',
    '#42101e': 'var(--wine-hover)'
}

for hex_val, var_name in replacements.items():
    css = re.sub(hex_val, var_name, css, flags=re.IGNORECASE)

# Insert new variables into :root
new_vars = '''  --surface: #fffaf5;
  --surface-alt: #fffdf9;
  --text-inverse: #fff7ef;
  --text-nav: #3e2930;
  --text-muted-alt: #7a6260;
  --wine-hover: #42101e;
  --bg-gradient-1: rgba(91, 20, 40, 0.035);
  --bg-gradient-2: rgba(49, 95, 120, 0.025);
  --bg-gradient-3-start: #fbf7f2;
  --bg-gradient-3-end: #efe5dc;
  --bg-overlay-1: rgba(44, 24, 32, 0.018);
  --bg-overlay-2: rgba(181, 146, 90, 0.08);'''

css = css.replace('--paper: #f8f3ee;', new_vars + '\n  --paper: #f8f3ee;')

# Update the complex background gradients to use variables so we can override them
css = css.replace(
    'linear-gradient(90deg, rgba(91, 20, 40, 0.035) 1px, transparent 1px),',
    'linear-gradient(90deg, var(--bg-gradient-1) 1px, transparent 1px),'
)
css = css.replace(
    'linear-gradient(180deg, rgba(49, 95, 120, 0.025) 1px, transparent 1px),',
    'linear-gradient(180deg, var(--bg-gradient-2) 1px, transparent 1px),'
)
css = css.replace(
    'linear-gradient(180deg, #fbf7f2 0%, var(--paper) 46%, #efe5dc 100%)',
    'linear-gradient(180deg, var(--bg-gradient-3-start) 0%, var(--paper) 46%, var(--bg-gradient-3-end) 100%)'
)
css = css.replace(
    'repeating-linear-gradient(0deg, rgba(44, 24, 32, 0.018) 0 1px, transparent 1px 5px),',
    'repeating-linear-gradient(0deg, var(--bg-overlay-1) 0 1px, transparent 1px 5px),'
)
css = css.replace(
    'linear-gradient(110deg, transparent 0 30%, rgba(181, 146, 90, 0.08) 30% 31%, transparent 31% 100%)',
    'linear-gradient(110deg, transparent 0 30%, var(--bg-overlay-2) 30% 31%, transparent 31% 100%)'
)


# Add dark theme rules
dark_theme = '''

/* --- DARK THEME OVERRIDES --- */
[data-theme="dark"] {
  color-scheme: dark;
  --paper: #121212;
  --paper-deep: #1e1e1e;
  --paper-soft: #181818;
  --ink: #e0e0e0;
  --muted: #a0a0a0;
  --quiet: #757575;
  --wine: #e28c9b;
  --wine-2: #ffb3c6;
  --forest: #66d9c4;
  --blue: #8bc3eb;
  --gold: #d4ae6e;
  --line: #2e2e2e;
  --line-strong: #404040;
  --shadow: 0 18px 45px rgba(0, 0, 0, 0.4);
  --shadow-soft: 0 10px 24px rgba(0, 0, 0, 0.25);
  
  --surface: #1e1e1e;
  --surface-alt: #242424;
  --text-inverse: #121212;
  --text-nav: #e0e0e0;
  --text-muted-alt: #b0b0b0;
  --wine-hover: #ffb3c6;
  
  --bg-gradient-1: rgba(226, 140, 155, 0.035);
  --bg-gradient-2: rgba(139, 195, 235, 0.025);
  --bg-gradient-3-start: #181818;
  --bg-gradient-3-end: #1e1e1e;
  
  --bg-overlay-1: rgba(226, 140, 155, 0.018);
  --bg-overlay-2: rgba(212, 174, 110, 0.08);
}

[data-theme="dark"] .brand__mark {
  background: var(--surface);
}
[data-theme="dark"] .console__top img {
  filter: saturate(0.8) contrast(1.1) brightness(0.8);
}
[data-theme="dark"] .btn--primary {
  color: var(--text-inverse);
}
[data-theme="dark"] .btn--primary:hover {
  color: var(--text-inverse);
  background: var(--wine-hover);
}
[data-theme="dark"] .paper-note--back {
  background: var(--surface-alt);
}
[data-theme="dark"] .metric-ticker a,
[data-theme="dark"] .metric-ticker span {
  background: rgba(30, 30, 30, 0.82);
}
[data-theme="dark"] .metric-ticker a:hover,
[data-theme="dark"] .metric-ticker a:focus-visible {
  background: var(--surface);
}
[data-theme="dark"] .thesis-board article,
[data-theme="dark"] .experience-item,
[data-theme="dark"] .education-item,
[data-theme="dark"] .case-card,
[data-theme="dark"] .capability-card,
[data-theme="dark"] .contact-copy,
[data-theme="dark"] .contact-form,
[data-theme="dark"] .workshop-shell,
[data-theme="dark"] .win-tile {
  background: rgba(30, 30, 30, 0.78);
}
[data-theme="dark"] .site-header {
  background: rgba(18, 18, 18, 0.84);
}
[data-theme="dark"] .site-header.is-scrolled {
  background: rgba(18, 18, 18, 0.96);
}
[data-theme="dark"] .marquee-band {
  background: var(--surface-alt);
  color: var(--wine);
  border-block: 1px solid var(--line);
}
[data-theme="dark"] .marquee-track span::after {
  color: var(--wine);
}
[data-theme="dark"] .proof {
  background: var(--surface-alt);
  color: var(--ink);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
[data-theme="dark"] .proof .section-heading h2,
[data-theme="dark"] .proof .eyebrow {
  color: var(--ink);
}
[data-theme="dark"] .proof-log {
  border: 1px solid var(--line);
  background: var(--line);
}
[data-theme="dark"] .proof-item {
  background: var(--surface);
}
[data-theme="dark"] .proof-item strong,
[data-theme="dark"] .proof-item h3 {
  color: var(--ink);
}
[data-theme="dark"] .proof-item p {
  color: var(--muted);
}
[data-theme="dark"] .contact-form input,
[data-theme="dark"] .contact-form textarea {
  background: rgba(30, 30, 30, 0.82);
}
'''

css += dark_theme

with open('assets/css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print('Updated style.css successfully')
