import { engine } from 'express-handlebars';
import path from 'path';
import { __dirname } from './pathConfig.js';

const configureHandlebars = (app) => {
    app.engine('handlebars', engine({
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, '../views/layouts'),
    }));
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, '../views'));
};

export default configureHandlebars;
