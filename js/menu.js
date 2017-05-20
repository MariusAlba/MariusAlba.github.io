$(document).ready(function(){
   
    $(".dropdown").on("click", function(){
        $("header nav ul").toggleClass("open");
    });
});

document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.title', {
        strings: ["Always Learning Always Evolving"],
        typeSpeed: 50
      });
  });