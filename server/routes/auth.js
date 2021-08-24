const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.json({
        data: 'get endpoint'
    });
});

module.exports = router;