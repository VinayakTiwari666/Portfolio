function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (!menu || !icon) return;
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Theme handling
const themeToggle = document.getElementById("themeToggle");
const themeToggleMobile = document.getElementById("themeToggleMobile");

function applyTheme(theme) {
  document.body.classList.toggle("theme-dark", theme === "dark");
}

function getPreferredTheme() {
  const stored = localStorage.getItem("theme");
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme) {
  applyTheme(theme);
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const isDark = document.body.classList.contains("theme-dark");
  setTheme(isDark ? "light" : "dark");
}

applyTheme(getPreferredTheme());

themeToggle?.addEventListener("click", toggleTheme);
themeToggleMobile?.addEventListener("click", toggleTheme);

// EmailJS init
(function () {
  emailjs.init("MKBAtFN9LCZ-CHE9x");
})();

// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_0xcb3zl", "template_gah37tc", this)
      .then(() => {
        alert("Message sent successfully ?");
        form.reset();
      })
      .catch((error) => {
        alert("Failed to send message ?");
        console.error(error);
      });
  });
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (!backToTopBtn) return;
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
