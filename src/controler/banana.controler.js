const ServiceBanana = require('../service/banana.service');

const getAll = async (_rec, res) => {
    const bananas = await ServiceBanana.getAll();
    if(bananas.length <= 0) return res.status(404).json({ message: 'cabo as banana'});
    return res.status(200).json(bananas);
};

module.exports = { getAll };