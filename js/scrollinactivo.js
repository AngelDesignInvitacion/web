

    //Funcion 1
       //Deshabilitar evento scroll
      let body =$(document)
      body.on('scroll',function name() {
        body.scrollTop(0);
      });

      $("#toggle").change(function () {
        // Quita el evento scroll
        if (this.checked)
            body.off("scroll");
            // body.unbind('scroll');*
    })
 
    //Funcion 2
    /*const $body = $(document);
    $body.bind('scroll',() => !toggle.checked && $body.scrollTop(0));*/