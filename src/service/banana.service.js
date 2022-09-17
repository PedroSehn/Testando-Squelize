const { Bananas } = require('../models');

const getAll = async () => {
    const banana = await Bananas.findAll();
    return banana;
};

module.exports = { getAll };