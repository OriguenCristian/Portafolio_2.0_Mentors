let frutas =["Banana","Naranja","Manzana","Mango"]
let verduras =["Brocoli","Tomate","Apio","Pepinillo"]
let ListaFrutas =document.getElementById("listaFrutas")
let ListaVerdura =document.getElementById("listaVerduras")


listaVerdura.innerHTML = verduras; 
ListaFrutas.innerHTML= frutas;

function agregarVerdura(){
    let verduraAdd = document.getElementById("addVerdura").value
        verduras.push(verduraAdd)
    return listaVerdura.innerHTML = verduras;
}

function quitarFruta(){
    let frutaAQuitar = document.getElementById("quitarFruta").value;
    let frutaEliminada = document.getElementById("frutaEliminada")

  for( let i =0; i < frutas.length; i++ ){
    if (frutaAQuitar == frutas[i]){
      frutas.splice(frutas[i],1)
      frutaEliminada.innerHTML = `la fruta eliminada es ${frutas[i]}`
    }
    

  }
  return ListaFrutas.innerHTML= frutas;
}
