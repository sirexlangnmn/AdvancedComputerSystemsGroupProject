const { v4: uuidV4 } = require('uuid');
const { check, validationResult } = require('express-validator');

const sql = require('../models/db.js');
const QUERY = require('../query/join.query.js');

const db = require('../models');

const Resource_setups = db.resource_setups
const Resources = db.resources
const Categories = db.categories

const Op = db.Sequelize.Op;
const Sequelize = db.Sequelize;


exports.uploads = async (req, res) => {
    const errors = validationResult(req);

    try {
        if (!errors.isEmpty()) {
            return res.status(200).send({
                message: errors.array(),
            });
        }
    } catch (error) {
        return res.status(400).json({
            error: {
                message: error,
            },
        });
    }

    try {

       console.log('uploads : ', req.body);




    } catch (error) {
        console.error('Error in search:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }

};






