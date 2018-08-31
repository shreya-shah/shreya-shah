var dropDownMenuOpenStatus = false;

// To toggle hamburger menus
function toogleMenus(){
    var dropdown = document.getElementById("menu");
    if (dropdown.style.display === "none") {
        if(window.innerWidth > 853) {
            dropdown.style.display = "flex";
            dropDownMenuOpenStatus = false;
        } else {
                dropdown.style.display = "block";
                dropDownMenuOpenStatus = true;
            }
    } else {
        if(window.innerWidth < 853) {
            dropDownMenuOpenStatus = false;
            dropdown.style.display = "none";
        }
    }
}

window.onresize = function(event) {
    var dropdown = document.getElementById("menu");
    console.log(window.innerWidth);
    if(window.innerWidth > 853) {
        dropdown.style.display = "flex";
        dropDownMenuOpenStatus = false;
    }
    if(window.innerWidth < 853 && dropDownMenuOpenStatus === true)
        dropdown.style.display = "block";
    if(window.innerWidth < 853 && dropDownMenuOpenStatus === false)
        dropdown.style.display = "none";
};
