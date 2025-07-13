document.querySelectorAll('.ramo').forEach(ramo => {
  if (!ramo.classList.contains('bloqueado')) {
    ramo.addEventListener('click', () => aprobarRamo(ramo));
  }
});

function aprobarRamo(ramo) {
  ramo.classList.add('aprobado');
  ramo.removeEventListener('click', () => aprobarRamo(ramo));
  desbloquearRamosDependientes(ramo.id);
}

function desbloquearRamosDependientes(idAprobado) {
  document.querySelectorAll('.ramo.bloqueado').forEach(ramo => {
    const requisitos = ramo.dataset.requisitos.split(',').map(r => r.trim()).filter(r => r);
    const aprobados = requisitos.every(req => document.getElementById(req).classList.contains('aprobado'));

    if (aprobados) {
      ramo.classList.remove('bloqueado');
      ramo.addEventListener('click', () => aprobarRamo(ramo));
    }
  });
}
