const express = require("express");

const ProductController = require("../src/product/controller");
const Auth = require("../middlewares/authentication");

const router = express.Router();

router.get("/", Auth(), ProductController.getAll);
router.post("/", ProductController.addProduct);
router.put("/:productId", ProductController.updateProduct);
router.delete("/:productId", ProductController.deleteProduct);

module.exports = router;
