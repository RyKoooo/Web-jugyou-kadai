let inp = document.querySelector('input');
let btn = document.querySelector('button');
let elem = document.querySelector('p2');

btn.addEventListener('click',() => {
    if(isNaN(inp.value)){
        elem.innerText = "＜半角英数字で数字を入れてください＞";
    } else {
        elem.innerText = inp.value * 1.10;
    }
} );