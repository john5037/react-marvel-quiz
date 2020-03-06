const express = require('express');
const { isEmpty } = require('lodash');
const router = express.Router();

const puppeteer = require('puppeter');

router.get('/users', async (req, res) => {

    try {
        const users = await User.find({});

        return res.json({
            users
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

module.exports = router;