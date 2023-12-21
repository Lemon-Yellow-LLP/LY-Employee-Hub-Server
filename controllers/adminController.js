const UserSchema = require("../schemas/adminSchema");
const createError = require("http-errors");

const adminController = {
  getAllUsersAdmin: async (req, res, next) => {
    try {
      const users = await UserSchema.find();

      res.status(200).json(users);
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
};

module.exports = adminController;
