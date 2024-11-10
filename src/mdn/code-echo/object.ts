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
