const express = require('express');

const app = express();
app.use(express.json());
let entries;
app.post('/entries', (req, res) => {
    const data = req.body;
    console.log(data)
    entries = data;
    res.json(data);
});

app.get('/get-entries', (req, res) => {
    res.json(entries);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});