document.getElementById("btn").onclick = function() {
    window.location.href = "https://dsc.gg/stonemusic"
};
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}
var menuList = document.getElementById("navMenu");
  menuList.style.maxHeight = "0px";
    function togglemenu(){
      if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "130px"
      }
      else {
        menuList.style.maxHeight = "0px"
  }
}