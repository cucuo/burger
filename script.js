const products = {
  plainBurger: {
    name: "Gamburger",
    price: 10000,
    kcall: 400,
    amount: 0,
    get Summ() {
      return this.price * this.amount;
    },
    get Kcall() {
      return this.kcall * this.amount;
    },
  },
  freshBurger: {
    name: "Fresh Burger",
    price: 20500,
    kcall: 700,
    amount: 0,
    get Summ() {
      return this.price * this.amount;
    },
    get Kcall() {
      return this.kcall * this.amount;
    },
  },
  freshCombo: {
    name: "Fresh Combo",
    price: 31900,
    kcall: 1100,
    amount: 0,
    get Summ() {
      return this.price * this.amount;
    },
    get Kcall() {
      return this.kcall * this.amount;
    },
  },
};
const btnPlusOrMinus = document.querySelectorAll(".main__product-btn"),
  addCard = document.querySelector(".addCart"),
  receipt = document.querySelector(".receipt"),
  receiptWindow = document.querySelector(".receipt__window"),
  receiptWindowOut = document.querySelector(".receipt__window-out"),
  receiptWindowBtn = document.querySelector(".receipt__window-btn");

for (let i = 0; i < btnPlusOrMinus.length; i++) {
  const el = btnPlusOrMinus[i];
  el.addEventListener("click", function (e) {
    plusOrMinus(this);
  });
}
function plusOrMinus(element) {
  const parent = element.closest(".main__product"),
    parentId = parent.getAttribute("id"),
    out = parent.querySelector(".main__product-num"),
    price = parent.querySelector(".main__product-price span"),
    kcall = parent.querySelector(".main__product-kcall span"),
    elData = element.getAttribute("data-symbol");
  if (elData == "+" && products[parentId].amount < 10) {
    products[parentId].amount++;
  } else if (elData == "-" && products[parentId].amount > 0) {
    products[parentId].amount--;
  }

  out.innerHTML = products[parentId].amount;
  price.innerHTML = products[parentId].Summ;
  kcall.innerHTML = products[parentId].Kcall;
}

let arrayProduct = [],
  totelName = "",
  totelPrice = 0,
  totelKcall = 0;

addCard.addEventListener("click", function () {
  for (const key in products) {
    const po = products[key];
    if (po.amount > 0) {/*amount noldan katta bolgan objectlarni qoshamiz*/
      arrayProduct.push(po);
    }
    po.price = po.Summ;
    po.kcall = po.Kcall;
  }
  for (let i = 0; i < arrayProduct.length; i++) {
    const el = arrayProduct[i];
    totelPrice += el.price;
    totelKcall += el.kcall;
    totelName = "\n" + el.name + "\n";
  }
  receiptWindowOut.innerHTML = `buyurtma:\n${totelName}\numumiy summa :${totelPrice}so'm.\n Kaloriya :${totelKcall} `;
  receipt.style.display = "flex";
  setTimeout(() => {
    receipt.style.opacity = "1";
  }, 100);
  setTimeout(() => {
    receiptWindow.style.top = "30%";
  }, 200);
  let outAmount = document.querySelectorAll(".main__product-num");
  let outPrice = document.querySelectorAll(".main__product-price span");
  let outKcall = document.querySelectorAll(".main__product-kcall span");
  for (let i = 0; i < outAmount.length; i++) {
    const er = outAmount[i];
    er.innerHTML = 0;
    outPrice[i].innerHTML = 0;
    outKcall[i].innerHTML = 0;
  }
});

receiptWindowBtn.addEventListener('click', function () {
  location.reload();/*saxifa yangilansin */
})