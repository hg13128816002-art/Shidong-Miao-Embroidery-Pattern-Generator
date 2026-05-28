const motifs = [
  {
    id: "dragon",
    name: "龙纹",
    note: "施洞纹样中龙纹常与族群身份、地域记忆和装饰秩序相关；本项目保留双角这一醒目的视觉识别。",
    image: "https://zhao-portfolio-assets.oss-cn-beijing.aliyuncs.com/images/%E9%BE%99%E7%BA%B9.webp",
  },
  {
    id: "fish",
    name: "鱼纹",
    note: "鱼纹是施洞苗绣中常见动物题材之一，适合与水涡纹、花纹组成连续的生活叙事。",
    image: "https://zhao-portfolio-assets.oss-cn-beijing.aliyuncs.com/images/%E9%B1%BC%E7%BA%B9.webp",
  },
  {
    id: "butterfly",
    name: "蝴蝶纹",
    note: "蝴蝶在苗族文化叙事中常被赋予生命繁衍和祖源想象，本项目采用对称翅形表现。",
    image: "https://zhao-portfolio-assets.oss-cn-beijing.aliyuncs.com/images/%E8%9D%B4%E8%9D%B6%E7%BA%B9.webp",
  },
  {
    id: "bird",
    name: "鸟纹",
    note: "鸟纹在服饰刺绣中常以飞翔、守护或神鸟形象出现，适合作为构图中的动势元素。",
    image: "https://zhao-portfolio-assets.oss-cn-beijing.aliyuncs.com/images/%E9%B8%9F%E7%BA%B9.webp",
  },
  {
    id: "flower",
    name: "花纹",
    note: "花纹适合填补满绣空间，也能连接动物、人物和几何边饰，让画面更繁而有序。",
    image: "https://zhao-portfolio-assets.oss-cn-beijing.aliyuncs.com/images/%E8%8A%B1%E7%BA%B9.webp",
  },
  {
    id: "maple",
    name: "枫香树纹",
    note: "枫香树纹来自清水江流域苗族关于枫木、蝴蝶妈妈与祖源记忆的叙事。本项目以树芯、对称枝叶和枫香果点作抽象化表现。",
    image: "https://zhao-portfolio-assets.oss-cn-beijing.aliyuncs.com/images/%E6%9E%AB%E9%A6%99%E6%A0%91%E7%BA%B9.webp",
  },
  {
    id: "water",
    name: "水涡纹",
    note: "施洞位于清水江流域，水涡纹在这里可作为地域线索，连接贸易、生活和河流记忆。",
    image: "https://zhao-portfolio-assets.oss-cn-beijing.aliyuncs.com/images/%E6%B0%B4%E6%B6%A1%E7%BA%B9.webp",
  },
  {
    id: "horn",
    name: "牛角纹",
    note: "施洞龙纹常以牛角化的双角作为鲜明特征，本项目将其抽象为可重复的护符形纹样。",
    image: "https://zhao-portfolio-assets.oss-cn-beijing.aliyuncs.com/images/%E7%89%9B%E8%A7%92%E7%BA%B9.webp",
  },
  {
    id: "human",
    name: "人物纹",
    note: "人物纹可指向族群首领、英雄和口传历史。本项目只做抽象化轮廓，避免误称具体传统图像。",
    image: "https://zhao-portfolio-assets.oss-cn-beijing.aliyuncs.com/images/%E4%BA%BA%E7%89%A9%E7%BA%B9.webp",
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
    detail: "花团锦簇",
    apply: {
      motifs: ["maple", "dragon", "butterfly", "fish", "flower", "horn"],
      layout: "radial",
      palette: "festival",
      texture: "stack",
      density: 0.78,
      complexity: 0.66,
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
let scoreAbortController = null;
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
  scoreButton: document.querySelector("#scoreButton"),
  shareButton: document.querySelector("#shareButton"),
  resetButton: document.querySelector("#resetButton"),
  toast: document.querySelector("#toast"),
  themeButton: document.querySelector("#themeButton"),
  scoreDialog: document.querySelector("#scoreDialog"),
  scorePanel: document.querySelector("#scorePanel"),
  scoreCloseButton: document.querySelector("#scoreCloseButton"),
  scoreCloseTargets: document.querySelectorAll("[data-score-close]"),
  scoreStatus: document.querySelector("#scoreStatus"),
  scoreResult: document.querySelector("#scoreResult"),
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
  elements.scoreButton.addEventListener("click", scorePattern);
  elements.shareButton.addEventListener("click", copyShareLink);
  elements.themeButton.addEventListener("click", toggleTheme);
  elements.scoreCloseButton.addEventListener("click", closeScoreDialog);
  elements.scoreCloseTargets.forEach((target) => target.addEventListener("click", closeScoreDialog));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !elements.scoreDialog.hidden) closeScoreDialog();
  });
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
      input.disabled ? "枫香树纹仅用于团花中心，可从节庆满绣预设启用" : "",
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
  return state.layout === "radial" && state.motifs.includes(SPECIAL_MAPLE_MOTIF);
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
  elements.cultureIntro.textContent = `当前采用「${layout.name}」构图与「${texture.name}」质感，组合生成施洞苗绣风格的数字纹样。`;
  elements.cultureList.innerHTML = state.motifs
    .map((id) => {
      const motif = getMotif(id);
      const image = motif.image
        ? `
          <figure class="culture-image">
            <img src="${motif.image}" alt="苗绣实拍：${motif.name}" loading="lazy" decoding="async" referrerpolicy="no-referrer" />
          </figure>
        `
        : "";
      return `
        <article class="culture-card">
          <h3>${motif.name}</h3>
          <p>${motif.note}</p>
          ${image}
        </article>
      `;
    })
    .join("");
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
  const hasMapleCenter = selected.includes(SPECIAL_MAPLE_MOTIF);
  const supportingMotifs = getSupportingMotifs(selected);
  const ringCount = Math.round(8 + config.density * 8);
  const innerCount = config.density > 0.52 ? 6 : 4;
  const center = hasMapleCenter ? SPECIAL_MAPLE_MOTIF : supportingMotifs[0];
  const frameRadius = hasMapleCenter ? 344 : 318;
  let svg = "";

  svg += buildRadialBloomBed(
    450,
    450,
    hasMapleCenter ? 154 : 132,
    frameRadius,
    colors,
    config.texture,
    hasMapleCenter ? 16 : 12,
    hasMapleCenter ? 0.36 : 0.34,
  );

  if (hasMapleCenter) {
    svg += `<circle cx="450" cy="450" r="326" fill="${colors.dark}" opacity="0.08" />`;
    svg += `<circle cx="450" cy="450" r="238" fill="${colors.light}" opacity="0.045" />`;
    svg += threadPath("M210 450 C260 360 340 292 450 276 C560 292 640 360 690 450 C640 540 560 608 450 624 C340 608 260 540 210 450Z", colors.secondary, 5.2, config.texture, `opacity="0.62"`);
    svg += threadPath("M450 196 C520 252 588 314 704 450 C588 586 520 648 450 704 C380 648 312 586 196 450 C312 314 380 252 450 196Z", colors.accent, 3.6, "continuous", `opacity="0.54"`);
  }

  for (let i = 0; i < innerCount; i += 1) {
    const angle = (Math.PI * 2 * (i + 0.5)) / innerCount;
    const motif = supportingMotifs[(i + 2) % supportingMotifs.length];
    const radius = hasMapleCenter ? 202 : 178;
    svg += placeMotif(
      motif,
      450 + Math.cos(angle) * radius,
      450 + Math.sin(angle) * radius,
      hasMapleCenter ? 0.34 + config.complexity * 0.1 : 0.34 + config.complexity * 0.1,
      config.symmetry ? (angle * 180) / Math.PI : rng() * 360,
      colors,
      config.texture,
      rng,
      i + 20,
    );
  }

  for (let i = 0; i < ringCount; i += 1) {
    const angle = (Math.PI * 2 * i) / ringCount;
    const radius = (hasMapleCenter ? 284 : 266) + (i % 2 ? 22 : -8) + wave(i, rng) * 8;
    const motif = supportingMotifs[(i + 1) % supportingMotifs.length];
    const scale = (hasMapleCenter ? 0.5 : 0.54) + config.complexity * 0.15 + rng() * 0.04;
    svg += placeMotif(
      motif,
      450 + Math.cos(angle) * radius,
      450 + Math.sin(angle) * radius,
      scale,
      (angle * 180) / Math.PI + 90,
      colors,
      config.texture,
      rng,
      i + 1,
    );
  }

  svg += placeMotif(center, 450, 450, hasMapleCenter ? 1.16 + config.complexity * 0.18 : 1.18 + config.complexity * 0.28, 0, colors, config.texture, rng, 0);

  if (config.border) {
    svg += hasMapleCenter
      ? buildFestivalBorder(colors, config.texture, supportingMotifs, rng, config.density, config.complexity)
      : buildBorder(colors, config.texture, supportingMotifs, rng, Math.round(7 + config.density * 6));
  }
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
  const flowCount = Math.round(3 + config.density * 4);
  let svg = "";

  for (let i = 0; i < flowCount; i += 1) {
    const y = 158 + i * (584 / Math.max(1, flowCount - 1));
    const d = `M88 ${y} C220 ${y - 48}, 300 ${y + 58}, 430 ${y} S638 ${y - 54}, 812 ${y + 8}`;
    svg += threadPath(d, colors.secondary, 5.8, "continuous", `opacity="0.34"`);
    svg += threadPath(d, colors.accent, 2.1, "continuous", `opacity="0.26"`);
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

function motifDiamond(x, y, size, color, opacity = 0.84) {
  return `<path d="M${round(x)} ${round(y - size)} L${round(x + size)} ${round(y)} L${round(x)} ${round(y + size)} L${round(x - size)} ${round(y)}Z" fill="${color}" opacity="${opacity}" />`;
}

function continuousPath(d, color, width, extra = "") {
  return threadPath(d, color, width, "continuous", extra);
}

function dragonMotif(colors, texture) {
  const body = "M-100 10 C-82 -54 -14 -76 35 -40 C83 -5 63 58 2 63 C-47 67 -86 34 -73 3 C-62 -24 -10 -23 11 2 C34 28 5 55 -35 36";
  const inner = "M-81 14 C-56 -33 4 -49 39 -20 C65 1 54 39 10 46 C-24 51 -57 35 -54 12 C-49 -9 -15 -10 1 7 C14 21 0 35 -24 31";
  return `
    <g filter="url(#threadShadow)">
      <path d="${body} C-18 47 -4 42 3 29 C-8 38 -31 40 -48 29 C-70 15 -55 -10 -26 -8 C4 -6 25 11 22 29 C44 19 48 -8 31 -25 C0 -55 -67 -38 -90 17Z" fill="${colors.primary}" opacity="0.16" />
      ${threadPath(body, colors.primary, 13, texture)}
      ${continuousPath(inner, colors.secondary, 4.8, `opacity="0.86"`)}
      ${continuousPath("M-66 23 C-39 9 -7 8 17 23 C4 14 -13 13 -28 20", colors.accent, 4, `opacity="0.78"`)}
      ${continuousPath("M31 -39 C55 -69 92 -60 90 -25 C107 -16 105 8 87 18 C66 29 50 13 46 -8", colors.primary, 8.5)}
      ${continuousPath("M51 -52 C61 -75 82 -77 91 -58 M43 -49 C42 -74 21 -80 13 -57", colors.accent, 5.2)}
      ${continuousPath("M84 -3 L116 10 L86 24 M86 -18 C97 -22 107 -27 114 -38", colors.dark, 4.4, `opacity="0.82"`)}
      ${continuousPath("M-38 -44 C-30 -59 -19 -67 -6 -70 C-3 -58 2 -48 12 -39 M-62 -14 C-81 -21 -95 -27 -106 -40 C-101 -24 -94 -10 -82 1 M-42 43 C-54 56 -64 65 -78 72 C-61 72 -46 66 -31 55", colors.accent, 4.2, `opacity="0.86"`)}
      ${motifDiamond(-20, -14, 4, colors.light, 0.78)}
      ${motifDiamond(14, 14, 4, colors.light, 0.78)}
      ${motifDot(64, -22, 2.7, colors.light, 0.95)}
    </g>
  `;
}

function fishMotif(colors, texture) {
  const body = "M-86 0 C-50 -47 33 -47 78 0 C35 47 -50 48 -86 0Z";
  return `
    <g filter="url(#threadShadow)">
      <path d="${body}" fill="${colors.primary}" opacity="0.17" />
      ${threadPath(body, colors.primary, 8.5, texture)}
      <path d="M76 0 L116 -37 C105 -16 105 16 116 37Z" fill="${colors.secondary}" opacity="0.16" />
      ${threadPath("M76 0 L116 -37 C105 -16 105 16 116 37Z", colors.secondary, 6.6, texture)}
      ${continuousPath("M-54 0 C-24 -16 17 -16 52 0 C17 16 -24 16 -54 0", colors.secondary, 4.4, `opacity="0.78"`)}
      ${continuousPath("M-38 -31 C-25 -11 -25 11 -38 31 M-7 -36 C9 -13 9 13 -7 36 M26 -27 C37 -9 37 9 26 27", colors.accent, 3.4, `opacity="0.78"`)}
      ${continuousPath("M-2 -35 C12 -49 30 -52 48 -44 M-2 35 C13 48 32 50 51 40", colors.secondary, 3.6, `opacity="0.82"`)}
      ${motifDiamond(56, 0, 4.2, colors.accent, 0.82)}
      ${motifDot(-52, -8, 2.8, colors.light, 0.94)}
    </g>
  `;
}

function butterflyMotif(colors, texture) {
  const leftWing = "M-8 -18 C-45 -80 -108 -72 -110 -16 C-112 16 -84 26 -55 14 C-91 58 -49 89 -8 32Z";
  const rightWing = "M8 -18 C45 -80 108 -72 110 -16 C112 16 84 26 55 14 C91 58 49 89 8 32Z";
  return `
    <g filter="url(#threadShadow)">
      <path d="${leftWing}" fill="${colors.primary}" opacity="0.18" />
      <path d="${rightWing}" fill="${colors.secondary}" opacity="0.18" />
      ${threadPath(leftWing, colors.primary, 7.8, texture)}
      ${threadPath(rightWing, colors.secondary, 7.8, texture)}
      ${continuousPath("M0 -53 C-11 -22 -11 34 0 76 M0 -53 C11 -22 11 34 0 76", colors.dark, 5.4, `opacity="0.74"`)}
      ${continuousPath("M-8 -50 C-31 -80 -56 -85 -76 -62 M8 -50 C31 -80 56 -85 76 -62", colors.accent, 3.8)}
      ${continuousPath("M-89 -16 C-61 -22 -34 -10 -14 18 M89 -16 C61 -22 34 -10 14 18", colors.light, 3.2, `opacity="0.76"`)}
      ${continuousPath("M-68 47 C-45 34 -28 37 -12 56 M68 47 C45 34 28 37 12 56", colors.accent, 3.2, `opacity="0.76"`)}
      ${continuousPath("M-42 -55 C-34 -28 -24 -9 -9 8 M42 -55 C34 -28 24 -9 9 8", colors.secondary, 3.6, `opacity="0.7"`)}
      ${motifDiamond(-58, -2, 4.6, colors.light, 0.76)}
      ${motifDiamond(58, -2, 4.6, colors.light, 0.76)}
      ${motifDot(0, -38, 3.4, colors.accent, 0.9)}
      ${motifDot(0, 22, 3.2, colors.light, 0.82)}
    </g>
  `;
}

function birdMotif(colors, texture) {
  const body = "M-92 22 C-45 -66 42 -63 82 7 C39 0 7 18 -11 58 C-29 36 -55 25 -92 22Z";
  return `
    <g filter="url(#threadShadow)">
      <path d="${body}" fill="${colors.secondary}" opacity="0.17" />
      ${threadPath(body, colors.secondary, 7.8, texture)}
      ${continuousPath("M-52 16 C-24 -18 28 -23 70 6", colors.primary, 7.2)}
      ${continuousPath("M-48 4 C-17 6 16 16 45 36 M-36 -12 C-7 -7 18 3 43 20", colors.light, 3.1, `opacity="0.68"`)}
      ${continuousPath("M-62 29 C-83 43 -99 56 -112 72 M-46 36 C-61 55 -72 70 -83 87 M-27 39 C-34 57 -39 73 -43 88", colors.primary, 4.3)}
      ${continuousPath("M72 5 L111 -8 L78 25", colors.accent, 5.4)}
      ${continuousPath("M48 -9 C43 -35 61 -50 80 -41 M42 -11 C34 -37 48 -55 65 -53", colors.accent, 3.6, `opacity="0.84"`)}
      ${continuousPath("M-70 25 C-48 42 -25 48 -4 44", colors.accent, 3.7, `opacity="0.78"`)}
      ${motifDiamond(-55, 33, 4.2, colors.light, 0.74)}
      ${motifDot(50, -2, 2.5, colors.light, 0.94)}
    </g>
  `;
}

function flowerMotif(colors, texture, variant) {
  const petals = 8 + ((variant || 0) % 2) * 2;
  let outerPetals = "";
  let innerPetals = "";

  for (let i = 0; i < petals; i += 1) {
    const angle = (360 / petals) * i;
    const color = i % 2 ? colors.secondary : colors.primary;
    outerPetals += `
      <g transform="rotate(${angle})">
        <path d="M0 -15 C-27 -43 -20 -78 0 -102 C20 -78 27 -43 0 -15Z" fill="${color}" opacity="0.18" />
        ${threadPath("M0 -15 C-27 -43 -20 -78 0 -102 C20 -78 27 -43 0 -15Z", color, 5.2, texture)}
        ${continuousPath("M0 -28 C-5 -46 -5 -67 0 -86", colors.light, 2.4, `opacity="0.62"`)}
      </g>
    `;
    innerPetals += `
      <g transform="rotate(${angle + 360 / petals / 2})">
        ${continuousPath("M0 -22 C-12 -36 -10 -52 0 -63 C10 -52 12 -36 0 -22Z", i % 2 ? colors.primary : colors.secondary, 3.2, `opacity="0.82"`)}
      </g>
    `;
  }

  return `
    <g filter="url(#threadShadow)">
      ${outerPetals}
      ${innerPetals}
      <circle cx="0" cy="0" r="27" fill="${colors.accent}" opacity="0.2" />
      ${continuousPath("M-28 0 C-11 -24 11 -24 28 0 C11 24 -11 24 -28 0Z", colors.accent, 4.6)}
      ${continuousPath("M0 -32 V32 M-32 0H32 M-23 -23 L23 23 M23 -23 L-23 23", colors.dark, 2.2, `opacity="0.42"`)}
      ${motifDiamond(0, -44, 3.8, colors.light, 0.76)}
      ${motifDiamond(44, 0, 3.8, colors.light, 0.76)}
      ${motifDiamond(0, 44, 3.8, colors.light, 0.76)}
      ${motifDiamond(-44, 0, 3.8, colors.light, 0.76)}
      <circle cx="0" cy="0" r="10" fill="${colors.light}" opacity="0.86" />
      <circle cx="0" cy="0" r="4" fill="${colors.primary}" opacity="0.86" />
    </g>
  `;
}

function mapleMotif(colors, texture) {
  const leafPath = "M0 -55 L14 -27 L9 -6 L27 9 L8 16 L0 40 L-8 16 L-27 9 L-9 -6 L-14 -27Z";
  const leaf = (angle, color, scale = 1) => `
    <g transform="rotate(${angle}) translate(0 -36) scale(${scale})">
      <path d="${leafPath}" fill="${color}" opacity="0.18" />
      ${threadPath(leafPath, color, 5, texture)}
      ${continuousPath("M0 -42 V28 M-12 -20 L0 -11 L12 -20 M-14 4 L0 12 L14 4", colors.light, 2.2, `opacity="0.62"`)}
    </g>
  `;
  const cornerKnot = (x, y, sx, sy) => `
    <g transform="translate(${x} ${y}) scale(${sx} ${sy})">
      ${continuousPath("M-23 -20H19V18H-8V-3H9", colors.light, 3.8)}
      ${continuousPath("M-18 4H-4V18 M-4 -20V-7H9", colors.secondary, 2.8, `opacity="0.72"`)}
    </g>
  `;

  return `
    <g filter="url(#threadShadow)">
      <rect x="-112" y="-88" width="224" height="176" fill="${colors.dark}" opacity="0.18" />
      ${threadPath("M-112 -88H112V88H-112Z", colors.accent, 5.6, texture)}
      ${continuousPath("M-100 -76H100V76H-100Z", colors.primary, 4.4, `opacity="0.9"`)}
      ${continuousPath("M-86 -62H86V62H-86Z", colors.secondary, 3.8)}
      ${continuousPath("M0 -62V62 M-72 0H72 M-54 -47L54 47 M54 -47L-54 47", colors.accent, 4.3, `opacity="0.88"`)}
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
      ${motifDiamond(0, -70, 3.8, colors.light, 0.8)}
      ${motifDiamond(0, 70, 3.8, colors.light, 0.8)}
      ${motifDiamond(-104, 0, 3.8, colors.light, 0.8)}
      ${motifDiamond(104, 0, 3.8, colors.light, 0.8)}
      <circle cx="0" cy="0" r="15" fill="${colors.accent}" opacity="0.3" />
      <circle cx="0" cy="0" r="8.5" fill="${colors.secondary}" opacity="0.92" />
      <circle cx="0" cy="0" r="3" fill="${colors.light}" />
    </g>
  `;
}

function waterMotif(colors, texture) {
  const leftSpiral = "M-84 8 C-96 -18 -74 -42 -42 -42 C-8 -42 10 -12 -8 12 C-24 33 -56 27 -57 2 C-58 -15 -34 -21 -25 -8 C-18 3 -29 14 -42 10";
  const rightSpiral = "M84 -8 C96 18 74 42 42 42 C8 42 -10 12 8 -12 C24 -33 56 -27 57 -2 C58 15 34 21 25 8 C18 -3 29 -14 42 -10";
  return `
    <g filter="url(#threadShadow)">
      <path d="${leftSpiral}" fill="none" stroke="${colors.secondary}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" opacity="0.16" />
      <path d="${rightSpiral}" fill="none" stroke="${colors.primary}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" opacity="0.16" />
      ${threadPath(leftSpiral, colors.secondary, 7.2, texture)}
      ${threadPath(rightSpiral, colors.primary, 7.2, texture)}
      ${continuousPath("M-24 -8 C-5 -28 26 -28 44 -8 M-44 8 C-25 28 6 28 24 8", colors.accent, 4.2, `opacity="0.78"`)}
      ${continuousPath("M-108 38 C-76 16 -45 18 -18 40 M18 -40 C45 -18 76 -16 108 -38", colors.light, 2.8, `opacity="0.54"`)}
      ${motifDiamond(-72, -34, 3.6, colors.light, 0.72)}
      ${motifDiamond(72, 34, 3.6, colors.light, 0.72)}
      ${motifDot(-40, 8, 2.6, colors.accent, 0.74)}
      ${motifDot(40, -8, 2.6, colors.accent, 0.74)}
    </g>
  `;
}

function hornMotif(colors, texture) {
  const horn = "M0 66 C-18 15 -67 -3 -90 -58 C-48 -46 -14 -28 0 4 C14 -28 48 -46 90 -58 C67 -3 18 15 0 66Z";
  return `
    <g filter="url(#threadShadow)">
      <path d="${horn}" fill="${colors.primary}" opacity="0.16" />
      ${threadPath(horn, colors.primary, 8.4, texture)}
      ${continuousPath("M0 50 C-8 16 -38 -5 -61 -33 M0 50 C8 16 38 -5 61 -33", colors.secondary, 4.4)}
      ${continuousPath("M-33 24 C-12 5 12 5 33 24 M-46 43 C-17 25 17 25 46 43", colors.accent, 4.8)}
      ${continuousPath("M-73 -48 C-52 -39 -35 -27 -24 -11 M73 -48 C52 -39 35 -27 24 -11", colors.light, 2.8, `opacity="0.62"`)}
      ${motifDiamond(0, 4, 4.6, colors.accent, 0.82)}
      ${motifDiamond(0, 34, 3.8, colors.light, 0.76)}
      ${continuousPath("M-13 58 L0 74 L13 58", colors.dark, 2.8, `opacity="0.45"`)}
    </g>
  `;
}

function humanMotif(colors, texture) {
  const head = "M-29 -63 C-18 -88 18 -88 29 -63 L17 -40 H-17Z";
  const robe = "M0 -36 L41 8 L25 68 H-25 L-41 8Z";
  return `
    <g filter="url(#threadShadow)">
      <path d="${head}" fill="${colors.secondary}" opacity="0.17" />
      ${threadPath(head, colors.secondary, 6.2, texture)}
      ${continuousPath("M-41 -70 H41 M-29 -81 L-13 -68 M29 -81 L13 -68", colors.accent, 3.6, `opacity="0.78"`)}
      <path d="${robe}" fill="${colors.primary}" opacity="0.16" />
      ${threadPath(robe, colors.primary, 7.5, texture)}
      ${continuousPath("M0 -31 V67 M-32 13 H32 M-23 42 H23", colors.light, 2.9, `opacity="0.64"`)}
      ${continuousPath("M-27 -2 C-55 -14 -69 6 -83 29 M27 -2 C55 -14 69 6 83 29", colors.primary, 6.8)}
      ${continuousPath("M-24 68 L-45 88 M24 68 L45 88 M-5 68 L-15 88 M5 68 L15 88", colors.accent, 4.1)}
      ${motifDiamond(0, -22, 3.8, colors.light, 0.78)}
      ${motifDiamond(0, 51, 3.8, colors.accent, 0.78)}
      ${continuousPath("M-12 -64 L-3 -54 L12 -66", colors.dark, 2.8, `opacity="0.64"`)}
      ${motifDot(0, -61, 2.6, colors.light, 0.86)}
    </g>
  `;
}

function polarPoint(cx, cy, radius, angle) {
  return [round(cx + Math.cos(angle) * radius), round(cy + Math.sin(angle) * radius)];
}

function buildRadialBloomBed(cx, cy, innerRadius, outerRadius, colors, texture, petals = 12, opacity = 0.34) {
  let svg = `<g opacity="${opacity}">`;
  const step = (Math.PI * 2) / petals;

  for (let i = 0; i < petals; i += 1) {
    const angle = i * step;
    const [x1, y1] = polarPoint(cx, cy, innerRadius, angle - step * 0.28);
    const [x2, y2] = polarPoint(cx, cy, innerRadius, angle + step * 0.28);
    const [tipX, tipY] = polarPoint(cx, cy, outerRadius, angle);
    const [c1x, c1y] = polarPoint(cx, cy, innerRadius + (outerRadius - innerRadius) * 0.58, angle - step * 0.44);
    const [c2x, c2y] = polarPoint(cx, cy, innerRadius + (outerRadius - innerRadius) * 0.58, angle + step * 0.44);
    const d = `M${x1} ${y1} C${c1x} ${c1y} ${tipX} ${tipY} ${tipX} ${tipY} C${tipX} ${tipY} ${c2x} ${c2y} ${x2} ${y2}`;
    const color = i % 2 ? colors.primary : colors.secondary;

    svg += `<path d="${d}" fill="none" stroke="${color}" stroke-width="1" opacity="0.16" />`;
    svg += threadPath(d, color, 3.2, texture, `opacity="0.72"`);
  }

  svg += threadPath(`M${cx - innerRadius} ${cy} C${cx - innerRadius} ${cy - innerRadius * 0.55} ${cx + innerRadius} ${cy - innerRadius * 0.55} ${cx + innerRadius} ${cy} C${cx + innerRadius} ${cy + innerRadius * 0.55} ${cx - innerRadius} ${cy + innerRadius * 0.55} ${cx - innerRadius} ${cy}`, colors.accent, 2.8, "continuous", `opacity="0.64"`);
  svg += "</g>";
  return svg;
}

function buildFestivalBorder(colors, texture, selected, rng) {
  const motif = (preferred, fallback = 0) => (selected.includes(preferred) ? preferred : selected[fallback % selected.length]);
  const borderMotifs = [
    [motif("flower", 0), 212, 106, 0.18, 0],
    [motif("horn", 1), 450, 106, 0.17, 0],
    [motif("flower", 2), 688, 106, 0.18, 0],
    [motif("flower", 3), 212, 794, 0.18, 180],
    [motif("horn", 0), 450, 794, 0.17, 180],
    [motif("flower", 1), 688, 794, 0.18, 180],
    [motif("flower", 2), 106, 212, 0.18, -90],
    [motif("horn", 3), 106, 450, 0.17, -90],
    [motif("flower", 0), 106, 688, 0.18, -90],
    [motif("flower", 1), 794, 212, 0.18, 90],
    [motif("horn", 2), 794, 450, 0.17, 90],
    [motif("flower", 3), 794, 688, 0.18, 90],
  ];
  let svg = `<g opacity="0.92">`;

  svg += `<rect x="82" y="82" width="736" height="736" fill="none" stroke="${colors.dark}" stroke-width="8" opacity="0.62" />`;
  svg += `<rect x="104" y="104" width="692" height="692" fill="none" stroke="${colors.secondary}" stroke-width="5" opacity="0.72" />`;
  svg += `<rect x="126" y="126" width="648" height="648" fill="none" stroke="${colors.accent}" stroke-width="3.5" opacity="0.72" />`;
  svg += threadPath("M126 126 H774 M126 774 H774 M126 126 V774 M774 126 V774", colors.primary, 3.4, texture, `opacity="0.62"`);

  borderMotifs.forEach(([id, x, y, scale, rotation], index) => {
    svg += placeMotif(id, x, y, scale, rotation, colors, texture, rng, index + 80);
  });

  svg += "</g>";
  return svg;
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

async function scorePattern() {
  const svg = getCurrentPatternSvg();
  if (!svg || elements.scoreButton.disabled) return;

  openScoreDialog();
  setScoreState("loading");
  elements.scoreButton.disabled = true;
  scoreAbortController?.abort();
  scoreAbortController = new AbortController();

  try {
    const image = await svgToPngDataUrl(svg, 1200);
    const response = await fetch("/api/score-pattern", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image, metadata: getScoreMetadata() }),
      signal: scoreAbortController.signal,
    });

    const payload = await response.json().catch(() => null);
    if (!response.ok) throw new Error(payload?.error || "AI 评分暂时不可用");

    renderScoreResult(payload);
  } catch (error) {
    if (error.name !== "AbortError") {
      setScoreState("error", error.message || "AI 评分失败，请稍后再试");
    }
  } finally {
    elements.scoreButton.disabled = false;
    scoreAbortController = null;
  }
}

function openScoreDialog() {
  elements.scoreDialog.hidden = false;
  requestAnimationFrame(() => elements.scoreDialog.classList.add("is-open"));
  elements.scorePanel.focus({ preventScroll: true });
}

function closeScoreDialog() {
  scoreAbortController?.abort();
  elements.scoreDialog.classList.remove("is-open");
  window.setTimeout(() => {
    elements.scoreDialog.hidden = true;
  }, 160);
}

function setScoreState(stateName, message = "AI 正在观察纹样...") {
  elements.scoreStatus.className = `score-status is-${stateName}`;
  elements.scoreStatus.innerHTML =
    stateName === "loading"
      ? '<span class="loading-ring" aria-hidden="true"></span><span>AI 正在观察纹样...</span>'
      : escapeHtml(message);
  elements.scoreResult.innerHTML = "";
}

function renderScoreResult(result) {
  const score = clamp(Math.round(Number(result.score) || 88), 80, 100);
  const strengths = Array.isArray(result.strengths) ? result.strengths.slice(0, 3) : [];
  const suggestions = Array.isArray(result.suggestions) ? result.suggestions.slice(0, 3) : [];

  elements.scoreStatus.className = "score-status is-done";
  elements.scoreStatus.textContent = "评分完成";
  elements.scoreResult.innerHTML = `
    <div class="score-value"><strong>${score}</strong><span>/100</span></div>
    <h3>${escapeHtml(result.title || "这是一组完成度较高的苗绣数字纹样")}</h3>
    <p>${escapeHtml(result.summary || "整体构图稳定，纹样元素之间有较清晰的呼应关系。")}</p>
    ${renderScoreList("亮点", strengths)}
    ${renderScoreList("建议", suggestions)}
  `;
}

function renderScoreList(title, items) {
  if (!items.length) return "";
  return `
    <section class="score-list">
      <h4>${title}</h4>
      <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </section>
  `;
}

function getScoreMetadata() {
  const layout = layouts.find((item) => item.id === state.layout) || layouts[0];
  const texture = textures.find((item) => item.id === state.texture) || textures[0];
  return {
    seed: state.seed,
    layout: layout.name,
    palette: getPalette().name,
    texture: texture.name,
    motifs: state.motifs.map((id) => getMotif(id).name),
    density: Number(state.density.toFixed(2)),
    complexity: Number(state.complexity.toFixed(2)),
    symmetry: state.symmetry,
    border: state.border,
  };
}

async function downloadPng() {
  const svg = getCurrentPatternSvg();
  if (!svg) return;

  try {
    const dataUrl = await svgToPngDataUrl(svg, 1800);
    const link = document.createElement("a");
    link.download = `shidong-miao-pattern-${state.seed}.png`;
    link.href = dataUrl;
    link.click();
    showToast("PNG 已生成");
  } catch {
    showToast("导出失败，请稍后再试");
  }
}

function getCurrentPatternSvg() {
  return (
    elements.patternOutput.querySelector(".pattern-card-in svg") ||
    elements.patternOutput.querySelector(".pattern-card-current svg") ||
    elements.patternOutput.querySelector("svg")
  );
}

function svgToPngDataUrl(svg, size) {
  return new Promise((resolve, reject) => {
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const image = new Image();
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = size;
    canvas.height = size;

    image.onload = () => {
      context.fillStyle = "#fffdf8";
      context.fillRect(0, 0, size, size);
      context.drawImage(image, 0, 0, size, size);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/png"));
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("PNG export failed"));
    };

    image.src = url;
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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
