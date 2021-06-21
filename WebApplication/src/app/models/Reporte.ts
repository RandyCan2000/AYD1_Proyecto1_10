export class Reporte{
    idreporte?: number
    zona?: string
    fechareporte?: string
    horareporte?: string
    fechaproblema?: string
    horaproblema?: string
    descripcion?: string
    estado?: any
    idtipoproblema?: number
    idusuario?: number

    constructor(){
        this.idreporte=0
        this.zona=""
        this.fechareporte=""
        this.horareporte=""
        this.fechaproblema=""
        this.horaproblema=""
        this.descripcion=""
        this.estado=""
        this.idtipoproblema=0
        this.idusuario=0
    }
}