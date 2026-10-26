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

document.addEventListener("keydown" , (event)=>{
    if("0123456789.".includes(event.key)){
        if(operate===""){
            firstnum+=event.key;
        }
        else{
            secondnum+=event.key;
        }
        display.value+=event.key;
    }
    else if("+/*-".includes(event.key)){
        handleOperator(event.key);
    }
    else if(event.key=="Escape")getclear();
    else if(event.key=="Backspace")getback();
    else if(event.key=="Enter")getequal(display.value);
});

const operators = document.querySelectorAll(".operator");

function handleOperator(operator) {
    if (display.value == "") return;

    let prev = display.value.slice(-1);

    if (prev === "+" || prev === "-" || prev === "*" || prev === "/") return;

    firstnum = display.value;
    operate = operator;
    display.value += operate;
    secondnum = "";
}

function getequal(answer){
    display.value = eval(answer);
}

function getclear(){
    display.value="";
    firstnum ="";
    secondnum = "";
    operate = "";
}
operators.forEach(button => {
    button.addEventListener("click", () => {
        handleOperator(button.textContent);
    });
});

const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
    getequal(display.value);
    firstnum=display.value;
    operate="";
    secondnum="";
});

const clear = document.querySelector(".clear");

clear.addEventListener("click" , ()=>{
    getclear();
});

function getback(){
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
}

const backspace = document.querySelector(".backspace");

backspace.addEventListener("click", () => {
    getback();
});