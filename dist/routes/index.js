"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const index_controller_1 = require("../controllers/index.controller");
router.get('/usuarios', index_controller_1.getUsuarios);
router.get('/usuario/:id', index_controller_1.getUsuarioPorId);
router.post('/usuario', index_controller_1.crearUsuario);
router.post('/empleado', index_controller_1.crearEmpleado);
/**Empleados */
router.get('/empleados', index_controller_1.getEmpleados);
router.get('/empleado/:id', index_controller_1.getEmpleadoPorId);
router.post('/empleado', index_controller_1.crearEmpleado);
exports.default = router;
