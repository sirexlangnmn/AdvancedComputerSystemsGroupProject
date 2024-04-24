module.exports = (sequelize, Sequelize) => {
    const Uploads = sequelize.define('uploads', {
        title: {
            type: Sequelize.STRING,
        },
    });

    return Uploads;
};
