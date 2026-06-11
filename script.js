const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("#year");
const languageButtons = document.querySelectorAll(".lang-button");

const storageKey = "ipi-language";

const translations = {
  pt: {
    "meta.description": "Site institucional da Igreja Presbiteriana Independente de Pirapozinho-SP.",
    "page.title": "IPI Pirapozinho",
    "nav.aria": "Navegação principal",
    "nav.about": "Sobre",
    "nav.schedule": "Programação",
    "nav.links": "Links",
    "nav.bulletin": "Boletim",
    "nav.location": "Localização",
    "nav.menu": "Abrir menu",
    "lang.pt": "🇧🇷 Português",
    "lang.de": "🇩🇪 Deutsch",
    "brand.alt": "Símbolo da IPI Pirapozinho",
    "brand.name": "IPI Pirapozinho",
    "hero.kicker": "Igreja Presbiteriana Independente",
    "hero.title": "Pirapozinho: na missão pela vida",
    "hero.text": "Uma comunidade cristã reunida para adorar a Deus, proclamar o Evangelho, crescer na Palavra e servir com amor.",
    "hero.whatsapp": "Falar no WhatsApp",
    "hero.schedule": "Ver programação",
    "about.kicker": "Nossa comunidade",
    "about.title": "Igreja Presbiteriana Independente de Pirapozinho",
    "about.text1": "A IPI Pirapozinho é uma comunidade cristã local, ligada à Igreja Presbiteriana Independente do Brasil, comprometida com a adoração a Deus, a proclamação do Evangelho, a oração, a comunhão e o serviço.",
    "about.text2": "Este espaço reúne informações úteis para visitantes, membros e todos que desejam acompanhar a vida da igreja.",
    "identity.alt": "Identidade visual da IPI Pirapozinho",
    "identity.title": "Na missão pela vida",
    "identity.text": "Fé, Palavra, oração e comunhão.",
    "schedule.kicker": "Programação semanal",
    "schedule.title": "Participe conosco",
    "schedule.sunday.day": "Domingo",
    "schedule.sunday.title": "Culto e Escola Dominical",
    "schedule.sunday.item1": "8h — Torre de oração",
    "schedule.sunday.item2": "9h — Escola Dominical",
    "schedule.sunday.item3": "19h — Culto",
    "schedule.tuesday.day": "Terça-feira",
    "schedule.tuesday.title": "Reunião de Oração",
    "schedule.tuesday.text": "20h — Um tempo de oração, comunhão e intercessão.",
    "schedule.thursday.day": "Quinta-feira",
    "schedule.thursday.title": "Academia da Fé",
    "schedule.thursday.text": "20h — Estudo, reflexão e crescimento na Palavra.",
    "schedule.friday.day": "Sexta-feira",
    "schedule.friday.title": "Live Café e Fé",
    "schedule.friday.text": "7h às 7h30 — Uma mensagem para começar o dia com fé.",
    "cafe.alt": "Arte da Live Café e Fé",
    "cafe.kicker": "Sexta-feira, 7h",
    "cafe.title": "Live Café e Fé",
    "cafe.text": "Todas as sextas-feiras, das 7h às 7h30, uma reflexão para alimentar a fé e orientar o coração na caminhada cristã.",
    "cafe.button": "Acompanhar pelo Facebook",
    "prayer.kicker": "Pedidos de oração",
    "prayer.title": "Podemos orar por você?",
    "prayer.text": "Envie seu pedido de oração pelo WhatsApp da igreja. Sua mensagem será acolhida com respeito e encaminhada com cuidado.",
    "prayer.button": "Enviar pedido de oração",
    "links.kicker": "Conecte-se",
    "links.title": "Redes sociais e links úteis",
    "links.whatsapp": "WhatsApp da Igreja",
    "links.instagram": "Instagram",
    "links.youtube": "YouTube",
    "links.facebook": "Facebook",
    "links.ipib": "IPI do Brasil",
    "links.conecta": "IPI Conecta",
    "links.estandarte": "O Estandarte",
    "links.bible": "Bíblia Online",
    "bulletin.kicker": "Boletim dominical",
    "bulletin.title": "Boletim Dominical IPI",
    "bulletin.text": "Baixe o boletim dominical mais recente disponibilizado pela igreja.",
    "bulletin.file": "Boletim Dominical.pdf",
    "bulletin.button": "Baixar boletim",
    "location.kicker": "Localização",
    "location.title": "Venha nos visitar",
    "location.addressLabel": "Endereço:",
    "location.addressValue": "Rua José de Alencar, 547 — Pirapozinho-SP",
    "location.officeLabel": "Expediente pastoral:",
    "location.officeValue": "terça a sexta-feira, das 8h às 12h.",
    "location.map": "Abrir no mapa",
    "location.contact": "Falar conosco",
    "location.cardAddress": "Rua José de Alencar, 547",
    "location.cardCity": "Pirapozinho-SP",
    "location.cardText": "Para avisos atualizados da semana, acompanhe nossas redes sociais ou fale conosco pelo WhatsApp.",
    "giving.kicker": "Contribuições",
    "giving.title": "Dízimos e ofertas",
    "giving.text": "Informações para contribuição, conforme dados divulgados no boletim da igreja.",
    "giving.bankLabel": "Banco:",
    "giving.bankValue": "Sicoob Paulista (756)",
    "giving.branchLabel": "Agência:",
    "giving.branchValue": "4446",
    "giving.accountLabel": "Conta:",
    "giving.accountValue": "58.849-0",
    "giving.cnpjLabel": "CNPJ:",
    "giving.cnpjValue": "44.853.364/0001-90",
    "giving.payeeLabel": "Favorecido:",
    "giving.payeeValue": "Igreja Presbiteriana Independente de Pirapozinho-SP",
    "floating.aria": "Falar com a igreja pelo WhatsApp",
    "floating.text": "WhatsApp",
    "footer.copy": "Igreja Presbiteriana Independente de Pirapozinho-SP"
  },
  de: {
    "meta.description": "Institutionelle Website der Unabhängigen Presbyterianischen Kirche von Pirapozinho-SP.",
    "page.title": "IPI Pirapozinho",
    "nav.aria": "Hauptnavigation",
    "nav.about": "Über uns",
    "nav.schedule": "Programm",
    "nav.links": "Links",
    "nav.bulletin": "Gemeindebrief",
    "nav.location": "Standort",
    "nav.menu": "Menü öffnen",
    "lang.pt": "🇧🇷 Português",
    "lang.de": "🇩🇪 Deutsch",
    "brand.alt": "Symbol der IPI Pirapozinho",
    "brand.name": "IPI Pirapozinho",
    "hero.kicker": "Unabhängige Presbyterianische Kirche",
    "hero.title": "Pirapozinho: im Auftrag des Lebens",
    "hero.text": "Eine christliche Gemeinde, die zusammenkommt, um Gott anzubeten, das Evangelium zu verkünden, im Wort zu wachsen und mit Liebe zu dienen.",
    "hero.whatsapp": "Über WhatsApp sprechen",
    "hero.schedule": "Programm ansehen",
    "about.kicker": "Unsere Gemeinde",
    "about.title": "Unabhängige Presbyterianische Kirche von Pirapozinho",
    "about.text1": "Die IPI Pirapozinho ist eine örtliche christliche Gemeinde, verbunden mit der Unabhängigen Presbyterianischen Kirche Brasiliens, die sich der Anbetung Gottes, der Verkündigung des Evangeliums, dem Gebet, der Gemeinschaft und dem Dienst widmet.",
    "about.text2": "Dieser Bereich bietet nützliche Informationen für Besucher, Mitglieder und alle, die das Leben der Kirche begleiten möchten.",
    "identity.alt": "Visuelle Identität der IPI Pirapozinho",
    "identity.title": "Im Auftrag des Lebens",
    "identity.text": "Glaube, Wort, Gebet und Gemeinschaft.",
    "schedule.kicker": "Wochenprogramm",
    "schedule.title": "Seien Sie dabei",
    "schedule.sunday.day": "Sonntag",
    "schedule.sunday.title": "Gottesdienst und Sonntagsschule",
    "schedule.sunday.item1": "8 Uhr — Gebetsturm",
    "schedule.sunday.item2": "9 Uhr — Sonntagsschule",
    "schedule.sunday.item3": "19 Uhr — Gottesdienst",
    "schedule.tuesday.day": "Dienstag",
    "schedule.tuesday.title": "Gebetstreffen",
    "schedule.tuesday.text": "20 Uhr — Eine Zeit des Gebets, der Gemeinschaft und der Fürbitte.",
    "schedule.thursday.day": "Donnerstag",
    "schedule.thursday.title": "Akademie des Glaubens",
    "schedule.thursday.text": "20 Uhr — Studium, Reflexion und Wachstum im Wort.",
    "schedule.friday.day": "Freitag",
    "schedule.friday.title": "Live Kaffee und Glaube",
    "schedule.friday.text": "7:00 bis 7:30 Uhr — Eine Botschaft, um den Tag mit Glauben zu beginnen.",
    "cafe.alt": "Grafik von Live Kaffee und Glaube",
    "cafe.kicker": "Freitag, 7 Uhr",
    "cafe.title": "Live Kaffee und Glaube",
    "cafe.text": "Jeden Freitag von 7:00 bis 7:30 Uhr eine Andacht, um den Glauben zu stärken und das Herz auf dem christlichen Weg auszurichten.",
    "cafe.button": "Auf Facebook folgen",
    "prayer.kicker": "Gebetsanliegen",
    "prayer.title": "Dürfen wir für Sie beten?",
    "prayer.text": "Senden Sie Ihr Gebetsanliegen über das WhatsApp der Kirche. Ihre Nachricht wird mit Respekt aufgenommen und mit Sorgfalt weitergeleitet.",
    "prayer.button": "Gebetsanliegen senden",
    "links.kicker": "Verbinden Sie sich",
    "links.title": "Soziale Netzwerke und nützliche Links",
    "links.whatsapp": "WhatsApp der Kirche",
    "links.instagram": "Instagram",
    "links.youtube": "YouTube",
    "links.facebook": "Facebook",
    "links.ipib": "IPI von Brasilien",
    "links.conecta": "IPI Conecta",
    "links.estandarte": "O Estandarte",
    "links.bible": "Online-Bibel",
    "bulletin.kicker": "Sonntagsbrief",
    "bulletin.title": "IPI Sonntagsbrief",
    "bulletin.text": "Laden Sie den neuesten Sonntagsbrief der Kirche herunter.",
    "bulletin.file": "Boletim Dominical.pdf",
    "bulletin.button": "Gemeindebrief herunterladen",
    "location.kicker": "Standort",
    "location.title": "Besuchen Sie uns",
    "location.addressLabel": "Adresse:",
    "location.addressValue": "Rua José de Alencar, 547 — Pirapozinho-SP",
    "location.officeLabel": "Pastoralbüro:",
    "location.officeValue": "Dienstag bis Freitag, von 8 bis 12 Uhr.",
    "location.map": "Auf der Karte öffnen",
    "location.contact": "Mit uns sprechen",
    "location.cardAddress": "Rua José de Alencar, 547",
    "location.cardCity": "Pirapozinho-SP",
    "location.cardText": "Für aktuelle Hinweise der Woche folgen Sie unseren Netzwerken oder sprechen Sie mit uns über WhatsApp.",
    "giving.kicker": "Beiträge",
    "giving.title": "Zehnten und Opfergaben",
    "giving.text": "Informationen zur Unterstützung gemäß den im Gemeindebrief veröffentlichten Daten.",
    "giving.bankLabel": "Bank:",
    "giving.bankValue": "Sicoob Paulista (756)",
    "giving.branchLabel": "Filiale:",
    "giving.branchValue": "4446",
    "giving.accountLabel": "Konto:",
    "giving.accountValue": "58.849-0",
    "giving.cnpjLabel": "CNPJ:",
    "giving.cnpjValue": "44.853.364/0001-90",
    "giving.payeeLabel": "Begünstigter:",
    "giving.payeeValue": "Unabhängige Presbyterianische Kirche von Pirapozinho-SP",
    "floating.aria": "Mit der Kirche über WhatsApp sprechen",
    "floating.text": "WhatsApp",
    "footer.copy": "Unabhängige Presbyterianische Kirche von Pirapozinho-SP"
  }
};

function readStoredLanguage() {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem(storageKey, language);
  } catch {
    // ignore storage failures
  }
}

function applyTranslations(language) {
  const fallback = translations.pt;
  const activeTranslations = translations[language] || fallback;

  document.documentElement.lang = language === "de" ? "de" : "pt-BR";
  document.documentElement.dataset.language = language;
  document.title = activeTranslations["page.title"] || fallback["page.title"] || document.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = activeTranslations[key] || fallback[key];

    if (!value) return;

    const attributeList = element.dataset.i18nAttr;

    if (attributeList) {
      attributeList
        .split(",")
        .map((attribute) => attribute.trim())
        .filter(Boolean)
        .forEach((attribute) => {
          element.setAttribute(attribute, value);
        });
      return;
    }

    element.textContent = value;
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
  });

  storeLanguage(language);
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.dataset.lang;
    applyTranslations(selectedLanguage);
  });
});

if (year) {
  year.textContent = new Date().getFullYear();
}

const savedLanguage = readStoredLanguage();
applyTranslations(savedLanguage && translations[savedLanguage] ? savedLanguage : "pt");
