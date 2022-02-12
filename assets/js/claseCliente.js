
class Cliente{
    constructor(nombre,impuesto={}){
        this._nombre=nombre 
        this._impuesto=impuesto                           
    }

    get nuevoNomC(){
        return this._nombre
    }

    set nuevoNomC(nombreActual){
        this._nombre=nombreActual
    } 
    

    calcularImpuesto(){
        return (((this._impuesto.montoBrutoA-this._impuesto.deduccionesF)*21)/100)
    }
}



export default Cliente