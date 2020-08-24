$(document).ready(function() {
    formataToggle(".navbar-toggler", "320px", "100px");
    formataToggle(".dropdown-toggle", "435px", "315px");
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
            let expanded = $(this).attr("aria-expanded");
            if (expanded == 'true') {
                $('.styled-bannerWrapper-mobile').css(" transition", "1s");
                $('.styled-bannerWrapper-mobile').css("margin-top", tamanhoFinal);
            } else {
                $('.styled-bannerWrapper-mobile').css(" transition", "1s");
                $('.styled-bannerWrapper-mobile').css("margin-top", tamanhoInicio);

            }
        }

    });
}