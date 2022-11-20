import createFlowerCart, { allTotal } from "./cartUI";

export default function cart() {
  const cartRoot = document.getElementById("mainCart");
  cartRoot.innerHTML = "";
  if (localStorage.getItem("product")) {
    Object.values(JSON.parse(localStorage.getItem("product"))).forEach(
      (flower) => createFlowerCart(cartRoot, flower, flower.height[0])
    );
    allTotal(cartRoot);
    changePrice();
    changeQuantity();
    allTotalValue();
    deleteOne();
  } else {
    cartRoot.innerHTML = `
      <div class="emptyDiv">THERE IS NO PRODUCT</div>
    `;
  }
}

function changePrice() {
  const selHeight = document.querySelectorAll(".selectHeight");
  selHeight.forEach((item) => {
    item.addEventListener("click", () => {
      const findedObj = Object.values(
        JSON.parse(localStorage.getItem("product"))
      ).find((obj) => obj.id === +item.id);
      if (findedObj) {
        const prevObj = JSON.parse(JSON.stringify(findedObj));
        findedObj.height.splice(findedObj.height.indexOf(+item.value), 1);
        findedObj.height.unshift(+item.value);
        localStorage.setItem(
          "product",
          JSON.stringify({
            ...Object.values(JSON.parse(localStorage.getItem("product"))).map(
              (item) => (item.id === findedObj.id ? findedObj : item)
            ),
          })
        );
        if (prevObj.height[0] !== findedObj.height[0]) {
          cart();
        }
      }
    });
  });
}
function changeQuantity() {
  const increment = document.querySelectorAll(".incrBtn");
  const decrement = document.querySelectorAll(".decrBtn");
  increment.forEach((item, i) => {
    item.addEventListener("click", () => {
      const findedObj = Object.values(
        JSON.parse(localStorage.getItem("product"))
      ).find((obj) => obj.id === +item.id);
      const prevObj = JSON.parse(JSON.stringify(findedObj));
      if (findedObj.quantity < 20) {
        findedObj.quantity += 1;
      }
      localStorage.setItem(
        "product",
        JSON.stringify({
          ...Object.values(JSON.parse(localStorage.getItem("product"))).map(
            (item) => (item.id === findedObj.id ? findedObj : item)
          ),
        })
      );
      if (prevObj.quantity !== findedObj.quantity) {
        cart();
      }
    });
  });
  decrement.forEach((item, i) => {
    item.addEventListener("click", () => {
      const findedObj = Object.values(
        JSON.parse(localStorage.getItem("product"))
      ).find((obj) => obj.id === +item.id);
      const prevObj = JSON.parse(JSON.stringify(findedObj));
      if (findedObj.quantity > 1) {
        findedObj.quantity -= 1;
      }
      localStorage.setItem(
        "product",
        JSON.stringify({
          ...Object.values(JSON.parse(localStorage.getItem("product"))).map(
            (item) => (item.id === findedObj.id ? findedObj : item)
          ),
        })
      );
      if (prevObj.quantity !== findedObj.quantity) {
        cart();
      }
    });
  });
}

function allTotalValue() {
  const buyBtn = document.querySelector(".buyBtn");
  const total = document.querySelector(".allTotalH1");
  buyBtn.addEventListener("click", () => {
    localStorage.clear("product");

    console.log("del event");
    cart();
    console.log("del event 2");
  });
  const allTotalsValue = [...document.querySelectorAll(".totalPriceH3")]
    .map((val) => Number(val.textContent))
    .reduce((cur, next) => cur + next, 0);
  total.textContent = allTotalsValue;
}

function deleteOne() {
  const oneDelBtn = document.querySelectorAll(".delBtn");
  oneDelBtn.forEach((del) => {
    del.addEventListener("click", () => {
      localStorage.setItem(
        "product",
        JSON.stringify({
          ...Object.values(JSON.parse(localStorage.getItem("product"))).filter(
            (item) => item.id !== +del.id
          ),
        })
      );
      cart();
    });
  });
}
