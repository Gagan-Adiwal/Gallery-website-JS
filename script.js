const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");

    // Toggle between ☰ and X
    if (menu.classList.contains("show")) {
        menuToggle.innerHTML = "&#10006;"; // X symbol
        menuToggle.classList.add("close");
    } else {
        menuToggle.innerHTML = "&#9776;"; // ☰ symbol
        menuToggle.classList.remove("close");
    }
});
