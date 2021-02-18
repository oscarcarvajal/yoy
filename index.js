import express from 'express';

const app = express();

//Define port 
const port = process.env.PORT || 4000;

app.get('/', (req, res) =>{
    res.send('Hola mundo');
})
app.get('/about', (req, res) =>{
    res.send('anout');
})
app.get('/contact', (req, res) =>{
    res.send('contact');
})

app.listen(port, () => {
    console.log('The server is running in port ${port}')
})