// function fetchUser() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       //   console.log('res is done');
//       rej([1, 2, 3]);
//     }, 4000);
//   });
// }

// async function cal2() {
//   console.log('frist');
//   fetchUser()
//     .then((res) => {
//       console.log('suspended');
//       //   simple2();
//     })
//     .catch((err) => {
//       console.log('got the error');
//     })
//     .finally(() => {
//       console.log('finally');
//     });
//   console.log('dom ');
// }

// cal2();

// function simple() {
//   console.log('simple');

//   return 45;
// }

// function simple2() {
//   console.log('simple2');
// }

// simple();

// async function cal() {
//   try {
//     const res = await fetchUser();
//   } catch (error) {
//   } finally {
//   }
// }

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(dataId);
//       resolve('succes');
//     }, 2000);
//   });
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4, () => {
//         console.log('done');
//       });
//     });
//   });
// });   //replace it with promises
// console.log('fetching data1..');
// getData(1).then((res) => {
//   console.log(res);
//   console.log('fetching data2..');
//   getData(2).then((res) => {
//     console.log(res);
//     console.log('feteching data3..');
//     getData(3).then(() => {
//       console.log('Done');
//     });
//   });
// }); // instead of this PROMISE CHAINING

// console.log('fetching data1..');
// getData(1)
//   .then(() => {
//     console.log('fetching dat2..');
//     return getData(2);
//   })
//   .then(() => {
//     console.log('fetching data3..');
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(dataId);
      resolve('succes');
    }, 2000);
  });
}
(async () => {
  console.log('fetching data1...');
  await getData(1);
  console.log('fetching data2...');
  await getData(2);
  console.log('fetching data3...');
  await getData(3);
  console.log('Done');
})();
