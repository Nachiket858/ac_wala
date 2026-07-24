/* =========================================================================
   AERC — Site content & data (single source of truth)
   All repeated content (nav, services, brands, products, stats, contacts)
   lives here so pages stay DRY. Render helpers in components.js/main.js
   read from these objects.
   ========================================================================= */

/* ---- Business info ----------------------------------------------------- */
const COMPANY = {
  name: 'Ajanta Electric & Refrigeration Co.',
  short: 'AERC',
  brand: 'AC वाला',
  tagline: 'A Complete Cooling & Heating Solution',
  hashtag: '#A Freezing World',
  since: 1991,
  email: 'ajantaelectric@gmail.com',
  address: {
    line1: 'Ground Floor, Mini Mall, B002–B005, C-Type Building,',
    line2: 'Sillekhana, Samarth Nagar Road,',
    line3: 'Chhatrapati Sambhajinagar (Aurangabad) – 431001, Maharashtra',
  },
  mapQuery: 'Samarth+Nagar+Road+Chhatrapati+Sambhajinagar+Aurangabad+431001',
  whatsapp: '919823444447', // Gaurav B. Nahata
};

/* ---- People / phone numbers ------------------------------------------- */
const CONTACTS = [
  { name: 'Gaurav B. Nahata',   phone: '98234 44447', dial: '919823444447' },
  { name: 'Saurav B. Nahata',   phone: '93256 44447', dial: '919325644447' },
  { name: 'Bajranglal Nahata',  phone: '93252 11151', dial: '919325211151' },
  { name: 'Office',             phone: '91581 14447', dial: '919158114447' },
];

/* ---- Assets ------------------------------------------------------------ */
const ASSETS = {
  wordmark: 'src/assets/brand/aerc-acwala-wordmark.png',
  penguin:  'src/assets/brand/aerc-penguin-logo.png',
  hero:     'src/assets/hero.png',
};

/* ---- Primary navigation ------------------------------------------------ */
const NAV = [
  { label: 'Home',     href: 'index.html' },
  { label: 'About',    href: 'about.html' },
  { label: 'Services', href: 'services.html' },
  { label: 'Products', href: 'products.html' },
  { label: 'Brands',   href: 'brands.html' },
  { label: 'Contact',  href: 'contact.html' },
];

/* ---- Reusable inline SVG icons ---------------------------------------- */
const ICONS = {
  ac: '<path d="M3 8h18a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/><path d="M6 14v2m4-2v3m4-3v2m4-2v3"/><path d="M5 11h.01M8 11h4"/>',
  snow: '<path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19"/><path d="M12 5 9.5 7.5M12 5l2.5 2.5M12 19l-2.5-2.5M12 19l2.5-2.5M5 12l2.5-2.5M5 12l2.5 2.5M19 12l-2.5-2.5M19 12l-2.5 2.5"/>',
  fire: '<path d="M12 2s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3s3 1 3-6Z"/><path d="M12 22a4 4 0 0 0 4-4c0-2-2-3-2-3s-1 2-2 2-1-3-1-3-3 2-3 4a4 4 0 0 0 4 4Z"/>',
  blueprint: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18M14 14h4v4h-4z"/>',
  factory: '<path d="M2 20h20M4 20V9l5 3V9l5 3V4l5 3v13"/><path d="M8 20v-4m4 4v-4m4 4v-4"/>',
  gauge: '<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 2 5.66"/><path d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-2 5.66"/><path d="m13.5 10.5 3-3"/>',
  stock: '<path d="M3 7l9-4 9 4-9 4-9-4Z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Zm16 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"/><path d="M18 20a4 4 0 0 1-4 3h-2"/>',
  tune: '<path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="14" cy="18" r="2"/>',
  shield: '<path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  phone: '<path d="M6.6 3H4a1 1 0 0 0-1 1 16 16 0 0 0 16 16 1 1 0 0 0 1-1v-2.6a1 1 0 0 0-.7-.95l-3-.9a1 1 0 0 0-1 .25l-1.1 1.1a12 12 0 0 1-5.3-5.3l1.1-1.1a1 1 0 0 0 .25-1L7.55 3.7A1 1 0 0 0 6.6 3Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="10" r="2.6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
};

/* Build an SVG wrapper around a path set */
function icon(name, cls = 'w-6 h-6') {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

/* ---- Stats ------------------------------------------------------------- */
const STATS = [
  { value: 1991, prefix: 'Since ', suffix: '',   label: 'Trusted since', raw: true },
  { value: 35,   prefix: '',       suffix: '+',  label: 'Authorized brands' },
  { value: 100,  prefix: '',       suffix: '%',  label: 'Genuine products' },
  { value: 24,   prefix: '',       suffix: '×7', label: 'Service & support' },
];

/* ---- Services (drive Home overview + Services page) -------------------- */
const SERVICES = [
  {
    id: 'air-conditioning', icon: 'ac', title: 'Air Conditioning',
    summary: 'Residential & commercial cooling — from split & cassette units to large VRF/VRV systems, ductable and packaged units.',
    points: ['Split, cassette, tower & window ACs', 'VRF / VRV system design & install', 'Ductable & packaged units', 'Fan coil units for chilled water'],
    brands: ['Daikin', 'Mitsubishi', 'Samsung', 'Carrier', 'Voltas', 'Blue Star', 'LG', 'Hitachi', 'Panasonic'],
  },
  {
    id: 'refrigeration', icon: 'snow', title: 'Refrigeration & Cold Chain',
    summary: 'End-to-end cold chain — cold rooms, walk-ins, blast freezers, chillers and commercial refrigeration for food & pharma.',
    points: ['Cold storage, cold rooms & walk-ins', 'Blast freezers & chillers', 'Deep freezers, visi-coolers, ice machines', 'Medical & food-grade refrigeration'],
    brands: ['Copeland', 'Bitzer', 'Bluecold', 'Danfoss', 'Western', 'Hoshizaki', 'Guntner'],
  },
  {
    id: 'heating', icon: 'fire', title: 'Heating Solutions',
    summary: 'Energy-efficient heat pumps for sanitary hot water and swimming pools — up to 70% energy savings.',
    points: ['Sensi Hydro commercial heat pumps', 'Sanitary heating 100–2,000 L/H', 'Pool heating 30–2,000 m³', 'Water heaters & geysers'],
    brands: ['Copeland', 'Usha'],
  },
  {
    id: 'projects', icon: 'blueprint', title: 'System Design & Project Execution',
    summary: 'Turnkey HVAC-R engineering — system design, supply, installation, commissioning and after-sales by an experienced team.',
    points: ['Complete HVAC-R system design', 'Turnkey project execution', 'Commissioning & maintenance', 'Prompt after-sales service'],
    brands: [],
  },
  {
    id: 'manufacturing', icon: 'factory', title: 'Contract Manufacturing',
    summary: 'In-house manufacturing of condensers and cooling coils in Blue / Gold Fin for refrigeration & air-conditioning.',
    points: ['Open-type condensers & cooling coils', 'L-type condensers for AC', 'Condensing-unit kits (HVAC-R)', 'Blue / Gold Fin options'],
    brands: [],
  },
  {
    id: 'spares', icon: 'tune', title: 'Spares, Controls & Electronics',
    summary: 'The full range of compressors, refrigerant gases, flow controls and smart controllers — largest ready stock.',
    points: ['Compressors — scroll, recip, semi-hermetic', 'Floron refrigerant gases (R-22, R-410a, R-32…)', 'Flow controls, valves & filter driers', 'Digital controllers, data loggers, thermostats'],
    brands: ['SRF Floron', 'Danfoss', 'Honeywell', 'Dixell', 'Multispan'],
  },
];

/* ---- Why choose us ----------------------------------------------------- */
const WHY = [
  { icon: 'stock',   title: 'Largest Ready Stock', text: 'One of the largest ready-stock inventories of HVAC-R material for prompt delivery.' },
  { icon: 'clock',   title: 'Prompt After-Sales', text: 'Fast, reliable service and after-sales support that keeps your systems running.' },
  { icon: 'headset', title: 'Strong Technical Support', text: 'Deep application & technical expertise built over three decades in the field.' },
  { icon: 'tune',    title: 'Customized Solutions', text: 'Tailored HVAC-R solutions engineered around your exact requirements.' },
];

/* ---- Products / Cold Chain -------------------------------------------- */
const PRODUCTS = [
  { icon: 'snow',   title: 'Copeland Condensing Units', spec: '1 – 250 HP', text: 'Scroll, reciprocating, semi-hermetic & multi-compressor packs — air-cooled and water-cooled for the broadest cold-chain range.' },
  { icon: 'stock',  title: 'Bluecold Evaporators', spec: 'AlMg / SS 304', text: 'Freon cold-room evaporators, SS-distributor units and slim-line dual-discharge coils for rust-free, efficient cooling.' },
  { icon: 'factory',title: 'Blast Freezers & Chillers', spec: 'Floor · V-type · Ceiling', text: 'High-velocity blast freezers and chillers in floor, V-type and ceiling-mounted configurations for cold chain & food processing.' },
  { icon: 'fire',   title: 'Sensi Hydro Heat Pumps', spec: '300 – 2,000 LPH', text: 'Commercial sanitary heating powered by Copeland ZW scroll compressors — up to 70% energy savings, made in India.' },
  { icon: 'ac',     title: 'Deep Freezers & Visi-Coolers', spec: 'Hard/Glass Top', text: 'Eutectic freezers, visi-coolers, vertical freezers, scooping parlours and refrigerated prep tables.' },
  { icon: 'gauge',  title: 'Controls & Electronics', spec: 'Smart Monitoring', text: 'Digital process controllers, data loggers, site supervisors and case controllers for precise temperature management.' },
];

/* ---- Brands (grouped) -------------------------------------------------- */
const BRAND_GROUPS = [
  { group: 'Air Conditioning', items: ['Daikin', 'Mitsubishi Electric', 'Mitsubishi Heavy', 'Samsung', 'Carrier', 'Toshiba', 'Blue Star', 'Voltas', 'LG', 'Panasonic', 'Hitachi', 'Midea', 'Cruise', 'Godrej', 'Whirlpool'] },
  { group: 'Refrigeration & Cold Chain', items: ['Copeland', 'Bitzer', 'Bluecold', 'Western', 'Hoshizaki', 'Guntner', 'Tecumseh', 'Approcool'] },
  { group: 'Controls & Components', items: ['Danfoss', 'Honeywell', 'Dixell', 'Multispan (Cryo)', 'Alfa Laval', 'SRF Floron', 'PVR Controls', 'Rajco'] },
  { group: 'Fans, Power & Appliances', items: ['Usha', 'Skyland', 'Pixels', 'Govind Electricals'] },
];
/* Flat list for the marquee */
const BRANDS_FLAT = BRAND_GROUPS.flatMap(g => g.items);

/* ---- Memberships / certifications ------------------------------------- */
const MEMBERSHIPS = [
  { name: 'AISA', full: 'All India Air-conditioning Suppliers Assn.' },
  { name: 'RATA', full: 'Refrigeration & AC Traders Assn.' },
  { name: 'ISHRAE', full: 'Indian Society of HVAC Engineers' },
  { name: 'IIID', full: 'Institute of Indian Interior Designers' },
  { name: 'GeM', full: 'Government e-Marketplace' },
];

/* ---- Social links ------------------------------------------------------ */
const SOCIALS = [
  { name: 'Facebook',  href: '#', d: '<path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z"/>' },
  { name: 'Instagram', href: '#', d: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>' },
  { name: 'YouTube',   href: '#', d: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none"/>' },
  { name: 'Google',    href: '#', d: '<path d="M21 12.5c0 5-3.5 8-8.5 8a8.5 8.5 0 1 1 5.8-14.7L15.6 8A5 5 0 1 0 17 13h-4.5v-2.9H21c.1.4 0 1 0 2.4Z" stroke="none" fill="currentColor"/>' },
];
