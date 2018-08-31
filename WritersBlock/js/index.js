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

    for (let index = 0; index < nav_items.length; index++) {
        nav_items[index].onclick = hideNavLinks;
        
    }
}

function hideNavLinks(){
    if(window.innerWidth<=700){
        nav.style.display = 'none';
    }
}

function showNavBar(){
    if(window.innerWidth>850){
        nav.style.display = 'inline';
        nav.style.position = 'fixed';
        nav.style.marginTop = '0.4em';
        nav.style.right = '15em';
        for(var x=0;x<nav_items.length;x++){
            nav_items[x].style.padding = '0.5em';
            nav_items[x].style.position = 'relative';
        }
    }else if(menu_icon.toggle === 'off'){
        nav.style.display = 'none';
    }
}