const bulletinsList = document.querySelector("#bulletins-list");
const bulletinStorageKey = "ipi-language";
const bulletinTexts = {
  pt: {
    empty: "Nenhum boletim anterior disponível no momento.",
    open: "Abrir",
    download: "Baixar PDF",
    dateLabel: "Data"
  },
  es: {
    empty: "No hay boletines anteriores disponibles en este momento.",
    open: "Abrir",
    download: "Descargar PDF",
    dateLabel: "Fecha"
  },
  de: {
    empty: "Zurzeit ist kein früherer Gemeindebrief verfügbar.",
    open: "Öffnen",
    download: "PDF herunterladen",
    dateLabel: "Datum"
  }
};

function getBulletinLanguage() {
  try {
    const stored = localStorage.getItem(bulletinStorageKey);
    return bulletinTexts[stored] ? stored : "pt";
  } catch {
    if (document.documentElement.lang === "de") return "de";
    if (document.documentElement.lang === "es") return "es";
    return "pt";
  }
}

function getBulletinCopy() {
  return bulletinTexts[getBulletinLanguage()] || bulletinTexts.pt;
}

function renderEmptyState() {
  if (!bulletinsList) return;

  bulletinsList.innerHTML = "";

  const emptyState = document.createElement("div");
  emptyState.className = "empty-state";
  emptyState.textContent = getBulletinCopy().empty;

  bulletinsList.appendChild(emptyState);
}

function createBulletinCard(entry) {
  const copy = getBulletinCopy();
  const article = document.createElement("article");
  article.className = "bulletin-card";

  const title = document.createElement("h2");
  title.textContent = entry.titulo || copy.empty;

  const date = document.createElement("p");
  date.className = "bulletin-date";
  date.innerHTML = `<strong>${copy.dateLabel}:</strong> ${entry.data || "-"}`;

  const actions = document.createElement("div");
  actions.className = "bulletin-actions";

  const openLink = document.createElement("a");
  openLink.className = "btn btn-light bordered";
  openLink.href = entry.arquivo;
  openLink.target = "_blank";
  openLink.rel = "noopener";
  openLink.textContent = copy.open;

  const downloadLink = document.createElement("a");
  downloadLink.className = "btn btn-primary";
  downloadLink.href = entry.arquivo;
  downloadLink.download = "";
  downloadLink.textContent = copy.download;

  actions.append(openLink, downloadLink);
  article.append(title, date, actions);

  return article;
}

function renderBulletins(entries) {
  if (!bulletinsList) return;

  bulletinsList.innerHTML = "";

  if (!Array.isArray(entries) || entries.length === 0) {
    renderEmptyState();
    return;
  }

  entries.forEach((entry) => {
    if (!entry?.arquivo) return;
    bulletinsList.appendChild(createBulletinCard(entry));
  });

  if (!bulletinsList.children.length) {
    renderEmptyState();
  }
}

async function loadBulletins() {
  if (!bulletinsList) return;

  try {
    const response = await fetch("downloads/boletins/boletins.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const entries = await response.json();
    renderBulletins(entries);
  } catch {
    renderEmptyState();
  }
}

window.addEventListener("ipi-language-changed", () => {
  window.setTimeout(loadBulletins, 0);
});

loadBulletins();
