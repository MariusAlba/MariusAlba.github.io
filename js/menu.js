$(document).ready(function(){
    $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showIcon");
    });
});

document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.title', {
        strings: ["Always Learning Always Evolving"],
        typeSpeed: 50
      });
  });

$('nav').localScroll();