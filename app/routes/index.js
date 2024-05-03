module.exports = (app) => {
    const { check, validationResult } = require('express-validator');
    

    const controllers = require('../controllers');
    const middleware = require('../middleware');

    const uploadsController = controllers.uploads;
    const listbucketsController = controllers.Listbuckets;
    

    app.post(['/api/post/uploads'], uploadsController.uploads);
    app.get(['/api/post/list-buckets'], listbucketsController.main);






    // app.get(['/api/v1/get/resources/transfering'], joinController.transfering);
    // app.get(['/api/v1/get/resources/updateResourceSetup'], joinController.updateResourceSetup);


    // app.get('/api/get/course/:id', languages.getLanguageNameByCode);
};