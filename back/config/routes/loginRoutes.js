import express from 'express';
import Cadastro from '../../models/Cadastro.js';

const router = express.Router();

// Página de login
router.get('/login', (req, res) => {
    res.render('login');
});

// Processar login
router.post('/login', async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await Cadastro.findOne({ where: { Email: email, Senha: senha } });

        if (usuario) {
            req.session.usuarioId = usuario.id; // Salvar ID do usuário na sessão
            res.redirect('/dashboard'); // Redirecionar para o dashboard após o login
        } else {
            res.send("Email ou senha incorretos.");
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        res.send("Houve um erro ao fazer login.");
    }
});

export default router;
