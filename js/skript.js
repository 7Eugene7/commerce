$(document).ready((function(){$(".header__burger").click((function(e){$(".header__burger,.header__menu").toggleClass("active"),$("body").toggleClass("lock"),$(".header,.header__menu").toggleClass("color")}))})),$((function(){$(window).on("scroll",(function(){$(window).scrollTop()>50?$(".header").addClass("active"):$(".header").removeClass("active")}))}));
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

$('.menu').click(function() {
    $(this).toggleClass('active'); 
if ($(".menu__content").is(":visible")) {
    $(".menu__content").slideUp();
} else {	    		
    $(".active .menu__content").slideToggle();
            }
});
