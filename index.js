import express from 'express';
import router from './routes/index.js';

const app = express();

//Define port 
const port = process.env.PORT || 4000;

//Agregar router
app.use('/', router);



app.listen(port, () => {
    console.log('The server is running in port ${port}')
})