import e, {json, Request,Response} from 'express'
import { QueryResult } from 'pg';

import {pool} from '../database';

/** METODO PARA RETORNAR TODOS LOS USUARIOS */
export const getUsuarios = async (req:Request,res:Response):Promise<Response>=>{
    try{  
        const response:QueryResult = await pool.query('SELECT * FROM usuario');
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}
/** METODO PARA RETORNAR UN USUARIO DEPENDIENO EL ID */
export const getUsuarioPorId = async (req:Request,res:Response):Promise<Response> =>{
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM usuario WHERE idUsuario=$1',[id]);
    return res.json(response.rows);
}
/** METODO PARA GUARDAR UN USUARIO*/
export const crearUsuario = async (req:Request,res:Response):Promise<Response> =>{
    const {nombre,apellido,telefono,correo,edad,fechaNacimiento,usuario,password} = req.body;
    const response:QueryResult = await pool.query('INSERT INTO usuario (nombre,apellido,telefono,correo,edad,fechaNacimiento,usuario,password)' 
                                                 +'VALUES($1,$2,$3,$4,$5,$6,$7,$8)',
    [nombre,apellido,telefono,correo,edad,fechaNacimiento,usuario,password]);
    return res.json({
        message:"Usuario Creado",
        body:{
            user:{
                nombre,apellido,telefono,correo,edad,fechaNacimiento,usuario,password
            }
        }
    });
}
/** METODO PARA RETORNAR TODOS LOS EMPLEADOS*/
export const getEmpleados = async (req:Request,res:Response):Promise<Response>=>{
    try{  
        const response:QueryResult = await pool.query('SELECT * FROM empleado');
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}
/** METODO PARA RETORNAR UN EMPLEADO DEPENDIENDO DEL ID */
export const getEmpleadoPorId = async (req:Request,res:Response):Promise<Response> =>{
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM empleado WHERE idEmpleado=$1',[id]);
    return res.json(response.rows);
}
/**###################################### EMPLEADOS ######################################## */
/** METODO PARA GUARDAR UN EMPLEADO*/
export const crearEmpleado = async (req:Request,res:Response)=>{
    const {nombre,apellido,telefono,correo,edad,fechaNacimiento,usuario,password,tipo} = req.body;
    const response:QueryResult = await pool.query('INSERT INTO empleado (nombre,apellido,telefono,correo,edad,fechaNacimiento,usuario,password,tipo)'
                                                 +'VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)',
    [nombre,apellido,telefono,correo,edad,fechaNacimiento,usuario,password,tipo]);
    return res.json({
        message:"Empleado Creado",
        body:{
            user:{
                nombre,apellido,telefono,correo,edad,fechaNacimiento,usuario,password,tipo
            }
        }
    });
}


