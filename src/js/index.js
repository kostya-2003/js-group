import createCard, { click } from "./productCard";

import backToTop from "./backToTop.js"
import nav from "./nav.js"
import contact from "./contact.js";

import cart from "./cart.js";
import request from "../helper/request";
import url from "../helper/api";


const productsDiv = document.getElementById("products");
const cartBtn = document.querySelector(".cart");

backToTop();
nav();
contact();

request("GET", url).then((data) => {
  data.forEach((data) => createCard(productsDiv, data));
  click(data);
});

cartBtn.addEventListener("click", (e) => {
  document.getElementById("main").remove();
  document.getElementById("products").remove();
  document.getElementById("contact").remove();
  document.getElementById("about").remove();
  const mainCart = document.createElement("div");
  mainCart.id = "mainCart";
  document.body.append(mainCart);
  cart();
});

const updateBtn = document.querySelector(".logoDiv");
updateBtn.addEventListener("click", () => {
  window.location.reload(true);
});
