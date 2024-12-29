const mainDiv = document.getElementById("main");
function fetchData()
{
   fetch('https://fakestoreapi.com/products')
   .then((res)=>res.json())
   .then((data)=>displayData(data))
   .catch((err)=>console.log(err))
}
fetchData()

function displayData(products)
{  
  //console.log(products)
   products.forEach((p)=>
    {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product")
        const productTitle = document.createElement("h2");
        productTitle.textContent = p.title;
        const productPrice = document.createElement("p");
        productPrice.textContent = "Price: ₹"+p.price;
        const productImage = document.createElement("img");
        productImage.src = p.image;
        productImage.alt = p.title;
        const productButton = document.createElement("button")
        productButton.textContent = "Add to Cart";
        productDiv.append(productImage,productTitle,productPrice,productButton)
        mainDiv.appendChild(productDiv)
    })
}
document.getElementById("btn1").addEventListener("click",()=>{
    const logInDiv = document.createElement("div");
    logInDiv.classList.add("logInDiv");
    const inp = document.createElement("input");
    const pass = document.createElement("input");
    const login = document.createElement("button");


})