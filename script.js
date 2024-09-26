const partes = [
    "Nombres: Jesús Angel Chávez Huamán (Mr.Puchitos)",
    "Universidad: Universidad Nacional Santiago Antunez de Mayolo",
    "Soy estudiante de Ingeniería de Sistemas, apasionado por la ciberseguridad y la protección de datos, y busco aplicar mis conocimientos en un entorno profesional desafiante.",
    "Ocupación:", "Actualmente soy presidente, coordinador de CiberSecUNASAM y Miembro Activo de CiberSecUNI.",
    "Experiencia:",
    "- HC-group (2019/02/30 - 2019/11/26) Practicante en el área de sistemas.",
    "- EMD-negociaciones (2020/01/15 - 2020/03/30) Practicante en el área de telecomunicaciones.",
    "- UNASAM-ogtise (2024/08/02 - actualidad) Practicante en el área de seguridad de la información.",
    "Habilidades técnicas:", "Dominio de seguridad de la información, análisis de vulnerabilidades, hacking ético, SQL Injection y uso intermedio de distribuciones de linux como Parrot OS y Kali Linux.",
    "Proyectos actuales:",
    "-Actualmente estoy realizando un proyecto sobre análisis de vulnerabilidades de subdominios de las entidades de Huaraz-Ancash-Perú-2024.",
    "-Desarrollando una plataforma de CTF (Capture the Flag) para la Universidad Nacional Santiago Antunez de Mayolo."
];

let indexParte = 0;
let indexChar = 0;

function escribirTexto(parteId, contenido) {
    if (indexChar < contenido.length) {
        document.getElementById(parteId).innerHTML += contenido.charAt(indexChar);
        indexChar++;
        setTimeout(() => escribirTexto(parteId, contenido), 50); // Control de velocidad
    } else {
        indexChar = 0;  // Reseteamos para la siguiente parte
        indexParte++;
        if (indexParte < partes.length) {
            setTimeout(() => iniciarEscritura(), 1000); // Tiempo entre partes
        }
    }
}

function iniciarEscritura() {
    const parteId = `parte${indexParte + 1}`;  // Construimos el ID del div dinámicamente
    const contenido = partes[indexParte];
    escribirTexto(parteId, contenido);
}

iniciarEscritura();  // Comenzamos la escritura
