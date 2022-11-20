export default function (){
    const backToTop = document.querySelector("#backToTop");
    window.addEventListener("scroll", () => {
         window.scrollY > 300 ? backToTop.style.display = "block" : backToTop.style.display = "none";
    })
   
}