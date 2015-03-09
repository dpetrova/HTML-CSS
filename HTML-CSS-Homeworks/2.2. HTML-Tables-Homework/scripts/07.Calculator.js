//this is Tr00peR's javaScript code from http://pastebin.com/iZ4smKHS

function calculate(input) {
    var display = document.getElementById('display').value;
    switch (input) {
    case "clear": display = ""; break;
    case "=": display = eval(display); break;
    default: display += input; break;
    }
    document.getElementById('display').value = display;   
}

function searchKeyPress(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        calculate('=');
    }
}
