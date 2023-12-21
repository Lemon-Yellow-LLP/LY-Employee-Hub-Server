const router = require("express").Router();
const kekaController = require("../controllers/kekaController");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.get("/getAllEmployees", kekaController.getAllEmployees);
router.get("/getAllEmployeesFromKeka", kekaController.getAllEmployeesFromKeka);
router.get("/getToken", kekaController.getToken);

// router.get("/getAllEmployees", isAuthenticated, isAdmin, kekaController.getAllEmployees);
// router.get(
//   "/getAllEmployeesFromKeka",
//   isAuthenticated,
//   isAdmin,
//   kekaController.getAllEmployeesFromKeka
// );
// router.get("/getToken", isAuthenticated, isAdmin, kekaController.getToken);

module.exports = router;
