import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import { getWordByLength } from './api.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, './views'));

app.get('/api/word/:length', async (req, res) => {
    try {
        const word = await getWordByLength(parseInt(req.params.length));
        res.json({ word });
        console.log(word);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get word.' });
    }

})

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/highscores', (req, res) => {
    res.render('highscores');
});

/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});
*/

app.listen(5080, () => {
    console.log('Server running on http://localhost:5080');
});