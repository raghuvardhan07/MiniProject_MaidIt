let cart = JSON.parse(decodeURIComponent(location.search.split("=")[1]));


let totalCost = 0;
for (let i = 0; i < cart.length; i++) {
  let item = cart[i];
  totalCost += item.price * item.quantity;
}
$("#total-cost").text("₹ " + totalCost);


function displayCart() {
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let row = `
        <tr>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>${item.price}</td>
          <td>${item.price * item.quantity}</td>
        </tr>
      `;
    
    $("#cart-table-body").append(row);
    console.log(cart[i]);
  }
}


displayCart();


