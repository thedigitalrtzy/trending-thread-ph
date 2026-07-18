fetch("products.json")

.then(response=>response.json())

.then(products=>{

const container=document.getElementById("product-list");

products.forEach(product=>{

container.innerHTML+=`

<div class="card">

<img src="${product.image}">

<h2>${product.title}</h2>

<p>${product.description}</p>

<a class="buy"

href="${product.affiliate}"

target="_blank">

🛒 Check Price on Shopee

</a>

</div>

`;

});

});