let inp = document.querySelector('input');
let btn = document.querySelector('button');
let elem = document.querySelector('p');

btn.addEventListener('click',() => {
    let age = parseInt(inp.value);
    if(isNaN(inp.value)){
        elem.innerText = "＜半角英数字で数字を入れてください＞";
        inp.value="";
    } else {
        if( age < 20 ){
            if( age >= 6 && age <=15 ){
                elem.innerText = "あなたは未成年（義務教育期間）です。";
            } else {
                elem.innerText = "あなたは未成年です。";
            }
         } else if( age >=65 ){
            elem.innerText = "あなたは高齢者です。";
        } else{
            elem.innerText = "あなたは成人です。";
        }
    }
} );