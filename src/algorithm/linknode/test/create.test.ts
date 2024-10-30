import { createLinkNode } from '../index';

describe('创建单向链表', () => {
  it('数组转链表', () => {
    const arr = [11, 3, 4];
    const node = createLinkNode(arr);
    expect(node).toEqual({
      value: 11,
      next: {
        value: 3,
        next: {
          value: 4,
        },
      },
    });
  });
});
