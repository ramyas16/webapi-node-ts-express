"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: __dirname + '/.env' });
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
var SERVER_PORT = process.env.SERVER_PORT || 1337;
var BIG_COMM_ENDPOINT = process.env.BIG_COMM_ENDPOINT || 'https://api.bigcommerce.com/stores/8vr02na1wl/v3/catalog/products/';
var BIG_COMM_MIN_PRODUCT_ID = process.env.BIG_COMM_MIN_PRODUCT_ID || '1200';
var BIG_COMM_MAX_PRODUCT_ID = process.env.BIG_COMM_MAX_PRODUCT_ID || '5000';
var AUTH_CLIENT = process.env.AUTH_CLIENT || 't2xkk1vte49owu0q2wr6r2fhhggdir6';
var AUTH_TOKEN = process.env.AUTH_CLIENT || 'pc52amhy80e5rpt1wm2jv5285364u86';
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
var config = {
    server: SERVER,
    endpoint: BIG_COMM_ENDPOINT,
    min_prodId: BIG_COMM_MIN_PRODUCT_ID,
    max_prodId: BIG_COMM_MAX_PRODUCT_ID,
    auth_client: AUTH_CLIENT,
    auth_token: AUTH_TOKEN
};
exports.default = config;
