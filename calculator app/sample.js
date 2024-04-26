var inputField = document.getElementById("inputnum1");
function addToInput(value) {
   
    inputField.value += value;
}
function deleteChar() {
    var exp = document.getElementById("inputnum1").value;
    document.getElementById("inputnum1").value = exp.slice(0, -1);
}
function clearScreen() {
    document.getElementById("inputnum1").value = '';
}

function calculate(){
   inputField.value=eval(inputField.value)
}

