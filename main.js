document.getElementById("year").textContent = new Date().getFullYear();

// ========================================
// CONFIGURACIÓN
// ========================================

const numeroWhatsApp = "50586822545";

// ========================================
// GENERAR ENLACE DE WHATSAPP
// ========================================

function generarLinkWhatsApp(pdf) {

    // Obtener solamente el nombre del archivo
    let nombre = pdf.split("/").pop();

    // Quitar la extensión .pdf
    nombre = nombre.replace(/\.pdf$/i, "");

    // Reemplazar "_" y "-" por espacios
    nombre = nombre.replace(/[_-]/g, " ");

    // Eliminar espacios repetidos
    nombre = nombre.replace(/\s+/g, " ").trim();

    // Convertir la primera letra de cada palabra a mayúscula
    nombre = nombre.replace(/\b\w/g, letra => letra.toUpperCase());

    // Crear el mensaje
    const mensaje =
        `Hola, me gustaria solicitar el PDF del catálogo de ${nombre}.`;

    // Crear el enlace de WhatsApp
    return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
}


// ========================================
// CONFIGURAR BOTONES DE WHATSAPP
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const botones = document.querySelectorAll(".solicitar-pdf");

    botones.forEach(boton => {

        // Obtener la ruta del PDF desde data-pdf
        const pdf = boton.dataset.pdf;

        // Si existe un PDF, generar el enlace
        if (pdf) {

            boton.href = generarLinkWhatsApp(pdf);

            boton.target = "_blank";

            boton.rel = "noopener";
        }
    });

});