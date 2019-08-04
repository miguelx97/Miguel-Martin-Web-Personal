
$(document).ready(function () {
    $('#navbar-container').load("elements/navbar.html");
    $('#cabecera-container').load("elements/cabecera.html");
    $('#sec-principal').load("sections/principal.html");
    $('#sec-yo-me-encargo').load("sections/yo-me-encargo.html");
    $('#sec-animo').load("sections/animo.html");
    $('#sec-recorrido').load("sections/recorrido.html");
    $('#sec-conocimientos').load("sections/conocimientos.html");
    $('#sec-sobre-mi').load("sections/sobre-mi.html");
    $('#footer-container').load("elements/footer.html");
    

    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $("#navbar").addClass("bg-dark");
        } else{
            $("#navbar").removeClass("bg-dark");
        }
    });
});