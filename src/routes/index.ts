import { Router } from "express";
const router = Router();
import {getUsuarios,getUsuarioPorId,crearUsuario,getEmpleados,getEmpleadoPorId,crearEmpleado} 
from '../controllers/index.controller';

router.get('/usuarios',getUsuarios);
router.get('/usuario/:id',getUsuarioPorId);
router.post('/usuario',crearUsuario);
router.post('/empleado',crearEmpleado);
/**Empleados */
router.get('/empleados',getEmpleados);
router.get('/empleado/:id',getEmpleadoPorId);
router.post('/empleado',crearEmpleado);
export default router;