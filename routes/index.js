import express from 'express';

const router = express.Router();


router.get('/', (req, res) =>{
    res.send('Hola mundo');
})
router.get('/about', (req, res) =>{
    res.render('about');
})


export default router;