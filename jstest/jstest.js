let x = ['','A','B','C','D','E'];
let y = ['','A','B','C','D','E'];

let html = "<tr><th></th>";
for(let n=1; n<=5; n+=1){
    html += '<th>' + x[n] + '</th>';
}
html += '</tr>';

for(let m=1; m<=5; m+=1){
    html += '<tr><th>' + y[m] + '</th>';
    for(let n=1; n<=5; n+=1){
        if(x[n] == y[m] || x[n] < y[m]){
            html += '<td></td>';
        } else {html += '<td>' + y[m] + 'vs' + x[n] + '</td>';}
    }
    html += '</tr>';
}

let elem = document.querySelector('table');
elem.innerHTML = html;