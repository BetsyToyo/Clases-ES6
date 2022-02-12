class Impuestos{
    constructor(montoBrutoAnual,deducciones){
        this._montoBrutoAnual=montoBrutoAnual
        this._deducciones=deducciones
    }

    get montoBrutoA(){
        return this._montoBrutoAnual
    }

    set montoBrutoA(montoB){
        this._montoBrutoAnual=montoB
    } 
    
    get deduccionesF(){
        return this._deducciones
    }
    
    set deduccionesF(deduccionesFinales){
        this._deducciones=deduccionesFinales
    }
}



export default Impuestos