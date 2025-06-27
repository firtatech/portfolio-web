// toggle class active (Dari ga ada jadi ada. Dari ada jadi ga ada)
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle(`active`);
};

// klik diluar navbar untuk menghilangkan navnya
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Inisialisasi Feather Icons
feather.replace();

const words = ["Developer.", "Digital Talent.", "Learner."];
const el = document.getElementById("typewriter");
let currentWord = 0;
let currentChar = 0;
let isDeleting = false;

function type() {
  const fullText = words[currentWord];

  if (isDeleting) {
    currentChar--;
  } else {
    currentChar++;
  }

  el.textContent = fullText.substring(0, currentChar);

  let speed = isDeleting ? 80 : 120;

  if (!isDeleting && currentChar === fullText.length) {
    speed = 2000; // jeda saat selesai mengetik
    isDeleting = true;
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentWord = (currentWord + 1) % words.length;
    speed = 500; // jeda sebelum mulai kata baru
  }

  setTimeout(type, speed);
}

type();
