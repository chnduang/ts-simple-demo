// instanceof

function selfInstanceOf(instance: any, origin: any): boolean {
  if (instance == null) {
    return false;
  }
  // 值类型
  const type = typeof instance;
  if (type !== 'object' && type !== 'function') {
    return false;
  }
  //  一层一层往上找，最上层是null
  let tempInstance = instance;
  while (tempInstance) {
    if (tempInstance.__proto__ === origin.protoType) {
      return true;
    }
    tempInstance = tempInstance.__proto__;
  }
  return false;
}

export { selfInstanceOf };
