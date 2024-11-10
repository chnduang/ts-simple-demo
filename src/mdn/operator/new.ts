// new 一个对象时发生了什么

// class 是function的语法糖

class SimpleCls {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return `${this.name}有${this.age}`;
  }
}

// const simIns = new SimpleCls('tet', 19);
// console.log(
//   'simIns',
//   simIns.getName(),
//   SimpleCls.prototype.constructor === SimpleCls,
//   simIns.constructor === SimpleCls,
// );

function selfNew<T>(constructor: Function, ...args: any[]): T {
  // 创建一个空对象 继承constructor的原型
  const obj = Object.create(constructor.prototype);
  // 将obj作为this, 执行constructor
  constructor.apply(obj, args);
  return obj;
}

// Object.create({}) 和{}

/*

{}  创建空对象 原型指向 Object.protoType
Object.create  原型指向传入的参数

*/

export { selfNew };
