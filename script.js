const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de Coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    },
]

let products = []

let body     = document.querySelector("body")
let main    = document.createElement("main")
let section = document.createElement("section")
let ul      = document.createElement("ul")

section.classList.add("produtos")

function carrinhoCompras(lista){

    for(let i = 0; i < lista.length;i++){
    products.push(lista[i])
    
 
    let li      = document.createElement("li")
    let name    = document.createElement("p")
    let price   = document.createElement("p")
    
    name.innerText  = products[i].name
    price.innerText = `R$ ${products[i].price}`.replace(".",",")

    body.appendChild(main)
    main.appendChild(section)
    section.appendChild(ul)
    ul.appendChild(li)
    li.appendChild(name)
    li.appendChild(price)
    }
}
console.log(products)

carrinhoCompras(productsCart)

let valores  = []
let totalSoma = 0

function total(lista){
    for(let i = 0; i < lista.length;i++){
    valores.push(lista[i].price)
    totalSoma += valores[i]
    }
return totalSoma
}

let precoTotal = total(productsCart)


function cardTotal(total){

let btnFinalizar   = document.createElement("section")
let div            = document.createElement("div")
let resultadoTotal = document.createElement("p")
let subTotal       = document.createElement("p")
let divBtn         = document.createElement("div")
let btn            = document.createElement("button")

resultadoTotal.innerText = "Total"
subTotal.innerText       = `R$ ${total}`.replace(".",",")
btn.innerText            = "Finalizar compra"

btnFinalizar.classList.add("cardTotal")
divBtn.classList.add("button")
div.classList.add("soma")

main.appendChild(btnFinalizar)
btnFinalizar.appendChild(div)
div.appendChild(resultadoTotal)
div.appendChild(subTotal)
main.appendChild(divBtn)
divBtn.appendChild(btn)
}

cardTotal(precoTotal)