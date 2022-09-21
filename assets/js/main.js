$(document).ready(function () {

     $("a").click(function () {
         var gato = this.hash

         $("html, body").animate(
             {
                 scrollTop: $(gato).offset().top
             },
             800
         )
     })



    //Evento

    $("#enviar").click(function () {

        alert("El mensaje fue enviado correctamente...")
    })

    //Tooltip Enable

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


})