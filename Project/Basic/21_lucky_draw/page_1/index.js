let coupon = document.getElementById("coupon");

coupon.addEventListener("click", () => {
  generateCoupon();
});

function generateCoupon() {
  const random = "0123456789";
  const length = 4;
  let couponCode = "";

  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * random.length);
    couponCode += random[randomNum];
  }

  coupon.innerText = couponCode;
}

document.getElementById("luck").addEventListener("click", () => {
  window.location.href = "lucky_draw_2.html";
});
