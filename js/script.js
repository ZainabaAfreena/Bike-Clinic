// 'use strict';
// #PRELOADING
document.addEventListener("DOMContentLoaded", () => {
  // menu
  const menu = document.querySelector(".menu");
  const icon = document.querySelector(".menu ion-icon");
  const items = document.querySelector(".menu-items");
  const item = document.querySelectorAll(".menu-item");

  menu.addEventListener("click", () => {
    menu.classList.toggle("expand");
    icon.classList.toggle("hidden");

    if (menu.classList.contains("expand")) {
      setTimeout(() => {
        items.style.opacity = 1;
        items.style.transition = "all 0.4s ease-in-out";
        items.style.transform = "translateY(0)";
      }, 500);
    } else {
      items.style.opacity = 0;
      items.style.transition = "all 0.25s ease-in-out";
      items.style.transform = "translateY(-600px)";
    }
  });



  function collapseMenu() {
    menu.classList.remove('expand');
    icon.classList.remove('hidden');
    items.style.opacity = 0;
    items.style.transform = 'translateY(-20px)';
}

item.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (menu.classList.contains('expand') && !menu.contains(e.target)) {
            collapseMenu();
        }
    });
});

document.addEventListener('click', (e) => {
    if (menu.classList.contains('expand') && !menu.contains(e.target)) {
        collapseMenu();
    }
});

  // preloader
  const loadElement = document.querySelector("[data-preloader]");

  window.addEventListener("load", function () {
    loadElement.classList.add("loaded");
  });

  //  #HEADER

  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-go-top-btn]");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      header.classList.add("active");
      // backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      // backTopBtn.classList.remove("active");
    }
  });

  //  #SCROLL REVEAL
  const revealElements = document.querySelectorAll("[data-reveal]");

  const scrollReveal = function () {
    // document.querySelector(".body-home").style.height = "unset";
    for (let i = 0, x = revealElements.length; i < x; i++) {
      if (
        revealElements[i].getBoundingClientRect().top <
        window.innerHeight / 1.2
      ) {
        revealElements[i].classList.add("revealed");
      } else {
        revealElements[i].classList.remove("revealed");
      }
    }
  };

  window.addEventListener("scroll", scrollReveal);
  // window.addEventListener("load", scrollReveal);
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.querySelector("body").classList.add("loaded");
    }, 1500);

    setTimeout(function () {
      document.querySelector(".strip").classList.add("add_animation");
    }, 2000);

    setTimeout(scrollReveal, 1700);
  });

  // Progress bar
  function updateProgressBar() {
    const progressBar = document.querySelector(".progress-bar");
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + "%";
  }

  updateProgressBar();
  window.addEventListener("scroll", updateProgressBar);
  window.addEventListener("resize", updateProgressBar);

  // Progress circle
  function updateProgressCircle() {
    const progressElement = document.querySelector(".progress-circle-bar");
    const scrollToTopElement = document.querySelector(".scroll-to-top");
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    let progress = (window.pageYOffset / totalHeight) * 283;
    progress = Math.min(progress, 283);
    progressElement.style.strokeDashoffset = 283 - progress;

    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      scrollToTopElement.style.opacity = "1";
    } else {
      scrollToTopElement.style.opacity = "0";
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const scrollToTopElement = document.querySelector(".scroll-to-top");
  scrollToTopElement.addEventListener("click", scrollToTop);

  updateProgressCircle();
  window.addEventListener("scroll", updateProgressCircle);
  window.addEventListener("resize", updateProgressCircle);

  // #MOBILE NAVBAR TOGGLE

  const navbar = document.querySelector("[data-navbar]");
  const navToggler = document.querySelector("[data-nav-toggler]");

  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
  };

  navToggler.addEventListener("click", toggleNavbar);
});
