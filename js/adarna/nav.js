(function () {
  const pindutan = document.querySelector(".nav-toggle");
  const talaan = document.querySelector(".nav-list");
  if (!pindutan || !talaan) return;

  pindutan.addEventListener("click", function () {
    const bukas = talaan.classList.toggle("bukas");
    pindutan.setAttribute("aria-expanded", bukas ? "true" : "false");
  });
})();
