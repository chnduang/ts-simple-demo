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

// 无序
// 数组转成tree
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

const arrs = [
  { id: 3, name: 'c', parentId: 2 },
  { id: 4, name: 'd', parentId: 3 },
  { id: 5, name: 'e', parentId: 3 },
  { id: 2, name: 'b', parentId: 6 },
  { id: 6, name: 'f', parentId: 1 },
  { id: 1, name: 'a', parentId: 0 },
];

// console.log('tree----', getTreeList(arrs));

const trees = {
  id: 1,
  name: 'a',
  parentId: 0,
  children: [
    {
      id: 6,
      name: 'f',
      parentId: 1,
      children: [
        {
          id: 2,
          name: 'b',
          parentId: 6,
          children: [
            {
              id: 3,
              name: 'c',
              parentId: 2,
              children: [
                { id: 4, name: 'd', parentId: 3 },
                { id: 5, name: 'e', parentId: 3 },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// 树转数组
// 广度优先遍历
const getTreeToList = (tree: ITreeNode | null): IArrayList[] => {
  return [];
};

export { getTreeList, getTreeToList };
