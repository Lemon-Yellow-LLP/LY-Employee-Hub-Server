const { default: axios } = require("axios");
const EmployeeSchema = require("../schemas/kekaEmployeesSchema");
const createError = require("http-errors");

// const TokenUrl = `${process.env.KEKA_TOKEN_URL}?grant_type=kekaapi&scope=kekaapi&client_id=${process.env.KEKA_CLIENT_ID}&client_secret=${process.env.KEKA_CLIENT_SECRET}&api_key=${process.env.KEKA_API_KEY}`;

const ApiUrl = process.env.KEKA_TOKEN_URL;

let body = new URLSearchParams({
  grant_type: "kekaapi",
  scope: "kekaapi",
  client_id: process.env.KEKA_CLIENT_ID,
  client_secret: process.env.KEKA_CLIENT_SECRET,
  api_key: process.env.KEKA_API_KEY,
});

const kekaController = {
  getAllEmployees: async (req, res, next) => {
    try {
      const employees = await EmployeeSchema.find();

      res.status(200).json(employees);
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
  getAllEmployeesFromKeka: async (req, res, next) => {
    try {
      const token = await axios.post(ApiUrl, body);

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const employees = await axios.get("https://{company}.keka.com/api/v1/hris/employees", config);

      res.status(200).json(employees);
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
  getToken: async (req, res, next) => {
    try {
      const token = await axios.get(ApiUrl, body);

      res.status(200).json(token);
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
};

module.exports = kekaController;
