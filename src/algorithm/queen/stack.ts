/**
 * @description:  队列 栈实现队列
 * @return {*}
 */
export class stackQueen {
  private stack1: number[] = [];
  private stack2: number[] = [];

  add(num: number) {
    this.stack1.push(num);
  }

  delete() {
    const stack1 = this.stack1;
    const stack2 = this.stack2;
    while (stack1.length) {
      const pop1 = stack1.pop();
      if (pop1 != null) {
        stack2.push(pop1);
      }
    }

    const deletePop = stack2.pop();
    while (stack2.length) {
      const pop2 = stack2.pop();
      if (pop2 != null) {
        stack1.push(pop2);
      }
    }
    console.log('stacl', this.stack1, stack2);
    return deletePop;
  }

  get length(): number {
    return this.stack1.length;
  }
}

// const queen = new stackQueen();
// queen.add(10);
// queen.add(11);
// queen.add(112);
// queen.add(13);
// queen.delete();
