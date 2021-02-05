"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var product_1 = __importDefault(require("../controllers/product"));
var router = express_1.default.Router();
router.get("/:productId", product_1.default.getProduct);
module.exports = router;
