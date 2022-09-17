const BananaModel = (sequelize, DataTypes) => {
    
    const Nanana = sequelize.define('Bananas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        cost: {
            type: DataTypes.FLOAT,
        },
    }, { 
        tableName: 'Bananas', 
        timestamps: false,
    });

    return Nanana;
};

module.exports = BananaModel ;