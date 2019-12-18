import { ListMaker } from './../../src/utils/list';

const toStr = (arr: any[]) => arr.join('\n');

describe('testing list', () => {
  let list: ListMaker;

  beforeEach(() => {
    list = new ListMaker({
      max: 3,
      list: ['11', '22', '33', '44', '55', '66'],
      emptyCursor: ' '
    });
  });

  it('should show list', () => {
    const res = ['➡ 11', '  22', '  33'];

    expect(list.getList()).toEqual(toStr(res));
  });

  it('should list down', () => {
    const res = ['➡ 22', '  33', '  44'];

    list.down();

    expect(list.getList()).toEqual(toStr(res));
  });

  it('should list down x4', () => {
    const res = ['➡ 66', '  11', '  22'];

    list.down();
    list.down();
    list.down();
    list.down();
    list.down();

    expect(list.getList()).toEqual(toStr(res));
  });

  it('should list up', () => {
    const res = ['➡ 66', '  11', '  22'];

    list.up();

    expect(list.getList()).toEqual(toStr(res));
  });

  it('should list up x2', () => {
    const res = ['➡ 55', '  66', '  11'];

    list.up();
    list.up();

    expect(list.getList()).toEqual(toStr(res));
  });

  it('should setList', () => {
    const res = ['➡ 22', '  11'];

    list.setList(['11', '22']);

    list.up();

    expect(list.getList()).toEqual(toStr(res));
  });
});
