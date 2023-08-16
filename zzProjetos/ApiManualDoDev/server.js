const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.PORT || 3006;

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
