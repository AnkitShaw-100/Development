
let newproductConatiner= document.querySelector('.newproductConatiner')
let arr = new Array(10);
for(let i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
}
let des=["Amul Gold","Chakki Fresh Atta","Everest TikhalaMirch","Pampers","Lays","Haldiram Bhujiya","All in on Namkeen","Amul Masti Dahi"," Lite Mixture Namkeen","Stash Mouth Freshener"]

let price=[33,160,32,100,20,90,30,30,10,120]

let newarr = new Array(8);
for(let i = 0; i < newarr.length; i++) {
    newarr[i] = i + 1;
}

let newdes=["Tedhe Medhe","Choco Rolls","Roasted Vermicelli","Fortune Indori Poha","Snac Lite","Milano","lancha","Red Label Tea"]
let newprice=[10,159,49,99,20,89,130,149]
newarr.forEach((item, index) => {
  newproductConatiner.innerHTML+= ` <div id=${index} class="product">
  <img src="./images/moreproducts/product${item}.jpg" alt="">
  <div class="details">
  <p class="description">${newdes[index]}</p>
  <div class="foot">
    <p class="price"> Price: ${newprice[index]}/-</p>
    <button>Add to Cart</button>
  </div>
  </div>
  </div>`;
});

arr.forEach((item, index) => {
newproductConatiner.innerHTML+= ` <div id=${index} class="product">
<img src="./images/newproducts/product${item}.jpg" alt="">
<div class="details">
<p class="description">${des[index]}</p>
<div class="foot">
  <p class="price"> Price: ${price[index]}/-</p>
  <button>Add to Cart</button>
</div>
</div>
</div>`;

    // console.log(` <div id=${index} class="product">
    // <img src="./images/newproducts/product${item}.jpg" alt="">
    // <p class="description">${des[index]}</p>
    // <div class="foot">
    //   <p class="price">${price[index]}/-</p>
    //   <button>Add to Cart</button>
    // </div>
    // </div>`)

});