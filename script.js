let screen = document.getElementById('screen');
let buffer = ' ';

function appendToScreen(value){
    buffer += value;
    screen.value = buffer;
}

function calculate(){
    try{
        let result = eval(buffer);
        screen.value = result;
        buffer = '';

    } catch (error){
        screen.value = 'Error';
    }
}

function clearScreen(){
    screen.value = '';
    buffer = '';
}