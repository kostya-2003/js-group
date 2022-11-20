export default function createFlowerCart(parent, flower) {
  const price = flower.price * flower.height[0];
  const total = price * flower.quantity;
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
                <h1 id="priceText${flower.id}">${price}</h1>
            </div>
            <div class="buttonDiv">
                <div class="heightBtn">
                    <label for="cars">Choose height</label>
                   
                   <select name="height" class="selectHeight" id=${flower.id} >
                   ${flower.height.map(
                     (sm) =>
                       ` <option value=${sm} class="optionValue">${sm}</option>`
                   )}
                   
               </select>
                   
                </div>
            </div>
            <div class="quantBtn">
                <h1 class="quantH1">Quantity</h1>
                <div class="incrDec">
                    <button class="decrBtn" id="${flower.id}">-</button>
                    <p class="quantP">${flower.quantity}</p>
                    <button class="incrBtn" id="${flower.id}">+</button>
                </div>
            </div>
            <div class="totalDiv">
                <h1 class="totalH1">Total</h1>
                <h3 class="totalPriceH3">
                ${total}</h3>
            </div>
            <div><button class="delBtn" id="${flower.id}"><i class='bx bx-x'></i></button></div>
        </div>`;
}

export function allTotal(parent) {
  parent.innerHTML += `
        <div id="mainTotal">
            <div class="priceTotal">
                <h1 class="allTotalH1"></h1>
            </div>
            <div class="buyDiv">
                <button class="buyBtn">BUY ALL</button>
            </div>
        </div>
    
    `;
}
