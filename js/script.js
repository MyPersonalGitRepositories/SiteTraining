var cart = {};
$(function () {
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});
//TODO RENAME load page
$('document').ready(function () {
    f();
    checkCart();
    showMiniCart();
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
    localStorage.setItem('cart', JSON.stringify(cart));
    // add to total-cart-count
    showMiniCart();
    console.log(cart);
}

function checkCart() {
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function showMiniCart() {
    var out = '';
    for (var w in cart) {
        out += w + '---' + cart[w] + '<br>';
    }
    $('text').html(out);

}