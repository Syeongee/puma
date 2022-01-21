var $hamIcon = document.querySelector("#header .mypage li:last-child");
var $menu = document.querySelector("#header .menu");

$hamIcon.addEventListener("click", function(){
  var activeMenu = $menu.classList.contains("active");
  if(activeMenu == false ){
    $menu.classList.add("active");
  }else{
    $menu.classList.remove("active");
  }
});
