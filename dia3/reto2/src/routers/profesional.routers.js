const { Router } = require("express")
const router = Router();
const professionalCtrl = require("../controller/profesional.controller")

router.get("/", professionalCtrl.getStart);
router.get("/profesional", professionalCtrl.getProfessional);
router.post("/profesional", professionalCtrl.postProfessional);
router.put("/profesional", professionalCtrl.putProfessional);
router.delete("/profesional", professionalCtrl.deleteProfessional);

module.exports = router;