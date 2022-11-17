import { changePrice } from "./cart";

const localStorageData = localStorage.getItem("product")
  ? Object.values(JSON.parse(localStorage.getItem("product")))
  : [];

export default function createFlowerCart(parent, flower, activeHeight) {
  parent.innerHTML += `
        <div class="cart" id=${flower.id}>
            <div class="imgAndTitle">
                <div class="infoDiv">
                    <h1 class="titleH1">${flower.title}</h1>
                </div>
                <div class="imgDiv">
                    <img
                    src= ${flower.img}
                    alt=${flower.title}
                    class="cartOneImg"
                    />
                </div>
            </div>
            <div class="priceDiv">
                <h1>Price</h1>
                <h1 id="priceText${flower.id}">${
    flower.price * activeHeight
  }</h1>
            </div>
            <div class="buttonDiv">
                <div class="heightBtn">
                    <label for="cars">Choose height</label>
                   
                   <select name="height" class="selectHeight" id=${flower.id} >
                   ${flower.height.map(
                     (heighta) =>
                       ` <option value=${heighta} class="optionValue">${heighta}</option>`
                   )}
                   
               </select>
                   
                </div>
            </div>
            <div class="quantBtn">
                <h1 class="quantH1">Quantity</h1>
                <div class="incrDec">
                    <button class="decrBtn">-</button>
                    <p class="quantP">${flower.quantity}</p>
                    <button class="incrBtn">+</button>
                </div>
            </div>
            <div class="totalDiv">
                <h1 class="totalH1">Total</h1>
                <h3 class="totalPriceH3">
                ${flower.price * activeHeight}</h3>
            </div>
            <div><button class="delBtn" id="${flower.id}">DEL</button></div>
        </div>`;
}
