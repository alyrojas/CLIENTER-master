export class Recurso{
    _id?: number;
    
    numSerie: string;
    recurso: String;
    marca: String;
    modelo: String;
    estatus: string;


    constructor(numSerie: string, recurso: string, marca: string, modelo: string, estatus: string ){
        
        this.numSerie = numSerie;
        this.recurso = recurso;
        this.marca = marca;
        this.modelo = modelo;
        this.estatus = estatus;
       
    }
}