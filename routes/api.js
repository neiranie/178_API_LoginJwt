const express = require('express');
const router = express.Router();

const komikController = require("../controller/komikController");
const userController = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", userController.register);
router.post("/login", userController.login);

// Public
router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);

// Protected
router.post('/komik', komikController.createKomik);
router.put('/komik/:id', komikController.updateKomik);
router.delete('/komik/:id', komikController.deleteKomik);

module.exports = router;