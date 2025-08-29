// buka form order
function bukaForm(paket) {
  document.getElementById("form").style.display = "block";
  document.getElementById("paket").value = paket;
  document.getElementById("form").scrollIntoView({ behavior: "smooth" });
}

// kirim form ke WhatsApp
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let alamat = document.getElementById("alamat").value;
  let paket = document.getElementById("paket").value;

  let pesan = `Halo Admin, saya ingin mendaftar:\n\nNama: ${nama}\nAlamat: ${alamat}\nPaket: ${paket}`;

  // nomor WA tujuan
  let nomorWA = "6282335545461"; // ganti dengan nomor admin utama
  let url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
});

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


