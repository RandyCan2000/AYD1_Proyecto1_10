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
    [nombre,apellido,telefono,correo,edad,String(fechaNacimiento),usuario,password,tipo]);
   

    return res.json({
        message:"Empleado Creado",
        body:{
            empleado:{
                nombre,apellido,telefono,correo,edad,fechaNacimiento,usuario,password,tipo
            }
        }
    });
}
/** METODO PARA EL LOGIN */
export const login = async (req:Request,res:Response)=>{
    const {usuario,password} = req.body;
    console.log(usuario,password);
    const response:QueryResult = await pool.query('SELECT * FROM usuario WHERE usuario=$1 AND password=$2',[usuario,password]);
    console.log(response.rows);
    if(response.rows.length>0){
        return res.status(200).json(response.rows);
    }else{
        return res.status(201).json(response.rows);
    }
}
/** METODO PARA EL LOGIN EMPLEADO */
export const loginEmpleado = async (req:Request,res:Response)=>{
    const {usuario,password} = req.body;
    console.log(usuario,password);
    const response:QueryResult = await pool.query('SELECT * FROM empleado WHERE usuario=$1 AND password=$2',[usuario,password]);
    console.log(response.rows);
    if(response.rows.length>0){
        return res.status(200).json(response.rows);
    }else{
        return res.status(201).json(response.rows);
    }
}
/** RETORNAR REPORTES */
export const getReportes = async (req:Request,res:Response):Promise<Response>=>{
    const response:QueryResult = await pool.query('SELECT * FROM reporte');
    return res.status(200).json(response.rows);
}

/** RETORNAR REPORTES POR ID */
export const getReportesPorId = async (req:Request,res:Response):Promise<Response>=>{
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM reporte WHERE idUsuario=$1',[id]);
    return res.status(200).json(response.rows);
}
/** RETORNAR REPORTES POR ID */
export const getReportesPorIdReporte = async (req:Request,res:Response):Promise<Response>=>{
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM reporte WHERE idReporte=$1',[id]);
    return res.status(200).json(response.rows);
}
/** GUARDAR REPORTE */
export const crearReporte = async (req:Request,res:Response)=>{
    const {zona,fechaReporte,horaReporte,fechaProblema,horaProblema,descripcion,idTipoProblema,idUsuario} = req.body;
    const response:QueryResult = await pool.query('INSERT INTO reporte (zona,fechaReporte,horaReporte,fechaProblema,horaProblema,descripcion,idTipoProblema,idUsuario)'
                                                 +'VALUES($1,$2,$3,$4,$5,$6,$7,$8)',
    [zona,fechaReporte,horaReporte,fechaProblema,horaProblema,descripcion,idTipoProblema,idUsuario]);
    const retornar = await pool.query('SELECT MAX(idReporte) as idReporte FROM reporte');
    //console.log(retornar.rows[0].idreporte);
    const idReporte = retornar.rows[0].idreporte;
    return res.json({
        idReporte:idReporte,
        estado:true});
}
/** ACTUALIZAR REPORTE */
export const actualizarReporte = async (req:Request,res:Response):Promise<Response> =>{
    //const id = parseInt(req.params.id);
    const {estado,idReporte} = req.body;
    await pool.query('UPDATE reporte SET estado = $1 WHERE idReporte = $2',[estado,idReporte]);
    return res.json(`Reporte ${idReporte} Actualizado`);

}

/**RETORNAR TIPO-PROBLEMAS */
export const getTipoProblemas = async (req:Request,res:Response):Promise<Response>=>{
    try{  
        const response:QueryResult = await pool.query('SELECT * FROM tipoProblema');
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}
/**RETORNAR TIPO PROBLEMA */
export const getDetalleProblema = async (req:Request,res:Response):Promise<Response>=>{
    try{  
        const response:QueryResult = await pool.query('SELECT r.idReporte,r.fechaReporte,r.horaReporte,r.estado,tp.nombre,u.nombre as nombreUsuario '+
                                                      'FROM reporte r,tipoProblema tp,usuario u WHERE r.idTipoProblema = tp.idTipoProblema'+
                                                      ' AND r.idUsuario = u.idUsuario');
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}
/** OBTENER DATOS DE TABLA IMAGEN-REPORTE */
export const getImagenReporte = async (req:Request,res:Response):Promise<Response>=>{
    try{
        const response:QueryResult = await pool.query('SELECT * FROM imagenReporte');
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}
/** OBTENER DATOS DE TABLA IMAGEN-REPORTE POR ID*/
export const getImagenReporteId = async (req:Request,res:Response):Promise<Response>=>{
    try{
        const id = parseInt(req.params.id);
        const response:QueryResult = await pool.query('SELECT * FROM imagenReporte WHERE idImagenReporte=$1',[id]);
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}
export const getImagenReporteIdReporte = async (req:Request,res:Response):Promise<Response>=>{
    try{
        const id = parseInt(req.params.id);
        const response:QueryResult = await pool.query('SELECT * FROM imagenReporte WHERE idReporte=$1',[id]);
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}
/** GUARDAR DATOS EN LA TABLA IMAGEN-REPORTE */
export const crearImagenReporte = async(req:Request,res:Response)=>{
    const{url,idReporte} = req.body;
    const response = await pool.query('INSERT INTO imagenReporte(url,idReporte) VALUES($1,$2)',[url,idReporte]);
    return res.json({
        message:"Reporte Creado",
        body:{
            imagenReporte:{
                url,idReporte
            }
        }
    });
}

/** MENSAJE */
export const getMensaje = async(req:Request,res:Response):Promise<Response>=>{
    try{
        const response:QueryResult = await pool.query("SELECT * FROM mensaje");
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}
/** OBTENER MENSAJE POR USUARIO */
export const getMensajePorUsuario = async(req:Request,res:Response):Promise<Response>=>{
    try{
        const id = parseInt(req.params.id)
        const response:QueryResult = await pool.query("SELECT u.idUsuario,u.nombre as nombreUsuario,m.descripcion,e.nombre as nombreEmpleado,r.idReporte "+
                                                      " FROM mensaje m,usuario u,empleado e,reporte r WHERE m.idReporte = r.idReporte"+
                                                      " AND m.idEmpleado = e.idEmpleado AND r.idUsuario = u.idUsuario AND r.idReporte = $1;",[id]);
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}


export const crearMensaje = async(req:Request,res:Response)=>{
    const{descripcion,idReporte,idEmpleado} = req.body;
    const response:QueryResult = await pool.query('INSERT INTO mensaje(descripcion,idReporte,idEmpleado) VALUES($1,$2,$3)',
                                                  [descripcion,idReporte,idEmpleado]);
    return res.json({
        message:"Mensaje Creado",
        body:{
            mensaje:{
                descripcion,idReporte,idEmpleado
            }
        }
    });

}

