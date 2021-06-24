import { Router } from "express";
const router = Router();
import {getUsuarios,getUsuarioPorId,crearUsuario,getEmpleados,getEmpleadoPorId,crearEmpleado, login, loginEmpleado, getReportes, getReportesPorId, crearReporte, getTipoProblemas, getDetalleProblema, getImagenReporte, getImagenReporteId, crearImagenReporte, getMensaje, getMensajePorUsuario, crearMensaje, actualizarReporte, getReportesPorIdReporte, getImagenReporteIdReporte} 
from '../controllers/index.controller';

router.get('/usuarios',getUsuarios);
router.get('/usuario/:id',getUsuarioPorId);
router.post('/usuario',crearUsuario);
/**Empleados */
router.get('/empleados',getEmpleados);
router.get('/empleado/:id',getEmpleadoPorId);
router.post('/empleado',crearEmpleado);

/**LOGIN */
router.post('/login/usuario',login);
router.post('/login/empleado',loginEmpleado);

/**REPORTES */
router.get('/reportes',getReportes);
router.get('/reporte/:id',getReportesPorId);
router.get('/reportePorId/:id',getReportesPorIdReporte);
router.post('/reporte',crearReporte);
router.put('/reporteActualizar',actualizarReporte);
/**TIPO PROBLEMA */
router.get('/tipoProblemas',getTipoProblemas);
router.get('/detalleProblema',getDetalleProblema);

/**IMAGEN-REPORTE */
router.get('/imagenReportes',getImagenReporte);
router.get('/imagenReporte/:id',getImagenReporteId);
router.get('/imagenReporteId/:id',getImagenReporteIdReporte);
router.post('/imagenReporte',crearImagenReporte);

/**MENSAJE */
router.get('/mensajes',getMensaje);
router.get('/mensaje/:id',getMensajePorUsuario);
router.post('/mensaje',crearMensaje);
export default router;
