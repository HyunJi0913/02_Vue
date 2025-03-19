let obj = { result: 0 };
obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
  }
  inner();
};
obj.add(3, 4);
console.log(obj);
console.log(result);

//실행결과
// { result: 0, add: [Function (anonymous)] }
// 7
//inner()는 호출될 때의 형태가 특정 객체의 메서드 형식이 아니므로
//전역객체 result에 값을 더하게 된다.
