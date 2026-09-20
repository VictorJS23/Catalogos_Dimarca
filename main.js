// ========================================
// CUANDO EL HTML ESTÉ COMPLETAMENTE CARGADO
// ========================================

document.addEventListener("DOMContentLoaded", () => {


    // ========================================
    // AÑO DEL FOOTER
    // ========================================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }



    // ========================================
    // CONVERTIR ENLACE DE GOOGLE DRIVE
    // A ENLACE DE DESCARGA
    // ========================================

    function generarLinkDescarga(url) {

        if (!url) {
            return "#";
        }


        // Acepta enlaces como:
        //
        // https://drive.google.com/file/d/ID/view
        //
        // https://drive.google.com/file/d/ID/view?usp=sharing

        const coincidencia = url.match(
            /\/file\/d\/([^/]+)/
        );


        // Si no encuentra el ID
        if (!coincidencia) {

            console.error(
                "No se pudo obtener el ID del archivo de Google Drive:",
                url
            );

            return url;
        }


        // Obtener ID del archivo
        const idArchivo = coincidencia[1];


        // Crear enlace de descarga
        return `https://drive.google.com/uc?export=download&id=${idArchivo}`;
    }



    // ========================================
    // CONFIGURAR BOTONES DE DESCARGA
    // ========================================

    const botonesDescarga =
        document.querySelectorAll(".descargar-pdf");


    botonesDescarga.forEach((boton) => {

        const driveUrl =
            boton.dataset.drive;


        if (!driveUrl) {
            return;
        }


        // Generar enlace automáticamente
        const linkDescarga =
            generarLinkDescarga(driveUrl);


        // Colocarlo en el botón
        boton.href = linkDescarga;


        // Abrir en nueva pestaña
        boton.target = "_blank";


        // Seguridad
        boton.rel = "noopener";
    });

});