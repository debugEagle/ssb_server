/*
 *大赛结果
 */
const Sequelize = require('sequelize')

module.exports = (db) => {
    return db.define('bigMatchResult', {
        bigMatchResult_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        result: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        remark: {
            type: Sequelize.TEXT,
        },
        last_update: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW
        }
    }, {
        tableName: 'bigMatchResult',
        freezeTableName: true,
        timestamps: false
    })
}
