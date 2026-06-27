let output;
const parent = document.querySelector('.parent');
// parent to child
parent.children[1].style.color = 'green'; // 1st prioriy than the chuld to parent
parent.children[0].innerText = 'name 1';
parent.children[2].innerHTML = 'name2';
parent.firstElementChild.innerText = 'child1';
//child to parent

const getChild = document.querySelector('.child');
output = getChild.parentElement;
// output = getChild.parentElement.innerHTML;
// getChild.parentElement.innerText = 'child 2';
getChild.parentElement.style.color = 'red';
getChild.parentElement.className = 'father';
// console.log(output);

// sibling
const thirdChild = document.querySelector('.child:nth-child(3)');
console.log(thirdChild);
