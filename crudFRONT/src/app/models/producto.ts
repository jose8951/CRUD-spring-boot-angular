export class Producto {

    id!:number;  // ? no es obligatorio
    nombre: string;  
    precio:number;


    constructor(nombre:string, precio:number){
        this.nombre=nombre;
        this.precio=precio;
    }

}
