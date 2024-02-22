const burger = document.querySelector(".burger"),
    menu = document.querySelector(".container");
burger.addEventListener("click", () => {
    if (menu.style.top == "0px") {
        menu.style.top = "-500px"
    } else {
        menu.style.top = "0px"
    }
    
})