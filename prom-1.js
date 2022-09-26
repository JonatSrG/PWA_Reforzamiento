
function sumarUno( numero, callback) {
    if ( numero >= 7) {
        callback('%numero muy alto');
    }

    setTimeout( function(){

        callback( null, numero +1 );
    }, 800);
}

sumarUno( 5, function( nuevoValor) {

    sumarUno( nuevoValor, function( nuevoValor2 ){

        sumarUno( nuevoValor2, function( nuevoValor3) {
            console.log(nuevoValor3);
        });
    });
});