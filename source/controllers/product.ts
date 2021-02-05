import { Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import moment from 'moment';
import config from '../config/config';
import got from 'got';
import productValidation from './productValidate';

dotenv.config();

interface Product {
    id?: any;
    sku?: any;
    name?: any;
    price?: any;
    requestedOn?: any;
}

const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    const productId: number = +req.params.productId;
    const requestedOn = moment().format('YYYY-MM-DD HH:mm:ss');

    const validationResponse = await productValidation.validateProduct(productId);
    if (validationResponse != '') {
        res.statusCode = validationResponse.error_code;
        return res.send(validationResponse);
    }

    try {
        const data: any = await got(`${config.endpoint}${req.params.productId}`, {
            responseType: 'json',
            headers: {
                'X-Auth-Client': config.auth_client,
                'X-Auth-Token': config.auth_token
            }
        });

        if (data.body.hasOwnProperty('status') === true) {
            const errResponse = await buildErrResponse(data.body, productId);
            return errResponse;
        }

        const harveyNicolosResponse = await buildResponse(data.body.data);
        harveyNicolosResponse.requestedOn = requestedOn;
        console.log(harveyNicolosResponse);
        return res.status(200).json(harveyNicolosResponse);
    } catch (err) {
        console.log(err);
        const response = {
            error_code: 404,
            status: 404,
            message: 'product not found',
            details: `Product Id: ${productId} not available`
        };
        return res.status(403).json(response);
    }
};
const buildErrResponse = async (data: any, productId: number) => {
    const response = {
        error_code: data.status,
        status: data.status,
        message: 'product not found',
        details: `Product ${productId} not available`
    };
    return response;
};

const buildResponse = async (data: any | string | number) => {
    let response: any | string | number = {
        id: '',
        sku: '',
        name: '',
        price: '',
        requestedOn: ''
    };
    for (const key in response) {
        if (data.hasOwnProperty(key) === true) {
            response[key] = data[key];
        }
    }
    return response;
};

export default { getProduct };
