module.exports = function (opt = {}) {

    const defaultParams = {
        selectedIndex: 0,
        cursor: '➡',
        max: 5,
        list: []
    };

    const params = {
        ...defaultParams,
        ...opt
    };

    /**
     * Creating list
     */
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

            const cursor = params.selectedIndex === i ? defaultParams.cursor : ' '
            const item = tmpList[i];
            result.push(`${cursor} ${item}`);
        }

        return result.join('\n');
    };

    /**
     * Scroll down
    */
    getList.down = function() {
        if (params.selectedIndex < params.list.length + 1) {
            ++params.selectedIndex;
        } else {
            params.selectedIndex = 0;
        }
    };


    /**
     * Scroll up
    */
    getList.up = function() {
        if (params.selectedIndex === 0) {
            params.selectedIndex = params.list.length - 1;
        } else {
            --params.selectedIndex;
        }
    };

    /**
     * Update list
    */
    getList.setList = function(list) {
        params.list = list;
    };

    return getList
};
