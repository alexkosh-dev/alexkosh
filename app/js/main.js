$(document).ready(function () {
  //animate scroll menu click HEADER
  $(".header-menu__item, .header-content__wrapper, .menu-mobile__item").on(
    "click",
    "a",
    function (event) {
      event.preventDefault();
      var menuId = $(this).attr("href"),
        top = $(menuId).offset().top;
      console.log(top);
      $("html, body").animate({ scrollTop: top }, 1000);
    }
  );

  //scroll button will appear
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > $(window).height() * 0.7) {
      $(".btn__scroll-top").css("display", "flex");
    } else {
      $(".btn__scroll-top").css("display", "none");
    }
  });

  // arrow scroll up to menu
  $(".btn__scroll-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  // burger animate and open a menu mobile
  $(".menu-burger").on("click", function () {
    $(".menu-burger__line").toggleClass("menu-burger__line--active");
    $(".menu-mobile").toggleClass("menu-mobile--active");
  });

  // click on menu link, hide menu mobile
  $('.menu-mobile__link').on('click', function (){
    $(".menu-mobile").removeClass('menu-mobile--active');
    $(".menu-burger__line").removeClass("menu-burger__line--active");
  })

 
  
});