window.onload = initAll;

var menu_icon,nav,nav_items;
function initAll(){
    getAllElements();
    assignFunctions();
    setInterval(showNavBar,500);
}

function getAllElements(){
    menu_icon = document.getElementById('menu-icon');
    nav = document.getElementById('nav');
    menu_icon.toggle = 'off';
    nav_items = document.getElementsByClassName('nav-item');
}

function assignFunctions(){
    menu_icon.onclick = function(){
        if(menu_icon.toggle === 'off'){
            nav.style.display = 'block';
            menu_icon.toggle = 'on';
        }else{
            nav.style.display = 'none';
            menu_icon.toggle = 'off';
        }
    }; 
}

function showNavBar(){
    // alert(window.innerWidth);
    if(window.innerWidth>800){
        nav.style.display = 'inline-block';
        nav.style.position = 'fixed';
        nav.style.marginTop = '0.4em';
        nav.style.right = '20em';
    }else if(menu_icon.toggle === 'off'){
        nav.style.display = 'none';
    }
}