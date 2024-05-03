
const controller = {};

controller.uploads = require('./uploads.controller.js');
controller.Listbuckets = require('./aws.Listbuckets.controller.js');
controller.uploads2 = require('./uploadsController.js');



module.exports = controller;
