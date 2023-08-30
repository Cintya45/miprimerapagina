// Obtén el elemento del carrito y el botón de agregar al carrito
const cart = document.querySelector(".cart span");
const addToCartButtons = document.querySelectorAll(".product button");

// Inicializa la cantidad de elementos en el carrito
let cartCount = 0;

// Agrega un evento de clic a cada botón de agregar al carrito
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cart.textContent = `Carrito (${cartCount})`;
    });
});