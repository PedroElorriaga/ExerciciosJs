const express = require('express');
const router = express.Router();

router.get('/task', (req, res) => {
    res.send('Page task access with 200 code');
});

router.get('/task/sendtest', (req, res) => {
    res.redirect('http://34.95.162.224/');
});

module.exports = router;
