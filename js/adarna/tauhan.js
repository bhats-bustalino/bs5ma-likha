(function () {
  const mgaPindutan = document.querySelectorAll("[data-sala]");
  const mgaKard = document.querySelectorAll(".tauhan");
  if (!mgaPindutan.length) return;

  mgaPindutan.forEach(function (pindutan) {
    pindutan.addEventListener("click", function () {
      const uri = pindutan.getAttribute("data-sala");
      mgaPindutan.forEach(function (iba) {
        iba.setAttribute("aria-pressed", iba === pindutan ? "true" : "false");
      });
      mgaKard.forEach(function (kard) {
        kard.hidden = uri !== "lahat" && kard.getAttribute("data-uri") !== uri;
      });
    });
  });
})();
