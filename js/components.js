/* =========================================================================
   AERC — Shared UI components (header, footer, floating CTA)
   Rendered once here as template strings and injected into every page's
   placeholder divs, so the chrome is never duplicated in HTML.
   String injection (not fetch) keeps the site working via file:// too.
   ========================================================================= */

/* Which page am I on? → active nav highlight */
const CURRENT_PAGE = (() => {
  const path = window.location.pathname.split('/').pop();
  return path && path.length ? path : 'index.html';
})();

/* ---------- HEADER ------------------------------------------------------ */
function renderHeader() {
  const links = NAV.map(item => {
    const active = item.href === CURRENT_PAGE ? ' aria-current="page"' : '';
    return `<a href="${item.href}"${active} class="nav-link text-ink font-medium hover:text-brand-600 transition-colors">${item.label}</a>`;
  }).join('');

  const mobileLinks = NAV.map(item => {
    const active = item.href === CURRENT_PAGE ? ' aria-current="page"' : '';
    return `<a href="${item.href}"${active} class="nav-link block py-3 text-lg text-ink font-medium border-b border-ice-100">${item.label}</a>`;
  }).join('');

  return `
  <!-- Fixed overlay header — floats over the hero image, turns solid on scroll -->
  <div id="navbar" class="fixed inset-x-0 top-0 z-50 transition-all duration-300">
    <!-- Nav -->
    <div class="container">
      <nav id="navbar-pill" class="mt-3 mb-3 flex items-center justify-between gap-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-pill ring-1 ring-ink/5 px-4 sm:px-6 py-3 transition-all duration-300">
        <a href="index.html" class="flex items-center gap-3 shrink-0" aria-label="${COMPANY.name} home">
          <img src="${ASSETS.penguin}" alt="AERC penguin logo" class="h-9 w-auto">
          <img src="${ASSETS.wordmark}" alt="${COMPANY.brand} — ${COMPANY.hashtag}" class="h-7 w-auto hidden sm:block">
        </a>

        <div class="hidden lg:flex items-center gap-8">${links}</div>

        <div class="flex items-center gap-3">
          <a href="tel:+${CONTACTS[0].dial}" class="hidden sm:inline-flex items-center gap-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-4 py-2.5 shadow-soft transition-colors">
            ${icon('phone', 'w-4 h-4')} <span>Call Now</span>
          </a>
          <button id="menu-btn" class="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl bg-ice-100 text-ink" aria-label="Open menu" aria-expanded="false">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </nav>
    </div>

    <!-- Mobile drawer -->
    <div id="mobile-menu" class="lg:hidden hidden container">
      <div class="rounded-2xl bg-white shadow-card ring-1 ring-ink/5 px-5 py-3 mb-3">
        ${mobileLinks}
        <a href="tel:+${CONTACTS[0].dial}" class="mt-4 mb-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 text-white font-semibold px-4 py-3">
          ${icon('phone', 'w-5 h-5')} Call ${CONTACTS[0].phone}
        </a>
      </div>
    </div>
  </div>`;
}

/* ---------- FOOTER ------------------------------------------------------ */
function renderFooter() {
  const quickLinks = NAV.map(i => `<li><a href="${i.href}" class="hover:text-white transition-colors">${i.label}</a></li>`).join('');
  const serviceLinks = SERVICES.slice(0, 6).map(s => `<li><a href="services.html#${s.id}" class="hover:text-white transition-colors">${s.title}</a></li>`).join('');
  const phones = CONTACTS.map(c => `<a href="tel:+${c.dial}" class="block hover:text-white transition-colors"><span class="text-white/60">${c.name}:</span> ${c.phone}</a>`).join('');
  const socials = SOCIALS.map(s => `
    <a href="${s.href}" aria-label="${s.name}" class="inline-flex w-10 h-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors">
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${s.d}</svg>
    </a>`).join('');

  return `
  <footer class="relative bg-ink text-white/70 overflow-hidden">
    <div class="absolute inset-0 bg-cta-grad opacity-10"></div>
    <div class="container relative py-16">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="${ASSETS.wordmark}" alt="${COMPANY.brand}" class="h-9 w-auto bg-white/95 rounded-lg p-1.5">
          <p class="mt-4 text-sm leading-relaxed">${COMPANY.name} — ${COMPANY.tagline.toLowerCase()}. Trusted HVAC-R partner since ${COMPANY.since}.</p>
          <div class="mt-5 flex gap-3">${socials}</div>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2.5 text-sm">${quickLinks}</ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Services</h4>
          <ul class="space-y-2.5 text-sm">${serviceLinks}</ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Get in Touch</h4>
          <p class="text-sm leading-relaxed mb-3">${COMPANY.address.line1}<br>${COMPANY.address.line2}<br>${COMPANY.address.line3}</p>
          <div class="text-sm space-y-1">${phones}</div>
          <a href="mailto:${COMPANY.email}" class="mt-3 inline-block text-sm hover:text-white transition-colors">${COMPANY.email}</a>
        </div>
      </div>
      <div class="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <p>© <span id="year"></span> ${COMPANY.name}. All rights reserved.</p>
        <p class="text-white/50">${COMPANY.hashtag} • ${COMPANY.tagline}</p>
      </div>
    </div>
  </footer>`;
}

/* ---------- FLOATING CTA ------------------------------------------------ */
function renderFloatingCTA() {
  return `
  <div class="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
    <a href="https://wa.me/${COMPANY.whatsapp}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"
       class="pulse-ring relative inline-flex w-14 h-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow hover:scale-105 transition-transform">
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5l.8 2c.1.2.1.4 0 .6l-.4.5-.3.4c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.4.1.1.1.7-.1 1.3Z"/></svg>
    </a>
    <a href="tel:+${CONTACTS[0].dial}" aria-label="Call us"
       class="inline-flex w-14 h-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-glow hover:scale-105 hover:bg-brand-700 transition-all">
      ${icon('phone', 'w-6 h-6')}
    </a>
  </div>`;
}

/* ---------- MOUNT ------------------------------------------------------- */
function mountComponents() {
  const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  set('site-header', renderHeader());
  set('site-footer', renderFooter());
  set('floating-cta', renderFloatingCTA());

  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  /* Mobile menu toggle */
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('hidden') === false;
      btn.setAttribute('aria-expanded', String(open));
    });
  }
}

document.addEventListener('DOMContentLoaded', mountComponents);
