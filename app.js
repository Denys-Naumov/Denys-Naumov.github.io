// Busket

let productCountEl = document.getElementById("product-count");
let addToCartButtons = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function () {
    // productCountEl.innerText++;
    productCountEl.textContent = +productCountEl.textContent + +quantityValue[i].value;
    quantityValue[i].value = 1;
  });
}

// modal

let modal = document.querySelector(".modal");
let moreDetailsButton = document.querySelectorAll(".more-details");
let closeBtn = document.querySelector(".btn-close");

function openModal() {
  modal.classList.remove("hide");
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}
moreDetailsButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    modal.classList.add("show");
    modal.classList.remove("hide");
  });
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target == modal) {
    closeModal();
  }
});

//Heart

let heart = document.querySelectorAll(".device-icon-2");

heart.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.classList.contains("heart-icon-blue")) {
      el.classList.remove("heart-icon-blue");
    } else {
      el.classList.add("heart-icon-blue");
    }
  });
});

// + - Quantity items
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".product-quantity input");

function Counter (incrementBtn, decrementBtn, inputField, minCount = 1, maxCount = 5) {
  // this.incrementBtn = incrementBtns;
  // this.decrementBtn = decrementBtns; копія коду внизу
  // this.inputField = inputField;
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField
  }
  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    this.domRefs.incrementBtn.disabled = count >= maxCount;
  }
  this.increment = function () {
    let currentCount = +this.domRefs.inputField.value;
    let nextCount = currentCount + 1;
    this.domRefs.inputField.value = nextCount;
    this.toggleButtonState();
  }
  this.decrement = function () {
    let currentCount = +this.domRefs.inputField.value;
    let nextCount = currentCount - 1;
    this.domRefs.inputField.value = nextCount;
    this.toggleButtonState();
  }
  this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
  this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
}

const counter = new Counter (incrementBtns[0], decrementBtns[0], quantityValue[0])
const counter1 = new Counter (incrementBtns[1], decrementBtns[1], quantityValue[1])

// JQUERY

$(".slider").slick({
  dots:true,
});










// DZ-23__________________
// let minCount = 1;
// let maxCount = 7;

// for(let i = 0;i < quantityValue.length;i++) {
//   let currentCount = +quantityValue[i].value;
//   toggleButtonState(currentCount,decrementBtns[i],incrementBtns[i])
// }

// function toggleButtonState(count,decrementBtn,incrementBtn) {
//   decrementBtn.disabled = count <= minCount;
//   incrementBtn.disabled = count >= maxCount;
// }

// for(let i = 0;i < incrementBtns.length;i++) {
//   incrementBtns[i].addEventListener("click", function() {
//     let currentCount = +quantityValue[i].value;
//     let nextCount = currentCount + 1;
//     quantityValue[i].value = nextCount;
//     toggleButtonState(nextCount,decrementBtns[i],incrementBtns[i])
//   })
// }

// for(let i = 0;i < decrementBtns.length;i++) {
//   decrementBtns[i].addEventListener("click", function(){
//     let currentCount = +quantityValue[i].value;
//     let nextCount = currentCount - 1;
//     quantityValue[i].value = nextCount;
//     toggleButtonState(nextCount,decrementBtns[i],incrementBtns[i])
//   })
// }
// ___________________________
