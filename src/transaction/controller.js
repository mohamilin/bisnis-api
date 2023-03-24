const httpStatus = require("http-status");
const CatchAsync = require("../../utils/catch-error");
const TransactionService = require("./service");

const getAll = CatchAsync(async(req, res) => {
    const transactions = await TransactionService.getAll()

    return res.status(200).json({
        success: true,
        ResponseCode: "00",
        ResponseDesc: transactions
    })
})

const addTransaction = CatchAsync(async(req, res) => {
    const transaction = await TransactionService.addTransaction(req.body)

    return res.status(200).json({
        success: true,
        ResponseCode: "00",
        ResponseDesc: transaction
    })
})
module.exports = {
    getAll,
    addTransaction
}