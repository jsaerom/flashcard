$(function(){
  $("h2").click(function(){
    $("h2").toggle();
    $("p").toggle();
  });
  $("p").click(function(){
    $("h2").toggle();
    $("p").toggle();
  });
  $(".carousel").carousel({
    interval: null
  });
});
