import express from 'express';

const router = express.Router();


router.get('/', (req, res) =>{
    res.send('Hola mundo');
})
router.get('/about', (req, res) =>{
    res.send('anout');
})
router.get('/contact', (req, res) =>{
    res.send('contact');
})

export default router;