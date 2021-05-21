
function display(val) {
    document.getElementById('screen').value+=val;
}

function del() {
    document.getElementById('screen').value = " ";
}

function calculate() {
    let x =  document.getElementById('screen').value;
    let y = eval(x);
    document.getElementById('screen').value = y; 
    
}
