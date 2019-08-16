
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

    // $("body").hide()
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $("#navbar").addClass("bg-main-color");        
        $("#btn-contacto").fadeIn();
    } else {
        $("#navbar").removeClass("bg-main-color");
        $("#btn-contacto").fadeOut(); 
    }
});



function goToByScroll(target) {
    // Scroll
    $('html,body').animate({
        scrollTop: $("#" + target).offset().top - 70
    }, 'slow');
}
