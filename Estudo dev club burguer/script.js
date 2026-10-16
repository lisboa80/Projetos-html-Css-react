const list = document.querySelector('ul')

const buttonShowAll = document.querySelector('.show-all')

const buttonMapAll = document.querySelector('.map-all')

const sumAll = document.querySelector('.sum-all')

const filterAll = document.querySelector('.filter-all')

function formatCurrency(value) {

    const newValue = value.toLocaleString('pt-br', {

        style: 'currency',

        currency: 'BRL',

    })

    return newValue

}

function showAll(productsArray) {

    let myli = ''

    productsArray.forEach((product) => {

        myli +=

            `<li>

     <img src=${product.src}>

     <p>${product.name}</p>

     <p class="item-price">R$ ${formatCurrency(product.price)}</p>

     </li>

           `

    })

    list.innerHTML = myli

}

function mapAllitems() {

    const newPrices = menuOptions.map((product) => ({

        ...product,

        price: product.price * 0.9,

    }))

    showAll(newPrices)

}

function sumAllitems() {

    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `<li> <p>Valor total dos intens e R$ ${formatCurrency(totalValue)}</p></li> `

}

function filterAllitems() {

    const filterjustvegan = menuOptions.filter((product) => product.vegan)

    showAll(filterjustvegan)

}

buttonShowAll.addEventListener('click', () => showAll(menuOptions));

buttonMapAll.addEventListener('click', mapAllitems);

sumAll.addEventListener('click', sumAllitems);

filterAll.addEventListener('click', filterAllitems)