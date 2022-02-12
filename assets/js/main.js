import cliente from './claseCliente.js'
import impuesto from './claseImpuestos.js'

let resultado=(n)=>{
          
    $("#resultado tbody").html('')

    listaC.forEach((item)=>{
    $("#resultado tbody").append(`
        <tr> 
            <th>${item._nombre}</th>
            <th>${item._impuesto.montoBrutoA}
            <th>${item._impuesto.deduccionesF}
            <th>${item.calcularImpuesto()}</th> 
        </tr> 
    `)
    })
    
    console.log(n)
}

let listaC=[]

$("form").submit((e)=>{
    e.preventDefault()

    let mBA1=new impuesto
    mBA1.montoBrutoA=$('#monto-anual').val()
    mBA1.deduccionesF=$('#deducciones').val()

    let nC1= new cliente($('#nombre-cliente').val(),mBA1)
    
    listaC.push(nC1)
    resultado(nC1)      
    $("form")[0].reset()
})




