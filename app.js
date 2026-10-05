/**
 * CivicRelay 2.0 — Austin Civic Action & 311 Municipal Triage
 * Built for WarriorHacks 2.0 (Westwood CS Club, Austin, TX)
 */

// --- 1. SEED DATA WITH REAL AUSTIN COORDINATES & DETAILS ---
const defaultReports = [
  {
    id: "r1",
    ticketCode: "ATX-2026-0814",
    title: "Audible walk signal broken at 5th St crossing",
    category: "accessibility",
    urgency: "high",
    location: "East Cesar Chavez & 5th St",
    lat: 30.2625,
    lng: -97.7289,
    description: "The audible chirping cue and countdown display have stopped working. This creates a severe navigation hazard for visually impaired residents crossing toward the rail station.",
    status: "open",
    time: "2h ago",
    mine: false,
    endorsements: 16,
    icon: "♿",
    photo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'><rect width='400' height='220' fill='%23223f42'/><text x='200' y='100' font-family='sans-serif' font-size='42' fill='%2363cdc1' text-anchor='middle'>🚦 ♿</text><text x='200' y='145' font-family='sans-serif' font-size='14' fill='%23d7eee5' text-anchor='middle'>Signal Countdown Inactive (5th St)</text></svg>",
    timeline: [
      { title: "Report Submitted", desc: "Citizen signal broadcasted on community grid.", time: "2h ago" },
      { title: "AI Triage Verification", desc: "Severity verified: High. Suggested dispatch: Signals Division.", time: "1h ago" },
      { title: "Community Endorsements", desc: "16 neighbors endorsed this issue.", time: "45m ago" }
    ]
  },
  {
    id: "r2",
    ticketCode: "ATX-2026-0819",
    title: "Overflowing public trash receptacle",
    category: "cleanliness",
    urgency: "medium",
    location: "Rosewood Ave & Chicon St",
    lat: 30.2742,
    lng: -97.7175,
    description: "The dual recycling and landfill receptacle outside the community garden is overflowing with windborne debris scattering into the drainage gutter.",
    status: "in_progress",
    time: "5h ago",
    mine: false,
    endorsements: 9,
    icon: "♻",
    photo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'><rect width='400' height='220' fill='%232c253d'/><text x='200' y='100' font-family='sans-serif' font-size='42' fill='%23b2a2e8' text-anchor='middle'>♻️ 🗑️</text><text x='200' y='145' font-family='sans-serif' font-size='14' fill='%23ede9fb' text-anchor='middle'>Waste Overfill at Rosewood</text></svg>",
    timeline: [
      { title: "Report Submitted", desc: "Signal logged via mobile web.", time: "5h ago" },
      { title: "Austin Resource Recovery", desc: "Route truck #14 assigned for collection.", time: "3h ago" }
    ]
  },
  {
    id: "r3",
    ticketCode: "ATX-2026-0792",
    title: "High-mast streetlight fixed on 12th St",
    category: "safety",
    urgency: "high",
    location: "East 12th St & Navasota",
    lat: 30.2755,
    lng: -97.7245,
    description: "The primary intersection illumination fixture has been completely restored. Full visibility restored for pedestrians and night cyclists.",
    status: "resolved",
    time: "Yesterday",
    mine: true,
    endorsements: 28,
    icon: "◉",
    photo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'><rect width='400' height='220' fill='%23193c2b'/><text x='200' y='100' font-family='sans-serif' font-size='42' fill='%236fe09b' text-anchor='middle'>💡 ✓</text><text x='200' y='145' font-family='sans-serif' font-size='14' fill='%23dcf4e5' text-anchor='middle'>Resolved: Austin Energy Work Order Complete</text></svg>",
    timeline: [
      { title: "Report Submitted", desc: "Citizen report logged.", time: "3 days ago" },
      { title: "Dispatched", desc: "Austin Energy Maintenance Unit 4.", time: "2 days ago" },
      { title: "Resolved & Verified", desc: "Community confirmed operational lighting.", time: "Yesterday" }
    ]
  },
  {
    id: "r4",
    ticketCode: "ATX-2026-0824",
    title: "Large pothole causing bicycle hazard",
    category: "infrastructure",
    urgency: "critical",
    location: "Riverside Dr near S Congress",
    lat: 30.2541,
    lng: -97.7472,
    description: "A deep 7-inch asphalt fissure has opened up directly in the designated bicycle lane right before the transit pull-in, creating sudden swerve danger.",
    status: "open",
    time: "Yesterday",
    mine: true,
    endorsements: 34,
    icon: "◆",
    photo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'><rect width='400' height='220' fill='%23382717'/><text x='200' y='100' font-family='sans-serif' font-size='42' fill='%23f5a153' text-anchor='middle'>⚠️ 🕳️</text><text x='200' y='145' font-family='sans-serif' font-size='14' fill='%23faebd9' text-anchor='middle'>7-inch Pothole (Bike Lane Hazard)</text></svg>",
    timeline: [
      { title: "Report Submitted", desc: "Reported by Alex Rivera.", time: "Yesterday" },
      { title: "Priority Boosted", desc: "Ranked #1 on Austin South grid due to 34 upvotes.", time: "18h ago" }
    ]
  },
  {
    id: "r5",
    ticketCode: "ATX-2026-0801",
    title: "Blocked sidewalk curb ramp by dumpster",
    category: "accessibility",
    urgency: "critical",
    location: "Downtown Austin, 8th & Lavaca",
    lat: 30.2710,
    lng: -97.7445,
    description: "Commercial construction materials and roll-off bin completely obstruct the pedestrian curb cut, forcing wheelchair users into the roadway.",
    status: "in_progress",
    time: "2 days ago",
    mine: false,
    endorsements: 42,
    icon: "♿",
    photo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'><rect width='400' height='220' fill='%231f3438'/><text x='200' y='100' font-family='sans-serif' font-size='42' fill='%234fb6a4' text-anchor='middle'>♿ 🚫</text><text x='200' y='145' font-family='sans-serif' font-size='14' fill='%23dcf1eb' text-anchor='middle'>ADA Non-Compliance Violation</text></svg>",
    timeline: [
      { title: "Report Submitted", desc: "Emergency ADA access ticket created.", time: "2 days ago" },
      { title: "Right-of-Way Inspector", desc: "Notice of Violation issued to contractor.", time: "Yesterday" }
    ]
  },
  {
    id: "r6",
    ticketCode: "ATX-2026-0775",
    title: "Overgrown branch obscuring stop sign",
    category: "safety",
    urgency: "high",
    location: "South Lamar & Bluebonnet Ln",
    lat: 30.2458,
    lng: -97.7712,
    description: "Heavy low-hanging oak tree limbs have grown across the stop sign face. Drivers approaching northbound have zero visibility of the traffic control device.",
    status: "open",
    time: "3 days ago",
    mine: false,
    endorsements: 19,
    icon: "◉",
    photo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'><rect width='400' height='220' fill='%23223a2b'/><text x='200' y='100' font-family='sans-serif' font-size='42' fill='%23e8786b' text-anchor='middle'>🛑 🌿</text><text x='200' y='145' font-family='sans-serif' font-size='14' fill='%23d6ebd9' text-anchor='middle'>Vision Clearance Hazard at Bluebonnet</text></svg>",
    timeline: [
      { title: "Report Submitted", desc: "Community notice filed.", time: "3 days ago" },
      { title: "Austin Forestry Review", desc: "Scheduled for street tree clearance crew.", time: "2 days ago" }
    ]
  },
  {
    id: "r7",
    ticketCode: "ATX-2026-0761",
    title: "Trail lighting failure at Lady Bird Lake",
    category: "safety",
    urgency: "medium",
    location: "Ann & Roy Butler Trail, Zilker",
    lat: 30.2669,
    lng: -97.7725,
    description: "Three consecutive solar bollard lights along the pedestrian loop trail are dark after twilight, creating a blind stretch for runners.",
    status: "open",
    time: "4 days ago",
    mine: false,
    endorsements: 11,
    icon: "◉",
    photo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'><rect width='400' height='220' fill='%23192e31'/><text x='200' y='100' font-family='sans-serif' font-size='42' fill='%23e6a256' text-anchor='middle'>🌙 🏃</text><text x='200' y='145' font-family='sans-serif' font-size='14' fill='%23dcf1eb' text-anchor='middle'>Zilker Trail Bollards Inactive</text></svg>",
    timeline: [
      { title: "Report Submitted", desc: "Parks & Recreation notification sent.", time: "4 days ago" }
    ]
  },
  {
    id: "r8",
    ticketCode: "ATX-2026-0744",
    title: "Severe storm drain blockage near campus",
    category: "infrastructure",
    urgency: "critical",
    location: "Guadalupe St & W 24th St",
    lat: 30.2872,
    lng: -97.7415,
    description: "Debris and construction gravel have sealed the curb inlet gutter. Rainfall produces ankle-deep standing water at the university shuttle stop.",
    status: "in_progress",
    time: "5 days ago",
    mine: false,
    endorsements: 38,
    icon: "◆",
    photo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'><rect width='400' height='220' fill='%231a3140'/><text x='200' y='100' font-family='sans-serif' font-size='42' fill='%2362b0de' text-anchor='middle'>🌧️ 🌊</text><text x='200' y='145' font-family='sans-serif' font-size='14' fill='%23daf0fa' text-anchor='middle'>Watershed Protection Inlet Vacuum Queued</text></svg>",
    timeline: [
      { title: "Report Submitted", desc: "Logged with high student impact.", time: "5 days ago" },
      { title: "Watershed Protection", desc: "Vacuum truck dispatch scheduled.", time: "3 days ago" }
    ]
  }
];

// --- 2. CONSTANTS & STATE ---
const iconByCategory = {
  accessibility: "♿",
  safety: "◉",
  cleanliness: "♻",
  infrastructure: "◆"
};

const labels = {
  open: "Open",
  in_progress: "In Progress",
  resolved: "Resolved"
};

const urgencyLabels = {
  critical: "Critical Urgency",
  high: "High Priority",
  medium: "Moderate"
};

// Local storage keys
const STORAGE_KEY = "civicrelay-reports-v2";
const ENDORSED_KEY = "civicrelay-endorsed-ids";

let reports = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") || defaultReports;
let endorsedSet = new Set(JSON.parse(localStorage.getItem(ENDORSED_KEY) || "[]"));

// Map instances
let overviewMap = null;
let exploreMap = null;
let pickerMap = null;
let overviewMarkers = [];
let exploreMarkers = [];
let pickerMarker = null;

// Helpers
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function saveReports() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
}

function saveEndorsements() {
  localStorage.setItem(ENDORSED_KEY, JSON.stringify([...endorsedSet]));
}

function escapeHtml(val) {
  return String(val).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[c]));
}

function formatCategory(c) {
  if (!c) return "General";
  return c.charAt(0).toUpperCase() + c.slice(1);
}

// --- 3. SPATIAL MATHEMATICS: HAVERSINE FORMULA ---
function haversineMeters(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const toRad = deg => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

// --- 4. LEAFLET MAP INITIALIZATION ---
function createLeafletPinIcon(category, isResolved) {
  const symbol = isResolved ? "✓" : (iconByCategory[category] || "✦");
  const cls = isResolved ? "resolved" : category;
  return L.divIcon({
    className: "custom-leaflet-pin-wrapper",
    html: `<div class="custom-leaflet-pin ${cls}"><span>${symbol}</span></div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
}

function initOverviewMap() {
  const el = $("#overviewMap");
  if (!el || overviewMap) return;
  overviewMap = L.map(el, {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([30.2672, -97.7431], 13); // Austin, TX center

  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19
  }).addTo(overviewMap);

  renderMapMarkers(overviewMap, overviewMarkers);
}

function initExploreMap() {
  const el = $("#exploreMap");
  if (!el || exploreMap) return;
  exploreMap = L.map(el, {
    zoomControl: true
  }).setView([30.2672, -97.7431], 13);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19
  }).addTo(exploreMap);

  renderMapMarkers(exploreMap, exploreMarkers);
}

function initPickerMap() {
  const el = $("#pickerMap");
  if (!el || pickerMap) return;
  pickerMap = L.map(el, {
    zoomControl: false
  }).setView([30.2625, -97.7289], 14);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; OpenStreetMap',
    subdomains: "abcd",
    maxZoom: 19
  }).addTo(pickerMap);

  pickerMarker = L.marker([30.2625, -97.7289], {
    draggable: true
  }).addTo(pickerMap);

  pickerMarker.on("dragend", e => {
    const latlng = e.target.getLatLng();
    updatePickedCoords(latlng.lat, latlng.lng);
  });

  pickerMap.on("click", e => {
    pickerMarker.setLatLng(e.latlng);
    updatePickedCoords(e.latlng.lat, e.latlng.lng);
  });
}

function updatePickedCoords(lat, lng) {
  const formatted = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
  $("#reportCoordsInput").value = formatted;
  checkSpatialDuplicate();
}

function renderMapMarkers(mapInstance, markerArrayRef) {
  if (!mapInstance) return;
  // Clear old markers
  while (markerArrayRef.length) {
    const m = markerArrayRef.pop();
    mapInstance.removeLayer(m);
  }

  reports.forEach(r => {
    const isResolved = r.status === "resolved";
    const icon = createLeafletPinIcon(r.category, isResolved);
    const marker = L.marker([r.lat, r.lng], { icon }).addTo(mapInstance);

    const popupHtml = `
      <div style="font-family:'DM Sans',sans-serif;padding:4px;min-width:180px;">
        <span style="font-size:10px;font-weight:700;color:#197a74;text-transform:uppercase;">${formatCategory(r.category)}</span>
        <b style="display:block;font-size:12.5px;color:#102a2d;margin:2px 0 4px;">${escapeHtml(r.title)}</b>
        <span style="font-size:11px;color:#5e7373;display:block;margin-bottom:8px;">${escapeHtml(r.location)}</span>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;background:#eef8f4;color:#197a74;padding:2px 6px;border-radius:10px;font-weight:700;">▲ ${r.endorsements} Endorsed</span>
          <button onclick="window.civicShowReport('${r.id}')" style="background:#062b2c;color:white;border:none;border-radius:4px;padding:3px 8px;font-size:10px;font-weight:700;cursor:pointer;">Inspect →</button>
        </div>
      </div>
    `;
    marker.bindPopup(popupHtml);
    markerArrayRef.push(marker);
  });
}

// --- 5. REPORT CARD RENDERING ---
function reportCardHtml(r) {
  const isEndorsed = endorsedSet.has(r.id);
  return `
    <article class="report-item" data-id="${r.id}">
      <div class="report-thumb ${r.category}">${iconByCategory[r.category] || "✦"}</div>
      <div class="report-info">
        <div class="report-title">${escapeHtml(r.title)}</div>
        <div class="report-meta">
          <span>${escapeHtml(r.location)}</span>
          <span>·</span>
          <span>${r.time}</span>
          <span class="endorse-badge-pill ${isEndorsed ? 'teal-text' : ''}">▲ ${r.endorsements}</span>
          <span class="urgency-badge ${r.urgency || 'medium'}">${urgencyLabels[r.urgency || 'medium']}</span>
        </div>
      </div>
      <span class="status-chip ${r.status}">${labels[r.status]}</span>
    </article>
  `;
}

function bindCardClicks() {
  $$(".report-item").forEach(item => {
    item.addEventListener("click", () => showReport(item.dataset.id));
  });
}

// --- 6. RENDER VIEWS ---
function renderNearby() {
  const nearbyEl = $("#nearbyReports");
  if (!nearbyEl) return;
  // Sort by highest endorsements
  const sorted = [...reports].sort((a, b) => b.endorsements - a.endorsements);
  nearbyEl.innerHTML = sorted.slice(0, 5).map(reportCardHtml).join("");
  bindCardClicks();
}

function renderExplore() {
  const q = ($("#searchInput")?.value || "").toLowerCase().trim();
  const status = $("#statusFilter")?.value || "all";
  const cat = $("#categoryFilter")?.value || "all";
  const urg = $("#urgencyFilter")?.value || "all";
  const sort = $("#sortSelect")?.value || "most_endorsed";

  let list = reports.filter(r => {
    const matchStatus = status === "all" || r.status === status;
    const matchCat = cat === "all" || r.category === cat;
    const matchUrg = urg === "all" || (r.urgency || "medium") === urg;
    const matchQ = !q || `${r.title} ${r.location} ${r.category} ${r.description} ${r.ticketCode || ''}`.toLowerCase().includes(q);
    return matchStatus && matchCat && matchUrg && matchQ;
  });

  if (sort === "most_endorsed") {
    list.sort((a, b) => b.endorsements - a.endorsements);
  } else if (sort === "urgency") {
    const weight = { critical: 3, high: 2, medium: 1 };
    list.sort((a, b) => (weight[b.urgency] || 1) - (weight[a.urgency] || 1));
  } // newest keeps original order

  const resultsCount = $("#resultsCount");
  if (resultsCount) {
    resultsCount.textContent = `${list.length} issue${list.length === 1 ? "" : "s"} detected`;
  }

  const reportsEl = $("#exploreReports");
  if (reportsEl) {
    reportsEl.innerHTML = list.length
      ? list.map(reportCardHtml).join("")
      : `<div class="empty-state"><span>🔍</span><b>No matching community issues</b><p>Try clearing filters or report a new signal.</p></div>`;
  }

  bindCardClicks();
}

function renderMine() {
  const mine = reports.filter(r => r.mine);
  const myReportsEl = $("#myReports");
  if (myReportsEl) {
    myReportsEl.innerHTML = mine.length
      ? mine.map(reportCardHtml).join("")
      : `<div class="empty-state"><span>✦</span><b>No reports submitted yet</b><p>You can report the first block hazard in your neighborhood.</p></div>`;
  }

  const myTotal = $("#myTotal");
  const myOpen = $("#myOpen");
  const myResolved = $("#myResolved");
  const myCountBadge = $("#myReportCount");

  if (myTotal) myTotal.textContent = mine.length;
  if (myOpen) myOpen.textContent = mine.filter(r => r.status !== "resolved").length;
  if (myResolved) myResolved.textContent = mine.filter(r => r.status === "resolved").length;
  if (myCountBadge) myCountBadge.textContent = mine.length;

  bindCardClicks();
}

function renderMetrics() {
  const activeCount = reports.filter(r => r.status === "in_progress").length;
  const resolvedCount = reports.filter(r => r.status === "resolved").length;
  const totalEndorsements = reports.reduce((sum, r) => sum + (r.endorsements || 0), 0);

  const activeMetric = $("#activeMetric");
  const resolvedMetric = $("#resolvedMetric");
  const endorsementsMetric = $("#endorsementsMetric");

  if (activeMetric) activeMetric.textContent = 42 + activeCount;
  if (resolvedMetric) resolvedMetric.textContent = 130 + resolvedCount;
  if (endorsementsMetric) endorsementsMetric.textContent = 820 + totalEndorsements;

  renderNearby();
  renderExplore();
  renderMine();
  renderAnalyticsDashboard();

  if (overviewMap) renderMapMarkers(overviewMap, overviewMarkers);
  if (exploreMap) renderMapMarkers(exploreMap, exploreMarkers);
}

// --- 7. CIVIC INTELLIGENCE (311 ANALYTICS) & CANVAS CHARTS ---
function renderAnalyticsDashboard() {
  // Update KPI
  const kpiActive = $("#kpiActiveCount");
  if (kpiActive) {
    const unres = reports.filter(r => r.status !== "resolved").length;
    kpiActive.textContent = `${unres} Open Tickets`;
  }

  // Render Category Canvas Donut
  drawCategoryChart();

  // Render Neighborhood Canvas Bar Chart
  drawNeighborhoodChart();

  // Populate Dispatch Table
  renderDispatchTable();
}

function drawCategoryChart() {
  const canvas = $("#categoryChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const catCounts = {
    infrastructure: 0,
    accessibility: 0,
    safety: 0,
    cleanliness: 0
  };
  reports.forEach(r => {
    if (catCounts[r.category] !== undefined) catCounts[r.category]++;
  });

  const colors = {
    infrastructure: "#2d7eb0",
    accessibility: "#197a74",
    safety: "#eb8d3d",
    cleanliness: "#6a5bb3"
  };

  const total = Object.values(catCounts).reduce((a, b) => a + b, 0) || 1;
  const cx = 120, cy = h / 2, radius = 75, innerRadius = 45;
  let startAngle = -Math.PI / 2;

  Object.entries(catCounts).forEach(([cat, count]) => {
    const sliceAngle = (count / total) * (2 * Math.PI);
    ctx.beginPath();
    ctx.arc(cx, cy, radius, startAngle, startAngle + sliceAngle);
    ctx.arc(cx, cy, innerRadius, startAngle + sliceAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = colors[cat];
    ctx.fill();
    startAngle += sliceAngle;
  });

  // Center text
  ctx.fillStyle = "#102a2d";
  ctx.font = "bold 20px Manrope, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(total, cx, cy - 6);
  ctx.font = "10px DM Sans, sans-serif";
  ctx.fillStyle = "#5e7373";
  ctx.fillText("Signals", cx, cy + 12);

  // Legend on right
  const legendX = 230;
  let legendY = 45;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";

  Object.entries(catCounts).forEach(([cat, count]) => {
    ctx.fillStyle = colors[cat];
    ctx.beginPath();
    ctx.arc(legendX, legendY, 6, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "#102a2d";
    ctx.font = "bold 12px DM Sans, sans-serif";
    const pct = Math.round((count / total) * 100);
    ctx.fillText(`${formatCategory(cat)}: ${count} (${pct}%)`, legendX + 14, legendY);

    legendY += 38;
  });
}

function drawNeighborhoodChart() {
  const canvas = $("#neighborhoodChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const neighborhoods = [
    { name: "Downtown / 6th", count: 24 },
    { name: "East Austin / Chavez", count: 18 },
    { name: "Riverside District", count: 14 },
    { name: "UT Campus / West Mall", count: 11 },
    { name: "South Lamar", count: 8 }
  ];

  const max = Math.max(...neighborhoods.map(n => n.count));
  const startX = 135;
  const barHeight = 18;
  let y = 25;

  neighborhoods.forEach(n => {
    ctx.fillStyle = "#5e7373";
    ctx.font = "11.5px DM Sans, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(n.name, startX - 12, y + barHeight / 2);

    const barWidth = ((n.count / max) * (w - startX - 50));
    ctx.fillStyle = "#197a74";
    ctx.beginPath();
    ctx.roundRect(startX, y, barWidth, barHeight, [4]);
    ctx.fill();

    ctx.fillStyle = "#102a2d";
    ctx.font = "bold 11px JetBrains Mono, monospace";
    ctx.textAlign = "left";
    ctx.fillText(`${n.count}`, startX + barWidth + 8, y + barHeight / 2);

    y += 38;
  });
}

function renderDispatchTable() {
  const tbody = $("#dispatchTableBody");
  if (!tbody) return;
  const sorted = [...reports].sort((a, b) => b.endorsements - a.endorsements);

  tbody.innerHTML = sorted.map(r => `
    <tr>
      <td><span class="ticket-code">${r.ticketCode || 'ATX-2026-GEN'}</span></td>
      <td>
        <b>${escapeHtml(r.title)}</b>
        <div style="font-size:11px;color:#5e7373;">${escapeHtml(r.location)}</div>
      </td>
      <td>${formatCategory(r.category)}</td>
      <td><span class="urgency-badge ${r.urgency || 'medium'}">${urgencyLabels[r.urgency || 'medium']}</span></td>
      <td><strong>▲ ${r.endorsements}</strong></td>
      <td><span class="status-chip ${r.status}">${labels[r.status]}</span></td>
      <td>
        <button class="btn-dispatch-action" onclick="window.civicGenerateWorkOrder('${r.id}')">311 Work Order →</button>
      </td>
    </tr>
  `).join("");
}

// --- 8. DETAIL MODAL & COMMUNITY ENDORSEMENT ---
let currentDetailReport = null;

function showReport(id) {
  const r = reports.find(x => x.id === id);
  if (!r) return;
  currentDetailReport = r;

  $("#detailCategory").textContent = formatCategory(r.category);
  $("#detailTitle").textContent = r.title;
  $("#detailLocation").textContent = `${r.location} · Reported ${r.time}`;
  $("#detailDescription").textContent = r.description;
  $("#detailCoords").textContent = `${r.lat.toFixed(4)}° N, ${Math.abs(r.lng).toFixed(4)}° W`;

  // Urgency badge
  const urgEl = $("#detailUrgency");
  urgEl.className = `urgency-badge ${r.urgency || 'medium'}`;
  urgEl.textContent = urgencyLabels[r.urgency || 'medium'];

  // Status chip
  const statusEl = $("#detailStatus");
  statusEl.textContent = labels[r.status];
  statusEl.className = `status-chip ${r.status}`;

  // Photo container
  const photoContainer = $("#detailPhotoContainer");
  const photoImg = $("#detailPhotoImg");
  if (r.photo) {
    photoImg.src = r.photo;
    photoContainer.classList.remove("hidden");
  } else {
    photoContainer.classList.add("hidden");
  }

  // Endorsement strip
  updateDetailEndorsementState();

  // Timeline
  const timelineEl = $("#detailTimeline");
  const timelineSteps = r.timeline || [
    { title: "Report Submitted", desc: "Citizen broadcasted report to Austin community map." },
    { title: "Municipal Review", desc: r.status === "open" ? "Awaiting inspector assignment." : "Austin 311 review underway." },
    { title: "Resolution", desc: r.status === "resolved" ? "Issue marked resolved with before/after evidence." : "Resolution progress will appear here." }
  ];

  timelineEl.innerHTML = timelineSteps.map((s, idx) => `
    <div class="timeline-item ${idx === 2 && r.status !== 'resolved' ? 'muted' : ''}">
      <i class="timeline-dot"></i>
      <div>
        <b>${s.title}</b>
        <span>${s.desc}</span>
      </div>
    </div>
  `).join("");

  // Action Buttons
  const actionsEl = $("#detailActions");
  let actionButtons = "";

  if (r.mine && r.status !== "resolved") {
    actionButtons += `<button class="resolve-button" id="resolveIssueButton">✓ Mark As Resolved (Resident)</button>`;
  } else if (r.status === "resolved") {
    actionButtons += `<div class="resolved-note">✓ Verified resolved by community signal. Thank you!</div>`;
  }

  actionButtons += `<button class="ticket-export-btn" id="view311TicketBtn">📄 Municipal 311 Ticket</button>`;
  actionsEl.innerHTML = actionButtons;

  // Bind modal buttons
  $("#resolveIssueButton")?.addEventListener("click", () => {
    r.status = "resolved";
    r.time = "Resolved just now";
    if (!r.timeline) r.timeline = [];
    r.timeline.push({ title: "Resolved by Resident", desc: "Verified hazard resolved and safe.", time: "Just now" });
    saveReports();
    renderMetrics();
    $("#detailModal").classList.add("hidden");
    toast("✓ Report marked resolved and cleared from active municipal queue.");
  });

  $("#view311TicketBtn")?.addEventListener("click", () => {
    generateWorkOrderModal(r.id);
  });

  $("#detailModal").classList.remove("hidden");
}

function updateDetailEndorsementState() {
  if (!currentDetailReport) return;
  const countEl = $("#detailEndorseCount");
  const btnEl = $("#detailEndorseBtn");
  if (countEl) countEl.textContent = currentDetailReport.endorsements;

  if (endorsedSet.has(currentDetailReport.id)) {
    btnEl.innerHTML = `✓ You Supported This`;
    btnEl.style.background = "#2fa76d";
  } else {
    btnEl.innerHTML = `<span class="heart-icon">▲</span> +1 Support / Me Too`;
    btnEl.style.background = "var(--teal)";
  }
}

// Endorse Button Handler
$("#detailEndorseBtn")?.addEventListener("click", () => {
  if (!currentDetailReport) return;
  if (endorsedSet.has(currentDetailReport.id)) {
    // Un-endorse
    endorsedSet.delete(currentDetailReport.id);
    currentDetailReport.endorsements = Math.max(0, currentDetailReport.endorsements - 1);
    toast("Support removed.");
  } else {
    // Endorse
    endorsedSet.add(currentDetailReport.id);
    currentDetailReport.endorsements++;
    toast("▲ Issue endorsed! Priority increased on Austin 311 Dispatch queue.");
  }
  saveEndorsements();
  saveReports();
  updateDetailEndorsementState();
  renderMetrics();
});

// Text-to-Speech (TTS) Accessibility
let isSpeaking = false;
$("#readAloudButton")?.addEventListener("click", () => {
  if (!currentDetailReport) return;
  if (!("speechSynthesis" in window)) {
    toast("Speech synthesis not supported in this browser.");
    return;
  }

  if (isSpeaking) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    $("#ttsText").textContent = "Read report aloud (TTS)";
    $("#ttsIcon").textContent = "🔊";
    return;
  }

  const textToRead = `Civic report: ${currentDetailReport.title}. Category: ${currentDetailReport.category}. Location: ${currentDetailReport.location}. Description: ${currentDetailReport.description}. Priority: ${urgencyLabels[currentDetailReport.urgency || 'medium']}. Endorsed by ${currentDetailReport.endorsements} neighbors.`;

  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.rate = 1.0;
  utterance.onend = () => {
    isSpeaking = false;
    $("#ttsText").textContent = "Read report aloud (TTS)";
    $("#ttsIcon").textContent = "🔊";
  };
  utterance.onerror = () => {
    isSpeaking = false;
    $("#ttsText").textContent = "Read report aloud (TTS)";
    $("#ttsIcon").textContent = "🔊";
  };

  window.speechSynthesis.speak(utterance);
  isSpeaking = true;
  $("#ttsText").textContent = "Stop reading";
  $("#ttsIcon").textContent = "⏹️";
});

// --- 9. AI HAZARD VISION SCANNER & SAMPLE IMAGES ---
const sampleHazardData = {
  pothole: {
    title: "Deep asphalt pothole on E 6th St",
    category: "infrastructure",
    urgency: "critical",
    location: "E 6th St & Brazos St",
    lat: 30.2678,
    lng: -97.7410,
    desc: "Asphalt fissure measuring approx 8 inches deep creating an immediate swerve hazard for cyclists and vehicles.",
    confidence: "97.4%",
    detected: "Structural road hazard: Heavy asphalt cavitation & road base degradation.",
    photo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'><rect width='400' height='220' fill='%232a241f'/><circle cx='200' cy='110' r='55' fill='%23120f0d'/><path d='M160 100 Q190 70 230 110 T250 140' stroke='%2347392e' stroke-width='6' fill='none'/><text x='200' y='195' font-family='sans-serif' font-size='13' fill='%23e6a256' text-anchor='middle'>Pothole Cavitation - E 6th St</text></svg>"
  },
  signal: {
    title: "Audible walk countdown signal disabled",
    category: "accessibility",
    urgency: "high",
    location: "Congress Ave & 4th St",
    lat: 30.2660,
    lng: -97.7435,
    desc: "Audible crossing locator tone is silent and the LED pedestrian sign has failed to illuminate during crossing phase.",
    confidence: "95.1%",
    detected: "Traffic control defect: Pedestrian audio-visual beacon malfunction.",
    photo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'><rect width='400' height='220' fill='%23192e31'/><rect x='170' y='40' width='60' height='120' rx='10' fill='%23081517'/><circle cx='200' cy='75' r='18' fill='%23d9453b'/><circle cx='200' cy='125' r='18' fill='%23384f4e'/><text x='200' y='195' font-family='sans-serif' font-size='13' fill='%2363cdc1' text-anchor='middle'>Dark Pedestrian Signal Head</text></svg>"
  },
  curb: {
    title: "Sidewalk curb ramp blocked by dumpster",
    category: "accessibility",
    urgency: "critical",
    location: "Lavaca St & 9th St",
    lat: 30.2720,
    lng: -97.7448,
    desc: "Commercial construction dumpster placed directly across the ADA ramp transition, blocking wheelchair access.",
    confidence: "96.8%",
    detected: "ADA obstruction: Zero clearance curb ramp access violation.",
    photo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'><rect width='400' height='220' fill='%23223336'/><rect x='130' y='60' width='140' height='80' rx='4' fill='%232c6670'/><text x='200' y='108' font-family='sans-serif' font-size='18' fill='white' text-anchor='middle'>DUMPSTER</text><text x='200' y='195' font-family='sans-serif' font-size='13' fill='%2391ded2' text-anchor='middle'>ADA Curb Transition Blocked</text></svg>"
  },
  trash: {
    title: "Overflowing public waste bin",
    category: "cleanliness",
    urgency: "medium",
    location: "Rainey St & River St",
    lat: 30.2585,
    lng: -97.7385,
    desc: "Receptacle is over capacity with windblown trash scattering toward the river trail.",
    confidence: "93.4%",
    detected: "Sanitation hazard: Overflowing refuse container near riparian zone.",
    photo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'><rect width='400' height='220' fill='%232a2138'/><rect x='160' y='70' width='80' height='95' rx='6' fill='%23483960'/><text x='200' y='125' font-family='sans-serif' font-size='32' fill='%23c1b1f0' text-anchor='middle'>♻️</text><text x='200' y='195' font-family='sans-serif' font-size='13' fill='%23ded7fa' text-anchor='middle'>Rainey St Trash Overfill</text></svg>"
  }
};

let pendingAiData = null;

$$(".sample-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.sample;
    const item = sampleHazardData[key];
    if (!item) return;

    // Simulate AI scan
    const scanBox = $("#aiScanResult");
    scanBox.classList.remove("hidden");
    $("#aiConfidenceText").textContent = `AI Confidence: ${item.confidence}`;
    $("#aiDetectedDesc").textContent = `Detected: ${item.detected}`;

    // Set preview image
    const imgPreview = $("#photoPreviewImg");
    imgPreview.src = item.photo;
    imgPreview.classList.remove("hidden");
    $(".photo-preview-placeholder").classList.add("hidden");

    pendingAiData = item;
    toast(`AI Scan Completed: ${item.confidence} match.`);
  });
});

$("#aiApplyBtn")?.addEventListener("click", () => {
  if (!pendingAiData) return;
  $("#reportTitleInput").value = pendingAiData.title;
  $("#reportCategorySelect").value = pendingAiData.category;
  $("#reportUrgencySelect").value = pendingAiData.urgency;
  $("#reportLocationInput").value = pendingAiData.location;
  $("#reportDescInput").value = pendingAiData.desc;

  if (pickerMarker && pickerMap) {
    pickerMarker.setLatLng([pendingAiData.lat, pendingAiData.lng]);
    pickerMap.setView([pendingAiData.lat, pendingAiData.lng], 15);
    updatePickedCoords(pendingAiData.lat, pendingAiData.lng);
  }

  toast("✓ AI diagnosis & metadata applied to report form.");
});

// Photo upload input handler
$("#photoInput")?.addEventListener("change", e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = ev => {
    const dataUrl = ev.target.result;
    const img = $("#photoPreviewImg");
    img.src = dataUrl;
    img.classList.remove("hidden");
    $(".photo-preview-placeholder").classList.add("hidden");

    // Trigger AI Scan animation
    const scanBox = $("#aiScanResult");
    scanBox.classList.remove("hidden");
    $("#aiConfidenceText").textContent = "AI Confidence: 91.2%";
    $("#aiDetectedDesc").textContent = "Detected: Surface anomaly identified. Category auto-tagged from visual features.";

    pendingAiData = {
      photo: dataUrl,
      confidence: "91.2%"
    };
    toast("AI Vision Triage analyzed uploaded photo.");
  };
  reader.readAsDataURL(file);
});

// --- 10. SPATIAL DUPLICATE CHECKER ---
let detectedDuplicate = null;

function checkSpatialDuplicate() {
  const title = ($("#reportTitleInput")?.value || "").toLowerCase().trim();
  const coordsVal = $("#reportCoordsInput")?.value || "";
  const parts = coordsVal.split(",").map(s => parseFloat(s.trim()));
  const alertBox = $("#duplicateAlert");

  if (parts.length !== 2 || isNaN(parts[0]) || isNaN(parts[1])) {
    alertBox.classList.add("hidden");
    return;
  }

  const curLat = parts[0];
  const curLng = parts[1];

  detectedDuplicate = null;

  for (const r of reports) {
    if (r.status === "resolved") continue;
    const distMeters = haversineMeters(curLat, curLng, r.lat, r.lng);

    // If within 250 meters and shares words or close radius
    const wordMatch = title && r.title.toLowerCase().split(" ").some(w => w.length > 4 && title.includes(w));
    if (distMeters <= 200 || (distMeters <= 500 && wordMatch)) {
      detectedDuplicate = { report: r, distance: distMeters };
      break;
    }
  }

  if (detectedDuplicate) {
    alertBox.classList.remove("hidden");
    $("#duplicateHeading").textContent = `⚠️ Potential Duplicate Found ${detectedDuplicate.distance}m Away!`;
    $("#duplicateText").textContent = `“${detectedDuplicate.report.title}” is already ${labels[detectedDuplicate.report.status].toLowerCase()} on ${detectedDuplicate.report.location}. Endorse it now to boost city response instead of filing duplicate clutter.`;
  } else {
    alertBox.classList.add("hidden");
  }
}

$("#reviewDuplicate")?.addEventListener("click", () => {
  if (!detectedDuplicate) return;
  const dupId = detectedDuplicate.report.id;
  // Auto endorse
  endorsedSet.add(dupId);
  detectedDuplicate.report.endorsements++;
  saveEndorsements();
  saveReports();
  renderMetrics();
  closeReportModal();
  showReport(dupId);
  toast(`✓ Successfully endorsed existing issue #${dupId}! Duplicate dispatch prevented.`);
});

$("#dismissDuplicate")?.addEventListener("click", () => {
  $("#duplicateAlert").classList.add("hidden");
  toast("Proceeding with independent report filing.");
});

$("#reportTitleInput")?.addEventListener("input", checkSpatialDuplicate);
$("#reportLocationInput")?.addEventListener("input", checkSpatialDuplicate);

// --- 11. MODAL OPEN/CLOSE & TAB ROUTING ---
function openReportModal() {
  $("#reportModal").classList.remove("hidden");
  $("#reportForm").classList.remove("hidden");
  $("#successState").classList.add("hidden");
  $("#duplicateAlert").classList.add("hidden");
  $("#aiScanResult").classList.add("hidden");

  setTimeout(() => {
    initPickerMap();
    if (pickerMap) pickerMap.invalidateSize();
    $("#reportTitleInput")?.focus();
  }, 100);
}

function closeReportModal() {
  $("#reportModal").classList.add("hidden");
}

function switchView(viewName) {
  $$(".nav-link").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === viewName);
  });

  const allViews = ["overview", "explore", "analytics", "my-reports"];
  allViews.forEach(v => {
    const sec = $(`#${v}View`);
    if (sec) sec.classList.toggle("hidden", v !== viewName);
  });

  if (viewName === "overview") {
    setTimeout(() => {
      initOverviewMap();
      if (overviewMap) overviewMap.invalidateSize();
    }, 50);
  } else if (viewName === "explore") {
    setTimeout(() => {
      initExploreMap();
      if (exploreMap) exploreMap.invalidateSize();
      renderExplore();
    }, 50);
  } else if (viewName === "analytics") {
    renderAnalyticsDashboard();
  } else if (viewName === "my-reports") {
    renderMine();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

$$("[data-view]").forEach(btn => {
  btn.addEventListener("click", () => switchView(btn.dataset.view));
});

// Open modal triggers
["openReportButton", "exploreReportButton", "myReportButton", "quickReportBtn"].forEach(id => {
  $(`#${id}`)?.addEventListener("click", openReportModal);
});

$("#closeReportButton")?.addEventListener("click", closeReportModal);
$("#cancelReportButton")?.addEventListener("click", closeReportModal);
$("#reportModal")?.addEventListener("click", e => {
  if (e.target.id === "reportModal") closeReportModal();
});

$("#closeDetailButton")?.addEventListener("click", () => {
  $("#detailModal").classList.add("hidden");
});
$("#detailModal")?.addEventListener("click", e => {
  if (e.target.id === "detailModal") $("#detailModal").classList.add("hidden");
});

// GPS Pin Button in Modal
$("#locationButton")?.addEventListener("click", () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        if (pickerMarker && pickerMap) {
          pickerMarker.setLatLng([lat, lng]);
          pickerMap.setView([lat, lng], 15);
          updatePickedCoords(lat, lng);
        }
        toast("GPS coordinates updated to current device position.");
      },
      () => {
        // Fallback Austin coordinate
        const defLat = 30.2672 + (Math.random() - 0.5) * 0.02;
        const defLng = -97.7431 + (Math.random() - 0.5) * 0.02;
        if (pickerMarker && pickerMap) {
          pickerMarker.setLatLng([defLat, defLng]);
          pickerMap.setView([defLat, defLng], 15);
          updatePickedCoords(defLat, defLng);
        }
        toast("Location pinned on Austin grid (GPS permission needed for device lock).");
      }
    );
  }
});

// Reset Overview Map Center
$("#resetOverviewMap")?.addEventListener("click", () => {
  if (overviewMap) {
    overviewMap.setView([30.2672, -97.7431], 13);
    toast("Map centered on Austin, TX.");
  }
});

// --- 12. REPORT FORM SUBMISSION ---
let lastCreatedReportId = null;

$("#reportForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.target);

  const title = (data.get("title") || "").trim();
  const category = data.get("category");
  const urgency = data.get("urgency") || "medium";
  const location = (data.get("location") || "").trim();
  const description = (data.get("description") || "").trim();
  const coordsVal = data.get("coords") || "30.2672, -97.7431";

  const parts = coordsVal.split(",").map(s => parseFloat(s.trim()));
  const lat = (!isNaN(parts[0])) ? parts[0] : 30.2672;
  const lng = (!isNaN(parts[1])) ? parts[1] : -97.7431;

  const newTicketId = "local-" + Date.now();
  const ticketCode = `ATX-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  const photoSrc = pendingAiData?.photo || "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'><rect width='400' height='220' fill='%23192e31'/><text x='200' y='110' font-family='sans-serif' font-size='42' fill='%2363cdc1' text-anchor='middle'>📷 ✦</text><text x='200' y='155' font-family='sans-serif' font-size='13' fill='%23dcf1eb' text-anchor='middle'>Citizen Evidence Attached</text></svg>";

  const newReport = {
    id: newTicketId,
    ticketCode,
    title,
    category,
    urgency,
    location,
    lat,
    lng,
    description,
    status: "open",
    time: "Just now",
    mine: true,
    endorsements: 1, // Author endorsement
    icon: iconByCategory[category] || "✦",
    photo: photoSrc,
    timeline: [
      { title: "Report Submitted", desc: "Citizen signal broadcasted on community grid.", time: "Just now" },
      { title: "AI Triage Verification", desc: `Severity verified: ${urgencyLabels[urgency]}. Queued for 311.`, time: "Just now" }
    ]
  };

  reports.unshift(newReport);
  endorsedSet.add(newTicketId);
  saveReports();
  saveEndorsements();

  lastCreatedReportId = newTicketId;

  // Render UI
  renderMetrics();

  // Reset form & show success
  $("#reportForm").classList.add("hidden");
  $("#successState").classList.remove("hidden");
  pendingAiData = null;
  toast("✓ Community signal broadcasted live!");
});

$("#successDone")?.addEventListener("click", () => {
  closeReportModal();
  switchView("my-reports");
});

$("#successView311")?.addEventListener("click", () => {
  closeReportModal();
  if (lastCreatedReportId) {
    generateWorkOrderModal(lastCreatedReportId);
  }
});

// --- 13. OFFICIAL 311 WORK ORDER GENERATION ---
function generateWorkOrderModal(reportId) {
  const r = reports.find(x => x.id === reportId);
  if (!r) return;

  $("#ticketIdLabel").textContent = `TICKET #${r.ticketCode || 'ATX-2026-9814'}`;
  const modal = $("#workOrderModal");

  const deptNames = {
    accessibility: "ADA Right-of-Way Compliance & Sidewalk Division",
    safety: "Austin Energy & Street Lighting Department",
    cleanliness: "Austin Resource Recovery & Public Sanitation",
    infrastructure: "Transportation & Public Works (Pavement Division)"
  };

  const priorityScore = (r.urgency === 'critical' ? 90 : r.urgency === 'high' ? 70 : 50) + Math.min(30, r.endorsements * 2);

  $("#ticketBodyContent").innerHTML = `
    <div class="ticket-grid">
      <div class="ticket-cell">
        <label>Assigned Municipal Division</label>
        <span>${deptNames[r.category] || 'Austin Public Works'}</span>
      </div>
      <div class="ticket-cell">
        <label>Municipal Urgency Index</label>
        <span class="urgency-badge ${r.urgency || 'medium'}">${urgencyLabels[r.urgency || 'medium']}</span>
      </div>
      <div class="ticket-cell">
        <label>Location & Ward</label>
        <span>${escapeHtml(r.location)} (Austin District 9)</span>
      </div>
      <div class="ticket-cell">
        <label>GPS Coordinates</label>
        <span style="font-family:'JetBrains Mono',monospace;">${r.lat.toFixed(5)}, ${r.lng.toFixed(5)}</span>
      </div>
      <div class="ticket-cell ticket-full-cell">
        <label>Incident Summary & Citizen Narrative</label>
        <span><strong>${escapeHtml(r.title)}</strong>: ${escapeHtml(r.description)}</span>
      </div>
      <div class="ticket-cell">
        <label>Citizen Endorsements</label>
        <span><strong>▲ ${r.endorsements}</strong> Verified Neighbor Upvotes</span>
      </div>
      <div class="ticket-cell">
        <label>Dynamic Priority Score</label>
        <span><strong>${priorityScore} / 120</strong> (Priority Routing Eligible)</span>
      </div>
    </div>
    <div class="ticket-barcode-box">
      <div class="barcode-lines"></div>
      <span>*ATX-311-${r.ticketCode || 'WO-2026'}*</span>
    </div>
  `;

  modal.classList.remove("hidden");
}

$("#closeWorkOrderButton")?.addEventListener("click", () => {
  $("#workOrderModal").classList.add("hidden");
});
$("#doneTicketBtn")?.addEventListener("click", () => {
  $("#workOrderModal").classList.add("hidden");
});
$("#printTicketBtn")?.addEventListener("click", () => {
  window.print();
});

// --- 14. DATA EXPORTS: GEOJSON & CSV ---
function exportGeoJson() {
  const geojson = {
    type: "FeatureCollection",
    features: reports.map(r => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [r.lng, r.lat]
      },
      properties: {
        id: r.id,
        ticketCode: r.ticketCode,
        title: r.title,
        category: r.category,
        urgency: r.urgency,
        location: r.location,
        description: r.description,
        status: r.status,
        endorsements: r.endorsements,
        reportedTime: r.time
      }
    }))
  };

  const blob = new Blob([JSON.stringify(geojson, null, 2)], { type: "application/geo+json" });
  downloadBlob(blob, "civicrelay-austin-data.geojson");
  toast("✓ GeoJSON exported successfully.");
}

function exportCsv() {
  const headers = ["TicketCode", "Title", "Category", "Urgency", "Location", "Latitude", "Longitude", "Status", "Endorsements", "Time"];
  const rows = reports.map(r => [
    `"${r.ticketCode || ''}"`,
    `"${r.title.replace(/"/g, '""')}"`,
    `"${r.category}"`,
    `"${r.urgency || 'medium'}"`,
    `"${r.location.replace(/"/g, '""')}"`,
    r.lat,
    r.lng,
    `"${r.status}"`,
    r.endorsements,
    `"${r.time}"`
  ]);

  const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  downloadBlob(blob, "civicrelay-austin-311-reports.csv");
  toast("✓ CSV exported successfully.");
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

$("#exportGeoJsonBtn")?.addEventListener("click", exportGeoJson);
$("#exportCsvBtn")?.addEventListener("click", exportCsv);
$("#footerExportData")?.addEventListener("click", e => {
  e.preventDefault();
  exportGeoJson();
});

// Toast notification helper
function toast(msg) {
  const t = $("#toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => t.classList.add("hidden"), 3400);
}

// Window global bridges for inline onclicks
window.civicShowReport = showReport;
window.civicGenerateWorkOrder = generateWorkOrderModal;

// Search & filter event bindings
$("#searchInput")?.addEventListener("input", renderExplore);
$("#statusFilter")?.addEventListener("change", renderExplore);
$("#categoryFilter")?.addEventListener("change", renderExplore);
$("#urgencyFilter")?.addEventListener("change", renderExplore);
$("#sortSelect")?.addEventListener("change", renderExplore);

// Info triggers
$("#helpButton")?.addEventListener("click", () => {
  toast("CivicRelay uses AI Hazard Triage & Haversine deduplication to accelerate Austin 311 dispatches.");
});
$("#profileButton")?.addEventListener("click", () => {
  toast("Signed in as Alex Rivera (Austin Block Captain, District 9)");
});
$("#footerHowItWorks")?.addEventListener("click", e => {
  e.preventDefault();
  toast("1. Citizen Spot → 2. AI Hazard Triage → 3. Spatial Deduplication → 4. Municipal 311 Dispatch → 5. Resolution Proof");
});

// Initial boot
renderMetrics();
setTimeout(initOverviewMap, 100);
