import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => res.render('index', {title: 'primer sitio con node'}))
router.get('/about', (req, res) => res.render('about', {title: 'sobre mi'}))
router.get('/contact', (req, res) => res.render('contact', {title: 'contacto'}))

export default router
