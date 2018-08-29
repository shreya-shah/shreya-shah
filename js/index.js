window.onload = initAll;

var menu_icon,nav,nav_items;
function initAll(){
    getAllElements();
    assignFunctions();
}

function getAllElements(){
    menu_icon = document.getElementById('menu-icon');
    nav = document.getElementById('nav');
    nav_items = document.getElementsByClassName('nav-item');
}

function assignFunctions(){
    menu_icon.onclick = function(){
        if(nav.style.display === 'none'){
            nav.style.display = 'block';
        }else{
            nav.style.display = 'none';
        }
    };

    for(var x=0;x<nav_items.length;x++){
        nav_items[x].onclick = function(){
            nav.style.display = 'none';
        }
    }
}