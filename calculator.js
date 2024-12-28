const display = document.querySelector("#display")

function clearDisplay(){
    display.value = "";
}

function deleteLastVal(){
    display.value = display.value.slice(0,-1);
}

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "Syntax Error"
    }
}