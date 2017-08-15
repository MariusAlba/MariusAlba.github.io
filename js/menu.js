$(document).ready(function(){
    $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showIcon");
    });
});
$(document).ready(function() {
   var btt = $('.bTop');
    
    btt.on('click', function(e) {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        e.preventDefault();
    });
    
    $(window).on('scroll', function(){
       var bt = $(this),
           height = bt.height(),
           top = bt.scrollTop();
        if(top > height) {
            if(!btt.is(':visible')){
                btt.fadeIn();
            }
        }
        else {
            btt.fadeOut();
        }
    });
});



jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.title', {
        strings: ["Always Learning Always Evolving","Technology is a way to adapt"],
        typeSpeed: 70,
        backDelay: 2000,
        loop: true
      });
  });

$('nav').localScroll();