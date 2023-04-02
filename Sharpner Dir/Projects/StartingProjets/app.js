// console.log(document.getElementById('main-header'));
var header = document.getElementById('header-title');
// console.log(header);
// header.textContent = 'Hello World'
// header.innerText = 'dreams';
// console.log(header.innerText);

// header.innerHTML = '<h3>Hello</h3>';

var list = document.getElementsByClassName('list-group-item');
console.log(list);
list[2].style.backgroundColor = 'green';
for(i=0;i<list.length;i++){
    list[i].style.font = 'bold';
}

// var last = document.getElementsByClassName('items');
var last = document.getElementsByClassName('custom-item');
list[4].style.backgroundColor = 'green';
console.log(last);