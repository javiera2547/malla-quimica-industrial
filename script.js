document.querySelectorAll(".ramo").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.disabled) return;

    btn.classList.add("aprobado");
    btn.disabled = true;

    const desbloquea = btn.dataset.desbloquea;
    if (desbloquea) {
      desbloquea.split(",").forEach(id => {
        const ramo = document.getElementById(id.trim());
        if (ramo) ramo.disabled = false;
      });
    }
  });
});
