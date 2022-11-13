import createCard, { click } from "./productCard";

import cart from "./cart.js";
import request from "../helper/request";
import url from "../helper/api";

const productsDiv = document.getElementById("products");
const cartBtn = document.querySelector(".cart");

request("GET", url).then((data) => {
  data.forEach((data) => createCard(productsDiv, data));
  click(data);
});

cartBtn.addEventListener("click", (e) => {
  document.getElementById("main").remove();
  document.getElementById("products").remove();
  const mainCart = document.createElement("div");
  mainCart.id = "mainCart";
  document.body.append(mainCart);
  cart();
});
