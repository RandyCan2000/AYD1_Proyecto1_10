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
exports.crearEmpleado = exports.getEmpleadoPorId = exports.getEmpleados = exports.crearUsuario = exports.getUsuarioPorId = exports.getUsuarios = void 0;
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
            user: {
                nombre, apellido, telefono, correo, edad, fechaNacimiento, usuario, password, tipo
            }
        }
    });
});
exports.crearEmpleado = crearEmpleado;
