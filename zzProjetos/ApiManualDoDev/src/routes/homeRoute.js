const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server running on WEB successfully');
});

module.exports = router;
