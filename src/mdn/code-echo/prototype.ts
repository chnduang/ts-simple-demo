export const outPut1 = () => {
  console.log(
    'prototype',
    console.log.call.call.call.call.apply((a: any) => a + 3, [2, 4]),
  );
};

// fn.apply()
// outPut1();

// function 执行
// function Foo() {
//   Foo.a = function () {
//     console.log(1);
//   };
//   this.a = function () {
//     console.log(2);
//   };
// }

// Foo.prototype.a = function () {
//   console.log(3);
// };

// Foo.prototype.b = function () {
//   console.log(4);
// };

// Foo.a = function () {
//   console.log(5);
// };

// Foo.a(); //5
// let obj = new Foo();
// obj.a(); //2
// obj.b(); //4
// Foo.a(); //1
