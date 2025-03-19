const p1 = { name: 'john', age: 20 };
p1.age = 22;
console.log(p1);

p1 = { name: 'lee', age: 25 };

// [Running] node "c:\KB_Fullstack\02_NodeVue\02_Vue\20250314\기본\02-03.js"
// { name: 'john', age: 22 }
// c:\KB_Fullstack\02_NodeVue\02_Vue\20250314\기본\02-03.js:5
// p1 = { name: 'lee', age: 25 };
//    ^

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (c:\KB_Fullstack\02_NodeVue\02_Vue\20250314\기본\02-03.js:5:4)
//     at Module._compile (node:internal/modules/cjs/loader:1369:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)
//     at Module.load (node:internal/modules/cjs/loader:1206:32)
//     at Module._load (node:internal/modules/cjs/loader:1022:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.12.1

//=> 함수나 객체를 만든 후에 이것의 메모리 주소가 바뀌지 않도록 하고 싶다면
//const 함수를 사용한다. 객체 내부 속성 변경은 가능하되 새로운 객체를 생성하여 할당하는것은 허용 x
