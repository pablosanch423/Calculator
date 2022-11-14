var displaytxt = document.getElementById("display")
var buttons = document.querySelectorAll(".item")
var anwser = ""
var anwser2 = ""
var current = 0;
var symbol = "";
for(var i = 0; i < 10; i++){
    buttons[i].setAttribute("onclick", "displayvalue(this)")
}

function displayvalue(A){
    anwser +=  A.innerHTML
    displaytxt.innerHTML = anwser2 + symbol  + anwser;
}                    

function C(){
    anwser = ""
    anwser2 = ""
    symbol = ""
    current = ""
    displaytxt.innerHTML = "0"
}

function minus(){
    anwser = Number(anwser) * -1
    displaytxt.innerHTML = Number(displaytxt.innerHTML) * -1
}

function per(){
    anwser = Number(anwser) / 100  
    displaytxt.innerHTML = anwser 
    console.log(anwser)
}

function divde(){
    if(current == 0){
        current++;
        anwser2 = anwser;
        anwser = "";
        symbol = "/"
    }
    displaytxt.innerHTML = anwser2 + symbol + anwser
}

function multiply(){
    if(current == 0){
        current++;
        anwser2 = anwser;
        anwser = "";
        symbol = "*"
    }
    displaytxt.innerHTML = anwser2 + symbol + anwser
}

function subtract(){
    if(current == 0){
        current++;
        anwser2 = anwser;
        anwser = "";
        symbol = "-"
    }
    displaytxt.innerHTML = anwser2 + symbol + anwser
}

function add(){
    if(current == 0){
        current++;
        anwser2 = anwser;
        anwser = "";
        symbol = "+"
    }
    displaytxt.innerHTML = anwser2 + symbol + anwser
}

function dot(){
    displaytxt.innerHTML = displaytxt.innerHTML + "."
    anwser = anwser + "."
}

function equal(){
    if(displaytxt.innerHTML.includes("/")){
        displaytxt.innerHTML = eval(anwser2 + symbol + anwser);
        current = 0;
        anwser = "";
        anwser2 = ""
    }

    if(displaytxt.innerHTML.includes("*")){
        displaytxt.innerHTML = eval(anwser2 + symbol + anwser);
        current = 0;
        anwser = "";
        anwser2 = ""
    }

    
    if(displaytxt.innerHTML.includes("-")){
        displaytxt.innerHTML = eval(anwser2 + symbol + anwser);
        current = 0;
        anwser = "";
        anwser2 = ""
    }

    if(displaytxt.innerHTML.includes("+")){
        displaytxt.innerHTML = eval(anwser2 + symbol + anwser);
        current = 0;
        anwser = "";
        anwser2 = ""
    }
}

