
//this is where we apply opacity to the arrow
$(window).scroll( function(){

  //get scroll position
  var topWindow = $(window).scrollTop();
  //multipl by 1.5 so the arrow will become transparent half-way up the page
  var topWindow = topWindow * 1.5;

  //get height of window
  var windowHeight = $(window).height();

  //set position as percentage of how far the user has scrolled
  var position = topWindow / windowHeight;
  //invert the percentage
  position = 1 - position;

  //define arrow opacity as based on how far up the page the user has scrolled
  //no scrolling = 1, half-way up the page = 0
  $('.arrow-wrap').css('opacity', position);

});



//Code stolen from css-tricks for smooth scrolling:
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(document).ready(function() {
    var s = $("#top");
    var pos = s.position();
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top) {
            s.addClass("menu");
        } else {
            s.removeClass("menu");
        }
    });
});


// Menu Burger

(function($){

  $('#header__icon').click(function(e){
    e.preventDefault();
    $('body').toggleClass('with--sidebar');
  })

// Animation icon Menu BURGER

var Menu = {

  el: {
    ham: $('.conteneur-burger'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom')
  },

  init: function() {
    Menu.bindUIactions();
  },

  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },

  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click');
  }
};

Menu.init();

  // Matelas animation

/*$(document).ready(function() {
  $('.ouvert').click(function(){
    $('#mat6').addClass("mat6");
    $('#mat5').addClass("mat5");
    $('#mat4').addClass("mat4");
    $('#mat3').addClass("mat3");
    $('#mat2').addClass("mat2");
    $('#mat1').removeClass("ouvert").addClass("ferme");
  })


})

//

$(document).ready(function() {
  $('.ouvert2').click(function(){
    $('#mat6').addClass("mat6bis");
    $('#mat1').removeClass("ouvert").addClass("ferme");
  })
})

$(document).ready(function() {
  $('.ferme').click(function(){
    alert('hello');
  })
})
*/

$(function (bouton1) {
    document.getElementsById("mat2").style.opacity = "0,5";
  });

// modal MATELAS

$(function() {
  $("#mat1").on("click", function() {
    $(this).next(".info-panel").slideToggle(200);
  });
  $(".info-panel").on("click", function() {
    $(this).slideUp(200);
  });
});

$(function() {
  $("#mat2").on("click", function() {
    $(this).next(".info-panel2").slideToggle(200);
  });
  $(".info-panel2").on("click", function() {
    $(this).slideUp(200);
  });
});



//

AOS.init({
  duration: 1200,
})

})(jQuery);
