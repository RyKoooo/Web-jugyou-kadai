let btn = document.querySelector('button');
let elem =document.querySelector('p');
let mes = 100;

btn.addEventListener('click',() => {
    elem.innerText += mes;

    for(i=0 ; i<10 ; i+=1 ){
        mes += 150;
        elem.innerText += " → " + mes;
    }
    /*
    while(mes<10000){
        mes += 150;
        elem.innerText += " → " + mes;
    }
    */
} )