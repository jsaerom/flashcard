$(function(){
  $("h2").click(function(){
    $("h2").toggle();
    $("p").toggle();
  });
  $(".active").click(function() {

  })
  $("p").click(function(){
    $("h2").toggle();
    $("p").toggle();
  });
  $(".carousel").carousel({
    interval: null
  });
  $(".carousel-control").click(function(){
    $("h2").show();
    $("p").hide();
  });
  $(".carousel-indicators").click(function(){
    $("h2").show();
    $("p").hide();
  });
});
