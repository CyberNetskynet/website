// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Alert untuk tombol order
document.querySelectorAll(".paket-card button").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Terima kasih, tim kami akan segera menghubungi Anda!");
  });
});

// Scroll spy untuk navbar
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Placeholder JS, bisa ditambahin animasi/alert
console.log("Website ISP Trimitra aktif!");
