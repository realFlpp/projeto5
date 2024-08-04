import express from 'express';
import Cadastro from '../../models/Cadastro.js';

const router = express.Router();

// Página de cadastro
router.get('/', (req, res) => {
    res.render('cadastro');
});

// Processar cadastro
router.post('/cadastro', (req, res) => {
    Cadastro.create({
        Nome: req.body.nome,
        Email: req.body.email,
        Senha: req.body.senha,
        Confirmar_Senha: req.body.confirmar_senha
    })
    .then(() => {
        res.redirect('/login'); // Redirecionar para a página de login após o cadastro
    })
    .catch((erro) => {
        res.send("Houve um erro no cadastro do usuário");
    });
});

export default router;
