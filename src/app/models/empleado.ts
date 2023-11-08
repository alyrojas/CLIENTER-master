export class Empleado {
    _id?: number;
    nombre: string;
    aPaterno: string;
    aMaterno: string;
    rfc: String;
    telefono: string;
    email: string;
    estado: string;
    ciudad: string;
    departamento:string;
    puesto: string;
    supervisor: string;

    constructor(nombre: string, aPaterno: string, aMaterno: string, rfc:string, estado: string, ciudad: string, departamento:string, puesto: string,supervisor: string, email: string, telefono: string){
        this.nombre = nombre;
        this.aPaterno = aPaterno;
        this.aMaterno = aMaterno;
        this.rfc = rfc;
        this.email = email;
        this.telefono = telefono;
        this.estado = estado;
        this.ciudad = ciudad;
        this.departamento = departamento;
        this.supervisor = supervisor;
        this.puesto = puesto;
    }
}