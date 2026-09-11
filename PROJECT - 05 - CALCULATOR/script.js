const display = document.querySelector("#display")
const buttons = document.querySelectorAll(".btn");

let firstnum =  "";
let operate = "";
let secondnum = "";


buttons.forEach(button => {
    button.addEventListener("click" , () =>{
        if(operate==""){
            firstnum+=button.textContent;
            display.value+=button.textContent;
        }
        else{
            secondnum+=button.textContent;
            display.value+=button.textContent;
        }
    });
});

const operators = document.querySelectorAll(".operator");

operators.forEach(button =>{
    button.addEventListener("click" , ()=>{
        if(display.value=="")return;

        let prev = display.value.slice(-1);
        if(prev=== "+" || prev==="-" || prev==="*" || prev==="/")return;

        firstnum=display.value;
        operate= button.textContent;
        display.value+=operate;
        secondnum = "";
    });
});

const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
    display.value = eval(display.value);
});

const clear = document.querySelector(".clear");

clear.addEventListener("click" , ()=>{
    display.value = "";
    firstnum = "";
    secondnum = "";
    operate = "";
});

const backspace = document.querySelector(".backspace");

backspace.addEventListener("click", () => {

    if (operate === "") {
        firstnum = firstnum.slice(0, -1);
        display.value = firstnum;
    }
    else if(operate!=="" && secondnum===""){
        operate = "";
        display.value = firstnum;
    }
    else {
        secondnum = secondnum.slice(0, -1);
        display.value = firstnum + operate + secondnum;
    }

});