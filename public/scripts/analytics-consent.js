(function () {
  var STORAGE_KEY = "mt_analytics_consent";
  var EU_TZ_PREFIXES = ["Europe/", "Atlantic/Azores", "Atlantic/Canary", "Atlantic/Madeira"];

  function readConsent() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function writeConsent(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
  }

  function likelyEU() {
    var tz = "";
    try {
      tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    } catch {
      tz = "";
    }
    if (EU_TZ_PREFIXES.some(function (p) {
      return tz.indexOf(p) === 0;
    })) {
      return true;
    }
    var lang = (navigator.language || "").toLowerCase();
    var euLangs = [
      "de", "fr", "es", "it", "nl", "pl", "pt", "el", "cs", "da", "fi", "sv", "hu", "ro", "bg",
      "hr", "sk", "sl", "et", "lv", "lt", "ga", "mt", "en-gb", "en-ie",
    ];
    return euLangs.some(function (l) {
      return lang === l || lang.indexOf(l + "-") === 0;
    });
  }

  function showBanner() {
    var banner = document.getElementById("consent-banner");
    if (!banner) return;
    banner.hidden = false;
    banner.setAttribute("aria-hidden", "false");
    document.getElementById("consent-accept")?.focus();
  }

  function hideBanner() {
    var banner = document.getElementById("consent-banner");
    if (!banner) return;
    banner.hidden = true;
    banner.setAttribute("aria-hidden", "true");
  }

  function loadGa4() {
    var id = window.__MT_GA4_ID__;
    if (!id || window.__MT_GA4_LOADED__) return;
    window.__MT_GA4_LOADED__ = true;

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });

    gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
    script.onload = function () {
      gtag("js", new Date());
      gtag("config", id);
      loadGa4Events();
    };
    document.head.appendChild(script);
  }

  function loadGa4Events() {
    var src = window.__MT_GA4_EVENTS_SCRIPT__;
    if (!src || document.querySelector('script[data-mt-ga4-events="true"]')) return;
    var events = document.createElement("script");
    events.defer = true;
    events.src = src;
    events.setAttribute("data-mt-ga4-events", "true");
    document.body.appendChild(events);
  }

  function grant() {
    writeConsent("granted");
    hideBanner();
    loadGa4();
  }

  function deny() {
    writeConsent("denied");
    hideBanner();
  }

  function init() {
    var consent = readConsent();
    var acceptBtn = document.getElementById("consent-accept");
    var rejectBtn = document.getElementById("consent-reject");

    acceptBtn?.addEventListener("click", grant);
    rejectBtn?.addEventListener("click", deny);

    if (consent === "granted") {
      loadGa4();
      return;
    }
    if (consent === "denied") {
      return;
    }
    if (likelyEU()) {
      showBanner();
      return;
    }
    grant();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
