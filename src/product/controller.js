const httpStatus = require("http-status");
const CatchAsync = require("../../utils/catch-error");
const ProductService = require("./service");

const getAll = CatchAsync(async(req, res) => {
    const products = await ProductService.getAll()

    return res.status(200).json({
        success: true,
        ResponseCode: "00",
        ResponseDesc: products
    })
})

const addProduct = CatchAsync(async(req, res) => {
    const products = await ProductService.addProduct(req.body)

    return res.status(200).json({
        success: true,
        ResponseCode: "00",
        ResponseDesc: products
    })
})

const updateProduct = CatchAsync(async(req, res) => {
    const {productId} = req.params;

    const products = await ProductService.updateProduct(productId, req.body)

    return res.status(200).json({
        success: true,
        ResponseCode: "00",
        ResponseDesc: products
    })
})
const deleteProduct = CatchAsync(async(req, res) => {
    const {productId} = req.params;

    const products = await ProductService.deleteProduct(productId)

    return res.status(200).json({
        success: true,
        ResponseCode: "00",
        ResponseDesc: products
    })
})
module.exports = {
    getAll,
    addProduct,
    updateProduct,
    deleteProduct
}