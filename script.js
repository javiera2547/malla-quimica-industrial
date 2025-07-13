const detalles = {
  "Química General": "Introduce la estructura de la materia, enlaces químicos y reacciones.",
  "Álgebra": "Estudia matrices, determinantes, sistemas lineales y más.",
  "Cálculo I": "Funciones, límites, derivadas y aplicaciones.",
  "Física I": "Mecánica clásica, cinemática y dinámica."
};

function verDetalle(ramo) {
  const texto = detalles[ramo] || "Descripción no disponible.";
  document.getElementById("detalle").innerHTML = `<strong>${ramo}:</strong> ${texto}`;
}
