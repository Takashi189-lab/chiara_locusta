$(function() {
  // ヘッダースクロール背景色変化
  var header = $('header');
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      header.css("background-color","#affcdf");
    } else {
      header.css("background-color","transparent");
    }
  })

  // Hamburger-Menu
  $('.hamburger-btn').on('click', function(){
    $('.hamburger-menu').toggleClass('is-open');
  });

  $('.hamburger-menu nav ul li a').on('click', function(){
    $('.hamburger-menu').stop().removeClass('is-open');
  });

  // Page Top
  var pageTop = $('.page-top');
  pageTop.hide();
  $(window).scroll(function (){
    if ($(this).scrollTop() > 150) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function() {
    $('html, body').animate({scrollTop:0}, 300)
  });

  // Click Event（nav）
  $(".header-navigation nav ul li a").click(function() {
    $(".header-navigation nav ul li a").removeClass('is-active');
    $(this).addClass('is-active');
  });


});
