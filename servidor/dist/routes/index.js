"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const index_controller_1 = require("../controllers/index.controller");
router.get('/usuarios', index_controller_1.getUsuarios);
router.get('/usuario/:id', index_controller_1.getUsuarioPorId);
router.post('/usuario', index_controller_1.crearUsuario);
/**Empleados */
router.get('/empleados', index_controller_1.getEmpleados);
router.get('/empleado/:id', index_controller_1.getEmpleadoPorId);
router.post('/empleado', index_controller_1.crearEmpleado);
/**LOGIN */
router.post('/login/usuario', index_controller_1.login);
router.post('/login/empleado', index_controller_1.loginEmpleado);
/**REPORTES */
router.get('/reportes', index_controller_1.getReportes);
router.get('/reporte/:id', index_controller_1.getReportesPorId);
router.post('/reporte', index_controller_1.crearReporte);
router.put('/reporteActualizar', index_controller_1.actualizarReporte);
/**TIPO PROBLEMA */
router.get('/tipoProblemas', index_controller_1.getTipoProblemas);
router.get('/detalleProblema', index_controller_1.getDetalleProblema);
/**IMAGEN-REPORTE */
router.get('/imagenReportes', index_controller_1.getImagenReporte);
router.get('/imagenReporte/:id', index_controller_1.getImagenReporteId);
router.post('/imagenReporte', index_controller_1.crearImagenReporte);
/**MENSAJE */
router.get('/mensajes', index_controller_1.getMensaje);
router.get('/mensaje/:id', index_controller_1.getMensajePorUsuario);
router.post('/mensaje', index_controller_1.crearMensaje);
exports.default = router;
