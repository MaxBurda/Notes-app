import express from 'express';
import bodyParser from 'body-parser';

import *as db from './utils/DataBaseUtils.js';

const app = express();

app.use(bodyParser.json());

app.get('/notes', (req, res) => {

});
app.post('/notes', (req, res) => {

});
app.delete('/notes/:id', (req, res) => {

});

const server = app.listen(8080, () => {
    console.log(`Server is up and running on port 8080`);
});
