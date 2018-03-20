$(document).ready(function(){
    $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background','rgba(15,13,13,0.85');
    } else {
    $('.navbar').css('background','transparent');
    }
    });
});