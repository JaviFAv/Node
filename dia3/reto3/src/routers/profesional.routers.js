const { Router } = require("express")
const router = Router();
const professionalCtrl = require("../controller/profesional.controller")

router.get("/", professionalCtrl.getStart);
router.get("/profesionales", professionalCtrl.getProfessional);
router.post("/profesionales", professionalCtrl.postProfessional);
router.put("/profesionales", professionalCtrl.putProfessional);
router.delete("/profesionales", professionalCtrl.deleteProfessional);

module.exports = router;