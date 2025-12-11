const express = require("express"); 

const router = express.Router(); 

const contributionCtrl = require("../controllers/Contribution"); 

const auth = require("../middleware/auth")

router.post("/addcontribution", auth, contributionCtrl.initMobileMoney);
router.post("/mypaygacallback", contributionCtrl.mypaygaCallback);
router.post("/getcontributions", auth, contributionCtrl.getContributions)
router.post("/mypvitcallback", auth, contributionCtrl.myPvitCallback)
router.post("/addvisapayment", auth, contributionCtrl.initVisa); 
router.post("/givememymoney", auth, contributionCtrl.giveMeMyMoney);
router.post("/ebillingcallback", contributionCtrl.ebillingCallback);
router.post("/addpayment", auth, contributionCtrl.addPayment);
router.post("/callback", contributionCtrl.callback);

module.exports = router; 