module.exports = function (params = {}) {
    const defaultParams = {
        selectedIndex: 0,
        max: 5
    };

    Object.assign(params, defaultParams, params);

    params.list.forEach((item, i) => {
        console.log(' ', item);
    });

    

};