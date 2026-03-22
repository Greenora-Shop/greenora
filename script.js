let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Ajouté au panier");
}

function displayCart() {
  let cartContainer = document.getElementById("cart");
  let total = 0;

  cartContainer.innerHTML = "";

  cart.forEach(item => {
    total += item.price;
    cartContainer.innerHTML += `
      <p>${item.name} - ${item.price}€</p>
    `;
  });

  document.getElementById("total").innerText = total + "€";
}