const express = require('express');

const app = express();
app.use(express.json());

app.post('/endpoint', (req, res) => {
    const data = req.body;
    console.log(data)
    res.json(data);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});