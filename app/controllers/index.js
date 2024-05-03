
const controller = {};

controller.uploads = require('./uploads.controller.js');
controller.Listbuckets = require('./aws.Listbuckets.controller.js');



module.exports = controller;
