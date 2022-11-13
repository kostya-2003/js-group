const localStorageData = JSON.parse(localStorage.getItem("product"));
 
export default function createFlowerCart(parent, flower) {
  parent.innerHTML += `
        <div class="cart">
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
                <h1 id="priceText">${flower.price}</h1>
            </div>
            <div class="buttonDiv">
                <div class="heightBtn">
                    <label for="cars">Choose height</label>
                    <select name="height" id="height">
                        ${flower.height.map(
                          (heighta) =>
                            ` <option value=${heighta}>${heighta}</option>`
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
                <h3 class="totalPriceH3">300$</h3>
            </div>
        </div>`;
    price()
}

function price(){
    const a = document.querySelectorAll("#height");
    a.forEach((btn, i) => {
        btn.addEventListener("click", () =>{
            createPrice()
        })
    })
}

function createPrice(value){
    const price = document.getElementById("priceText");

}