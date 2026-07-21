// ─── SITE IDENTITY ───────────────────────────────────────────────────────────
export const SITE = {
  name: 'kgec',
  full: 'Kuwait Green Energy Co.',
  tagline: 'Total solutions for Oil, Gas & Power',
  phone: '+965 9800 5586',
  email: 'sales@kuwaitgreenenergy.com',
  address: 'PO Box 123, Kuwait',
  location: 'Ali Sabah Al Salem, Kuwait',
  est: '2019',
};

// ─── HERO ────────────────────────────────────────────────────────────────────
export const HERO = {
  heading: 'Precision engineering\nfor Oil, Gas & Power.',
  sub: 'API Q1 and ISO 9001:2015 certified specialists, engineering precision for Kuwait\'s most demanding operators.',
  tag: 'Oil. Gas. Power.',
};

// ─── MANIFESTO ───────────────────────────────────────────────────────────────
export const MANIFESTO = {
  eyebrow: 'Who we are',
  heading: 'Built for the demands of energy.',
  body: 'KGEC is Kuwait\'s integrated engineering services company for the Oil, Gas & Power sectors. From API-certified component manufacturing to 30,000 PSI in-house pressure testing, our workshop and field teams close the gap between procurement and execution, with full certification traceability on every deliverable.',
};

// ─── MILESTONES ──────────────────────────────────────────────────────────────
export const MILESTONES = [
  {
    year: '2019',
    heading: 'Founded in Kuwait',
    body: 'Kuwait Green Energy Co. was established with ISO 9001:2015 and API Q1 certification from day one, a quality standard most regional competitors took years to reach.',
    tags: ['ISO 9001', 'API Q1'],
  },
  {
    year: '2021',
    heading: '30,000 PSI Testing Facility',
    body: 'We commissioned Kuwait\'s most capable in-house pressure testing facility. Valves, manifolds and components are tested to 30,000 PSI without leaving our workshop, so there are no third-party delays.',
    tags: ['30,000 PSI', 'In-house'],
  },
  {
    year: '2023',
    heading: 'Full API Portfolio',
    body: 'We added API 6A, 7-1 and 5CT manufacturing authorisations alongside Q1, becoming one of the few Kuwait-based companies authorised across the full API wellhead and drilling spectrum.',
    tags: ['API 6A', '7-1 & 5CT'],
  },
  {
    year: '2025',
    heading: '5 Certifications. 100+ Clients.',
    body: 'Five active API and ISO certifications, 100+ clients served, 100+ projects completed and 30+ specialists on staff. KGEC enters its seventh year as Kuwait\'s most certified independent engineering services provider.',
    tags: ['5 Certs', '100+ Clients'],
  },
];

// ─── SERVICES ────────────────────────────────────────────────────────────────
export interface Service {
  id: string;
  label: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  keyStat: string;
  keyStatLabel: string;
}

export const SERVICES: Service[] = [
  {
    id: 'oilgas',
    label: 'Oil & Gas Equipment',
    subtitle: 'API-certified machining & manufacturing',
    description:
      'Our large-format precision machine shop manufactures and repairs API 6A and API 7-1 components to tight tolerances, from crossovers and spools to rotary shoulder connections. Every part is documented, tested and traceable.',
    capabilities: [
      'API 6A Manufacturing: DSAs, Spools, Tee & Crosses, Thread Connectors, Adaptor Flanges',
      'API 7-1 Products: Rotary Shoulder Connections, Lifting Subs, Crossovers',
      'Thread Repairing, Re-Threading & Re-facing Shoulder Seal Area',
      'Cold Root Rolling, Lathe Turning, CNC Milling & Boring',
      'Stabilizer Grinding and Hard-facing',
      'Repair & Recertification of API 6A products to original specification',
    ],
    keyStat: 'API 6A & 7-1',
    keyStatLabel: 'Manufacturing authorised',
  },
  {
    id: 'fabrication',
    label: 'Design & Fabrication',
    subtitle: 'Custom engineering for harsh conditions',
    description:
      'From concept to completion, our qualified welding and fabrication team handles some of the industry\'s toughest structural and pressure fabrication work. We design and build to customer specification, fully custom and fully traceable.',
    capabilities: [
      'Equipment Racks, Skids & Transportation Stands (BOP, Riser, Cement Heads)',
      'Custom Cantilever Racks for heavy-duty Riser and Flange storage',
      'Suction & Pressure Manifolds, High-Pressure Piping, Mud Suitcase Lines',
      'Drill Pipe Baskets, Man-lift Baskets',
      'Water & Fuel Tanks, Industrial Fixtures & Heavy-Duty Tables',
      'Sand / Grit Blasting & Industrial Painting',
      'Fully custom designs from concept drawing to site delivery',
    ],
    keyStat: 'Full custom',
    keyStatLabel: 'Design-to-delivery fabrication',
  },
  {
    id: 'rotating',
    label: 'Rotating Equipment',
    subtitle: 'Overhaul, repair & performance restoration',
    description:
      'KGEC\'s rotating equipment specialists carry both workshop and field capability for pumps, compressors, gearboxes, motors and agitators. We restore to OEM specification, or better, backed by laser alignment and vibration analysis.',
    capabilities: [
      'Overhaul & Repair: Pumps, Compressors, Gearboxes, Motors, Agitators',
      'Motor Rewinding & Repair up to 250 HP',
      'Laser Alignment & Vibration Analysis',
      'Mechanical Seal Diagnosis, Repair & Replacement',
      'In-house CNC Machining, Fabricating & Welding',
      'Pump Re-rate, Upgrade & Performance Optimisation',
      'Onshore in-situ Repair, Overhaul & Installation',
    ],
    keyStat: '250 HP',
    keyStatLabel: 'Motor rewinding capacity',
  },
  {
    id: 'valves',
    label: 'Valve Maintenance',
    subtitle: 'Complete valve services — shop & onsite',
    description:
      'From routine gate valve overhaul to mobile PSV workshop rental, our valve engineers support every client requirement at our facility or yours. Testing is certified to API 598, 6D and 527.',
    capabilities: [
      'Overhaul of Gate, Globe, Check, Ball & all pipeline valve types',
      'Pressure Relief Valve (PSV) Testing, Calibration & Overhaul — Mobile Workshop Available',
      'Control Valve Testing, Calibration & Overhaul',
      'Hydrostatic & Pneumatic Testing to API 598, 6D, 527 & Client Specifications',
      'Valve Cleaning, Part Repair, Part Manufacture & Modification',
      'Installation & Commissioning for new projects',
      'Rental: Mobile PSV Workshop, Testing Rigs, Pumps & Blind Flanges',
    ],
    keyStat: 'API 598 / 6D',
    keyStatLabel: 'Testing certification standard',
  },
  {
    id: 'testing',
    label: 'Testing & Certification',
    subtitle: '30,000 PSI in-house test facility',
    description:
      'Our in-house pressure testing facility handles up to 30,000 PSI, one of the highest-rated independent test capabilities in Kuwait. Backed by five active API and ISO certifications, every deliverable arrives fully documented and traceable.',
    capabilities: [
      'Hydrostatic Pressure Testing up to 30,000 PSI in-house',
      'API 6A — Wellhead & Christmas Tree Equipment manufacturing & repair',
      'API 7-1 — Rotary Drilling Equipment threaded connections',
      'API Q1 — Quality Management System for oil & gas manufacturing',
      'API 5CT — Casing & Tubing threading and inspection',
      'ISO 9001:2015 — International Quality Management (entire operation)',
      'Full documentation, traceability & certification on every deliverable',
    ],
    keyStat: '30,000 PSI',
    keyStatLabel: 'In-house test capacity',
  },
];

// ─── WHY US ──────────────────────────────────────────────────────────────────
export const WHY_US = [
  {
    title: 'Certified to the Standard',
    body: 'Five active API and ISO certifications (6A, 7-1, Q1, 5CT and ISO 9001:2015) run through everything we build. Every component is tested, documented and traceable back to the raw material.',
  },
  {
    title: 'Kuwait-Native Expertise',
    body: 'Based in Kuwait and built for Kuwait\'s operators, we know the local regulatory environment, supply chain and operator expectations better than a foreign contractor can. There are no mobilisation delays.',
  },
  {
    title: '30,000 PSI In-House',
    body: 'Our own pressure testing facility handles up to 30,000 PSI, the benchmark for demanding wellhead and completion work. We test, document and certify in-house rather than outsourcing it.',
  },
  {
    title: 'End-to-End Capability',
    body: 'From raw material to finished API product, from field disassembly to rebuilt rotating equipment, one team carries the full scope. That means fewer vendors, less handover risk and one point of accountability.',
  },
];

// ─── PROOF STATS ─────────────────────────────────────────────────────────────
export const PROOF_STATS = [
  { val: '100', suffix: '+', label: 'Clients across Kuwait\'s Oil & Gas sector' },
  { val: '100', suffix: '+', label: 'Projects completed to API specification' },
  { val: '30,000', suffix: ' PSI', label: 'In-house pressure testing capacity' },
  { val: '6', suffix: '+', label: 'Years of uninterrupted service in Kuwait' },
  { val: '5', suffix: '', label: 'Active API & ISO certifications' },
  { val: '30', suffix: '+', label: 'Engineers, technicians & fabricators on staff' },
];

// ─── CERTIFICATIONS ──────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    id: 'api-6a',
    name: 'API 6A',
    full: 'Wellhead & Christmas Tree Equipment',
    body: 'Authorises KGEC to manufacture and repair wellhead equipment rated up to 20,000 PSI. It\'s the foundational credential for supplying components to Kuwait\'s producing wells.',
    year: '2025',
  },
  {
    id: 'api-7-1',
    name: 'API 7-1',
    full: 'Rotary Drilling Equipment',
    body: 'Covers the threading and inspection of rotary shoulder connections, the critical joints between drill string components. It confirms we manufacture to the specification the global drilling industry expects.',
    year: '2025',
  },
  {
    id: 'api-q1',
    name: 'API Q1',
    full: 'Quality Management — Oil & Gas Manufacturing',
    body: 'The petroleum industry\'s quality management standard, a step beyond ISO 9001. Every manufacturing process, supplier qualification and inspection procedure at KGEC operates under this framework.',
    year: '2025',
  },
  {
    id: 'api-5ct',
    name: 'API 5CT',
    full: 'Casing & Tubing',
    body: 'Covers the threading and inspection of casing and tubing used in well completions, so Kuwait\'s completion contractors can rely on KGEC for threading that meets the full specification.',
    year: '2025',
  },
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    full: 'International Quality Management System',
    body: 'Our entire operation, from quotation to delivery, is audited and certified under ISO 9001:2015: consistent process, documented outcomes, continuous improvement.',
    year: '2025',
  },
];

// ─── CAREERS ─────────────────────────────────────────────────────────────────
export const CAREERS = {
  heading: 'Build your career at Kuwait\'s premier energy services company.',
  body: 'KGEC is a place where engineers, technicians and operations specialists work on real challenges at the heart of Kuwait\'s active energy sector. We invest in our people through certifications, technical training and a culture where expertise is recognised and rewarded.',
  pillars: [
    {
      title: 'Technical Mastery',
      body: 'We actively support API and ISO certification training for our technical staff. If you want to deepen your engineering credentials, this is where that happens.',
    },
    {
      title: 'Real Responsibility',
      body: 'Our teams own their work from scope definition to sign-off, with no layers of bureaucracy between you and the client outcome.',
    },
    {
      title: 'Meaningful Work',
      body: 'Every project you complete directly supports the infrastructure that powers Kuwait\'s oil, gas and power sectors.',
    },
    {
      title: 'Growth Track',
      body: 'From technician to specialist to team lead, we build our senior roles from within. Your progression is a function of your output.',
    },
  ],
  note: 'Send your CV and the role you\'re targeting to our team. We review every application personally.',
};

// ─── CTA ─────────────────────────────────────────────────────────────────────
export const CTA = {
  heading: 'Engage Kuwait\'s most certified engineering team.',
  sub: 'KGEC delivers end-to-end engineering solutions to Kuwait\'s most demanding operators, from API component manufacturing to full rotating equipment overhaul. Let\'s talk about what your project needs.',
  primary: 'Start a Project',
  secondary: 'View Certifications',
};

// ─── NAV + FOOTER ────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export const FOOTER = {
  copy: '© 2025 Kuwait Green Energy Co. — ISO 9001:2015 & API Q1 Certified',
  ticker: 'API 6A · API 7-1 · API Q1 · API 5CT · ISO 9001:2015 · Kuwait Green Energy Co. · Oil, Gas & Power Engineering · 30,000 PSI Testing · 100+ Projects Delivered · 6+ Years in Kuwait ·',
};
