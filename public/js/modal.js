$(window).on('load', function () {
    localStorage.setItem("modal", true);
    $('#modalPadrao').modal('show');
});

$('.close').click(function (event) {
    $('#modalPadrao').fadeOut();
    event.preventDefault();
});

$(document).ready(function () {
    var ls = localStorage.getItem("modal");
    if (!ls) {
        $('#modalPadrao').modal('show');
    }
})

$('#modalPadrao').on('shown.bs.modal', function () {
    localStorage.setItem("modal", false);
});