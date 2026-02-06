let navbar=document.querySelector(".nav-bar");

window.addEventListener("scroll", function() {  
    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

$(document).ready(function() {
  $(".hs-c-1").mouseenter(function(){
            $(".hsc-1-con").fadeIn(500)
        })
$(".hs-c-1").mouseleave(function(){
            $(".hsc-1-con").fadeOut(500);
        })
  $(".hs-c-2").mouseenter(function(){
            $(".hsc-2-con").fadeIn(500)
        })
$(".hs-c-2").mouseleave(function(){
            $(".hsc-2-con").fadeOut(500);
        })
$('.ld-1, .ld-2, .ld-3').mouseenter(function () {
  $(this).find('.ld-con').fadeIn(500);
});

$('.ld-1, .ld-2, .ld-3').mouseleave(function () {
  $(this).find('.ld-con').fadeOut(500);
});

$(".bars").click(function(){
    
    $(".nav-bar").toggleClass("n-bg");
    $(".nav-toggle").toggle();
    // alert("hello")
})    
});


