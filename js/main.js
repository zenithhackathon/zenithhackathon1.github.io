$('.parallax').parallax();
$(".button-collapse").sideNav();
$('select').material_select();
$("#card-alert .close").click(function() {
    $(this).closest("#card-alert").fadeOut("slow")
});
$('.side-nav li').click(function() {
    $(this).sideNav('hide')
});
$('ul.tabs').tabs();
$('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 100,
    close: "OK",
    clear: "Close"
});
$('.timepicker').pickatime({
    default: 'now',
    twelvehour: false,
    donetext: 'OK',
    autoclose: false,
    vibrate: true
});
$('.modal').modal();
$('.collapsible').collapsible();
$(".collapsible-header.btn").click(function() {
    $(this).children().children().addClass("fa-chevron-up");
    $(this).children().children().removeClass("fa-chevron-down");
    $('.collapsible-header.btn.active i').addClass("fa-chevron-down");
    $('.collapsible-header.btn.active i').removeClass("fa-chevron-up");
});