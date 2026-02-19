// Mobile Menu
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

if (burger && mobileNav) {
  burger.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("show");
    burger.setAttribute("aria-expanded", String(isOpen));
    mobileNav.setAttribute("aria-hidden", String(!isOpen));
  });

  // Close on click
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileNav.classList.remove("show");
      burger.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
    });
  });
}

// Status Toggle (lokale Demo)
const statusBtn = document.getElementById("statusBtn");
const statusText = document.getElementById("statusText");

function setStatus(on) {
  if (!statusText) return;
  if (on) {
    statusText.textContent = "Heute: Spieler sind da ✅";
    statusText.classList.add("status--on");
    statusText.classList.remove("status--off");
  } else {
    statusText.textContent = "Heute: Noch offen";
    statusText.classList.add("status--off");
    statusText.classList.remove("status--on");
  }
  localStorage.setItem("fks_status", on ? "on" : "off");
}

if (statusBtn && statusText) {
  const saved = localStorage.getItem("fks_status");
  setStatus(saved === "on");

  statusBtn.addEventListener("click", () => {
    const current = localStorage.getItem("fks_status") === "on";
    setStatus(!current);
  });
}

// Support Buttons (kleine Demo-Modals via alert)
const equipBtn = document.getElementById("equipBtn");
const placeBtn = document.getElementById("placeBtn");

equipBtn?.addEventListener("click", () => {
  alert("Equipment-Idee: Bälle, Leibchen, Hütchen, Erste-Hilfe-Set. Schreib uns im Kontaktbereich.");
});

placeBtn?.addEventListener("click", () => {
  alert("Du kennst einen Platz/Halle? Schreib uns im Kontaktbereich mit Ort + Zeiten.");
});

// Kontaktformular (Demo)
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formNote) {
    formNote.textContent = "Danke! (Demo) — Für echtes Senden: Formspree oder Firebase Functions integrieren.";
  }
  contactForm.reset();
});

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
