// // console.log(document.getElementById('item-form'));
// // const form = document.getElementById('item-form');
// // form.textContent = 'helo';
// const item = document.getElementById('item-input');
// item.id = 'new id';
// item.type = 'submit';
// item.textContent = '';
// console.log(item);
// let output;

// const secondItem = document.querySelector('li:nth-child(2)');
// secondItem.innerText = 'guave juice';

// const clrBtn = document.querySelector('#clear');
// clrBtn.addEventListener('click', () => {
//   alert('clear item');
// });

// const div = document.createElement('div');
// div.className = 'new div';
// div.id = 'div id';
// const text = document.createTextNode('hello duniya');
// div.appendChild(text);
// // console.log(div);
// const ul = document.querySelector('ul');
// ul.appendChild(div);
// console.log(ul);
// createitem = (item) => {
//   const li = document.createElement('li');
//   li.innerHTML = `${item}
//           <button class="remove item btn">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//   const ul = document.querySelector('ul').appendChild(li);
// };
// createitem('guave');

// on other way
// createNewitem = (item) => {
//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode(item));
//   const button = createNewbtn('remove-item-btn');
//   li.appendChild(button);
//   document.querySelector('.items').appendChild(li);
//   //   const btn = document.createElement('button');
//   //   btn.className = 'remove item btn';

//   //   const icon = document.createElement('i');
//   //   icon.className = 'fa-solid fa-x-mark';
//   //   btn.appendChild(icon);
//   //   li.appendChild(btn);
//   //   document.querySelector('ul').appendChild(li);
//   createNewicon('remove-item-btn');
// };
// // createNewitem();

// // on other side
// function createNewbtn(classes) {
//   const btn = document.createElement('button');
//   btn.className = classes;
//   const icon = createNewicon('fa-solid fa-Xmark');
//   btn.appendChild(icon);
//   return btn;
// }

// function createNewicon(iconClasss) {
//   const icon = document.createElement('i');
//   icon.className = iconClasss;
//   return icon;
// }
// createNewitem('sapri');
// function insertelement() {
//   const filter = document.querySelector('.filter');
//   const h3 = document.createElement('h3');
//   h3.textContent = 'insertnewthink';
//   filter.insertAdjacentElement('afterend', h3);
// }
// insertelement();

// function insertelement(item) {
//   const firstLi = document.querySelector('li:nth-child(1');

//   const newLi = document.createElement('li');
//   newLi.appendChild(document.createTextNode(item));
//   const button = document.createElement('button');
//   button.className = 'remove-item-btn';
//   const icon = document.createElement('i');
//   icon.className = 'fa-solid fa-xmark';
//   button.appendChild(icon);
//   newLi.appendChild(button);
//   firstLi.insertAdjacentElement('afterend', newLi);
// }
// insertelement('guave');

// // replaceitem ...
// function replaceItem() {
//   const selectItem = document.querySelector('li:nth-child(2)');
//   const newLi = document.createElement('li');
//   newLi.textContent = 'jucy';
//   selectItem.replaceWith(newLi);
// }

// function replaceSecondItem() {
//   const secondLi = document.querySelector('li:nth-child(2)');

//   secondLi.outerHTML = '<li>fruit</li>';
// }

// function replaceAllItem() {
//   const lis = document.querySelectorAll('li');
//   lis.forEach((item, index) => {
//     item.outerHTML = '<li>ReplaceAll</li>';
//   });
// }

// replaceItem();
// replaceSecondItem();
// replaceAllItem();
