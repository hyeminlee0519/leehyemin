$(".sub").hide();

$(".menu>li").click(function(){
  $(this).children(".sub").stop().slideToggle()
})
