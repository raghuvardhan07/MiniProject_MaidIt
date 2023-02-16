function Services(){
    document.getElementById("Services").scrollIntoView(true);
}
function AboutUs(){
    document.getElementById("AboutUs").scrollIntoView(true);
}
function Contact(){
    window.location.href = "mailto:spkpower26@gmail.com";
}
function Maid(){
    document.getElementById("Maid").scrollIntoView(true);
}
function Cook(){
    document.getElementById("Cook").scrollIntoView(true);
}
function Laundry(){
    document.getElementById("Laundry").scrollIntoView(true);
}
function Shoe(){
    document.getElementById("Shoe").scrollIntoView(true);
}

let cart = [];


$('.add-to-cart').click(function() {
    document.getElementById("cart").style.visibility = "visible";
    
    let item = $(this).parent();

    
    let itemName = item.find('h2').text();
    let itemPrice = item.find('p').text().split("₹")[1].split("/")[0];

    
    let cartItem = {
        name: itemName,
        price: itemPrice,
        quantity: 1
    };

    
    let index = cart.findIndex(x => x.name === itemName);

    if (index === -1) {
        
        if(cart.length >= 2){
            document.getElementById("cart").style.maxHeight = "20rem";
            document.getElementById("cart").style.overflowY = "auto";
          }
        cart.push(cartItem);
    } else {
        
        cart[index].quantity++;
    }

    displayCart();
});


function displayCart() {
    
    $('#cart-items').empty();

    
    for(let i = 0; i < cart.length; i++) {
        let item = cart[i];

        
        $('#cart-items').append(`
            <li class="cart-item">
                <h3>${item.name}</h3>
                <p><b>Quantity</b>: ${item.quantity}</p>
                <p><b>Price</b>: ${item.price}</p>
            </li>
        `);
    }
}

$('#checkout-btn').click(function() {
    localStorage.setItem("cart", JSON.stringify(cart));
    
    let cartData = JSON.parse(localStorage.getItem("cart")) || {};
    let items = Object.values(cartData);
    
    window.location.href = "Cart.html?items=" + encodeURIComponent(JSON.stringify(items));
});





