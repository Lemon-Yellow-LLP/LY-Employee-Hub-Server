const router = require("express").Router();
const { isAuthenticated, isAdmin } = require("../middlewares/auth");
const multer = require("multer");
const kekaController = require("../controllers/kekaController");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.get("/getAllEmployees", kekaController.getAllEmployees);
router.get("/getAllEmployeesFromKeka", kekaController.getAllEmployeesFromKeka);
router.get("/getToken", kekaController.getToken);
router.post("/bulkEmployeeRegister", upload.single("data"), kekaController.bulkEmployeeRegister);

module.exports = router;
