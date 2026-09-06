// Ipinapakita ang sagisag-panulat nang paunti-unti, parang tinatype
const text = "Quijano de Manila";
const el = document.getElementById("typewriter");
let i = 0;

function typeLoop() {
  if (!el) return;
  el.textContent = text.slice(0, i);
  i++;
  if (i <= text.length) {
    setTimeout(typeLoop, 90);
  }
}

typeLoop();
