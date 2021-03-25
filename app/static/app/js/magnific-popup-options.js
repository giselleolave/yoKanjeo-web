$(document).ready(function() {

    // MagnificPopup
    var magnifPopup = function() {
        $('.image-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // Por defecto es falso, así que no olvide habilitarlo

                duration: 300, // duración del efecto, en milisegundos
                easing: 'ease-in-out', // Función de facilitación de transición CSS

                // La función "abridor" debe devolver el elemento desde el que se ampliará la ventana emergente
                // y a qué ventana emergente se reducirá
                // Por defecto busca una etiqueta de imagen:
                opener: function(openerElement) {

                    // openerElement es el elemento en el que se inicializó la ventana emergente, en este caso su etiqueta <a>
                    // no necesita agregar la opción "abridor" si este código coincide con sus necesidades, es una predeterminada.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };

    var magnifVideo = function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    };





    // Llamar a las funciones
    magnifPopup();
    magnifVideo();

});