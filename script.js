document.querySelectorAll('.ramo').forEach(ramo => {
  if (!ramo.classList.contains('bloqueado')) {
    ramo.addEventListener('click', () => aprobarRamo(ramo));
  }
});

function aprobarRamo(ramo) {
  if (ramo.classList.contains('aprobado')) return;

  ramo.classList.add('aprobado');
  desbloquearDependientes(ramo.id);
}

function desbloquearDependientes(id) {
  document.querySelectorAll('.ramo.bloqueado').forEach(ramo => {
    const requisitos = ramo.dataset.requisitos.split(',').map(r => r.trim()).filter(Boolean);
    const aprobados = requisitos.every(req => document.getElementById(req).classList.contains('aprobado'));
    if (aprobados) {
      ramo.classList.remove('bloqueado');
      ramo.addEventListener('click', () => aprobarRamo(ramo));
    }
  });
}
