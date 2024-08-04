import express from 'express';
import path from 'path';
import { __dirname } from '../config/pathConfig.js'; // Importa __dirname do pathConfig.js
import configureHandlebars from '../config/handlebarsConfig.js';
import configureBodyParser from '../config/bodyParserConfig.js';
import configureSession from '../config/sessionConfig.js';
import cadastroRoutes from '../config/routes/cadastroRoutes.js';
import loginRoutes from '../config/routes/loginRoutes.js';
import dashboardRoutes from '../config/routes/dashboardRoutes.js';

const app = express();

// Aplicar configurações
configureHandlebars(app);
configureBodyParser(app);
configureSession(app);

// Servir arquivos estáticos do diretório public
app.use(express.static(path.join(__dirname, '../public')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));

// Usar rotas
app.use(cadastroRoutes);
app.use(loginRoutes);
app.use(dashboardRoutes);

export default app;
