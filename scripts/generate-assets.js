import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1. Create Bgmap.png (World Map with Red Network Arcs and Glowing Nodes)
function createBgmapSvg() {
  const width = 2400;
  const height = 1200;

  // Key global nodes (x, y coordinates on 2400x1200 canvas)
  const hubs = [
    { id: 'sf', name: 'San Francisco', x: 440, y: 460 },
    { id: 'nyc', name: 'New York', x: 680, y: 440 },
    { id: 'sao', name: 'São Paulo', x: 820, y: 860 },
    { id: 'lon', name: 'London', x: 1180, y: 340 },
    { id: 'fra', name: 'Frankfurt', x: 1250, y: 360 },
    { id: 'dxb', name: 'Dubai', x: 1480, y: 510 },
    { id: 'bom', name: 'Mumbai', x: 1620, y: 560 },
    { id: 'sin', name: 'Singapore', x: 1820, y: 700 },
    { id: 'tok', name: 'Tokyo', x: 2020, y: 450 },
    { id: 'syd', name: 'Sydney', x: 2110, y: 940 },
    { id: 'jnb', name: 'Johannesburg', x: 1320, y: 910 },
    { id: 'los', name: 'Lagos', x: 1180, y: 680 },
    { id: 'nbo', name: 'Nairobi', x: 1390, y: 710 },
    { id: 'tor', name: 'Toronto', x: 660, y: 410 },
    { id: 'ber', name: 'Berlin', x: 1270, y: 340 },
    { id: 'hkg', name: 'Hong Kong', x: 1840, y: 560 },
    { id: 'sha', name: 'Shanghai', x: 1910, y: 510 },
    { id: 'seo', name: 'Seoul', x: 1950, y: 440 },
  ];

  // Arcs between hubs with curve control points
  const connections = [
    { from: 'nyc', to: 'lon', cx: 930, cy: 260 },
    { from: 'sf', to: 'nyc', cx: 560, cy: 380 },
    { from: 'sf', to: 'tok', cx: 1200, cy: 120 },
    { from: 'nyc', to: 'sao', cx: 780, cy: 650 },
    { from: 'lon', to: 'fra', cx: 1215, cy: 330 },
    { from: 'fra', to: 'dxb', cx: 1360, cy: 400 },
    { from: 'dxb', to: 'bom', cx: 1550, cy: 500 },
    { from: 'bom', to: 'sin', cx: 1720, cy: 610 },
    { from: 'sin', to: 'tok', cx: 1940, cy: 560 },
    { from: 'sin', to: 'syd', cx: 1980, cy: 820 },
    { from: 'tok', to: 'syd', cx: 2090, cy: 690 },
    { from: 'lon', to: 'los', cx: 1160, cy: 510 },
    { from: 'los', to: 'jnb', cx: 1230, cy: 800 },
    { from: 'sao', to: 'jnb', cx: 1070, cy: 950 },
    { from: 'dxb', to: 'nbo', cx: 1420, cy: 610 },
    { from: 'hkg', to: 'sin', cx: 1810, cy: 630 },
    { from: 'sha', to: 'tok', cx: 1960, cy: 460 },
    { from: 'lon', to: 'dxb', cx: 1330, cy: 390 },
    { from: 'nyc', to: 'fra', cx: 960, cy: 280 },
  ];

  // Detailed continent path silhouettes (Mercator/Equirectangular approx layout scaled to 2400x1200)
  const continentPaths = [
    // North America (Alaska, Canada, USA, Mexico, Central America)
    `M 280,240 Q 320,180 440,160 Q 560,140 680,180 Q 760,200 820,280 Q 860,340 840,420 Q 760,430 720,410 Q 700,450 670,500 Q 620,530 580,590 Q 550,650 510,670 Q 480,630 450,560 Q 400,520 370,450 Q 340,380 290,320 Z`,
    // Greenland
    `M 860,120 Q 940,100 1000,140 Q 980,220 920,240 Q 860,220 860,120 Z`,
    // South America
    `M 680,690 Q 760,670 840,730 Q 910,810 880,900 Q 840,1020 780,1110 Q 740,1080 730,990 Q 700,900 660,820 Q 640,750 680,690 Z`,
    // Europe & Scandinavia
    `M 1120,380 Q 1150,280 1200,220 Q 1260,180 1310,240 Q 1340,320 1380,360 Q 1340,420 1260,440 Q 1180,450 1140,420 Z`,
    // British Isles
    `M 1110,310 Q 1140,300 1150,330 Q 1130,370 1100,360 Z`,
    // Africa
    `M 1160,470 Q 1280,460 1380,500 Q 1460,560 1440,680 Q 1410,790 1360,920 Q 1310,990 1260,960 Q 1180,850 1140,740 Q 1090,630 1110,540 Z`,
    // Eurasia & Asia (Middle East, Russia, India, China, SE Asia)
    `M 1380,340 Q 1520,220 1740,200 Q 1980,220 2160,280 Q 2120,380 2060,440 Q 1980,460 1920,530 Q 1860,640 1780,720 Q 1720,680 1660,590 Q 1580,680 1540,580 Q 1440,540 1380,460 Z`,
    // India Subcontinent
    `M 1580,520 Q 1640,530 1670,580 Q 1660,660 1620,720 Q 1580,660 1570,590 Z`,
    // Japan
    `M 2030,410 Q 2060,430 2050,480 Q 2020,490 2010,440 Z`,
    // Australia
    `M 1940,840 Q 2060,820 2160,870 Q 2200,960 2140,1040 Q 2040,1060 1950,1010 Q 1910,930 1940,840 Z`,
    // New Zealand
    `M 2260,1010 Q 2280,1020 2270,1080 Q 2240,1060 2260,1010 Z`,
    // Indonesia & Philippines Islands
    `M 1820,740 Q 1880,730 1940,750 Q 1920,780 1840,770 Z`,
    `M 1890,610 Q 1930,620 1910,670 Q 1880,650 1890,610 Z`
  ];

  // Secondary subtle particle nodes across map
  const particles = [];
  for (let i = 0; i < 90; i++) {
    const rx = 300 + Math.sin(i * 12.3) * 900 + 900;
    const ry = 200 + Math.cos(i * 7.7) * 450 + 450;
    const r = (i % 3 === 0) ? 2.5 : 1.5;
    const op = (i % 2 === 0) ? 0.6 : 0.35;
    particles.push(`<circle cx="${rx.toFixed(1)}" cy="${ry.toFixed(1)}" r="${r}" fill="#E4032E" opacity="${op}" />`);
  }

  // Generate SVG arcs
  const arcElements = connections.map((conn, idx) => {
    const fromNode = hubs.find(h => h.id === conn.from);
    const toNode = hubs.find(h => h.id === conn.to);
    if (!fromNode || !toNode) return '';
    return `
      <!-- Connection Arc ${idx} -->
      <path d="M ${fromNode.x},${fromNode.y} Q ${conn.cx},${conn.cy} ${toNode.x},${toNode.y}" 
            fill="none" stroke="#E4032E" stroke-width="2.2" stroke-opacity="0.85" filter="url(#glow)" />
      <path d="M ${fromNode.x},${fromNode.y} Q ${conn.cx},${conn.cy} ${toNode.x},${toNode.y}" 
            fill="none" stroke="#FF4D6D" stroke-width="1" stroke-opacity="0.95" />
      <path d="M ${fromNode.x},${fromNode.y} Q ${conn.cx},${conn.cy} ${toNode.x},${toNode.y}" 
            fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-dasharray="4,24" stroke-opacity="0.75" />
    `;
  }).join('');

  // Generate Hub Nodes
  const hubElements = hubs.map(hub => `
    <g class="hub-node" id="hub-${hub.id}">
      <!-- Outer pulse glow -->
      <circle cx="${hub.x}" cy="${hub.y}" r="16" fill="#E4032E" opacity="0.25" filter="url(#glow)" />
      <circle cx="${hub.x}" cy="${hub.y}" r="9" fill="#E4032E" opacity="0.45" />
      <circle cx="${hub.x}" cy="${hub.y}" r="5.5" fill="#E4032E" />
      <circle cx="${hub.x}" cy="${hub.y}" r="2.5" fill="#FFFFFF" />
    </g>
  `).join('');

  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Glow filter -->
      <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <!-- Heavy Glow filter -->
      <filter id="heavyGlow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="14" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <!-- Background Radial Gradient -->
      <radialGradient id="bgGrad" cx="50%" cy="50%" r="65%">
        <stop offset="0%" stop-color="#0E080D" />
        <stop offset="45%" stop-color="#07060A" />
        <stop offset="100%" stop-color="#020204" />
      </radialGradient>

      <!-- Continent Gradient -->
      <linearGradient id="continentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#181B26" />
        <stop offset="50%" stop-color="#141620" />
        <stop offset="100%" stop-color="#0D0F17" />
      </linearGradient>

      <!-- Red Accent Gradient -->
      <linearGradient id="redAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FF2A4D" />
        <stop offset="100%" stop-color="#E4032E" />
      </linearGradient>
    </defs>

    <!-- Deep Space Black Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

    <!-- Subtle Red Atmosphere Ambient Glow -->
    <circle cx="1200" cy="550" r="800" fill="#E4032E" opacity="0.04" filter="url(#heavyGlow)" />
    <circle cx="600" cy="450" r="450" fill="#E4032E" opacity="0.03" filter="url(#heavyGlow)" />
    <circle cx="1800" cy="500" r="500" fill="#E4032E" opacity="0.03" filter="url(#heavyGlow)" />

    <!-- Subtle Coordinate Grid Lines (Dotted) -->
    <g stroke="#261A24" stroke-width="1" stroke-dasharray="3,9" opacity="0.35">
      <!-- Latitude lines -->
      <line x1="0" y1="250" x2="${width}" y2="250" />
      <line x1="0" y1="450" x2="${width}" y2="450" />
      <line x1="0" y1="650" x2="${width}" y2="650" />
      <line x1="0" y1="850" x2="${width}" y2="850" />
      <line x1="0" y1="1050" x2="${width}" y2="1050" />
      <!-- Longitude lines -->
      <line x1="400" y1="0" x2="400" y2="${height}" />
      <line x1="800" y1="0" x2="800" y2="${height}" />
      <line x1="1200" y1="0" x2="1200" y2="${height}" />
      <line x1="1600" y1="0" x2="1600" y2="${height}" />
      <line x1="2000" y1="0" x2="2000" y2="${height}" />
    </g>

    <!-- Continent Base Outlines -->
    <g fill="url(#continentGrad)" stroke="#381622" stroke-width="1.8" filter="drop-shadow(0 0 12px rgba(228, 3, 46, 0.15))">
      ${continentPaths.map(p => `<path d="${p}" />`).join('\n')}
    </g>

    <!-- Coastline Red Edge Highlights -->
    <g fill="none" stroke="#E4032E" stroke-width="1.2" stroke-opacity="0.35">
      ${continentPaths.map(p => `<path d="${p}" />`).join('\n')}
    </g>

    <!-- Background Data Particle Stars -->
    <g>${particles.join('\n')}</g>

    <!-- Glowing Red Network Arcs -->
    <g>${arcElements}</g>

    <!-- Hub Nodes with Halos -->
    <g>${hubElements}</g>
  </svg>`;
}

// 2. Create rizqoraalogo.png (The Official Rizqoraa Corporate Logo)
function createRizqoraaLogoSvg(isDark = false) {
  const width = 1400;
  const height = 400;
  const textColor = isDark ? '#FFFFFF' : '#141414';
  const subtitleColor = isDark ? '#E2E8F0' : '#1E293B';
  const tmColor = isDark ? '#94A3B8' : '#64748B';

  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Red brand gradients -->
      <linearGradient id="rubyRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF2E51" />
        <stop offset="60%" stop-color="#E4032E" />
        <stop offset="100%" stop-color="#A5001E" />
      </linearGradient>

      <!-- Glossy Black / Charcoal Gradient -->
      <linearGradient id="glossyBlack" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2D3139" />
        <stop offset="50%" stop-color="#14161C" />
        <stop offset="100%" stop-color="#08090C" />
      </linearGradient>

      <!-- Globe Sphere Gradient -->
      <radialGradient id="globeSphere" cx="38%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#4A505E" />
        <stop offset="40%" stop-color="#222630" />
        <stop offset="85%" stop-color="#0F1116" />
        <stop offset="100%" stop-color="#050608" />
      </radialGradient>

      <!-- Glow filter -->
      <filter id="logoGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <!-- Ambient bottom glow -->
      <radialGradient id="ambientBottomGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#E4032E" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#E4032E" stop-opacity="0" />
      </radialGradient>
    </defs>

    <!-- Optional transparent canvas background -->

    <!-- ==================== LEFT 3D EMBLEM ==================== -->
    <g transform="translate(190, 200)">
      <!-- Soft ambient red shadow/glow underneath globe -->
      <ellipse cx="0" cy="85" rx="80" ry="18" fill="url(#ambientBottomGlow)" />

      <!-- The Core 3D Globe Sphere -->
      <circle cx="0" cy="0" r="76" fill="url(#globeSphere)" />

      <!-- Lat/Long Continental Wireframe on Sphere -->
      <g opacity="0.35" stroke="#94A3B8" stroke-width="1.2" fill="none">
        <!-- Equator and parallels -->
        <ellipse cx="0" cy="0" rx="76" ry="24" stroke="#E4032E" stroke-width="1.6" opacity="0.75" />
        <ellipse cx="0" cy="-28" rx="68" ry="18" />
        <ellipse cx="0" cy="28" rx="68" ry="18" />
        <!-- Longitude meridians -->
        <ellipse cx="0" cy="0" rx="28" ry="76" />
        <ellipse cx="0" cy="0" rx="56" ry="76" />
        <line x1="0" y1="-76" x2="0" y2="76" />
      </g>

      <!-- Stylized Metallic Continents -->
      <path d="M -45,-30 Q -25,-45 5,-35 Q 25,-15 15,10 Q -5,25 -25,15 Q -40,5 -45,-30 Z" 
            fill="#CBD5E1" opacity="0.25" />
      <path d="M 10,20 Q 30,15 45,35 Q 40,55 20,50 Q 5,40 10,20 Z" 
            fill="#CBD5E1" opacity="0.25" />

      <!-- Outer 3D Glossy Orbit Ribbon (Black Metallic) -->
      <path d="M -85,45 C -115,20 -105,-40 -50,-65 C 5,-90 75,-65 95,-35 C 98,-30 88,-25 80,-30 C 62,-52 0,-70 -42,-48 C -85,-25 -92,20 -72,38 Z" 
            fill="url(#glossyBlack)" />

      <!-- Front Dynamic Swoosh Orbit Ribbon (Vivid Glossy Red) -->
      <path d="M -90,30 C -95,45 -80,68 -45,78 C 5,88 70,68 100,25 C 108,12 110,-5 98,-3 C 86, -1 84,12 76,22 C 52,55 -2,68 -40,58 C -70,50 -80,32 -78,22 Z" 
            fill="url(#rubyRed)" filter="url(#logoGlow)" />

      <!-- Top-Right Red Satellite Sphere / Orbit Pearl -->
      <circle cx="95" cy="-32" r="11" fill="url(#rubyRed)" filter="url(#logoGlow)" />
      <circle cx="92" cy="-35" r="3.5" fill="#FFFFFF" opacity="0.85" />

      <!-- Lower-Left Accent Sphere -->
      <circle cx="-82" cy="40" r="7" fill="url(#rubyRed)" filter="url(#logoGlow)" />
      <circle cx="-84" cy="38" r="2" fill="#FFFFFF" opacity="0.8" />
    </g>

    <!-- ==================== RIGHT BRAND TYPOGRAPHY ==================== -->
    <g transform="translate(350, 0)">
      <!-- Main "RIZQORAA" Text rendered with custom high-tech geometric precision -->
      <g font-family="'Space Grotesk', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="800" letter-spacing="0.08em">
        
        <!-- R -->
        <text x="0" y="225" font-size="112" fill="${textColor}">R</text>

        <!-- I -->
        <text x="95" y="225" font-size="112" fill="${textColor}">I</text>

        <!-- Z -->
        <text x="145" y="225" font-size="112" fill="${textColor}">Z</text>

        <!-- Q: Custom outer Q ring with center RED DOT -->
        <!-- Q letter body -->
        <text x="240" y="225" font-size="112" fill="${textColor}">Q</text>
        <!-- The signature Rizqoraa Red Dot inside Q -->
        <circle cx="303" cy="184" r="10.5" fill="url(#rubyRed)" filter="url(#logoGlow)" />

        <!-- O -->
        <text x="360" y="225" font-size="112" fill="${textColor}">O</text>

        <!-- R -->
        <text x="475" y="225" font-size="112" fill="${textColor}">R</text>

        <!-- First Stylized A (chevron ∧) -->
        <g transform="translate(575, 132)">
          <path d="M 40,0 L 78,92 L 62,92 L 40,28 L 18,92 L 2,92 Z" fill="${textColor}" />
        </g>

        <!-- Second Stylized A (chevron ∧) -->
        <g transform="translate(665, 132)">
          <path d="M 40,0 L 78,92 L 62,92 L 40,28 L 18,92 L 2,92 Z" fill="${textColor}" />
        </g>

        <!-- TM Symbol -->
        <text x="752" y="152" font-size="18" font-weight="700" fill="${tmColor}" letter-spacing="0.02em">TM</text>
      </g>

      <!-- ==================== TAGLINE ROW ==================== -->
      <g transform="translate(0, 275)">
        <!-- Left Red Line -->
        <rect x="2" y="0" width="85" height="3.5" rx="1.75" fill="url(#rubyRed)" />

        <!-- Tagline Text: CONNECTING EVERY LANGUAGE -->
        <text x="98" y="4" font-family="'Space Grotesk', 'Plus Jakarta Sans', sans-serif" 
              font-size="20.5" font-weight="700" fill="${subtitleColor}" letter-spacing="0.26em">
          CONNECTING EVERY LANGUAGE
        </text>

        <!-- Right Red Line -->
        <rect x="668" y="0" width="85" height="3.5" rx="1.75" fill="url(#rubyRed)" />
      </g>
    </g>
  </svg>`;
}

async function run() {
  console.log('Generating Bgmap.png and rizqoraalogo.png...');

  // Ensure directories exist
  const dirs = [
    path.resolve('public/assets/images'),
    path.resolve('src/assets/images'),
    path.resolve('public')
  ];
  dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

  // 1. Generate Bgmap.png
  const bgmapSvg = createBgmapSvg();
  const bgmapBuffer = Buffer.from(bgmapSvg);

  const bgmapPng = await sharp(bgmapBuffer)
    .resize(2400, 1200)
    .png({ quality: 95, compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync('public/assets/images/Bgmap.png', bgmapPng);
  fs.writeFileSync('public/Bgmap.png', bgmapPng);
  fs.writeFileSync('src/assets/images/Bgmap.png', bgmapPng);
  console.log('Bgmap.png created successfully (2400x1200)!');

  // 2. Generate rizqoraalogo.png (Transparent background with crisp corporate branding)
  const logoSvg = createRizqoraaLogoSvg(false);
  const logoBuffer = Buffer.from(logoSvg);

  const logoPng = await sharp(logoBuffer)
    .resize(1400, 400)
    .png({ quality: 100, compressionLevel: 7 })
    .toBuffer();

  fs.writeFileSync('public/assets/images/rizqoraalogo.png', logoPng);
  fs.writeFileSync('public/rizqoraalogo.png', logoPng);
  fs.writeFileSync('src/assets/images/rizqoraalogo.png', logoPng);
  console.log('rizqoraalogo.png created successfully (1400x400)!');

  // 3. Generate dark variant rizqoraalogo_dark.png for dark backgrounds
  const logoDarkSvg = createRizqoraaLogoSvg(true);
  const logoDarkBuffer = Buffer.from(logoDarkSvg);

  const logoDarkPng = await sharp(logoDarkBuffer)
    .resize(1400, 400)
    .png({ quality: 100, compressionLevel: 7 })
    .toBuffer();

  fs.writeFileSync('public/assets/images/rizqoraalogo_dark.png', logoDarkPng);
  fs.writeFileSync('public/rizqoraalogo_dark.png', logoDarkPng);
  console.log('rizqoraalogo_dark.png created successfully!');
}

run().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
