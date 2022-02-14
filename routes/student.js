const { Router } = require("express");
const { getStudents, createStudent, getAllStudents, getStudent, updateStudent, deleteStudent } = require("../controllers/student");
const router = Router();
const {get}=require("express/lib/response")

router.route("").post(createStudent).get(getAllStudents);
router.route("/:id").get(getStudent);
router.route("/:id").put(updateStudent);
router.route("/:id").delete(deleteStudent);
module.exports = router;
