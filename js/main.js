/* =========================================================================
   AERC — Render helpers + animations
   Pages drop empty containers like <div data-render="services"></div>;
   this file fills them from data.js (write markup once, reuse everywhere)
   and wires up scroll-reveal, counters, parallax and the nav-shrink.
   ========================================================================= */

/* ----------------------------------------------------------------------- */
/* Small builders                                                          */
/* ----------------------------------------------------------------------- */
const chip = (t) =>
  `<span class="inline-block rounded-full bg-ice-100 text-brand-700 text-xs font-semibold px-3 py-1">${t}</span>`;

function serviceCard(s, detailed = false) {
  const brands = s.brands.length
    ? `<div class="mt-5 flex flex-wrap gap-1.5">${s.brands.slice(0, detailed ? 99 : 4).map(chip).join('')}</div>` : '';
  const points = detailed && s.points
    ? `<ul class="mt-5 space-y-2.5">${s.points.map(p =>
        `<li class="flex gap-2 text-sm text-slate-200"><span class="text-cyan-400 mt-0.5">${icon('check','w-4 h-4')}</span>${p}</li>`).join('')}</ul>` : '';
  const badge = s.badge ? `<span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wide ring-1 ring-white/30">${s.badge}</span>` : '';

  return `
  <article id="${s.id}" data-reveal data-tilt class="card spot group p-7 relative overflow-hidden text-white transition-all duration-500 hover:-translate-y-2">
    <!-- Background Image & Gradient Layer -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img src="${s.img}" alt="${s.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40">
      <div class="absolute inset-0" style="background: ${s.bgGradient || 'linear-gradient(145deg, rgba(11, 43, 78, 0.9) 0%, rgba(21, 94, 151, 0.9) 100%)'}"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent"></div>
    </div>

    <!-- Card Content -->
    <div class="relative z-10 flex flex-col h-full justify-between">
      <div>
        <div class="flex items-center justify-between">
          <div class="relative inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/30 text-white shadow-glow group-hover:bg-brand-500 transition-colors duration-300">
            ${icon(s.icon, 'w-7 h-7')}
          </div>
          ${badge}
        </div>
        <h3 class="mt-6 font-display text-2xl font-semibold text-white drop-shadow">${s.title}</h3>
        <p class="mt-3 text-slate-200 text-sm leading-relaxed">${s.summary}</p>
        ${points}
        ${brands}
      </div>
      <div class="mt-8 pt-4 border-t border-white/15 flex items-center justify-between">
        <a href="services.html#${s.id}" class="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 group-hover:text-white group-hover:gap-3 transition-all">Learn more ${icon('arrow','w-4 h-4')}</a>
        <span class="text-white/30 font-display text-3xl font-bold group-hover:text-white/60 transition-colors">0${SERVICES.indexOf(s)+1}</span>
      </div>
    </div>
  </article>`;
}

function statTile(s) {
  const num = s.raw
    ? `<span>${s.prefix}${s.value}${s.suffix}</span>`
    : `<span class="counter" data-target="${s.value}" data-prefix="${s.prefix}" data-suffix="${s.suffix}">0</span>`;
  return `
  <div data-reveal class="group text-center px-2">
    <div class="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-gradient group-hover:scale-110 transition-transform origin-center">${num}</div>
    <div class="mt-2 text-xs sm:text-sm uppercase tracking-wider text-ink-muted">${s.label}</div>
  </div>`;
}

function whyCard(w) {
  return `
  <div data-reveal data-tilt class="card spot group p-7 relative overflow-hidden transition-all duration-500 hover:-translate-y-2">
    <div class="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity overflow-hidden">
      <img src="${w.img || ASSETS.heroAbout}" alt="${w.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
      <div class="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </div>
    <div class="relative z-10">
      <div class="icon-hex inline-flex w-14 h-14 items-center justify-center bg-gradient-to-br from-brand-500 to-accent text-white shadow-glow group-hover:scale-110 transition-transform duration-300">${icon(w.icon,'w-7 h-7')}</div>
      <h3 class="mt-5 font-display text-xl font-semibold text-ink">${w.title}</h3>
      <p class="mt-2 text-sm text-ink-soft leading-relaxed">${w.text}</p>
    </div>
  </div>`;
}

function productCard(p) {
  const media = `
    <img src="${p.img || ASSETS.heroProducts}" alt="${p.title}" class="bento-img absolute inset-0 w-full h-full object-cover">
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent"></div>
    <div class="absolute inset-0 bg-brand-900/20 group-hover:bg-brand-900/0 transition-colors"></div>
    <div class="relative z-10 flex items-center justify-center h-full">
      ${icon(p.icon, 'w-16 h-16 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-500')}
    </div>`;

  return `
  <article data-reveal class="bento card spot group overflow-hidden transition-all duration-500 hover:-translate-y-2">
    <div class="relative h-52 bg-slate-900 flex items-center justify-center text-white overflow-hidden">
      ${media}
      <span class="absolute top-4 right-4 rounded-full bg-slate-900/70 backdrop-blur-md ring-1 ring-white/30 text-white text-xs font-bold px-3.5 py-1.5 shadow-md z-20">${p.spec}</span>
    </div>
    <div class="p-6 relative bg-white">
      <h3 class="font-display text-xl font-semibold text-ink group-hover:text-brand-600 transition-colors">${p.title}</h3>
      <p class="mt-2 text-sm text-ink-soft leading-relaxed">${p.text}</p>
    </div>
  </article>`;
}

function brandPill(name) {
  return `<div class="spot group flex items-center justify-center text-center rounded-2xl bg-white px-5 py-5 ring-1 ring-ink/5 shadow-soft hover:-translate-y-1 hover:shadow-card transition-all duration-300">
    <span class="font-semibold text-ink-muted group-hover:text-brand-600 transition-colors">${name}</span>
  </div>`;
}

function membershipBadge(m) {
  return `<div class="flex flex-col items-center text-center gap-1" title="${m.full}">
    <div class="inline-flex h-14 min-w-14 px-4 items-center justify-center rounded-2xl bg-white ring-1 ring-ink/5 shadow-soft font-display font-bold text-brand-700">${m.name}</div>
    <span class="text-[11px] text-ink-muted max-w-[9rem] leading-tight">${m.full}</span>
  </div>`;
}

/* ----------------------------------------------------------------------- */
/* Render registry — maps data-render="X" to HTML                          */
/* ----------------------------------------------------------------------- */
const RENDERERS = {
  stats:    () => STATS.map(statTile).join(''),
  services: () => SERVICES.map(s => serviceCard(s, false)).join(''),
  'services-detailed': () => SERVICES.map(s => serviceCard(s, true)).join(''),
  why:      () => WHY.map(whyCard).join(''),
  /* Compact service cluster used inside the Services page hero visual */
  'service-mini': () => SERVICES.map((s, i) => `
    <div class="glass rounded-2xl p-4 flex items-center gap-3 group cursor-default ring-1 ring-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
      <span class="icon-hex inline-flex w-11 h-11 items-center justify-center bg-white/15 text-white shrink-0 group-hover:bg-brand-500 transition-colors duration-300">${icon(s.icon,'w-5 h-5')}</span>
      <div class="min-w-0">
        <span class="text-sm font-bold leading-tight block">${s.title}</span>
        ${s.badge ? `<span class="text-[10px] text-cyan-300/80 font-medium tracking-wide">${s.badge}</span>` : ''}
      </div>
    </div>`).join(''),
  products: () => PRODUCTS.map(productCard).join(''),
  memberships: () => MEMBERSHIPS.map(membershipBadge).join(''),
  'brands-grid': () => BRAND_GROUPS.map(g => `
    <div data-reveal class="mb-10">
      <h3 class="font-display text-xl text-ink mb-5 flex items-center gap-3">
        <span class="h-px w-8 bg-brand-300"></span>${g.group}
      </h3>
      <div data-stagger class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        ${g.items.map(brandPill).join('')}
      </div>
    </div>`).join(''),
  'brands-marquee': () => {
    const strip = BRANDS_FLAT.map(b =>
      `<span class="mx-6 shrink-0 font-display text-lg sm:text-xl text-ink/50 hover:text-brand-600 transition-colors">${b}</span>`).join('');
    return `<div class="marquee py-2"><div class="marquee__track">${strip}${strip}</div></div>`;
  },
  contacts: () => CONTACTS.map(c => `
    <a href="tel:+${c.dial}" data-reveal class="lift flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-ink/5 shadow-soft hover:ring-brand-200">
      <span class="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">${icon('phone','w-5 h-5')}</span>
      <span><span class="block text-sm text-ink-muted">${c.name}</span><span class="block font-semibold text-ink text-lg">${c.phone}</span></span>
    </a>`).join(''),
};

function runRenderers() {
  document.querySelectorAll('[data-render]').forEach(el => {
    const fn = RENDERERS[el.getAttribute('data-render')];
    if (fn) el.innerHTML = fn();
  });
}

/* ----------------------------------------------------------------------- */
/* Scroll reveal                                                           */
/* ----------------------------------------------------------------------- */
function initReveal() {
  const els = document.querySelectorAll('[data-reveal], [data-stagger]');
  if (!('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(e => io.observe(e));
}

/* ----------------------------------------------------------------------- */
/* Animated counters                                                       */
/* ----------------------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;
  const animate = (el) => {
    const target = +el.getAttribute('data-target');
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const dur = 1600; const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.6 });
  counters.forEach(c => io.observe(c));
}

/* ----------------------------------------------------------------------- */
/* Hero parallax + nav shrink                                              */
/* ----------------------------------------------------------------------- */
function initScrollFx() {
  const topbar = document.getElementById('topbar');
  const pill = document.getElementById('navbar-pill');
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onScroll = () => {
    const y = window.scrollY;
    const scrolled = y > 40;
    /* Collapse the announcement bar once the user starts scrolling */
    if (topbar) {
      topbar.style.maxHeight = scrolled ? '0px' : '48px';
      topbar.style.opacity = scrolled ? '0' : '1';
    }
    /* Tighten + strengthen the nav pill on scroll */
    if (pill) {
      pill.classList.toggle('py-2', scrolled);
      pill.classList.toggle('py-3', !scrolled);
      pill.classList.toggle('shadow-card', scrolled);
      pill.classList.toggle('mt-3', !scrolled);
      pill.classList.toggle('mt-2', scrolled);
    }
    /* Gentle parallax drift on all hero background images */
    if (!reduce) parallaxEls.forEach(el => { el.style.transform = `translateY(${y * 0.12}px) scale(1.05)`; });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ----------------------------------------------------------------------- */
/* Scroll progress bar                                                     */
/* ----------------------------------------------------------------------- */
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.appendChild(bar);
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ----------------------------------------------------------------------- */
/* Magnetic buttons ([data-magnetic])                                      */
/* ----------------------------------------------------------------------- */
function initMagnetic() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(hover: none)').matches) return; // skip on touch
  document.querySelectorAll('[data-magnetic]').forEach(el => {
    const strength = 0.35;
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = 'translate(0,0)'; });
  });
}

/* ----------------------------------------------------------------------- */
/* 3D tilt ([data-tilt]) + spotlight (.spot)                               */
/* ----------------------------------------------------------------------- */
function initTiltAndSpot() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touch = window.matchMedia('(hover: none)').matches;

  document.querySelectorAll('.spot').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  if (reduce || touch) return;
  document.querySelectorAll('[data-tilt]').forEach(el => {
    const max = 6;
    el.addEventListener('mouseenter', () => { el.style.transition = 'transform .12s ease, box-shadow .4s ease'; });
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      /* Inline transform wins over the .card:hover rule, so lift + tilt compose */
      el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-8px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform .5s cubic-bezier(.16,.84,.44,1), box-shadow .4s ease';
      el.style.transform = '';
    });
  });
}

/* ----------------------------------------------------------------------- */
/* FAQ accordion                                                           */
/* ----------------------------------------------------------------------- */
function initFaq() {
  document.querySelectorAll('.faq-item .faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      item.closest('[data-faq]')?.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ----------------------------------------------------------------------- */
/* Shared SVG gradient defs (used by the ring / donut gauges)              */
/* ----------------------------------------------------------------------- */
function injectSvgDefs() {
  if (document.getElementById('aerc-svg-defs')) return;
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('id', 'aerc-svg-defs');
  svg.setAttribute('width', '0'); svg.setAttribute('height', '0');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.position = 'absolute';
  svg.innerHTML = `<defs>
    <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#155e97"/><stop offset="1" stop-color="#2e9be0"/>
    </linearGradient>
    <linearGradient id="ringGradLight" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#bfe0fb"/><stop offset="1" stop-color="#ffffff"/>
    </linearGradient>
  </defs>`;
  document.body.appendChild(svg);
}

/* ----------------------------------------------------------------------- */
/* Init                                                                    */
/* ----------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  injectSvgDefs();
  runRenderers();
  initReveal();
  initCounters();
  initScrollFx();
  initScrollProgress();
  initMagnetic();
  initTiltAndSpot();
  initFaq();
});
