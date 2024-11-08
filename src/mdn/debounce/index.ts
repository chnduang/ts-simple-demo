// 防抖和节流
/* 防抖： 限制执行的次数 ，关注结果
   节流： 先触发一次 关注过程 限制执行的频率 drag ,scroll
*/

export function debounce(fn: Function, delay: number = 200) {
  let timer = 0;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(this, arguments);
      timer = 0;
    }, delay);
  };
}

export function throttle(fn: Function, delay: number = 100) {
  let timer = 0;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(function () {
      fn.apply(this, arguments);
      timer = 0;
    }, delay);
  };
}
