const express = require("express");

const TransacctionController = require("../src/transaction/controller");
const Auth = require("../middlewares/authentication");

const router = express.Router();

router.get("/", Auth(), TransacctionController.getAll);
router.post("/", TransacctionController.addTransaction);

module.exports = router;
