var cart = {};
$(function () {
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});
//TODO RENAME
$('document').ready(function () {
    f();
});

function f() {
    // $.get
    $('button.button').on('click', addToCart)
}

function addToCart() {
    var articul = $(this).attr('data-art');
    if (cart[articul] != undefined) {
        cart[articul]++;
    } else {
        cart[articul] = 1;
    }
    console.log(cart);
}