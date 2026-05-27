const motifs = [
  {
    id: "dragon",
    name: "龙纹",
    note: "施洞纹样中龙纹常与族群身份、地域记忆和装饰秩序相关；本项目保留双角这一醒目的视觉识别。",
  },
  {
    id: "fish",
    name: "鱼纹",
    note: "鱼纹是施洞苗绣中常见动物题材之一，适合与水纹、花纹组成连续的生活叙事。",
  },
  {
    id: "butterfly",
    name: "蝴蝶纹",
    note: "蝴蝶在苗族文化叙事中常被赋予生命繁衍和祖源想象，本项目采用对称翅形表现。",
  },
  {
    id: "bird",
    name: "鸟纹",
    note: "鸟纹在服饰刺绣中常以飞翔、守护或神鸟形象出现，适合作为构图中的动势元素。",
  },
  {
    id: "flower",
    name: "花纹",
    note: "花纹适合填补满绣空间，也能连接动物、人物和几何边饰，让画面更繁而有序。",
  },
  {
    id: "maple",
    name: "枫香树纹",
    note: "枫香树纹来自清水江流域苗族关于枫木、蝴蝶妈妈与祖源记忆的叙事。本项目以树芯、对称枝叶和枫香果点作抽象化表现。",
  },
  {
    id: "water",
    name: "水纹",
    note: "施洞位于清水江流域，水纹在这里可作为地域线索，连接贸易、生活和河流记忆。",
  },
  {
    id: "horn",
    name: "牛角纹",
    note: "施洞龙纹常以牛角化的双角作为鲜明特征，本项目将其抽象为可重复的护符形纹样。",
  },
  {
    id: "human",
    name: "人物纹",
    note: "人物纹可指向族群首领、英雄和口传历史。本项目只做抽象化轮廓，避免误称具体传统图像。",
  },
];

const layouts = [
  { id: "radial", name: "团花", detail: "中心纹样向四周展开" },
  { id: "repeat", name: "连续", detail: "单元重复形成满幅" },
  { id: "apron", name: "适合", detail: "边饰与主体分区" },
  { id: "river", name: "自由", detail: "流线串联纹样" },
];

const textures = [
  { id: "chain", name: "双针锁绣", detail: "圆点线迹" },
  { id: "split", name: "破线绣", detail: "细密短线" },
  { id: "stack", name: "叠绣", detail: "厚重层次" },
  { id: "woven", name: "织锦颗粒", detail: "经纬网格" },
];

const palettes = [
  {
    id: "festival",
    name: "节庆红",
    detail: "红、金、靛蓝",
    colors: {
      cloth: "#25181b",
      field: "#3b2026",
      primary: "#d7263d",
      secondary: "#f2b63d",
      accent: "#1f9a8a",
      light: "#fff3d8",
      dark: "#140f12",
    },
  },
  {
    id: "river",
    name: "清水江",
    detail: "青绿、水蓝、胭脂",
    colors: {
      cloth: "#eaf2e9",
      field: "#dfe8df",
      primary: "#176f67",
      secondary: "#2f79a8",
      accent: "#bd2642",
      light: "#fff8e7",
      dark: "#173434",
    },
  },
  {
    id: "mother",
    name: "母花素稿",
    detail: "墨线、绢白、朱砂",
    colors: {
      cloth: "#f3efe3",
      field: "#fffdf5",
      primary: "#26201d",
      secondary: "#9b2734",
      accent: "#bf922a",
      light: "#fff8ec",
      dark: "#16120f",
    },
  },
  {
    id: "silver",
    name: "银饰映红",
    detail: "银灰、深红、孔雀绿",
    colors: {
      cloth: "#d9ded8",
      field: "#eef1ed",
      primary: "#9f1e31",
      secondary: "#57616a",
      accent: "#158070",
      light: "#fff8e8",
      dark: "#212426",
    },
  },
  {
    id: "spring",
    name: "姊妹节",
    detail: "桃红、嫩绿、明黄",
    colors: {
      cloth: "#fff2e8",
      field: "#fffaf1",
      primary: "#c42159",
      secondary: "#7d9d2d",
      accent: "#e0a51a",
      light: "#ffffff",
      dark: "#2b2519",
    },
  },
];

const SPECIAL_MAPLE_MOTIF = "maple";
const MAPLE_PRESET_ID = "festival-full";

const presets = [
  {
    id: "festival-full",
    name: "节庆满绣",
    detail: "高密度团花",
    apply: {
      motifs: ["maple", "dragon", "butterfly", "fish", "flower", "horn"],
      layout: "radial",
      palette: "festival",
      texture: "stack",
      density: 0.86,
      complexity: 0.76,
      symmetry: true,
      border: true,
    },
  },
  {
    id: "river-memory",
    name: "清水江流",
    detail: "水纹与鱼鸟",
    apply: {
      motifs: ["water", "fish", "bird", "flower"],
      layout: "river",
      palette: "river",
      texture: "chain",
      density: 0.62,
      complexity: 0.72,
      symmetry: false,
      border: true,
    },
  },
  {
    id: "mother-sample",
    name: "母花素稿",
    detail: "线稿式构成",
    apply: {
      motifs: ["dragon", "horn", "flower", "human"],
      layout: "repeat",
      palette: "mother",
      texture: "split",
      density: 0.54,
      complexity: 0.48,
      symmetry: true,
      border: false,
    },
  },
  {
    id: "apron-border",
    name: "围腰边饰",
    detail: "层层边框",
    apply: {
      motifs: ["butterfly", "flower", "water", "horn", "fish"],
      layout: "apron",
      palette: "silver",
      texture: "woven",
      density: 0.7,
      complexity: 0.58,
      symmetry: true,
      border: true,
    },
  },
];

const defaultState = {
  motifs: ["dragon", "fish", "butterfly", "flower"],
  layout: "radial",
  palette: "festival",
  texture: "chain",
  density: 0.68,
  complexity: 0.62,
  symmetry: true,
  border: true,
  seed: makeSeed(),
};

let state = readStateFromUrl();
let toastTimer = null;
let activeControlTab = "preset";
let patternAnimationTimer = null;
let generationTimer = null;
const THEME_STORAGE_KEY = "miao-theme";
const systemThemeQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

const elements = {
  presetControls: document.querySelector("#presetControls"),
  controlTabs: document.querySelectorAll("[data-control-tab]"),
  controlPanels: document.querySelectorAll("[data-control-panel]"),
  motifControls: document.querySelector("#motifControls"),
  layoutControls: document.querySelector("#layoutControls"),
  paletteControls: document.querySelector("#paletteControls"),
  textureControls: document.querySelector("#textureControls"),
  densityInput: document.querySelector("#densityInput"),
  complexityInput: document.querySelector("#complexityInput"),
  densityValue: document.querySelector("#densityValue"),
  complexityValue: document.querySelector("#complexityValue"),
  symmetryInput: document.querySelector("#symmetryInput"),
  borderInput: document.querySelector("#borderInput"),
  patternOutput: document.querySelector("#patternOutput"),
  patternFrame: document.querySelector(".pattern-frame"),
  cultureIntro: document.querySelector("#cultureIntro"),
  cultureList: document.querySelector("#cultureList"),
  seedLabel: document.querySelector("#seedLabel"),
  pieceTitle: document.querySelector("#pieceTitle"),
  pieceMeta: document.querySelector("#pieceMeta"),
  randomizeButton: document.querySelector("#randomizeButton"),
  downloadButton: document.querySelector("#downloadButton"),
  shareButton: document.querySelector("#shareButton"),
  resetButton: document.querySelector("#resetButton"),
  toast: document.querySelector("#toast"),
  themeButton: document.querySelector("#themeButton"),
};

init();

function init() {
  initTheme();
  renderControls();
  bindEvents();
  renderApp();
}

function initTheme() {
  syncThemeFromStorage();
  updateThemeButton();

  if (!systemThemeQuery) return;

  const onSystemThemeChange = () => {
    if (!getStoredTheme()) updateThemeButton();
  };

  if (systemThemeQuery.addEventListener) {
    systemThemeQuery.addEventListener("change", onSystemThemeChange);
  } else if (systemThemeQuery.addListener) {
    systemThemeQuery.addListener(onSystemThemeChange);
  }
}

function syncThemeFromStorage() {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    document.documentElement.dataset.theme = storedTheme;
    return;
  }

  delete document.documentElement.dataset.theme;
}

function getStoredTheme() {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
  } catch {
    return null;
  }
}

function getResolvedTheme() {
  const explicitTheme = document.documentElement.dataset.theme;
  if (explicitTheme === "light" || explicitTheme === "dark") return explicitTheme;
  return systemThemeQuery?.matches ? "dark" : "light";
}

function toggleTheme() {
  const nextTheme = getResolvedTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;

  try {
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  } catch {
    // Keep the visible theme change even when storage is unavailable.
  }

  updateThemeButton();
  showToast(nextTheme === "dark" ? "已切换为深色主题" : "已切换为浅色主题");
}

function updateThemeButton() {
  if (!elements.themeButton) return;

  const resolvedTheme = getResolvedTheme();
  const nextThemeLabel = resolvedTheme === "dark" ? "浅色" : "深色";
  elements.themeButton.dataset.theme = resolvedTheme;
  elements.themeButton.querySelector("span").innerHTML = resolvedTheme === "dark" ? "&#9789;" : "&#9728;";
  elements.themeButton.setAttribute("aria-label", "切换为" + nextThemeLabel + "主题");
  elements.themeButton.title = "切换为" + nextThemeLabel + "主题";
}

function renderControls() {
  elements.presetControls.innerHTML = presets
    .map(
      (preset) => `
        <button class="choice-button" type="button" data-preset="${preset.id}">
          <strong>${preset.name}</strong>
          <small>${preset.detail}</small>
        </button>
      `,
    )
    .join("");

  elements.motifControls.innerHTML = motifs
    .map(
      (motif) => `
        <label class="motif-choice">
          <input type="checkbox" value="${motif.id}" data-motif />
          <span>${motif.name}</span>
        </label>
      `,
    )
    .join("");

  elements.layoutControls.innerHTML = layouts
    .map(
      (layout) => `
        <button class="choice-button" type="button" data-layout="${layout.id}">
          <strong>${layout.name}</strong>
          <small>${layout.detail}</small>
        </button>
      `,
    )
    .join("");

  elements.paletteControls.innerHTML = palettes
    .map((palette) => {
      const c = palette.colors;
      return `
        <button class="palette-choice" type="button" data-palette="${palette.id}">
          <strong>${palette.name}</strong>
          <small>${palette.detail}</small>
          <span class="swatches" aria-hidden="true">
            <i style="background:${c.primary}"></i>
            <i style="background:${c.secondary}"></i>
            <i style="background:${c.accent}"></i>
            <i style="background:${c.field}"></i>
            <i style="background:${c.dark}"></i>
          </span>
        </button>
      `;
    })
    .join("");

  elements.textureControls.innerHTML = textures
    .map(
      (texture) => `
        <button class="choice-button" type="button" data-texture="${texture.id}">
          <strong>${texture.name}</strong>
          <small>${texture.detail}</small>
        </button>
      `,
    )
    .join("");
}

function bindEvents() {
  elements.controlTabs.forEach((button) => {
    button.addEventListener("click", () => {
      activeControlTab = button.dataset.controlTab;
      syncControlTabs();
    });
  });

  elements.presetControls.addEventListener("click", (event) => {
    const button = event.target.closest("[data-preset]");
    if (!button) return;
    const preset = presets.find((item) => item.id === button.dataset.preset);
    state = { ...state, ...preset.apply, seed: makeSeed() };
    renderApp();
    showToast(`已应用「${preset.name}」`);
  });

  elements.motifControls.addEventListener("change", () => {
    const selected = [...document.querySelectorAll("[data-motif]:checked")].map((input) => input.value);
    state.motifs = selected.length ? selected : [motifs[0].id];
    renderApp();
  });

  elements.layoutControls.addEventListener("click", (event) => {
    const button = event.target.closest("[data-layout]");
    if (!button) return;
    state.layout = button.dataset.layout;
    renderApp();
  });

  elements.paletteControls.addEventListener("click", (event) => {
    const button = event.target.closest("[data-palette]");
    if (!button) return;
    state.palette = button.dataset.palette;
    renderApp();
  });

  elements.textureControls.addEventListener("click", (event) => {
    const button = event.target.closest("[data-texture]");
    if (!button) return;
    state.texture = button.dataset.texture;
    renderApp();
  });

  elements.densityInput.addEventListener("input", () => {
    state.density = Number(elements.densityInput.value);
    renderApp(false);
  });

  elements.complexityInput.addEventListener("input", () => {
    state.complexity = Number(elements.complexityInput.value);
    renderApp(false);
  });

  elements.symmetryInput.addEventListener("change", () => {
    state.symmetry = elements.symmetryInput.checked;
    renderApp();
  });

  elements.borderInput.addEventListener("change", () => {
    state.border = elements.borderInput.checked;
    renderApp();
  });

  elements.randomizeButton.addEventListener("click", randomize);
  elements.resetButton.addEventListener("click", () => {
    state = { ...defaultState, seed: makeSeed() };
    renderApp();
    showToast("已恢复初始纹样");
  });
  elements.downloadButton.addEventListener("click", downloadPng);
  elements.shareButton.addEventListener("click", copyShareLink);
  elements.themeButton.addEventListener("click", toggleTheme);
}

function renderApp(updateUrl = true) {
  enforceMapleMotifRules();
  syncControls();
  syncControlTabs();
  renderPatternCard(buildPatternSvg(state));
  renderCulture();
  renderMeta();
  if (updateUrl) writeStateToUrl();
}

function renderPatternCard(nextSvg) {
  const activeCard = elements.patternOutput.querySelector(".pattern-card-in, .pattern-card-current");
  const previousSvg = activeCard?.innerHTML;
  window.clearTimeout(patternAnimationTimer);

  if (!previousSvg) {
    elements.patternOutput.innerHTML = `<div class="pattern-card pattern-card-current">${nextSvg}</div>`;
    return;
  }

  elements.patternOutput.innerHTML = `
    <div class="pattern-card pattern-card-out" aria-hidden="true">${previousSvg}</div>
    <div class="pattern-card pattern-card-in">${nextSvg}</div>
  `;
  elements.patternFrame.classList.remove("is-card-switching");
  void elements.patternFrame.offsetWidth;
  elements.patternFrame.classList.add("is-card-switching");

  patternAnimationTimer = window.setTimeout(() => {
    const incomingCard = elements.patternOutput.querySelector(".pattern-card-in");
    const outgoingCard = elements.patternOutput.querySelector(".pattern-card-out");

    if (incomingCard) {
      incomingCard.classList.remove("pattern-card-in");
      incomingCard.classList.add("pattern-card-current");
    } else {
      elements.patternOutput.innerHTML = '<div class="pattern-card pattern-card-current">' + nextSvg + '</div>';
    }

    outgoingCard?.remove();
    elements.patternFrame.classList.remove("is-card-switching");
  }, 820);
}

function syncControls() {
  const mapleAllowed = isMapleMotifAllowed();

  document.querySelectorAll("[data-motif]").forEach((input) => {
    const isMapleInput = input.value === SPECIAL_MAPLE_MOTIF;
    input.checked = state.motifs.includes(input.value);
    input.disabled = isMapleInput && !mapleAllowed;
    input.closest(".motif-choice")?.classList.toggle("is-disabled", input.disabled);
    input.closest(".motif-choice")?.setAttribute(
      "title",
      input.disabled ? "枫香树纹仅在节庆满绣预设中作为中心纹样使用" : "",
    );
  });

  setPressed("[data-layout]", "layout");
  setPressed("[data-palette]", "palette");
  setPressed("[data-texture]", "texture");
  setPresetPressed();

  elements.densityInput.value = state.density;
  elements.complexityInput.value = state.complexity;
  elements.densityValue.value = `${Math.round(state.density * 100)}%`;
  elements.complexityValue.value = `${Math.round(state.complexity * 100)}%`;
  elements.symmetryInput.checked = state.symmetry;
  elements.borderInput.checked = state.border;
}

function syncControlTabs() {
  elements.controlTabs.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.controlTab === activeControlTab ? "true" : "false");
  });

  elements.controlPanels.forEach((panel) => {
    panel.hidden = panel.dataset.controlPanel !== activeControlTab;
  });
}

function enforceMapleMotifRules() {
  if (isMapleMotifAllowed()) return;

  state.motifs = state.motifs.filter((id) => id !== SPECIAL_MAPLE_MOTIF);
  if (!state.motifs.length) state.motifs = [motifs[0].id];
}

function isMapleMotifAllowed() {
  return getActivePresetId() === MAPLE_PRESET_ID;
}

function getSupportingMotifs(selected) {
  const supporting = selected.filter((id) => id !== SPECIAL_MAPLE_MOTIF);
  return supporting.length ? supporting : [motifs[0].id];
}

function setPressed(selector, key) {
  document.querySelectorAll(selector).forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset[key] === state[key] ? "true" : "false");
  });
}

function setPresetPressed() {
  const activePresetId = getActivePresetId();
  document.querySelectorAll("[data-preset]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.preset === activePresetId ? "true" : "false");
  });
}

function getActivePresetId() {
  const activePreset = presets.find((preset) => {
    const next = preset.apply;
    return (
      arraysEqual(next.motifs, state.motifs) &&
      next.layout === state.layout &&
      next.palette === state.palette &&
      next.texture === state.texture &&
      Math.abs(next.density - state.density) < 0.005 &&
      Math.abs(next.complexity - state.complexity) < 0.005 &&
      next.symmetry === state.symmetry &&
      next.border === state.border
    );
  });
  return activePreset?.id || "";
}

function arraysEqual(left, right) {
  if (left.length !== right.length) return false;
  return left.every((item, index) => item === right[index]);
}

function renderMeta() {
  const palette = getPalette();
  const layout = layouts.find((item) => item.id === state.layout);
  const texture = textures.find((item) => item.id === state.texture);
  const motifNames = state.motifs.map((id) => getMotif(id).name).join("、");
  elements.seedLabel.textContent = `Seed ${state.seed}`;
  elements.pieceTitle.textContent = `${palette.name} · ${layout.name}`;
  elements.pieceMeta.textContent = `${texture.name} / ${motifNames}`;
}

function renderCulture() {
  const layout = layouts.find((item) => item.id === state.layout);
  const texture = textures.find((item) => item.id === state.texture);
  const visibleMotifs = state.motifs.slice(0, 3);
  const hiddenCount = Math.max(0, state.motifs.length - visibleMotifs.length);
  elements.cultureIntro.textContent = `当前采用「${layout.name}」构图与「${texture.name}」质感，组合生成施洞苗绣风格的数字纹样。`;
  elements.cultureList.innerHTML =
    visibleMotifs
    .map((id) => {
      const motif = getMotif(id);
      return `
        <article class="culture-card">
          <h3>${motif.name}</h3>
          <p>${motif.note}</p>
        </article>
      `;
    })
      .join("") +
    (hiddenCount
      ? `<p class="culture-more">另有 ${hiddenCount} 个辅助纹样参与生成。</p>`
      : "");
}

function randomize() {
  if (elements.patternFrame.classList.contains("is-generating")) return;

  setGeneratingState(true);
  window.clearTimeout(generationTimer);

  generationTimer = window.setTimeout(() => {
    const rng = mulberry32(Date.now());
    const motifCount = randomInt(rng, 3, 6);
    const shuffled = motifs.filter((motif) => motif.id !== SPECIAL_MAPLE_MOTIF).sort(() => rng() - 0.5);
    state = {
      ...state,
      motifs: shuffled.slice(0, motifCount).map((motif) => motif.id),
      layout: pick(rng, layouts).id,
      palette: pick(rng, palettes).id,
      texture: pick(rng, textures).id,
      density: clamp(0.35 + rng() * 0.56, 0.15, 1),
      complexity: clamp(0.32 + rng() * 0.58, 0.1, 1),
      symmetry: rng() > 0.28,
      border: rng() > 0.18,
      seed: makeSeed(),
    };
    renderApp();
    setGeneratingState(false);
    showToast("新的纹样已经生成");
  }, 680);
}

function setGeneratingState(isGenerating) {
  elements.patternFrame.classList.toggle("is-generating", isGenerating);
  elements.patternFrame.setAttribute("aria-busy", isGenerating ? "true" : "false");
  elements.randomizeButton.disabled = isGenerating;
}

function buildPatternSvg(config) {
  const palette = getPalette();
  const rng = createRng(config.seed);
  const content = buildLayout(config, palette.colors, rng);
  const textureLabel = textures.find((item) => item.id === config.texture).name;

  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 900"
      role="img"
      aria-label="施洞苗绣风格数字纹样，${textureLabel}"
    >
      ${buildDefs(palette.colors, config.texture)}
      <rect width="900" height="900" fill="${palette.colors.cloth}" />
      <rect width="900" height="900" fill="url(#clothWeave)" opacity="0.72" />
      <rect x="28" y="28" width="844" height="844" fill="${palette.colors.field}" opacity="0.92" />
      <rect x="28" y="28" width="844" height="844" fill="url(#fineThread)" opacity="${config.texture === "woven" ? 0.64 : 0.28}" />
      ${content}
      <rect x="28" y="28" width="844" height="844" fill="none" stroke="${palette.colors.dark}" stroke-width="8" opacity="0.9" />
      <rect x="44" y="44" width="812" height="812" fill="none" stroke="${palette.colors.accent}" stroke-width="3" opacity="0.88" />
    </svg>
  `;
}

function buildDefs(colors, texture) {
  const weaveOpacity = texture === "woven" ? 0.52 : 0.32;
  return `
    <defs>
      <pattern id="clothWeave" width="18" height="18" patternUnits="userSpaceOnUse">
        <path d="M0 3H18M0 12H18" stroke="${colors.light}" stroke-width="1" opacity="${weaveOpacity}" />
        <path d="M4 0V18M14 0V18" stroke="${colors.dark}" stroke-width="1" opacity="0.12" />
      </pattern>
      <pattern id="fineThread" width="8" height="8" patternUnits="userSpaceOnUse">
        <path d="M0 4H8M4 0V8" stroke="${colors.dark}" stroke-width="0.6" opacity="0.24" />
      </pattern>
      <filter id="threadShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="1.5" dy="2" stdDeviation="1.4" flood-color="${colors.dark}" flood-opacity="0.28" />
      </filter>
    </defs>
  `;
}

function buildLayout(config, colors, rng) {
  if (config.layout === "repeat") return buildRepeatLayout(config, colors, rng);
  if (config.layout === "apron") return buildApronLayout(config, colors, rng);
  if (config.layout === "river") return buildRiverLayout(config, colors, rng);
  return buildRadialLayout(config, colors, rng);
}

function buildRadialLayout(config, colors, rng) {
  const selected = config.motifs;
  const supportingMotifs = getSupportingMotifs(selected);
  const ringCount = Math.round(8 + config.density * 12);
  const innerCount = Math.round(4 + config.complexity * 6);
  const center = selected.includes(SPECIAL_MAPLE_MOTIF) ? SPECIAL_MAPLE_MOTIF : supportingMotifs[0];
  let svg = "";

  svg += placeMotif(center, 450, 450, 1.72, 0, colors, config.texture, rng, 0);
  svg += buildRosette(450, 450, 168, colors, config.texture, rng);

  for (let i = 0; i < ringCount; i += 1) {
    const angle = (Math.PI * 2 * i) / ringCount;
    const radius = 250 + wave(i, rng) * 20;
    const motif = supportingMotifs[i % supportingMotifs.length];
    const scale = 0.62 + rng() * 0.22 + config.complexity * 0.12;
    svg += placeMotif(
      motif,
      450 + Math.cos(angle) * radius,
      450 + Math.sin(angle) * radius,
      scale,
      (angle * 180) / Math.PI + 90,
      colors,
      config.texture,
      rng,
      i,
    );
  }

  for (let i = 0; i < innerCount; i += 1) {
    const angle = (Math.PI * 2 * (i + 0.5)) / innerCount;
    const motif = supportingMotifs[(i + 2) % supportingMotifs.length];
    svg += placeMotif(
      motif,
      450 + Math.cos(angle) * 130,
      450 + Math.sin(angle) * 130,
      0.38 + config.density * 0.18,
      config.symmetry ? (angle * 180) / Math.PI : rng() * 360,
      colors,
      config.texture,
      rng,
      i + 20,
    );
  }

  if (config.border) svg += buildBorder(colors, config.texture, supportingMotifs, rng, Math.round(12 + config.density * 14));
  return svg;
}

function buildRepeatLayout(config, colors, rng) {
  const selected = getSupportingMotifs(config.motifs);
  const cells = Math.round(3 + config.density * 3);
  const gap = 760 / cells;
  let svg = "";

  for (let row = 0; row < cells; row += 1) {
    for (let col = 0; col < cells; col += 1) {
      const index = row * cells + col;
      const motif = selected[index % selected.length];
      const x = 70 + gap * col + gap / 2;
      const y = 70 + gap * row + gap / 2;
      const rotation = config.symmetry ? ((row + col) % 2 ? 180 : 0) : randomInt(rng, -35, 35);
      const scale = Math.min(0.88, gap / 170) * (0.82 + config.complexity * 0.22);
      svg += placeMotif(motif, x, y, scale, rotation, colors, config.texture, rng, index);
    }
  }

  svg += buildDiagonalFill(colors, config.texture, config.density);
  if (config.border) svg += buildBorder(colors, config.texture, selected, rng, Math.round(10 + config.density * 12));
  return svg;
}

function buildApronLayout(config, colors, rng) {
  const selected = getSupportingMotifs(config.motifs);
  const rows = 4 + Math.round(config.density * 3);
  let svg = "";

  svg += `<rect x="118" y="116" width="664" height="668" fill="${colors.light}" opacity="0.14" />`;
  svg += `<path d="M150 164H750M150 736H750" stroke="${colors.dark}" stroke-width="10" opacity="0.42" />`;

  for (let row = 0; row < rows; row += 1) {
    const y = 190 + row * (510 / Math.max(1, rows - 1));
    const count = row % 2 === 0 ? 5 : 4;
    for (let col = 0; col < count; col += 1) {
      const x = 190 + col * (520 / Math.max(1, count - 1));
      const motif = selected[(row + col) % selected.length];
      const rotation = config.symmetry ? (col % 2 ? 180 : 0) : randomInt(rng, -18, 18);
      svg += placeMotif(motif, x, y, 0.58 + config.complexity * 0.16, rotation, colors, config.texture, rng, row * 10 + col);
    }
  }

  svg += buildSideBands(colors, config.texture, selected, rng);
  if (config.border) svg += buildBorder(colors, config.texture, selected, rng, Math.round(14 + config.density * 10));
  return svg;
}

function buildRiverLayout(config, colors, rng) {
  const selected = getSupportingMotifs(config.motifs);
  const flowCount = Math.round(4 + config.density * 5);
  let svg = "";

  for (let i = 0; i < flowCount; i += 1) {
    const y = 145 + i * (610 / Math.max(1, flowCount - 1));
    const d = `M80 ${y} C210 ${y - 80}, 285 ${y + 95}, 420 ${y} S635 ${y - 92}, 820 ${y + 10}`;
    svg += threadPath(d, colors.secondary, 10, config.texture, `opacity="0.72"`);
    svg += threadPath(d, colors.accent, 3, "split", `opacity="0.66"`);
  }

  const count = Math.round(9 + config.density * 12);
  for (let i = 0; i < count; i += 1) {
    const x = 130 + (640 * i) / Math.max(1, count - 1);
    const y = 455 + Math.sin(i * 1.45) * 228 + randomInt(rng, -20, 20);
    const motif = selected[i % selected.length];
    const rotation = config.symmetry ? (i % 2 ? -28 : 28) : randomInt(rng, -70, 70);
    svg += placeMotif(motif, x, y, 0.52 + config.complexity * 0.18, rotation, colors, config.texture, rng, i);
  }

  svg += buildRosette(450, 450, 310, colors, "split", rng, 0.36);
  if (config.border) svg += buildBorder(colors, config.texture, selected, rng, Math.round(10 + config.density * 12));
  return svg;
}

function placeMotif(id, x, y, scale, rotation, colors, texture, rng, variant) {
  const mirrored = variant % 2 === 1 ? -1 : 1;
  const motif = renderMotif(id, colors, texture, rng, variant);
  return `
    <g transform="translate(${round(x)} ${round(y)}) rotate(${round(rotation)}) scale(${round(scale)} ${round(scale * mirrored)})">
      ${motif}
    </g>
  `;
}

function renderMotif(id, colors, texture, rng, variant = 0) {
  if (id === "fish") return fishMotif(colors, texture);
  if (id === "butterfly") return butterflyMotif(colors, texture);
  if (id === "bird") return birdMotif(colors, texture);
  if (id === "flower") return flowerMotif(colors, texture, variant);
  if (id === "water") return waterMotif(colors, texture);
  if (id === "maple") return mapleMotif(colors, texture);
  if (id === "horn") return hornMotif(colors, texture);
  if (id === "human") return humanMotif(colors, texture);
  return dragonMotif(colors, texture, rng);
}

function motifDot(x, y, r, color, opacity = 0.9) {
  return `<circle cx="${round(x)}" cy="${round(y)}" r="${round(r)}" fill="${color}" opacity="${opacity}" />`;
}

function motifDots(points, color, radius = 3, opacity = 0.88) {
  return points.map(([x, y, r = radius, fill = color]) => motifDot(x, y, r, fill, opacity)).join("");
}

function motifDiamond(x, y, size, color, opacity = 0.86) {
  return `<path d="M${round(x)} ${round(y - size)} L${round(x + size)} ${round(y)} L${round(x)} ${round(y + size)} L${round(x - size)} ${round(y)}Z" fill="${color}" opacity="${opacity}" />`;
}

function motifDiamonds(points, color, size = 5, opacity = 0.84) {
  return points.map(([x, y, s = size, fill = color]) => motifDiamond(x, y, s, fill, opacity)).join("");
}

function motifNeedles(segments, color, width = 2.6, opacity = 0.78) {
  return segments
    .map(([x1, y1, x2, y2]) => threadPath(`M${x1} ${y1}L${x2} ${y2}`, color, width, "split", `opacity="${opacity}"`))
    .join("");
}

function dragonMotif(colors, texture) {
  const scaleDots = [
    [-62, -16, 4.2],
    [-42, -32, 3.6],
    [-18, -36, 3.8],
    [8, -28, 3.4],
    [31, -10, 3.8],
    [30, 18, 3.6],
    [7, 38, 3.4],
    [-22, 38, 3.6],
    [-48, 24, 3.3],
  ];
  const mane = [
    [-68, -34, -60, -60, -48, -38],
    [-42, -50, -30, -76, -20, -48],
    [-10, -52, 3, -78, 12, -44],
    [18, -38, 40, -58, 38, -24],
  ];

  return `
    <g filter="url(#threadShadow)">
      <path d="M-98 14 C-78 -62 -8 -82 38 -42 C84 -2 63 62 1 66 C-48 69 -88 34 -76 2 C-64 -26 -9 -23 11 5 C33 36 -12 58 -43 34 C-23 43 3 35 -1 14 C-5 -5 -43 -7 -53 12 C-64 35 -34 49 -3 48 C35 47 60 14 43 -17 C17 -56 -59 -42 -82 18Z" fill="${colors.primary}" opacity="0.17" />
      ${threadPath("M-98 14 C-78 -62 -8 -82 38 -42 C84 -2 63 62 1 66 C-48 69 -88 34 -76 2 C-64 -26 -9 -23 11 5 C33 36 -12 58 -43 34", colors.primary, 14, texture)}
      ${threadPath("M-82 18 C-58 -34 11 -50 43 -17 C60 14 35 47 -3 48 C-34 49 -64 35 -53 12 C-43 -7 -5 -5 -1 14", colors.secondary, 5.5, "split", `opacity="0.84"`)}
      ${threadPath("M-66 24 C-40 8 -9 8 16 25 M-44 42 C-21 28 8 27 30 39", colors.accent, 4.2, "split", `opacity="0.74"`)}
      ${mane.map(([x1, y1, x2, y2, x3, y3]) => `<path d="M${x1} ${y1} L${x2} ${y2} L${x3} ${y3}Z" fill="${colors.accent}" opacity="0.86" />`).join("")}
      ${threadPath("M35 -42 C60 -72 95 -62 91 -25 C109 -15 109 6 91 16 C70 28 52 13 47 -7", colors.primary, 10, texture)}
      ${threadPath("M52 -55 C64 -84 84 -84 91 -64 M42 -50 C43 -78 19 -88 13 -59", colors.accent, 6, texture)}
      ${threadPath("M75 -4 C108 -14 120 -34 112 -53 M77 10 C105 31 124 14 132 -2", colors.secondary, 4, "split", `opacity="0.88"`)}
      ${threadPath("M87 4 L116 14 L88 24 M90 -16 L112 -22", colors.dark, 5.5, texture)}
      ${motifDots(scaleDots, colors.light, 3.4, 0.9)}
      ${motifDiamonds([[-49, -8, 4, colors.secondary], [-22, -16, 4, colors.accent], [8, -10, 4, colors.secondary], [13, 20, 4, colors.accent], [-20, 24, 4, colors.secondary]], colors.secondary, 4, 0.86)}
      ${threadPath("M-43 52 L-61 76 L-27 60 M-78 2 L-104 -18 L-94 14", colors.accent, 4.6, texture)}
      <circle cx="65" cy="-22" r="6.5" fill="${colors.light}" stroke="${colors.dark}" stroke-width="3.2" />
      <circle cx="66" cy="-22" r="2" fill="${colors.primary}" />
    </g>
  `;
}

function fishMotif(colors, texture) {
  const scaleDots = [
    [-38, -18, 3],
    [-18, -20, 3],
    [4, -18, 3],
    [24, -12, 3],
    [-44, 4, 3],
    [-22, 6, 3],
    [0, 6, 3],
    [22, 4, 3],
    [-35, 24, 3],
    [-12, 25, 3],
    [12, 22, 3],
  ];
  const finNeedles = [
    [-6, -33, 10, -58],
    [4, -31, 24, -54],
    [-8, 33, 12, 56],
    [4, 31, 28, 50],
  ];

  return `
    <g filter="url(#threadShadow)">
      <path d="M-84 0 C-48 -50 32 -48 76 0 C34 48 -47 52 -84 0Z" fill="${colors.primary}" opacity="0.18" />
      ${threadPath("M-84 0 C-48 -50 32 -48 76 0 C34 48 -47 52 -84 0Z", colors.primary, 9, texture)}
      <path d="M75 0 L114 -40 L105 -8 L122 0 L105 8 L114 40Z" fill="${colors.secondary}" opacity="0.18" />
      ${threadPath("M75 0 L114 -40 L105 -8 L122 0 L105 8 L114 40Z", colors.secondary, 7, texture)}
      ${threadPath("M-44 -34 C-28 -12 -28 12 -44 34 M-18 -40 C0 -14 0 14 -18 40 M10 -37 C29 -10 29 10 10 37 M40 -25 C50 -7 50 7 40 25", colors.accent, 3.8, "split", `opacity="0.9"`)}
      ${threadPath("M-62 0 C-38 -15 -6 -16 24 0 C-6 16 -38 15 -62 0", colors.secondary, 4, "split", `opacity="0.72"`)}
      ${motifNeedles(finNeedles, colors.secondary, 3.2, 0.78)}
      ${motifDots(scaleDots, colors.light, 2.7, 0.86)}
      ${motifDiamonds([[54, 0, 4, colors.accent], [93, -16, 4, colors.light], [94, 16, 4, colors.light]], colors.accent, 4, 0.84)}
      ${threadPath("M-89 -2 L-108 -14 M-89 3 L-108 16", colors.accent, 3.2, "split", `opacity="0.82"`)}
      <circle cx="-52" cy="-9" r="7" fill="${colors.light}" stroke="${colors.dark}" stroke-width="3" />
      <circle cx="-53" cy="-10" r="2" fill="${colors.primary}" />
    </g>
  `;
}

function butterflyMotif(colors, texture) {
  const wingDots = [
    [-72, -40, 4.2, colors.light],
    [-47, -22, 3.6, colors.accent],
    [-75, 28, 3.8, colors.light],
    [-34, 44, 3.4, colors.secondary],
    [72, -40, 4.2, colors.light],
    [47, -22, 3.6, colors.accent],
    [75, 28, 3.8, colors.light],
    [34, 44, 3.4, colors.primary],
  ];

  return `
    <g filter="url(#threadShadow)">
      <path d="M-8 -20 C-48 -84 -112 -78 -112 -18 C-111 17 -82 25 -54 15 C-91 61 -48 94 -8 32Z" fill="${colors.primary}" opacity="0.2" />
      <path d="M8 -20 C48 -84 112 -78 112 -18 C111 17 82 25 54 15 C91 61 48 94 8 32Z" fill="${colors.secondary}" opacity="0.2" />
      ${threadPath("M-8 -20 C-48 -84 -112 -78 -112 -18 C-111 17 -82 25 -54 15 C-91 61 -48 94 -8 32Z", colors.primary, 8, texture)}
      ${threadPath("M8 -20 C48 -84 112 -78 112 -18 C111 17 82 25 54 15 C91 61 48 94 8 32Z", colors.secondary, 8, texture)}
      ${threadPath("M0 -55 C-12 -24 -12 34 0 76 M0 -55 C12 -24 12 34 0 76", colors.dark, 6.5, "split")}
      ${threadPath("M-8 -50 C-29 -84 -56 -89 -75 -66 M8 -50 C29 -84 56 -89 75 -66", colors.accent, 4, texture)}
      ${threadPath("M-89 -17 C-62 -20 -35 -9 -14 18 M89 -17 C62 -20 35 -9 14 18", colors.light, 3.6, "split", `opacity="0.88"`)}
      ${threadPath("M-66 49 C-45 37 -28 38 -11 55 M66 49 C45 37 28 38 11 55", colors.accent, 3.6, "split", `opacity="0.82"`)}
      ${threadPath("M-42 -55 C-37 -31 -29 -12 -14 8 M42 -55 C37 -31 29 -12 14 8", colors.secondary, 4.2, "split", `opacity="0.78"`)}
      ${threadPath("M-48 16 C-36 23 -25 35 -17 53 M48 16 C36 23 25 35 17 53", colors.primary, 4.2, "split", `opacity="0.78"`)}
      ${motifDots(wingDots, colors.light, 3.8, 0.9)}
      ${motifDiamonds([[-58, -2, 5, colors.secondary], [-49, 61, 4, colors.light], [58, -2, 5, colors.primary], [49, 61, 4, colors.light], [0, 2, 4, colors.accent]], colors.accent, 4, 0.86)}
      <ellipse cx="0" cy="7" rx="8" ry="44" fill="${colors.dark}" opacity="0.28" />
      <circle cx="0" cy="-40" r="7" fill="${colors.accent}" opacity="0.9" />
      <circle cx="0" cy="22" r="5" fill="${colors.light}" opacity="0.86" />
    </g>
  `;
}

function birdMotif(colors, texture) {
  const tailNeedles = [
    [-60, 30, -110, 66],
    [-44, 36, -78, 82],
    [-25, 39, -42, 88],
    [-8, 40, -8, 82],
  ];
  const wingDots = [
    [-30, -8, 3.4],
    [-8, -14, 3],
    [16, -10, 3.2],
    [34, 2, 2.8],
    [-36, 18, 3],
    [-13, 20, 3.2],
    [12, 18, 3],
  ];

  return `
    <g filter="url(#threadShadow)">
      <path d="M-91 24 C-42 -70 42 -64 82 7 C39 0 7 18 -11 58 C-29 35 -55 24 -91 24Z" fill="${colors.secondary}" opacity="0.18" />
      ${threadPath("M-91 24 C-42 -70 42 -64 82 7 C39 0 7 18 -11 58 C-29 35 -55 24 -91 24Z", colors.secondary, 8, texture)}
      ${threadPath("M-51 17 C-23 -17 28 -23 69 6", colors.primary, 8, texture)}
      ${threadPath("M-46 6 C-16 6 17 15 44 36 M-36 -11 C-8 -5 17 3 41 20", colors.light, 3.2, "split", `opacity="0.72"`)}
      ${motifNeedles(tailNeedles, colors.primary, 4.2, 0.86)}
      ${threadPath("M72 5 L111 -8 L78 25", colors.accent, 6, texture)}
      ${threadPath("M48 -9 C42 -38 61 -51 80 -42 M41 -11 C31 -42 46 -59 64 -55", colors.accent, 4, "split", `opacity="0.86"`)}
      ${threadPath("M-70 25 C-48 42 -25 48 -4 44", colors.accent, 4, "split", `opacity="0.8"`)}
      ${motifDots(wingDots, colors.light, 3, 0.88)}
      ${motifDiamonds([[-55, 33, 4, colors.accent], [-75, 51, 3.5, colors.light], [-27, 54, 3.5, colors.secondary]], colors.accent, 4, 0.84)}
      <circle cx="49" cy="-1" r="5.8" fill="${colors.light}" stroke="${colors.dark}" stroke-width="3" />
      <circle cx="50" cy="-2" r="1.7" fill="${colors.primary}" />
    </g>
  `;
}

function flowerMotif(colors, texture, variant) {
  const petals = 8 + ((variant || 0) % 2) * 2;
  let outerPetals = "";
  let innerPetals = "";
  let rimDots = "";

  for (let i = 0; i < petals; i += 1) {
    const angle = (360 / petals) * i;
    const color = i % 2 ? colors.secondary : colors.primary;
    outerPetals += `
      <g transform="rotate(${angle})">
        <path d="M0 -15 C-28 -42 -21 -78 0 -103 C21 -78 28 -42 0 -15Z" fill="${color}" opacity="0.2" />
        ${threadPath("M0 -15 C-28 -42 -21 -78 0 -103 C21 -78 28 -42 0 -15Z", color, 5.4, texture)}
        ${threadPath("M0 -28 C-7 -47 -6 -66 0 -86 M-10 -52 C-3 -47 3 -47 10 -52", colors.light, 2.7, "split", `opacity="0.72"`)}
      </g>
    `;
    innerPetals += `
      <g transform="rotate(${angle + 360 / petals / 2})">
        ${threadPath("M0 -20 C-13 -35 -10 -52 0 -62 C10 -52 13 -35 0 -20Z", i % 2 ? colors.primary : colors.secondary, 3.8, "split", `opacity="0.86"`)}
      </g>
    `;
    const rad = (angle * Math.PI) / 180;
    rimDots += motifDot(Math.cos(rad) * 79, Math.sin(rad) * 79, 3.2, colors.light, 0.84);
  }

  return `
    <g filter="url(#threadShadow)">
      ${outerPetals}
      ${innerPetals}
      <circle cx="0" cy="0" r="28" fill="${colors.accent}" opacity="0.22" />
      ${threadPath("M-28 0 C-11 -24 11 -24 28 0 C11 24 -11 24 -28 0Z", colors.accent, 5, "split")}
      ${threadPath("M0 -32 V32 M-32 0H32 M-23 -23 L23 23 M23 -23 L-23 23", colors.dark, 2.6, "split", `opacity="0.48"`)}
      ${rimDots}
      ${motifDiamonds([[0, -44, 4, colors.light], [44, 0, 4, colors.light], [0, 44, 4, colors.light], [-44, 0, 4, colors.light]], colors.light, 4, 0.86)}
      <circle cx="0" cy="0" r="11" fill="${colors.light}" stroke="${colors.dark}" stroke-width="3.5" />
      <circle cx="0" cy="0" r="4" fill="${colors.primary}" opacity="0.88" />
    </g>
  `;
}

function mapleMotif(colors, texture) {
  const leafPath = "M0 -55 L15 -28 L10 -7 L28 9 L8 16 L0 40 L-8 16 L-28 9 L-10 -7 L-15 -28Z";
  const leaf = (angle, color, scale = 1) => `
    <g transform="rotate(${angle}) translate(0 -36) scale(${scale})">
      <path d="${leafPath}" fill="${color}" opacity="0.2" />
      ${threadPath(leafPath, color, 5.2, texture)}
      ${threadPath("M0 -42 V28 M-11 -21 L0 -12 L11 -21 M-15 4 L0 12 L15 4", colors.light, 2.4, "split", `opacity="0.72"`)}
    </g>
  `;
  const cornerKnot = (x, y, sx, sy) => `
    <g transform="translate(${x} ${y}) scale(${sx} ${sy})">
      ${threadPath("M-23 -20H19V18H-8V-3H9", colors.light, 4.2, "split")}
      ${threadPath("M-18 4H-4V18 M-4 -20V-7H9", colors.secondary, 3.2, "split", `opacity="0.82"`)}
      ${motifDiamonds([[-18, -14, 3.2, colors.light], [13, 13, 3.2, colors.accent]], colors.light, 3.2, 0.86)}
    </g>
  `;
  const borderDots = [
    [-88, -66],
    [-58, -66],
    [-28, -66],
    [28, -66],
    [58, -66],
    [88, -66],
    [-88, 66],
    [-58, 66],
    [-28, 66],
    [28, 66],
    [58, 66],
    [88, 66],
    [-96, -42],
    [-96, 0],
    [-96, 42],
    [96, -42],
    [96, 0],
    [96, 42],
  ];

  return `
    <g filter="url(#threadShadow)">
      <rect x="-112" y="-88" width="224" height="176" fill="${colors.dark}" opacity="0.18" />
      ${threadPath("M-112 -88H112V88H-112Z", colors.accent, 5.8, texture)}
      ${threadPath("M-100 -76H100V76H-100Z", colors.primary, 5, "split", `opacity="0.94"`)}
      ${threadPath("M-86 -62H86V62H-86Z", colors.secondary, 4.2, texture)}
      ${motifDots(borderDots, colors.light, 2.3, 0.76)}
      ${threadPath("M0 -62V62 M-72 0H72 M-54 -47L54 47 M54 -47L-54 47", colors.accent, 4.5, texture, `opacity="0.92"`)}
      ${leaf(0, colors.secondary, 0.72)}
      ${leaf(45, colors.primary, 0.62)}
      ${leaf(90, colors.secondary, 0.72)}
      ${leaf(135, colors.primary, 0.62)}
      ${leaf(180, colors.secondary, 0.72)}
      ${leaf(225, colors.primary, 0.62)}
      ${leaf(270, colors.secondary, 0.72)}
      ${leaf(315, colors.primary, 0.62)}
      ${cornerKnot(-60, -40, 1, 1)}
      ${cornerKnot(60, -40, -1, 1)}
      ${cornerKnot(-60, 40, 1, -1)}
      ${cornerKnot(60, 40, -1, -1)}
      ${motifDiamonds([[0, -70, 4, colors.light], [0, 70, 4, colors.light], [-104, 0, 4, colors.light], [104, 0, 4, colors.light]], colors.light, 4, 0.88)}
      <circle cx="0" cy="0" r="16" fill="${colors.accent}" opacity="0.32" />
      <circle cx="0" cy="0" r="9" fill="${colors.secondary}" stroke="${colors.dark}" stroke-width="3" />
      <circle cx="0" cy="0" r="3.2" fill="${colors.light}" />
    </g>
  `;
}

function waterMotif(colors, texture) {
  const droplets = [
    [-92, -34, 3.4, colors.light],
    [-44, -32, 3, colors.accent],
    [4, -27, 3, colors.light],
    [52, -31, 3, colors.accent],
    [104, -32, 3.4, colors.light],
    [-74, 8, 3, colors.light],
    [-22, 13, 3, colors.accent],
    [32, 8, 3, colors.light],
    [84, 12, 3, colors.accent],
    [-52, 50, 3, colors.light],
    [2, 54, 3, colors.accent],
    [58, 48, 3, colors.light],
  ];

  return `
    <g filter="url(#threadShadow)">
      ${threadPath("M-118 -34 C-87 -62 -57 -62 -28 -34 S27 -7 57 -34 S105 -61 130 -39", colors.secondary, 8, texture)}
      ${threadPath("M-121 5 C-87 -27 -47 -27 -12 5 S50 41 92 7", colors.primary, 8, texture)}
      ${threadPath("M-102 45 C-66 18 -31 18 5 45 S67 72 106 39", colors.accent, 6, "split")}
      ${threadPath("M-93 -4 H-67 V20 H-42 M-14 -39 H13 V-15 H37 M35 38 H61 V58 H89", colors.light, 3.4, "split", `opacity="0.62"`)}
      ${threadPath("M-73 -27 C-54 -42 -38 -42 -20 -27 M-37 12 C-16 -5 5 -5 27 12 M21 51 C40 36 58 36 77 51", colors.dark, 2.6, "split", `opacity="0.42"`)}
      ${motifDots(droplets, colors.light, 2.8, 0.82)}
      ${motifDiamonds([[-106, 5, 4, colors.secondary], [119, -38, 4, colors.primary], [96, 40, 4, colors.secondary]], colors.secondary, 4, 0.78)}
    </g>
  `;
}

function hornMotif(colors, texture) {
  const sideDots = [
    [-61, -31, 3.2],
    [-43, -16, 2.8],
    [-26, 4, 2.8],
    [-14, 27, 3],
    [61, -31, 3.2],
    [43, -16, 2.8],
    [26, 4, 2.8],
    [14, 27, 3],
  ];

  return `
    <g filter="url(#threadShadow)">
      <path d="M0 67 C-17 15 -67 -2 -90 -59 C-48 -47 -14 -29 0 4 C14 -29 48 -47 90 -59 C67 -2 17 15 0 67Z" fill="${colors.primary}" opacity="0.16" />
      ${threadPath("M0 67 C-17 15 -67 -2 -90 -59 C-48 -47 -14 -29 0 4 C14 -29 48 -47 90 -59 C67 -2 17 15 0 67Z", colors.primary, 9, texture)}
      ${threadPath("M0 50 C-8 16 -38 -5 -61 -33 M0 50 C8 16 38 -5 61 -33", colors.secondary, 4.8, "split")}
      ${threadPath("M-33 24 C-12 5 12 5 33 24 M-46 43 C-17 25 17 25 46 43", colors.accent, 5.4, texture)}
      ${threadPath("M-73 -48 C-52 -39 -35 -27 -24 -11 M73 -48 C52 -39 35 -27 24 -11", colors.light, 3.2, "split", `opacity="0.72"`)}
      ${motifDots(sideDots, colors.light, 2.8, 0.86)}
      ${motifDiamonds([[0, 4, 5, colors.accent], [0, 34, 4, colors.light], [-24, 45, 3.8, colors.secondary], [24, 45, 3.8, colors.secondary]], colors.accent, 4, 0.86)}
      ${threadPath("M-13 58 L0 75 L13 58", colors.dark, 3.4, "split", `opacity="0.54"`)}
    </g>
  `;
}

function humanMotif(colors, texture) {
  const costumeDots = [
    [-20, -12, 2.8, colors.light],
    [0, -8, 3, colors.accent],
    [20, -12, 2.8, colors.light],
    [-27, 20, 2.8, colors.secondary],
    [0, 25, 3, colors.light],
    [27, 20, 2.8, colors.secondary],
    [-38, 57, 2.8, colors.light],
    [-13, 62, 2.8, colors.accent],
    [13, 62, 2.8, colors.accent],
    [38, 57, 2.8, colors.light],
  ];

  return `
    <g filter="url(#threadShadow)">
      <path d="M-30 -63 C-19 -91 19 -91 30 -63 L18 -39 L-18 -39Z" fill="${colors.secondary}" opacity="0.18" />
      ${threadPath("M-30 -63 C-19 -91 19 -91 30 -63 L18 -39 L-18 -39Z", colors.secondary, 6.5, texture)}
      ${threadPath("M-43 -70 H43 M-30 -82 L-14 -68 M30 -82 L14 -68", colors.accent, 4, "split", `opacity="0.84"`)}
      <path d="M0 -36 L42 8 L26 68 H-26 L-42 8Z" fill="${colors.primary}" opacity="0.17" />
      ${threadPath("M0 -36 L42 8 L26 68 H-26 L-42 8Z", colors.primary, 8, texture)}
      ${threadPath("M0 -31 V67 M-33 13 H33 M-24 42 H24", colors.light, 3.2, "split", `opacity="0.72"`)}
      ${threadPath("M-28 -2 C-56 -14 -69 6 -83 29 M28 -2 C56 -14 69 6 83 29", colors.primary, 7.5, texture)}
      ${threadPath("M-82 29 L-100 23 M82 29 L100 23", colors.accent, 4, "split", `opacity="0.86"`)}
      ${threadPath("M-24 68 L-45 88 M24 68 L45 88 M-5 68 L-16 89 M5 68 L16 89", colors.accent, 4.6, "split")}
      ${motifDots(costumeDots, colors.light, 2.8, 0.86)}
      ${motifDiamonds([[0, -22, 4, colors.light], [-17, 37, 3.5, colors.light], [17, 37, 3.5, colors.light], [0, 51, 4, colors.accent]], colors.light, 4, 0.84)}
      ${threadPath("M-12 -64 L-3 -54 L12 -66", colors.dark, 3.4, "split", `opacity="0.78"`)}
      <circle cx="0" cy="-61" r="4" fill="${colors.light}" opacity="0.88" />
    </g>
  `;
}

function buildRosette(cx, cy, radius, colors, texture, rng, opacity = 0.72) {
  let svg = `<g opacity="${opacity}">`;
  const count = 16;
  for (let i = 0; i < count; i += 1) {
    const angle = (360 / count) * i;
    const x = cx + Math.cos((Math.PI * 2 * i) / count) * radius;
    const y = cy + Math.sin((Math.PI * 2 * i) / count) * radius;
    svg += `
      <g transform="translate(${round(x)} ${round(y)}) rotate(${angle}) scale(0.28)">
        ${hornMotif(colors, texture, rng)}
      </g>
    `;
  }
  svg += "</g>";
  return svg;
}

function buildBorder(colors, texture, selected, rng, count) {
  const positions = [];
  const min = 80;
  const max = 820;
  for (let i = 0; i < count; i += 1) {
    const t = i / count;
    const x = min + (max - min) * t;
    positions.push([x, min, 0], [x, max, 180], [min, x, -90], [max, x, 90]);
  }

  let svg = `<g opacity="0.94">`;
  svg += `<rect x="68" y="68" width="764" height="764" fill="none" stroke="${colors.secondary}" stroke-width="7" opacity="0.76" />`;
  positions.forEach(([x, y, rotation], index) => {
    const motif = selected[index % selected.length] || "flower";
    svg += placeMotif(motif, x, y, 0.24, rotation, colors, texture, rng, index);
  });
  svg += "</g>";
  return svg;
}

function buildDiagonalFill(colors, texture, density) {
  let svg = `<g opacity="0.22">`;
  const count = Math.round(6 + density * 8);
  for (let i = 0; i < count; i += 1) {
    const offset = -210 + i * 96;
    svg += threadPath(`M${offset} 820 L${offset + 820} 0`, colors.accent, 4, texture);
  }
  svg += "</g>";
  return svg;
}

function buildSideBands(colors, texture, selected, rng) {
  let svg = `<g opacity="0.9">`;
  const ys = [130, 220, 310, 400, 490, 580, 670, 760];
  ys.forEach((y, index) => {
    const motif = selected[index % selected.length] || "horn";
    svg += placeMotif(motif, 82, y, 0.28, -90, colors, texture, rng, index);
    svg += placeMotif(motif, 818, y, 0.28, 90, colors, texture, rng, index + 30);
  });
  svg += "</g>";
  return svg;
}

function threadPath(d, color, width, texture, extra = "") {
  const base = `d="${d}" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" ${extra}`;

  if (texture === "chain") {
    return `
      <path ${base} stroke-width="${width}" opacity="0.24" />
      <path ${base} stroke-width="${width}" stroke-dasharray="1 ${Math.max(7, width * 1.25)}" />
    `;
  }

  if (texture === "split") {
    return `
      <path ${base} stroke-width="${width}" opacity="0.22" />
      <path ${base} stroke-width="${Math.max(1, width * 0.72)}" stroke-dasharray="${Math.max(4, width)} ${Math.max(3, width * 0.58)}" />
    `;
  }

  if (texture === "stack") {
    return `
      <path ${base} stroke-width="${width + 8}" opacity="0.18" transform="translate(3 3)" />
      <path ${base} stroke-width="${width}" />
      <path ${base} stroke-width="${Math.max(2, width * 0.35)}" opacity="0.55" stroke-dasharray="3 8" />
    `;
  }

  if (texture === "woven") {
    return `
      <path ${base} stroke-width="${width}" opacity="0.28" />
      <path ${base} stroke-width="${width}" stroke-dasharray="${Math.max(4, width * 0.75)} ${Math.max(4, width * 0.75)}" />
    `;
  }

  return `<path ${base} stroke-width="${width}" />`;
}

function getPalette() {
  return palettes.find((palette) => palette.id === state.palette) || palettes[0];
}

function getMotif(id) {
  return motifs.find((motif) => motif.id === id) || motifs[0];
}

function readStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const urlState = {
    motifs: params.get("m")?.split(",").filter((id) => motifs.some((item) => item.id === id)),
    layout: params.get("l"),
    palette: params.get("p"),
    texture: params.get("t"),
    density: Number(params.get("d")),
    complexity: Number(params.get("c")),
    symmetry: params.get("sym") === "1",
    border: params.get("b") !== "0",
    seed: params.get("s"),
  };

  return {
    ...defaultState,
    motifs: urlState.motifs?.length ? urlState.motifs : defaultState.motifs,
    layout: layouts.some((item) => item.id === urlState.layout) ? urlState.layout : defaultState.layout,
    palette: palettes.some((item) => item.id === urlState.palette) ? urlState.palette : defaultState.palette,
    texture: textures.some((item) => item.id === urlState.texture) ? urlState.texture : defaultState.texture,
    density: Number.isFinite(urlState.density) && urlState.density > 0 ? clamp(urlState.density, 0.15, 1) : defaultState.density,
    complexity:
      Number.isFinite(urlState.complexity) && urlState.complexity > 0
        ? clamp(urlState.complexity, 0.1, 1)
        : defaultState.complexity,
    symmetry: params.has("sym") ? urlState.symmetry : defaultState.symmetry,
    border: params.has("b") ? urlState.border : defaultState.border,
    seed: urlState.seed || defaultState.seed,
  };
}

function writeStateToUrl() {
  const params = new URLSearchParams();
  params.set("m", state.motifs.join(","));
  params.set("l", state.layout);
  params.set("p", state.palette);
  params.set("t", state.texture);
  params.set("d", state.density.toFixed(2));
  params.set("c", state.complexity.toFixed(2));
  params.set("sym", state.symmetry ? "1" : "0");
  params.set("b", state.border ? "1" : "0");
  params.set("s", state.seed);
  history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
}

async function copyShareLink() {
  writeStateToUrl();
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("分享链接已复制");
  } catch {
    showToast("浏览器未允许复制，请直接使用地址栏链接");
  }
}

function downloadPng() {
  const svg =
    elements.patternOutput.querySelector(".pattern-card-in svg") ||
    elements.patternOutput.querySelector(".pattern-card-current svg") ||
    elements.patternOutput.querySelector("svg");
  if (!svg) return;

  const serializer = new XMLSerializer();
  const source = serializer.serializeToString(svg);
  const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const image = new Image();
  const canvas = document.createElement("canvas");
  const size = 1800;
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");

  image.onload = () => {
    context.fillStyle = "#fffdf8";
    context.fillRect(0, 0, size, size);
    context.drawImage(image, 0, 0, size, size);
    URL.revokeObjectURL(url);
    const link = document.createElement("a");
    link.download = `shidong-miao-pattern-${state.seed}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("PNG 已生成");
  };

  image.onerror = () => {
    URL.revokeObjectURL(url);
    showToast("导出失败，请稍后再试");
  };

  image.src = url;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2100);
}

function makeSeed() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

function createRng(seed) {
  return mulberry32(hashString(seed));
}

function hashString(value) {
  let hash = 1779033703 ^ value.length;
  for (let i = 0; i < value.length; i += 1) {
    hash = Math.imul(hash ^ value.charCodeAt(i), 3432918353);
    hash = (hash << 13) | (hash >>> 19);
  }
  return hash >>> 0;
}

function mulberry32(seed) {
  return function next() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rng, items) {
  return items[Math.floor(rng() * items.length)];
}

function randomInt(rng, min, max) {
  return Math.floor(rng() * (max - min + 1)) + min;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round(value) {
  return Math.round(value * 100) / 100;
}

function wave(index, rng) {
  return Math.sin(index * 1.73 + rng() * 0.5);
}
