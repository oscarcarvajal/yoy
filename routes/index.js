import express from 'express';

const router = express.Router();


router.get('/', (req, res) =>{
    res.render('home', {
        page: 'Home'
    });
})
router.get('/about', (req, res) =>{
    res.render('about', {
        page: 'About US'
    });
})
router.get('/contact', (req, res) =>{
    res.render('contact', {
        page: 'Contact'
    });
})

router.get('/testimonials', (req, res) =>{
    res.render('testimonials', {
        page: 'Testimonials'
    });
})



export default router;