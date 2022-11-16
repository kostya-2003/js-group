const localStorageData = Object.values(
  JSON.parse(localStorage.getItem("product"))
);

export default function createFlowerCart(parent, flower) {
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
    flower.price * flower.height[0]
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
                <h3 class="totalPriceH3" id=${flower.id}>${
    flower.price * flower.height[0]
  }</h3>
            </div>
        </div>`;

  changePrice();
  incrDecr();
}

function changePrice() {
  const selHeight = document.querySelectorAll(".selectHeight");
  selHeight.forEach((item) => {
    item.addEventListener("click", () => {
      const { price } = localStorageData.find((obj) => obj.id === +item.id);
      console.log(price);
      const optVal = item.value;
      const priceText = document.getElementById(`priceText${item.id}`);
      priceText.textContent = `${optVal * price}`;
    });
  });
}

function incrDecr() {
  const incrBtn = document.querySelectorAll(".incrBtn");
  const decrBtn = document.querySelectorAll(".decrBtn");
  const quants = document.querySelectorAll(".quantP");

  quants.forEach((quant, i) => {
    console.log(quant.textContent);
    const priceText = document.getElementById(`priceText${i + 1}`);
    incrBtn[i].addEventListener("click", () => {
      if (Number(quant.textContent) < 20) {
        quant.textContent = `${+quant.textContent + 1}`;
      }
    });
    decrBtn[i].addEventListener("click", () => {
      if (Number(quant.textContent) > 1) {
        quant.textContent = `${+quant.textContent - 1}`;
      }
    });
  });
}
