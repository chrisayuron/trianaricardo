const productContainer=document.querySelector(".products")
export const pintar=(productos)=>{
    productos.forEach(product =>{
        const card=document.createElement('div')
        card.classList.add("card")
        card.style.backgroundImage=`URL("${product.photo}")`
        const cardInfo=document.createElement('div')
        cardInfo.classList.add("card__info")
        const cardName=document.createElement('p')
        cardName.classList.add("card__name")
        cardName.textContent=product.name
        const cardDescription=document.createElement('p')
        cardDescription.classList.add("card__description")
        cardDescription.textContent=product.description
        const cardPrice=document.createElement('p')
        if (!product.estado){
            cardPrice.textContent=`agotado`    
            cardPrice.classList.add("card__price-agotado")
        }else{
            cardPrice.textContent=`$ ${product.price}`
            cardPrice.classList.add("card__price")
        }
        cardInfo.append(cardName,cardDescription,cardPrice)
        card.appendChild(cardInfo)
        productContainer.appendChild(card)
        });
}