// event bus

/**
 * @description:  {  key: [{fn,once}]   }
 * @param {*}
 * @return {*}
 */

interface eventsType {
  [key: string]: Array<Function>;
}

class EventBus {
  private events: eventsType;
  private onceEvents: eventsType;

  constructor() {
    this.events = {};
    this.onceEvents = {};
  }
  // 处理事件
  private getEventList(events: eventsType, type: string, fn: Function) {
    // 初始化
    if (events[type] == null) {
      events[type] = [];
    }
    events[type].push(fn);
  }

  private getOffEvent(events: eventsType, type: string, fn: Function) {
    const list = events[type];
    if (list.length) {
      events[type] = list.filter((f) => f !== fn);
    }
  }

  private getEmitEvent(
    events: eventsType,
    type: string,
    args: any[],
    once: boolean = false,
  ) {
    const list = events[type];
    if (list.length) {
      list.forEach((f) => {
        f(...args);
      });
    }
    if (once) {
      events[type] = [];
    }
  }

  on(type: string, fn: Function) {
    this.getEventList(this.events, type, fn);
  }
  once(type: string, fn: Function) {
    this.getEventList(this.onceEvents, type, fn);
  }

  off(type: string, fn?: Function) {
    // 解绑全部
    if (!fn) {
      this.events[type] = [];
      this.onceEvents[type] = [];
      return;
    }
    this.getOffEvent(this.events, type, fn);
    this.getOffEvent(this.onceEvents, type, fn);
  }

  emit(type: string, ...args: any[]) {
    this.getEmitEvent(this.events, type, args);
    this.getEmitEvent(this.onceEvents, type, args, true);
  }
}

// const e = new EventBus();

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

export { EventBus };
