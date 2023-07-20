module.exports = (sequelize, dataTypes) => {

    let alias = 'Cat';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        errorCode: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: dataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: dataTypes.STRING,
            allowNull: true,
        }
    }

    let config = {
        tableName: 'Cats',
        timestamps: false
    }

    const Cat = sequelize.define(alias, cols, config);

    return Cat;
}

