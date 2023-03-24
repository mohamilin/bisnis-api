const ModelDatabase = require("../../database/models");
const Model = ModelDatabase.sequelize.models;

const ProductService = require("../product/service");
const getAll = async () => {
  return Model.data_transaction.findAll();
};

const addTransaction = async (payload) => {
  const { trans_date, user_id, product_id, qty_order } = payload;
  const product = await ProductService.getById(product_id);
  return Model.data_transaction.create({
    trans_date,
    user_id,
    product_id,
    qty_order,
    total_order: qty_order * product?.premium,
  });
};

module.exports = {
  getAll,
  addTransaction,
};
