$(document).ready(function() {
    formataToggle(".navbar-toggler", "300px", "100px");
    formataToggle(".dropdown-toggle", "400px", "277px");
});

function isMobile() {
    if ($(window).width() < 940) {
        return true;
    } else {
        false;
    }

}

function formataToggle(div, tamanhoInicio, tamanhoFinal) {
    $(div).click(function() {
        if (isMobile()) {
            $('.styled-bannerWrapper').css(" transition", "1s");
            $('.styled-bannerWrapper').css("margin-top", tamanhoInicio);
            $('.link-cart').css("right", "-200px");
            $('.link-cart').css("top", "-40px");
            $('.link-cart').css("margin-top", "-115px");

            let expanded = $(this).attr("aria-expanded");
            if (expanded == 'true') {
                $('.styled-bannerWrapper').css(" transition", "1s");
                $('.styled-bannerWrapper').css("margin-top", tamanhoFinal);
                $('.link-cart').css("top", "0px");
                $('.link-cart').css("margin-top", "-10px");
                $('.link-cart').css("right", "0px");

            }
        }

    });
}