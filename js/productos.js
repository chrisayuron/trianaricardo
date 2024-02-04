import {listado} from "./listado.js"
import {pintar} from "./pintar.js"

const filtrar =document.querySelector("#select_product")
const productContainer=document.querySelector(".products")

pintar(listado)

filtrar.addEventListener('change',(e)=>{
    const categoria=e.target.value
    if(categoria==="todos"){
        pintar(listado)
    }else{
        const newListado=listado.filter(item=>item.categoria.includes(categoria))
        console.log(newListado)
        productContainer.innerHTML=""
        pintar(newListado)
    }
    window.scrollTo({top:0,left:0, behavior:"smooth"})
})
