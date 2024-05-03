module.exports = (app) => {
    const { check, validationResult } = require('express-validator');


    const controllers = require('../controllers');
    const middleware = require('../middleware');

    // const uploadsController = controllers.uploads;
    const uploadsController2 = controllers.uploads2;

    const listbucketsController = controllers.Listbuckets;


    // app.post(['/api/post/uploads'], uploadsController.uploads);
    app.get(['/api/post/list-buckets'], listbucketsController.main);
    app.post(['/api/post/uploads'], uploadsController2.uploads2);


};

