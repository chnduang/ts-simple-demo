// 遍历 dom树

// 展示具体的dom节点
const showNode = (node: Node) => {
  if (node instanceof Comment) {
    console.log(`Comment节点`, node.textContent);
  }
  if (node instanceof Text) {
    console.log(`Text节点`, node.textContent);
  }
  if (node instanceof Element) {
    console.log(`Element节点`, node.tagName.toLowerCase());
  }
};

// 深度优先遍历
// 递归
const depthDomTree = (root: Node) => {
  showNode(root);
  //  获取子节点
  const childNodes = root.childNodes;
  if (childNodes.length) {
    childNodes.forEach((item) => {
      depthDomTree(item);
    });
  }
};
// 栈
const depthDomTree1 = (root: Node) => {
  const stack: Node[] = [];
  stack.push(root);

  while (stack.length > 0) {
    const currentNode = stack.pop();
    showNode(currentNode);
    const childNodes = currentNode.childNodes;
    const childLength = childNodes.length;

    if (childLength > 0) {
      for (let i = childLength - 1; i >= 0; i--) {
        stack.push(childNodes[i]);
      }
    }
  }
};

// 广度优先遍历
// 使用队列
const breadthTree = (root: Node) => {
  const queue: Node[] = [];
  // 入队列
  queue.unshift(root);
  while (queue.length > 0) {
    const currentNode = queue.pop();
    showNode(currentNode);
    // 子节点
    const childNodes = currentNode.childNodes;
    if (childNodes.length) {
      childNodes.forEach((item) => queue.unshift(item));
    }
  }
};

// const example = document.getElementById('example');
// console.log('example', example);
// depthDomTree1(example);
// breadthTree(example);

export { depthDomTree, depthDomTree1, breadthTree };
