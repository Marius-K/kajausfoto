$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
});

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('#mainNav').affix({
    offset: {
        top: 100
    }
});

window.sr = new ScrollReveal();
sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
}, 200);
sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
}, 300);
sr.reveal('.avataras', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
}, 300);

$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'iframe',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile'
});

$('#subject').change(function() {
    if ($(this).val() == '65') {
        $('#change').html('<input id="subject" name="subject" type="text" placeholder="Įveskite temą" class="form-control" required>');
    }
});

$('#resetButton').on('click', function() {
    var pasirinkimas = '<select class="form-control form-select ajax-processed" id="subject" name="subject" required>\
                    <option value="" hidden selected="selected">Pasirinkite temą</option>\
                    <option value="1">Reprezentacinių filmų filmavimas iš oro</option>\
                    <option value="2">Statybų eigos ir įrangos fotografavimas iš oro</option>\
                    <option value="3">Renginių filmavimas iš oro</option>\
                    <option value="4">NT filmavimas ir fotografavimas iš oro</option>\
                    <option value="5">Gyva renginių transliacija</option>\
                    <option value="65">Kita</option>\
                    </select>';
    $('#change').html(pasirinkimas);
});