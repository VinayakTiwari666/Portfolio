function toggleMenu(){
   const menu=document.querySelector(".menu-links");
   const icon=document.querySelector(".hamburger-icon");
   menu.classList.toggle("open");
   icon.classList.toggle("open");
}
//email function//
(function () {
  emailjs.init("MKBAtFN9LCZ-CHE9x");
})();

// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_0xcb3zl",
      "template_gah37tc",
      this
    )
    .then(() => {
      alert("Message sent successfully ✅");
      form.reset();
    })
    .catch((error) => {
      alert("Failed to send message ❌");
      console.error(error);
    });
  });
});
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

