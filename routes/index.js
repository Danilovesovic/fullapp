const express = require('express');
const router = express.Router();


router.use("/", require("./home"));

router.use("/login", require("../controllers/loginController"))

router.use("/admin", function (req, res) {
    console.log(req.session.user);
    res.send("Admin section");
})


module.exports = router;