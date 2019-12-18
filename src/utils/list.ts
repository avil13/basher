export interface IListParams {
  selectedIndex: number;
  cursor: string;
  emptyCursor: string;
  max: number;
  list: string[];
}

export interface IListParamsOptional {
  selectedIndex?: number;
  cursor?: string;
  emptyCursor?: string;
  max?: number;
  list?: string[];
}

export class ListMaker {
  private params: IListParams = {
    selectedIndex: 0,
    cursor: '➡',
    emptyCursor: '⟊',
    max: 5,
    list: [],
  };

  constructor(opt: IListParamsOptional = {}) {
    this.params = { ...this.params, ...opt };
  }

  /**
   * Creating list
   */
  getList() {
    const result: string[] = [];
    const max =
      this.params.max > this.params.list.length
        ? this.params.list.length
        : this.params.max;

    let cursor = '';
    let item;

    for (let i = this.params.selectedIndex, count = 0; count < max; ++i) {
      ++count;

      if (i > this.params.list.length - 1) {
        i = 0;
      }

      item = this.params.list[i];
      cursor = this.params.selectedIndex === i ? this.params.cursor : this.params.emptyCursor;

      result.push(`${cursor} ${item}`);
    }

    return result.join('\n');
  }

  /**
   * Scroll down
   */
  down() {
    if (this.params.selectedIndex < this.params.list.length) {
      ++this.params.selectedIndex;
    } else {
      this.params.selectedIndex = 0;
    }
  }

  /**
   * Scroll up
   */
  up() {
    if (this.params.selectedIndex === 0) {
      this.params.selectedIndex = this.params.list.length - 1;
    } else {
      --this.params.selectedIndex;
    }
  }

  /**
   * Update list
   */
  setList(list: string[]) {
    this.params.list = list;
  };
}
