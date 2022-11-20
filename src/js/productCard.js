export default function createCard(parent, data) {
  parent.innerHTML += `
  <div class="product-one">
  <div class="oneImgDiv">
    <img
      class="oneImg"
      src=${data.img}
      alt=""
    />
  </div>
  <div class="oneInfoDiv">
    <h1 class="oneTitle">${data.title}</h1>
    <p>${data.price}</p>
    <button class="oneBtn">Add to Cart</button>
  </div>
</div>
`;
}
export function click(data) {
  const btnCart = document.querySelectorAll(".oneBtn");
  const dataStor = JSON.parse(localStorage.getItem("product"));
  console.log(dataStor);
  let obj = {};

  btnCart.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      if (dataStor) {
        obj = { ...dataStor };
        if (!obj[i]) {
          obj[i] = data[i];
          localStorage.setItem("product", JSON.stringify(obj));
        }
      } else if (dataStor === null) {
        obj[i] = data[i];
        localStorage.setItem("product", JSON.stringify(obj));
      }
    });
  });
}
