const bcrypt = require("bcrypt");
const _ = require("lodash");

const ModelDatabase = require("../../database/models");
const Model = ModelDatabase.sequelize.models;
const httpStatus = require("http-status");
const ApiError = require("../../utils/api-error");

const UserService = require("../user/service");
const TokenService = require("../token/service");

const createUser = async (payload) => {
  const { user_id, user_name,  password, active, role } = payload;
  const user = await Model.data_user.findOne({
    where: {
      user_name,
    },
    attributes: ["user_id", "user_name"],
  });

  if (user) throw new ApiError(httpStatus.BAD_REQUEST, "01", "Username sudah digunakan", );

  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(password, saltRounds);

  return Model.data_user.create({
    user_id,
    user_name,
    password: hashPassword,
    active,
    role
  });
};

const login = async (payload) => {
  const { password } = payload;
  const user = await UserService.getUserByUsername(payload);
  if (!user) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "01",
      "Periksa kembali username atau password anda !"
    );
  }

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Periksa kembali email atau password anda !"
    );
  }
  return user;
};

const refreshToken = async (token) => {
  try {
    const tokens = await TokenService.verifyToken(
      token,
      process.env.TOKEN_TYPE_REFRESH
    );
    const user = await UserService.getUserById(tokens);

    if (!user) {
      throw new Error();
    }

    await TokenService.deleteToken(token, process.env.TOKEN_TYPE_REFRESH);
    return TokenService.generateAuthTokens(user);
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate !");
  }
};

const logout = async (token) => {
  const refreshTokenDoc = await Model.tokens.findOne({
    where: { token },
  });

  if (!refreshTokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, "Not found");
  }
  await refreshTokenDoc.destroy();
};

module.exports = {
  createUser,
  login,
  refreshToken,
  logout,
};
