let productConatiner= document.querySelector('.productConatiner')
let newproductConatiner= document.querySelector('.newproductConatiner')
console.log(productConatiner.innerHTML);
let cart= [];
let arr = new Array(10);
for(let i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
}
let des=["Amul Gold","Chakki Fresh Atta","Everest TikhalaMirch","Pampers","Lays","Haldiram Bhujiya","All in on Namkeen","Amul Masti Dahi"," Lite Mixture Namkeen","Stash Mouth Freshener"]

let price=[33,160,32,100,20,90,30,30,10,120]
const add = (id) => {
  let product=productConatiner.children[id].children[1].children[0].innerHTML;
  let price=productConatiner.children[id].children[1].children[1].children[0].innerHTML;
 

  // console.log(cart.includes({'product': product,'price':price}))
  console.log(cart.some(item => item.product === product && item.price === price));
 if(!cart.some(item => item.product === product && item.price === price)){
  cart=[...cart,{'product': product,'price':price}]
  console.log(cart)
 }
  // console.log(product);
  // console.log(price);
}
arr.forEach((item, index) => {
productConatiner.innerHTML+= ` <div id=${index} class="product">
<img src="./images/newproducts/product${item}.jpg" alt="">
<div class="details">
<p class="description">${des[index]}</p>
<div class="foot">
  <p class="price"> Price: ${price[index]}/-</p>
  <button id=${index} onclick="add(id)">Add to Cart</button>
</div>
</div>
</div>`;
});