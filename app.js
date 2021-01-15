// Busket

let productCountEl = document.getElementById("product-count");
let addToCartButtons = document.querySelectorAll(".add-to-cart");
console.log(productCountEl);
console.log(addToCartButtons);

for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function () {
    // productCountEl.innerText++;
    productCountEl.textContent = +productCountEl.textContent + 1;
  });
}

// modal

let modal = document.querySelector(".modal");
let moreDetailsButton = document.querySelectorAll(".more-details");
let closeBtn = document.querySelector(".btn-close");

console.log(modal);
console.log(moreDetailsButton);
console.log(closeBtn);

function closeModal () {
    modal.classList.add("hide");
    modal.classList.remove("show");
 }
moreDetailsButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    modal.classList.add("show");
    modal.classList.remove("hide");
  });
});

closeBtn.addEventListener("click", closeModal)

modal.addEventListener("click", function(e) {
    if (e.target ==  modal) {
        closeModal()
    }
})

//Heart

let heart = document.querySelectorAll(".device-icon-2");

heart.forEach(el => {
  el.addEventListener("click", function() {
      if(el.classList.contains("heart-icon-blue")) {
          el.classList.remove("heart-icon-blue")
      } else {
          el.classList.add("heart-icon-blue");
      }
  })
})


