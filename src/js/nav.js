export default function (){
    const hamburgerBtn = document.querySelector(".hamburger");
    const menuBar = document.querySelector("#menuBar");
    const closeBtn = document.querySelector(".closeMenu")
    hamburgerBtn.addEventListener("click", () => {
        menuBar.classList.add("active")
    });
    closeBtn.addEventListener("click", () => {
        menuBar.classList.remove("active")
    })
}
