/**
 * @description: 链表
 * 链表 查询慢，新增和删除快 o(1)
 * 数组 查询快，新增和删除慢 o(n)
 * @return {*}
 */

interface ILinkNode {
  value: number;
  next?: ILinkNode;
}

// 创建单向链表
export const createLinkNode = (arr: number[]): ILinkNode => {
  const length = arr.length;
  if (!length) {
    throw new Error("");
  }
  let currentNode: ILinkNode = {
    value: arr[length - 1],
  };
  if (length === 1) {
    return currentNode;
  }
  for (let i = length - 2; i >= 0; i--) {
    currentNode = {
      value: arr[i],
      next: currentNode,
    };
  }
  return currentNode;
};

console.log("test222", createLinkNode([11, 3, 4, 52, 1]));
