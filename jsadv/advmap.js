let showMap= () => {
    let elem = document.querySelector('div');
    let chip = map[y][x];
    if(chip == 'G' || chip == 'S'){
        elem.innerHTML = '<img src="img/' + images[chip] + '.png">';
    }else if(chip == 'K'){
        elem.innerHTML = '<img src="img/key.png">';
        keyflag = true;
        may[y][x] = '─';
    }else if(chip == 'D'){
        elem.innerHTML = '<img src="img/door.png">';
        if(keyflag = true){
            may[y][x] = '─';
            elem.innerHTML = '<img src="img/left_right.png">' + '<img src="img/man.png">';
        }
    }else {
    elem.innerHTML = '<img src="img/' + images[chip] + '.png"><img src="img/man.png">';
    }
};

showMap();

document.addEventListener('keyup',(event) => {
    let keyname = event.key;
    console.log(keyname);
    let fname = images[map[y][x]];
    if(keyname == 'Arrowleft'){
        if(fname.indexof('left') > -1){
        x -= 1;
        }
    } else if(keyname == 'ArrowRight'){
        if(fname.indexof('right') > -1){
        x += 1;
        }
    } else if(keyname == 'ArrowUP'){
        if(fname.indexof('up') > -1){
        y -= 1;
        }
    } else if(keyname == 'ArrowDown'){
        if(fname.indexof('down') > -1){
        y += 1;
        }
    }
    showMap();
} );