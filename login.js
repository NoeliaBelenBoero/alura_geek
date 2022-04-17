var botonLogin = document.querySelector(".btn__header");
botonLogin.addEventListener("click", function(event){
    setTimeout (() => {
        event.preventDefault();
        document.getElementById("main").style.display="none";
        document.getElementById("producto_similares").style.display="none";
        document.getElementById("iniciar__sesion").style.display="grid";
    }, 500);
});
var botonVerProducto = document.querySelector(".ver_producto");
botonVerProducto.addEventListener("click", function(event){
    event.preventDefault();
    setTimeout (() => {
        document.getElementById("main").style.display="none";
        document.getElementById("iniciar__sesion").style.display="none";
        document.getElementById("producto_similares").style.display="block";
        document.getElementById("header").scrollIntoView({
            behavior: 'smooth'
        });
    }, 500);
});
var botonVerConsolas = document.querySelector(".banner__btn");
botonVerConsolas.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("consolas").scrollIntoView({
        behavior: 'smooth'
    });
});