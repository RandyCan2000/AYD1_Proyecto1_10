"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearMensaje = exports.getMensajePorUsuario = exports.getMensaje = exports.crearImagenReporte = exports.getImagenReporteId = exports.getImagenReporte = exports.getDetalleProblema = exports.getTipoProblemas = exports.actualizarReporte = exports.crearReporte = exports.getReportesPorId = exports.getReportes = exports.loginEmpleado = exports.login = exports.crearEmpleado = exports.getEmpleadoPorId = exports.getEmpleados = exports.crearUsuario = exports.getUsuarioPorId = exports.getUsuarios = void 0;
const database_1 = require("../database");
/** METODO PARA RETORNAR TODOS LOS USUARIOS */
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM usuario');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getUsuarios = getUsuarios;
/** METODO PARA RETORNAR UN USUARIO DEPENDIENO EL ID */
const getUsuarioPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM usuario WHERE idUsuario=$1', [id]);
    return res.json(response.rows);
});
exports.getUsuarioPorId = getUsuarioPorId;
/** METODO PARA GUARDAR UN USUARIO*/
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, telefono, correo, edad, fechaNacimiento, usuario, password } = req.body;
    const response = yield database_1.pool.query('INSERT INTO usuario (nombre,apellido,telefono,correo,edad,fechaNacimiento,usuario,password)'
        + 'VALUES($1,$2,$3,$4,$5,$6,$7,$8)', [nombre, apellido, telefono, correo, edad, fechaNacimiento, usuario, password]);
    return res.json({
        message: "Usuario Creado",
        body: {
            user: {
                nombre, apellido, telefono, correo, edad, fechaNacimiento, usuario, password
            }
        }
    });
});
exports.crearUsuario = crearUsuario;
/** METODO PARA RETORNAR TODOS LOS EMPLEADOS*/
const getEmpleados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM empleado');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getEmpleados = getEmpleados;
/** METODO PARA RETORNAR UN EMPLEADO DEPENDIENDO DEL ID */
const getEmpleadoPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM empleado WHERE idEmpleado=$1', [id]);
    return res.json(response.rows);
});
exports.getEmpleadoPorId = getEmpleadoPorId;
/**###################################### EMPLEADOS ######################################## */
/** METODO PARA GUARDAR UN EMPLEADO*/
const crearEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, telefono, correo, edad, fechaNacimiento, usuario, password, tipo } = req.body;
    const response = yield database_1.pool.query('INSERT INTO empleado (nombre,apellido,telefono,correo,edad,fechaNacimiento,usuario,password,tipo)'
        + 'VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)', [nombre, apellido, telefono, correo, edad, fechaNacimiento, usuario, password, tipo]);
    return res.json({
        message: "Empleado Creado",
        body: {
            empleado: {
                nombre, apellido, telefono, correo, edad, fechaNacimiento, usuario, password, tipo
            }
        }
    });
});
exports.crearEmpleado = crearEmpleado;
/** METODO PARA EL LOGIN */
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, password } = req.body;
    console.log(usuario, password);
    const response = yield database_1.pool.query('SELECT * FROM usuario WHERE usuario=$1 AND password=$2', [usuario, password]);
    console.log(response.rows);
    if (response.rows.length > 0) {
        return res.status(200).json(response.rows);
    }
    else {
        return res.status(201).json(response.rows);
    }
});
exports.login = login;
/** METODO PARA EL LOGIN EMPLEADO */
const loginEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, password } = req.body;
    console.log(usuario, password);
    const response = yield database_1.pool.query('SELECT * FROM empleado WHERE usuario=$1 AND password=$2', [usuario, password]);
    console.log(response.rows);
    if (response.rows.length > 0) {
        return res.status(200).json(response.rows);
    }
    else {
        return res.status(201).json(response.rows);
    }
});
exports.loginEmpleado = loginEmpleado;
/** RETORNAR REPORTES */
const getReportes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield database_1.pool.query('SELECT * FROM reporte');
    return res.status(200).json(response.rows);
});
exports.getReportes = getReportes;
/** RETORNAR REPORTES POR ID */
const getReportesPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM reporte WHERE idReporte=$1', [id]);
    return res.status(200).json(response.rows);
});
exports.getReportesPorId = getReportesPorId;
/** GUARDAR REPORTE */
const crearReporte = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { zona, fechaReporte, horaReporte, fechaProblema, horaProblema, descripcion, idTipoProblema, idUsuario } = req.body;
    const response = yield database_1.pool.query('INSERT INTO reporte (zona,fechaReporte,horaReporte,fechaProblema,horaProblema,descripcion,idTipoProblema,idUsuario)'
        + 'VALUES($1,$2,$3,$4,$5,$6,$7,$8)', [zona, fechaReporte, horaReporte, fechaProblema, horaProblema, descripcion, idTipoProblema, idUsuario]);
    return res.json({
        message: "Reporte Creado",
        body: {
            reporte: {
                zona, fechaReporte, horaReporte, fechaProblema, horaProblema, descripcion, idTipoProblema, idUsuario
            }
        }
    });
});
exports.crearReporte = crearReporte;
/** ACTUALIZAR REPORTE */
const actualizarReporte = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const id = parseInt(req.params.id);
    const { estado, idReporte } = req.body;
    yield database_1.pool.query('UPDATE reporte SET estado = $1 WHERE idReporte = $2', [estado, idReporte]);
    return res.json(`Reporte ${idReporte} Actualizado`);
});
exports.actualizarReporte = actualizarReporte;
/**RETORNAR TIPO-PROBLEMAS */
const getTipoProblemas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM tipoProblema');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getTipoProblemas = getTipoProblemas;
/**RETORNAR TIPO PROBLEMA */
const getDetalleProblema = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT r.idReporte,r.fechaReporte,r.horaReporte,r.estado,tp.nombre,u.nombre as nombreUsuario ' +
            'FROM reporte r,tipoProblema tp,usuario u WHERE r.idTipoProblema = tp.idTipoProblema' +
            ' AND r.idUsuario = u.idUsuario');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getDetalleProblema = getDetalleProblema;
/** OBTENER DATOS DE TABLA IMAGEN-REPORTE */
const getImagenReporte = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM imagenReporte');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getImagenReporte = getImagenReporte;
/** OBTENER DATOS DE TABLA IMAGEN-REPORTE POR ID*/
const getImagenReporteId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query('SELECT * FROM imagenReporte WHERE idImagenReporte=$1', [id]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getImagenReporteId = getImagenReporteId;
/** GUARDAR DATOS EN LA TABLA IMAGEN-REPORTE */
const crearImagenReporte = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url, idReporte } = req.body;
    const response = yield database_1.pool.query('INSERT INTO imagenReporte(url,idReporte) VALUES($1,$2)', [url, idReporte]);
    return res.json({
        message: "Reporte Creado",
        body: {
            imagenReporte: {
                url, idReporte
            }
        }
    });
});
exports.crearImagenReporte = crearImagenReporte;
/** MENSAJE */
const getMensaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM mensaje");
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getMensaje = getMensaje;
/** OBTENER MENSAJE POR USUARIO */
const getMensajePorUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query("SELECT u.idUsuario,u.nombre as nombreUsuario,m.descripcion,e.nombre as nombreEmpleado,r.idReporte " +
            " FROM mensaje m,usuario u,empleado e,reporte r WHERE m.idReporte = r.idReporte" +
            " AND m.idEmpleado = e.idEmpleado AND r.idUsuario = u.idUsuario AND r.idUsuario = $1;", [id]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getMensajePorUsuario = getMensajePorUsuario;
const crearMensaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descripcion, idReporte, idEmpleado } = req.body;
    const response = yield database_1.pool.query('INSERT INTO mensaje(descripcion,idReporte,idEmpleado) VALUES($1,$2,$3)', [descripcion, idReporte, idEmpleado]);
    return res.json({
        message: "Mensaje Creado",
        body: {
            mensaje: {
                descripcion, idReporte, idEmpleado
            }
        }
    });
});
exports.crearMensaje = crearMensaje;
