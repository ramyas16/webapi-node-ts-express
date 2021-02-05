import config from '../config/config';
async function validateProduct(productId: number) {
    try {
        // console.log(Number.isInteger(productId));
        if (Number.isInteger(productId)) {
            if (productId < parseInt(config.min_prodId) || productId > parseInt(config.max_prodId)) {
                const response = await buildErrResponse(productId);
                return response;
            }
            return '';
        } else {
            const response = await buildErrProductResponse(productId);
            return response;
        }
    } catch (err) {
        console.log(err);
        const response = {
            error_code: 404,
            status: 404,
            message: 'product restricted',
            details: `The Product ${productId} is restricted.`
        };
        return response;
    }
}

const buildErrProductResponse = async (productId: number) => {
    const response = {
        error_code: 500,
        status: 500,
        message: `Error in product id: ${productId}`,
        details: `Error in product id: ${productId}`
    };
    console.log(response);
    return response;
};

const buildErrResponse = async (productId: number) => {
    const response = {
        error_code: 401,
        status: 401,
        message: 'product restricted',
        details: `The Product id: ${productId} is restricted.`
    };
    console.log(response);
    return response;
};

export default { validateProduct };
