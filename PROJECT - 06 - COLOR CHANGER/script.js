const mainbx = document.querySelector(".main");

const bdy = document.querySelector("body");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click" , ()=>{
        bdy.style.background = button.textContent;
    });
});