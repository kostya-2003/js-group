const localStorageData = JSON.parse(localStorage.getItem("product"));
 
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
                <h1 id="priceText">${flower.price}</h1>
            </div>
            <div class="buttonDiv">
                <div class="heightBtn">
                    <label for="cars">Choose height</label>
                    <select name="height" id=${flower.id}>
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
                <h3 class="totalPriceH3">300$</h3>
            </div>
        </div>`;
    price()
}

function price(){
    const cart = document.querySelectorAll(".cart")
   
    cart.forEach(item => {
        item.addEventListener("click", (e) =>{
            const cartID = item.id;
            const heightBtn = document.querySelectorAll(".heightBtn");
            heightBtn.forEach(item => {
                const optionID = item.children[1].id;
                if(optionID === cartID){
                    const data = JSON.parse(localStorage.getItem("product"));
                    const localStoragesData = [...Object.values(data)];  
                    const selectidCart = localStoragesData.filter(item => item.id === +cartID)[0];
                    console.log(selectidCart);
                }
            })
            // Stacel enq konkret obsheni objekty, petq e poxenq yst heighti giny "Bari gisher dzez)))"
            
        })
    })
    
}

function createPrice(value){
    const price = document.getElementById("priceText");
}