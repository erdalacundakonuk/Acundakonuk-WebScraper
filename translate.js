//  
const translations = {
  en: {
    title: "Google Maps Easy Scrape",
    scraperLink: "Free 2 use web scraper",
    byErdal: "by Erdal Acundakonuk",
    checking: "Checking URL...",
    scrapeBtn: "Scrape Google Maps",
    downloadBtn: "Download as CSV",
    filenamePlaceholder: "Enter file name",
    languageLabel: "Language:"
  },
  tr: {
    title: "Google Haritalar Kolay Tarayıcı",
    scraperLink: "Ücretsiz web tarayıcı",
    byErdal: "Erdal Acundakonuk tarafından",
    checking: "URL kontrol ediliyor...",
    scrapeBtn: "Google Haritalar'ı Tara",
    downloadBtn: "CSV Olarak İndir",
    filenamePlaceholder: "Dosya adı girin",
    languageLabel: "Dil:"
  },
  de: {
    title: "Google Maps Einfacher Scraper",
    scraperLink: "Kostenloser Web-Scraper",
    byErdal: "von Erdal Acundakonuk",
    checking: "URL wird überprüft...",
    scrapeBtn: "Google Maps Scrapen",
    downloadBtn: "Als CSV herunterladen",
    filenamePlaceholder: "Dateinamen eingeben",
    languageLabel: "Sprache:"
  },
  fr: {
    title: "Scraper Google Maps Facile",
    scraperLink: "Scraper Web gratuit",
    byErdal: "par Erdal Acundakonuk",
    checking: "Vérification de l'URL...",
    scrapeBtn: "Analyser Google Maps",
    downloadBtn: "Télécharger en CSV",
    filenamePlaceholder: "Saisir le nom du fichier",
    languageLabel: "Langue:"
  },
  it: {
    title: "Google Maps Scraper Facile",
    scraperLink: "Web scraper gratuito",
    byErdal: "di Erdal Acundakonuk",
    checking: "Controllo dell'URL...",
    scrapeBtn: "Analizza Google Maps",
    downloadBtn: "Scarica in CSV",
    filenamePlaceholder: "Inserisci nome file",
    languageLabel: "Lingua:"
  }
};
// Language chance function
function applyTranslations(lang) {
  document.querySelector("h1").textContent = translations[lang].title;
  
  document.querySelectorAll("h4 a")[0].textContent = translations[lang].scraperLink;
  document.querySelectorAll("h4 a")[1].textContent = translations[lang].byErdal;

  document.getElementById("message").textContent = translations[lang].checking;
  
  document.getElementById("actionButton").textContent = translations[lang].scrapeBtn;
  document.getElementById("downloadCsvButton").textContent = translations[lang].downloadBtn;

  document.getElementById("filenameInput").placeholder = translations[lang].filenamePlaceholder;

  document.querySelector("label[for='languageSelect']").textContent = translations[lang].languageLabel;
}


const languageSelect = document.getElementById('languageSelect');

// Sayfa açıldığında kaydedilen dili yükle
chrome.storage.local.get('appLanguage', function(data) {
  const savedLang = data.appLanguage || 'en';
  languageSelect.value = savedLang;
  applyTranslations(savedLang);
});

// Dil değişince uygula ve kaydet
languageSelect.addEventListener('change', function() {
  const selectedLang = this.value;
  chrome.storage.local.set({appLanguage: selectedLang});
  applyTranslations(selectedLang);
});
