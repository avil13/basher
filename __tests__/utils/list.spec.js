const listMaker = require('../../utils/list');


describe('testing list', () => {
    let getList;

    beforeEach(() => {
        getList = listMaker({
            max: 3,
            list: [
                'hello',
                'world',
                'lorem',
                'ipsum',
                'dollar',
                'amet',
            ]
        });
    });


    it('should show list', () => {
        const res = [
            '➡ hello',
            '  world',
            '  lorem',
        ].join('\n')

        expect(getList()).toBe(res);
    });

    it('should list down', () => {
        const res = [
            '➡ world',
            '  lorem',
            '  ipsum',
        ].join('\n')

        getList.down();

        expect(getList()).toBe(res);
    });

    it('should list down x4', () => {
        const res = [
            '➡ amet',
            '  hello',
            '  world',
        ].join('\n')

        getList.down();
        getList.down();
        getList.down();
        getList.down();
        getList.down();

        expect(getList()).toBe(res);
    });


    it('should list up', () => {
        const res = [
            '➡ amet',
            '  hello',
            '  world',
        ].join('\n')

        getList.up();

        expect(getList()).toBe(res);
    });

    it('should list up x2', () => {
        const res = [
            '➡ dollar',
            '  amet',
            '  hello',
        ].join('\n')

        getList.up();
        getList.up();

        expect(getList()).toBe(res);
    });

    it('should setList', () => {
        const res = [
            '➡ world',
            '  hello',
        ].join('\n');

        getList.setList([
            'hello',
            'world',
        ]);

        getList.up();

        expect(getList()).toBe(res);
    });

});
