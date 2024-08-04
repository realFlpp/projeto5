import bodyParser from 'body-parser';

const configureBodyParser = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
};

export default configureBodyParser;
