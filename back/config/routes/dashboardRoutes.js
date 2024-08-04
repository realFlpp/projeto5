import express from 'express';

const router = express.Router();

// Rota para o dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard'); // Renderizar a página do dashboard
});

export default router;
