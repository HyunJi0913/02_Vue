let msg = 'GLOBAL';
function outer() {
  let msg = 'OUTER';
  console.log(msg);
  if (true) {
    let msg = 'BLOCK';
    console.log(msg);
  }
}
outer();

//결과
// OUTER
//BLOCK

//=>let은 블록 수준의 유호 범위를 지원한다는 점을 알수있다
