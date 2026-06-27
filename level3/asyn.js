// function fetchUser(done, err) {
//   let ans = 0;
//   setTimeout(() => {
//     ans = 1;
//     done(ans);
//   }, 1000);

// const { use } = require('react');

// const { cacheSignal } = require('react');

//   return ans;
// }

// function fetchUserPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Hi there');
//     }, 2000);
//   });
// }

// async function cal(params) {
//   return 'Hi there';
// }

// // fetchUserPromise().then((res) => {
// //   console.log('success', res);
// // });

// const res = cal();

// console.log('promise ', res);

// console.log('start');
// function getData(dataID, getNextData) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log(dataID);
//       rej('error');
//     }, 8000);
//   });
// }

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('and promise  done too');
//     }, 5000);
//     console.log('promise pending...');
//   });
// };
// let promise = getPromise();
// promise.then((res) => {
//   console.log('work is done', res);
// });
// promise.catch((rej) => {
//   console.log('rejected due to', rej);
// });
//promise try to one by one execute
// function asynfunction1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('data1');
//       resolve('succes');
//     }, 3000);
//   });
// }
// console.log('data 1 ia fetching..');
// let p1 = asynfunction1();
// p1.then((res) => {
//   console.log(res);
// });
// function asynfunction2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('data2');
//       resolve('succes');
//     }, 3000);
//   });
// }
// console.log('data2 is fetching...');
// let p2 = asynfunction2();
// p2.then((res) => {
//   console.log(res);
// });

// function asynfunction1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('data1');
//       resolve('succes');
//     }, 3000);
//   });
// }

// function asynfunction2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('data2');
//       resolve('succes');
//     }, 3000);
//   });
// }
// console.log('fetching data1...');
// let p1 = asynfunction1();
// p1.then((res) => {
//   console.log(res);
//   console.log('fetching data2..');
//   let p2 = asynfunction2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });

// do in other way
// console.log('fetching data1..');
// asynfunction1().then((res) => {
//   console.log(res); // we can remove it no need
//   console.log('fetching data2...');
//   asynfunction2().then((res) => {
//     console.log(res); // we can remove it no need
//   });
// });

//   API

const URL = 'https://jsonplaceholder.typicode.com/users';
const getData = document.querySelector('#email');
const btn = document.querySelector('#btn');
const response = async () => {
  console.log('getting dat..');
  const result = await fetch(URL);
  console.log(result);
  let data = await result.json();
  getData.innerHTML = data[0].email;
};
btn.addEventListener('click', response);
