import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';
import logging from './config/logging';
import config from './config/config';

import productRoutes from './routes/product-routes';
import product from './controllers/product';
const NAMESPACE = 'Server';
const router = express();

/**
 * logging request
 */
router.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], url - [${req.url}], IP [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}] - url - [${req.url}] - IP [${req.socket.remoteAddress}] - [${res.statusCode}]`);
    });
    next();
});

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use((req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

router.use('/product', productRoutes);

router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));
