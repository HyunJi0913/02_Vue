let p = new Promise((resolve, reject) => {
  resolve('first!');
});
p.then((msg) => {
  console.log(msg);
  throw new Error('## 에러!');
})
  .then((msg) => {
    console.log(msg);
    return 'third';
  })
  .catch((error) => {
    console.log('오류 발생 ==> ' + error);
  });
