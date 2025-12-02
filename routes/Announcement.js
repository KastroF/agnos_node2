
const express = require("express"); 

const router = express.Router(); 

const { handleUpload } = require("../middleware/multer");

const announcementCtrl = require("../controllers/Announcement"); 

const auth = require("../middleware/auth")

router.post("/addnew", auth, handleUpload, announcementCtrl.getAnnonce); 
router.post("/getannonces", auth, announcementCtrl.getAnnonces);
router.post('/getannonce', auth, announcementCtrl.getAnnonce);
router.post("/modify", auth, handleUpload, announcementCtrl.toModifyAnnonce); 
router.post("/search", auth, announcementCtrl.search); 
router.post("/byorg", auth, announcementCtrl.getAnnouncementsByOrg)

module.exports = router; 