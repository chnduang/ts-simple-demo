// @ts-nocheck
// 代码运算输出

const codeEcho = () => {
  // parseInt
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  const parseIntNum = ['1', '2', '14'].map(parseInt);
  // console.log('parseIntNum', parseIntNum);
};

// 赋值传递
// function changeArg(x) {
//   x = 200;
// }
// let num = 100;
// changeArg(num);
// console.log('change-num', num);
// let obj = { name: 'tsest' };
// changeArg(obj);
// console.log('change-obj', obj);

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

// promise 执行顺序
// 多个fulfilled promise实例，同时执行then的链式调用，then 会交替执行 编译器的优化防止一个promise占据太长的时间
// Promise.resolve()
//   .then(() => {
//     console.log(0);
//     return Promise.resolve(4);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Promise.resolve()
//   .then(() => {
//     console.log(1);
//   })
//   .then(() => {
//     console.log(2);
//   })
//   .then(() => {
//     console.log(3);
//   })
//   .then(() => {
//     console.log(5);
//   })
//   .then(() => {
//     console.log(6);
//   });

// a.x 比赋值的优先级高
// let a = { n: 1 };
// let b = a;
// a.x = a = { n: 2 };
// console.log('a---', a.x);
// console.log('a---', b.x);

// 对象中的key只有string, symbol   其他 会通过toString()的方法转成字符串
// let a = {},
//   b = '123',
//   c = 123;
// a[b] = 'b';
// a[c] = 'c';

// let a = {},
//   b = { key: '123' },
//   c = { key: '456' };
// a[b] = 'b';
// a[c] = 'c';

// let a = {},
//   b = Symbol('2'),
//   c = Symbol('3');
// a[b] = 'b';
// a[c] = 'c';

// console.log('a----', a[b]);

// codeEcho();

export { codeEcho };
