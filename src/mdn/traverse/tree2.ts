// tree操作

interface IArrayList {
  id: number;
  name: string;
  parentId: number;
}

interface ITreeNode {
  id: number;
  name: string;
  parentId: number;
  children?: ITreeNode[];
}

const getTreeList = (arr: IArrayList[]): ITreeNode | null => {
  //  存储id 映射关系
  const treeMap: Map<number, ITreeNode> = new Map();

  let root: ITreeNode = null;

  //  存mapTree
  for (let i = 0; i < arr.length; i++) {
    const currentData = arr[i];
    const { id } = currentData;
    treeMap.set(id, currentData);
  }

  arr.forEach((item) => {
    const { parentId } = item;
    // 当前节点的父节点
    const parentNode = treeMap.get(parentId);
    // 根节点
    if (parentId === 0) {
      root = { ...item };
      return;
    }

    if (parentNode) {
      parentNode.children = [...(parentNode.children || []), item];
    }
  });

  return root;
};
// 无序
// 数组转成tree
const getTreeList2 = (arr: IArrayList[]): ITreeNode | null => {
  let root: ITreeNode = null;

  arr.forEach((item) => {
    const { parentId } = item;

    // 根节点
    if (parentId === 0) {
      root = item;
      return;
    }
    const findParentNode: ITreeNode = arr.find((i) => i.id === parentId);

    if (findParentNode) {
      findParentNode.children = [...(findParentNode.children || []), item];
    }
  });

  return root;
};

const getTreeList4 = (arr: IArrayList[]): ITreeNode | null => {
  let root: ITreeNode = null;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const { parentId } = item;

    // 根节点
    if (parentId === 0) {
      root = item;
      continue;
    }
    const findParentNode: ITreeNode = arr.find((i) => i.id === parentId);

    if (findParentNode) {
      findParentNode.children = [...(findParentNode.children || []), item];
    }
  }

  return root;
};

const arrs = [
  { id: 3, name: 'c', parentId: 2 },
  { id: 4, name: 'd', parentId: 3 },
  { id: 5, name: 'e', parentId: 3 },
  { id: 2, name: 'b', parentId: 6 },
  { id: 6, name: 'f', parentId: 1 },
  { id: 1, name: 'a', parentId: 0 },
];

// for (let i = 0; i < 20001; i++) {
//   arrs.push({
//     id: i,
//     name: `${i}c`,
//     parentId: 2,
//   });
// }

// console.time('tree2');

// console.log('tree2-----', getTreeList2(arrs));

// console.timeEnd('tree2');

export { getTreeList2 };
