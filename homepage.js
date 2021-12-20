var menu = document.getElementById("menu");
var sidebar = document.getElementById("sidebar");

var count = 0;

menu.addEventListener("click", function(){
    count++;
    if (count%2 == 0){
        // console.log("show");
        sidebar.classList.remove("sidebarHide");
        sidebar.classList.add("sidebarShow");
    }
    else{
        // console.log("hide");
        sidebar.classList.remove("sidebarShow");
        sidebar.classList.add("sidebarHide");
    }
});