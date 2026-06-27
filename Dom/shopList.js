// // console.log(document.getElementById('item-form'));
// // const form = document.getElementById('item-form');
// // form.textContent = 'helo';
// const item = document.getElementById('item-input');
// item.id = 'new id';
// item.type = 'submit';
// item.textContent = '';
// console.log(item);
let output;

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'guave juice';

const clrBtn = document.querySelector('#clear');
clrBtn.addEventListener('click', () => {
  alert('clear item');
});

const div = document.createElement('div');
div.className = 'new div';
div.id = 'div id';
const text = document.createTextNode('hello duniya');
div.appendChild(text);
console.log(div);
