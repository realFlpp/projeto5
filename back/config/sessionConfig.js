import session from 'express-session';

const configureSession = (app) => {
    app.use(session({
        secret: 'your-secret-key', // Substitua por uma chave secreta real
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false } // Em produção, defina `secure: true` e use HTTPS
    }));
};

export default configureSession;
