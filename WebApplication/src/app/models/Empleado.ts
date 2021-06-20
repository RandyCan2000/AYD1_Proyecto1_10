export class Empleado{
    idempleado? : number;
    nombre : string;
	apellido : string;
	telefono : number;
	correo : string;
	edad : number;
	fechaNacimiento : string;
	usuario : string;
	password : string;
	tipo : string;

    constructor(empleado?:Empleado){
        this.idempleado = empleado? empleado.idempleado: 0 ;
        this.nombre = empleado? empleado.nombre : "";
        this.apellido = empleado? empleado.apellido : "";
        this.telefono = empleado? empleado.telefono : 0;
        this.correo = empleado? empleado.correo : "";
        this.edad = empleado? empleado.edad : 0;
        this.fechaNacimiento = empleado? empleado.fechaNacimiento : "";
        this.usuario = empleado? empleado.usuario : "";
        this.password = empleado? empleado.password : "";
        this.tipo = empleado? empleado.tipo : "";
    }
}