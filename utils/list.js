module.exports = function (opt = {}) {

    const defaultParams = {
        selectedIndex: 0,
        max: 5,
        list: []
    };

    const params = {
        ...defaultParams,
        ...opt
    };

    function getList() {
        const result = [];

        const tmpList = [
            ...params.list,
            ...params.list
        ];

        for (let i = params.selectedIndex; i < tmpList.length; i++) {
            if (result.length >= params.max) {
                break;
            }

            const cursor = params.selectedIndex === i ? '➡' : ' '
            const item = tmpList[i];
            result.push(`${cursor} ${item}`);
        }

        return result.join('\n');
    };

    getList.down = function() {
        if (params.selectedIndex < params.list.length + 1) {
            ++params.selectedIndex;
        } else {
            params.selectedIndex = 0;
        }
    };

    getList.up = function() {
        if (params.selectedIndex === 0) {
            params.selectedIndex = params.list.length - 1;
        } else {
            --params.selectedIndex;
        }
    };

    getList.setList = function(list) {
        params.list = list;
    };

    return getList
};
