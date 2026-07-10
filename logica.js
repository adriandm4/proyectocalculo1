console.log("¡Motor lógico de la monografía (V4 con Variable Horas de Sueño) iniciado!");

function calcular() {
    // 1. Capturar las 6 variables desde la interfaz HTML
    const edad = parseInt(document.getElementById('edad').value);
    const estudio = parseFloat(document.getElementById('estudio').value); // Horas semanales
    const entreno = parseFloat(document.getElementById('entreno').value); // Horas semanales
    const cafeina = parseFloat(document.getElementById('cafeina').value); // Tazas al día
    const celular = parseFloat(document.getElementById('celular').value); // Horas al día
    const sueno = parseFloat(document.getElementById('sueno').value);     // Horas de sueño diarias (¡NUEVA!)

    // 2. Validar que no falte ningún dato en el formulario
    if (isNaN(edad) || isNaN(estudio) || isNaN(entreno) || isNaN(cafeina) || isNaN(celular) || isNaN(sueno)) {
        alert("Por favor, llena todos los campos primero.");
        return;
    }

    // 3. Algoritmo matemático adaptado a los rangos estadísticos de la monografía
    let rendimiento = 100.0;

    // --- VARIABLE CRÍTICA PRINCIPAL: HORAS DE SUEÑO DIARIAS ---
    if (sueno < 5.0) {
        rendimiento = 40.0;  // Rango de Alto Riesgo / Privación Severa (14.13% de estudiantes) - Techo muy bajo
    } else if (sueno >= 5.0 && sueno < 6.0) {
        rendimiento = 60.0;  // Rango Crítico / Privación Moderada (21.74% de estudiantes)
    } else if (sueno >= 6.0 && sueno < 7.0) {
        rendimiento = 80.0;  // Rango Límite / Insuficiente Leve (30.43% de estudiantes)
    } else if (sueno >= 7.0 && sueno <= 8.0) {
        rendimiento = 95.0;  // Rango Saludable / Óptimo (25.60% de estudiantes) - Estado ideal basal
    } else if (sueno > 8.0 && sueno <= 9.0) {
        rendimiento = 100.0; // Rango Sobresaliente / Sueño Prolongado (8.10% de estudiantes)
    } else if (sueno > 9.0) {
        rendimiento = 85.0;  // Sueño excesivo (hipersomnia leve puede causar letargia)
    }

    // --- VARIABLE 2: HORAS DE ESTUDIO (SEMANAL) ---
    if (estudio > 20.0) {
        rendimiento -= 12.0; // Más de 20 horas a la semana (Carga muy alta)
    } else if (estudio >= 12.0 && estudio <= 20.0) {
        rendimiento -= 6.0;  // De 12 a 20 horas a la semana
    } else if (estudio < 5.0) {
        rendimiento -= 3.0;  // Menos de 5 horas a la semana
    }

    // --- VARIABLE 3: ACTIVIDAD FÍSICA / ENTRENO (SEMANAL) ---
    if (entreno == 0.0) {
        rendimiento -= 10.0; // 0 horas - Sedentarismo absoluto
    } else if (entreno >= 3.0 && entreno <= 5.0) {
        rendimiento += 5.0;  // De 3 a 5 horas - Rango Recomendado (Bonus de eficiencia)
    } else if (entreno > 5.0) {
        rendimiento -= 4.0;  // Más de 5 horas - Fatiga muscular excesiva
    }

    // --- VARIABLE 4: CONSUMO DE CAFEÍNA (TAZAS AL DÍA) ---
    if (cafeina > 3.0) {
        rendimiento -= 15.0; // Consumo alto (Más de 3 tazas o energizantes)
    } else if (cafeina >= 1.0 && cafeina <= 3.0) {
        rendimiento -= 5.0;  // Consumo moderado (De 1 a 3 tazas)
    }

    // --- VARIABLE 5: EDAD (RANGOS ACADÉMICOS) ---
    if (edad >= 12 && edad <= 16) {
        rendimiento -= 2.0;  // Etapa escolar regular
    } else if (edad >= 17 && edad <= 20) {
        rendimiento -= 4.0;  // Educación superior inicial / Universitarios primerizos
    }

    // --- VARIABLE 6: USO DE CELULAR AL DÍA (CRÍTICA VS PROMEDIO ESTADÍSTICO) ---
    if (edad >= 12 && edad <= 16 && celular > 5.5) {
        rendimiento -= (celular - 5.5) * 5.0 + 5.0; // Promedio secundaria: 5.5h
    } else if (edad >= 17 && edad <= 20 && celular > 6.5) {
        rendimiento -= (celular - 6.5) * 6.0 + 8.0; // Promedio superior inicial: 6.5h
    } else if (edad >= 21 && edad <= 25 && celular > 5.0) {
        rendimiento -= (celular - 5.0) * 5.0 + 6.0; // Promedio superior avanzada: 5.0h
    } else if (edad > 25 && celular > 4.2) {
        rendimiento -= (celular - 4.2) * 4.0 + 4.0; // Promedio posgrados: 4.2h
    } else if (celular > 2.0) {
        rendimiento -= celular * 2.0; // Penalización general por luz azul nocturna
    }

    // Ajuste estricto de límites porcentuales (0% - 100%)
    if (rendimiento > 100.0) rendimiento = 100.0;
    if (rendimiento < 0.0) rendimiento = 0.0;

    // 4. Mostrar el resultado final en la pantalla
    document.getElementById('resultado').innerText = "Rendimiento: " + rendimiento.toFixed(1) + "%";
}