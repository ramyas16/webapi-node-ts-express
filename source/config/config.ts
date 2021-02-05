import dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' });

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;
const BIG_COMM_ENDPOINT = process.env.BIG_COMM_ENDPOINT || 'https://api.bigcommerce.com/stores/8vr02na1wl/v3/catalog/products/';

const BIG_COMM_MIN_PRODUCT_ID = process.env.BIG_COMM_MIN_PRODUCT_ID || '1200';
const BIG_COMM_MAX_PRODUCT_ID = process.env.BIG_COMM_MAX_PRODUCT_ID || '5000';

const AUTH_CLIENT = process.env.AUTH_CLIENT || 't2xkk1vte49owu0q2wr6r2fhhggdir6';

const AUTH_TOKEN = process.env.AUTH_CLIENT || 'pc52amhy80e5rpt1wm2jv5285364u86';

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    server: SERVER,
    endpoint: BIG_COMM_ENDPOINT,
    min_prodId: BIG_COMM_MIN_PRODUCT_ID,
    max_prodId: BIG_COMM_MAX_PRODUCT_ID,
    auth_client: AUTH_CLIENT,
    auth_token: AUTH_TOKEN
};

export default config;
