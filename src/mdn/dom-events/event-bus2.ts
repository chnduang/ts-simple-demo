// event bus

/**
 * @description:  {  key: [{fn,once}]   }
 * @param {*}
 * @return {*}
 */

interface eventsType {
  [key: string]: Array<{ fn: Function; once: boolean }>;
}

class EventBus2 {
  private events: eventsType;

  constructor() {
    this.events = {};
  }
  // 处理事件
  private getEventList(type: string, fn: Function, once: boolean) {
    // 初始化
    const events = this.events;
    if (events[type] == null) {
      events[type] = [];
    }
    events[type].push({ fn, once });
  }

  private getOffEvent(type: string, fn: Function) {
    const list = this.events[type];
    if (list.length) {
      this.events[type] = list.filter((f) => f.fn !== fn);
    }
  }

  private getEmitEvent(type: string, args: any[]) {
    const list = this.events[type];
    if (list.length) {
      this.events[type] = list.filter((f) => {
        const execFn = f.fn;
        execFn(...args);
        // 执行一次的
        return !f.once;
      });
    }
  }

  on(type: string, fn: Function, once: boolean = false) {
    this.getEventList(type, fn, once);
  }
  once(type: string, fn: Function) {
    this.on(type, fn, true);
  }
  off(type: string, fn?: Function) {
    // 解绑全部
    if (!fn) {
      this.events[type] = [];
      return;
    }
    this.getOffEvent(type, fn);
  }

  emit(type: string, ...args: any[]) {
    this.getEmitEvent(type, args);
  }
}

// const e = new EventBus2();

// function fn1(a: any, b: any) {
//   console.log('fn1', a, b);
// }
// function fn2(a: any, b: any) {
//   console.log('fn2', a, b);
// }
// function fn3(a: any, b: any) {
//   console.log('fn3', a, b);
// }

// e.on('key1', fn1);
// e.on('key1', fn2);
// e.once('key1', fn3);
// e.on('xxxxxx', fn3);

// e.emit('key1', 10, 20); // 触发 fn1 fn2 fn3

// e.off('key1', fn1);

// e.emit('key1', 100, 200); // 触发 fn2

export { EventBus2 };
