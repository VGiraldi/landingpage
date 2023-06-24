function mostrarMenu() {
    var menu = document.getElementById("menu-header");
    var icone = document.getElementById("icone-menu");
   
   
    if (getComputedStyle(menu).display == 'none'){
        menu.style.display = "flex";
        icone.classList.remove("fa-bars");
        icone.classList.add("fa-times");
        // mudando o class para fa-times,que é um [icone x}
    }else{
        menu.style.display = "none";
        icone.classList.remove("fa-times");
        icone.classList.add("fa-bars");
         // mudando o class para fa-bars,que é um [icone barras}
    }

}
