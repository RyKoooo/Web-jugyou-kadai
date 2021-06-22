let addmessage =(mes) => {
    let list = document.querySelector('ul');
    list.innerHTML += '<li>' + mes + '</li>';
}

let qnum = 0;
addmessage(quiz[0][0]);

let btn = document.querySelector('button');
btn.addEventListener('click',() =>{
    let ipt = document.querySelector('input');
    addmessage(ipt.value);
    if(ipt.value == quiz[qnum][1]){
        qnum =+ 1;
        qnum %= quiz.length;
        addmessage('正解！  次は' + quiz[qnum][0])
        ipt.value = '';
    } else{
        addmessage('はずれ！')
        ipt.value = '';
    }
});