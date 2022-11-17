import createFlowerCart from "./cartUI";

const localStorigesData = Object.values(
  JSON.parse(localStorage.getItem("product"))
);

export default function cart() {
  const cartRoot = document.getElementById("mainCart");
  cartRoot.innerHTML = "";
  localStorigesData.forEach((flower) =>
    createFlowerCart(cartRoot, flower, flower.height[0])
  );
  changePrice();
  changeQuantity();
}

function changePrice() {
  const selHeight = document.querySelectorAll(".selectHeight");
  selHeight.forEach((item) => {
    item.addEventListener("click", () => {
      const findedObj = localStorigesData.find((obj) => obj.id === +item.id);
      const prevObj = JSON.parse(JSON.stringify(findedObj));
      findedObj.height.splice(findedObj.height.indexOf(+item.value), 1);
      findedObj.height.unshift(+item.value);
      if (prevObj.height[0] !== findedObj.height[0]) {
        cart();
      }
    });
  });
}
function changeQuantity() {
  const increment = document.querySelectorAll(".incrBtn");
  const decrement = document.querySelectorAll(".decrBtn");
  increment.forEach((item, i) => {
    item.addEventListener("click", () => {
      const findedObj = localStorigesData.find((obj) => obj.id === i + 1);
      const prevObj = JSON.parse(JSON.stringify(findedObj));
      findedObj.quantity += 1;

      if (prevObj.quantity !== findedObj.quantity) {
        cart();
      }
    });
  });
  decrement.forEach((item, i) => {
    item.addEventListener("click", () => {
      const findedObj = localStorigesData.find((obj) => obj.id === i + 1);
      const prevObj = JSON.parse(JSON.stringify(findedObj));
      findedObj.quantity -= 1;

      if (prevObj.quantity !== findedObj.quantity) {
        cart();
      }
    });
  });
}
