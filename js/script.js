/* =====================================================
                    MOBILE NAVIGATION
====================================================== */

const menuButton = document.getElementById("menuButton");

const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  menuButton.setAttribute("aria-expanded", isOpen);

  menuButton.innerHTML = isOpen ? "✕" : "☰";
});

/* CLOSE MOBILE MENU WHEN A NAVIGATION LINK IS CLICKED */

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    menuButton.innerHTML = "☰";

    menuButton.setAttribute("aria-expanded", "false");
  });
});

/* =====================================================
                NAVBAR SCROLL EFFECT
====================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* =====================================================
                    PROJECT FILTER
====================================================== */

const filterButtons = document.querySelectorAll(".filter-button");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

/* =====================================================
                    SCROLL REVEAL
====================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

/* =====================================================
                    PROJECT LINKS
====================================================== */

document.querySelectorAll(".visit-project").forEach((link) => {
  link.addEventListener("click", function (event) {
    if (this.getAttribute("href") === "#") {
      event.preventDefault();

      alert(
        "Ang link para sa proyektong ito ay magiging available kapag nailathala na ang proyekto.",
      );
    }
  });
});
