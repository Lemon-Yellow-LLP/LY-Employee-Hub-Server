const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.get("/getAllUsersAdmin", isAuthenticated, isAdmin, adminController.getAllUsersAdmin);

module.exports = router;
