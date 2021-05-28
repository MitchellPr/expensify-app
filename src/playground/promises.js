const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Mitch',
    //   age: 30
    // })

    reject('Something went horrible wrong')
  }, 5000)
  
})

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
})



console.log('after');