// console.log(document.getElementById('main-header'));
var header = document.getElementById('header-title');
// console.log(header);
// header.textContent = 'Hello World'
// header.innerText = 'dreams';
// console.log(header.innerText);

// header.innerHTML = '<h3>Hello</h3>';

// var list = document.getElementsByClassName('list-group-item');
// console.log(list);
// list[2].style.backgroundColor = 'green';
// for(i=0;i<list.length;i++){
//     list[i].style.font = 'bold';
// }

// var last = document.getElementsByClassName('items');
// var last = document.getElementsByClassName('custom-item');
// list[4].style.backgroundColor = 'green';
// console.log(last);

// var secondItems = document.querySelector('.list-group-item:nth-child(2)');
// secondItems.style.backgroundColor = 'green';

// var thirdItems = document.querySelector('.list-group-item:nth-child(3)');
// thirdItems.style.display = 'none';

// var title = document.querySelectorAll('li:nth-child(odd)'); 

// console.log(title);

var newDiv = document.createElement('div');
newDiv.className='Hello';
newDiv.id='hello1';
newDiv.setAttribute('title', 'helloDiv');
var newDivText = document.createTextNode("Hello World");

newDiv.appendChild(newDivText);

var container = document.querySelector('header.container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
console.log(h1);

container.insertBefore(newDiv, h1);