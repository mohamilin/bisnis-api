const ModelDatabase = require("../../database/models");
const Model = ModelDatabase.sequelize.models;

const getAll = async() => {
    return Model.data_product.findAll()
}

const addProduct= async(payload) => {
    const {product_name, premium} = payload;

    return Model.data_product.create(
        {product_name, premium}
    )
}

const getById = async (productId) => {
    return Model.data_product.findOne({
        where: {
            product_id: productId
        }
    })
}

module.exports = {
    getAll,
    addProduct,
    getById
}