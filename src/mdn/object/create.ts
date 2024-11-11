const createFuc = () => {
  const obj = { a: 1, b: 2 };
  const x = Object.create(obj);

  // const x: any = {};
  // x.__proto__ = obj;

  console.log('x-', x.b);
};

// createFuc();

export { createFuc };
