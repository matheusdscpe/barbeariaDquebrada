//inicio menu mobile

const bnt_menu_open = document.querySelector(".bnt-menu-mobile");
const bnt_menu_close = document.querySelector(".bnt-menu-close");
const menu_mobile = document.querySelector("#menu-mobile");

function open_menu(){
    menu_mobile.classList.toggle("menu-mobile-on");
}
function close_menu(){
    menu_mobile.classList.toggle("animation-close");
    setTimeout(() => {menu_mobile.classList.remove("menu-mobile-on", "animation-close");}, 1000);
}


bnt_menu_open.addEventListener('click', open_menu);
bnt_menu_close.addEventListener('click', close_menu);



//fim menu mobile


//inicio ação dos bnt do menu

const bnts = document.querySelectorAll(".bnt-action");

let links = ["home", "valores", "reservas", "contatos", "sobre"];

for(let i = 0; i>bnts.length;i++){
    if(bnts[i]==links[1]){
        bnts.addEventListener('click', att_pagina);
    }
}


console.log(links)
console.log(bnts)

function att_pagina(){
    


    window.location.href = local;
}

// bnts.addEventListener('click', att_pagina);