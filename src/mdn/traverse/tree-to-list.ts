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

// tree转成array
// 深度优先
const getList = (tree: ITreeNode | null): IArrayList[] => {
  //  存储id 映射关系
  // const treeMap: Map<number, ITreeNode> = new Map();
  if (!tree) {
    throw new Error('');
  }
  let list: IArrayList[] = [];
  const { children = [], ...rest } = tree;

  list.push(rest);

  if (children.length) {
    children.forEach((item) => {
      const current = getList(item);
      // list = [...list, ...current];
      list = list.concat(current);
    });
  }
  return list;
};

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
    {
      id: 10,
      name: 'f-10',
      parentId: 1,
    },
  ],
};
// console.log('list--', getList(trees));

// 树转数组
// 广度优先遍历
const getList1 = (tree: ITreeNode | null): IArrayList[] => {
  if (!tree) {
    throw new Error('');
  }
  let list: IArrayList[] = [];
  const queue: any[] = [];

  queue.unshift(tree);

  while (queue.length) {
    const { children = [], ...rest } = queue.pop();
    list.push(rest);
    if (children.length) {
      const reverseChildList = children.reverse();
      queue.unshift(...reverseChildList);
    }
  }
  return list;
};

export { getList, getList1 };
