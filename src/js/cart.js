import createFlowerCart from "./cartUI";

export default function cart() {
  const cartRoot = document.getElementById("mainCart");
  const data = JSON.parse(localStorage.getItem("product"));
  const localStorigesData = Object.values(data);
  localStorigesData.forEach((flower) => createFlowerCart(cartRoot, flower));
}
