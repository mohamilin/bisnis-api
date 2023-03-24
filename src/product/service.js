const ModelDatabase = require("../../database/models");
const Model = ModelDatabase.sequelize.models;

const getAll = async () => {
  return Model.data_product.findAll();
};

const addProduct = async (payload) => {
  const { product_name, premium } = payload;

  return Model.data_product.create({ product_name, premium });
};

const getById = async (productId) => {
  return Model.data_product.findOne({
    where: {
      product_id: productId,
    },
  });
};

const updateProduct = async (productId, payload) => {
  const { product_name, premium } = payload;
  const product = await getById(productId)

  return product.update({
    product_name,
    premium,
  });
};

const deleteProduct = async (productId) => {
  const product = await getById(productId)

  return product.destroy();
};
module.exports = {
  getAll,
  addProduct,
  getById,
  updateProduct,
  deleteProduct,
};
