import express from 'express';
import router from './routes/index.js';

const app = express();

//Define port 
const port = process.env.PORT || 4000;

//Running pug
app.set('view engine', 'pug');

//Define public folder
app.use(express.static('public'));

//Agregar router
app.use('/', router);

app.listen(port, () => {
    console.log('The server is running in port ${port}')
})