import {listado} from "./listado.js"

const productContainer=document.querySelector(".products")

listado.forEach(product =>{
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
cardPrice.classList.add("card__price")
cardPrice.textContent=`$ ${product.price}`
cardInfo.append(cardName,cardDescription,cardPrice)
card.appendChild(cardInfo)
productContainer.appendChild(card)
});

/* <div class="card">
                <div class="card__info">
                  <p class="card__name">Almedra</p>
                  <p class="card__description">Almendra x 250g y 500g</p>
                  <p class="card__price">$....</p>
              </div>
          </div> */