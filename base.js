
$(document).ready(function () {
    $('#navbar-container').load("elements/navbar.html");
    $('#cabecera-container').load("elements/cabecera.html");
    $('#principal').load("sections/principal.html");
    $('#yo-me-encargo').load("sections/yo-me-encargo.html");
    $('#conocimientos').load("sections/conocimientos.html");
    

    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $("#navbar").addClass("bg-dark");
        } else{
            $("#navbar").removeClass("bg-dark");
        }
    });
});