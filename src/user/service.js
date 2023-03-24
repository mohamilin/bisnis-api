const httpStatus = require("http-status");
const ModelDatabase = require("../../database/models");
const ApiError = require("../../utils/api-error");
const Model = ModelDatabase.sequelize.models;

const getUserByUsername = async (payload) => {
  return Model.data_user.findOne({
    where: {
      user_name: payload?.user_name,
    },
  });
};

const getUserById = async (user) => {
  return Model.data_user.findOne({
    where: {
      id: user.user_id,
    },
  });
};

const getUserByPk = async (user_id) => {
  return Model.data_user.findByPk(user_id);
};

const getAll = async () => {
  return Model.data_user.findAll();
};

const deleteUser = async (payload) => {
  const {user_id, userLogin} = payload;
  const user = await getUserByPk(user_id);
  if(!user) throw new ApiError(httpStatus.NOT_FOUND, 'Data tidak ditemukan');
  if(user?.id === userLogin?.id)  throw new ApiError(httpStatus.BAD_REQUEST, 'Tidak diizinkan menghapus akun');
  return user.destroy();
};

module.exports = {
  getUserById,
  getAll,
  getUserByUsername,
  deleteUser,
};
