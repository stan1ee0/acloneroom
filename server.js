import express from 'express';

const app = express();
const PORT = 8888;

app.use(express.static('.'));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
