document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggleButton');
    const audioIcon = document.getElementById('audioIcon');
    const music = document.getElementById('music');


    
    

    // Variable para controlar si la música esta en pausa.
    let isPlaying = true;
    
    // Función para cambair de icono y cotrolar la música.
    function toggleAudio(params) {
    
        if (isPlaying) {
            music.pause();
            audioIcon.src ='images/pausa.svg';
        }else{
            music.play();
            audioIcon.src ='images/sonido.svg';
        }
        //Inverción a estado de reprodución.
        isPlaying = !isPlaying; 
    }

    // Controlar el volumen
     music.volume = 0.6;


     // Agregar un evento de clic al botón para alternar la música. 
    button.addEventListener('click', toggleAudio);
});



