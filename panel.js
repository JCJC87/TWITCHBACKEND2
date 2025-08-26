// Simulación inicial mientras se cargan usuarios reales
const usuariosSimulados = [
    {usuario: "SimUser1", puntos: 10},
    {usuario: "SimUser2", puntos: 8},
    {usuario: "SimUser3", puntos: 6},
    {usuario: "SimUser4", puntos: 5},
    {usuario: "SimUser5", puntos: 4},
    {usuario: "SimUser6", puntos: 3},
    {usuario: "SimUser7", puntos: 2},
    {usuario: "SimUser8", puntos: 1},
];

// Función para renderizar podio y lista
function renderRanking(usuarios) {
    const podioIds = ["segundo", "primer", "tercero"];
    for (let i = 0; i < 3; i++) {
        const puesto = document.getElementById(podioIds[i]);
        if (usuarios[i]) {
            puesto.querySelector(".usuario").textContent = usuarios[i].usuario;
            puesto.querySelector(".numero").textContent = i + 1;
        }
    }

    const resto = document.getElementById("resto");
    resto.innerHTML = "";
    for (let i = 3; i < usuarios.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${usuarios[i].usuario} - ${usuarios[i].puntos} pts`;
        resto.appendChild(li);
    }
}

// Render inicial con usuarios simulados
renderRanking(usuariosSimulados);

// Función de fallback para errores
function mostrarError(mensaje) {
    document.getElementById("mensaje-error").textContent = mensaje;
}

// Simulación de carga desde backend
function obtenerUsuariosReales() {
    // Aquí iría la llamada real a tu backend con fetch/axios
    setTimeout(() => {
        try {
            // Ejemplo de respuesta del backend
            const usuariosReales = [
                {usuario: "Juan", puntos: 50},
                {usuario: "Ana", puntos: 45},
                {usuario: "Luis", puntos: 40},
                {usuario: "Maria", puntos: 35},
                {usuario: "Pedro", puntos: 30},
                {usuario: "Sofia", puntos: 25},
                {usuario: "Carlos", puntos: 20},
                {usuario: "Lucia", puntos: 15},
            ];
            renderRanking(usuariosReales);
        } catch (error) {
            mostrarError("Error al cargar usuarios reales");
        }
    }, 2000);
}

// Llamada al backend
obtenerUsuariosReales();
