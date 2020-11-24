var  hamburgerMenu = $(".hamburger-menu");

$(".header-right > a").click(
  function(){
    hamburgerMenu.fadeIn("slow");
  }
);
$(".close").click(
  function(){
    hamburgerMenu.fadeOut("slow");
  }
)
