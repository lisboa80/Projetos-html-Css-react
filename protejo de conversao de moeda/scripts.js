const convertButton = document.querySelector('.convert-button')

const fromCurrencySelect = document.querySelector('.from-currency-select')
const currencySelect = document.querySelector('.currency-select')

const inputCurrency = document.querySelector('.input-currency')

const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
const currencyValueConverted = document.querySelector('.currency-value')

const fromCurrencyName = document.querySelector('.from-currency-name')
const fromCurrencyImage = document.querySelector('.from-currency-img')

const currencyName = document.getElementById('currency-name')
const currencyImage = document.querySelector('.currency-img')


// ======================================================
// COTAÇÕES
// Todos os valores abaixo representam quanto 1 unidade
// da moeda/ativo vale em Reais.
// ======================================================

const rates = {

    real: 1,

    dolar: 5.20,

    euro: 6.20,

    libra: 7.20,

    bitcoin: 500000,

    ethereum: 20000,

    ouro: 650,

    prata: 8
}


// ======================================================
// INFORMAÇÕES DAS MOEDAS
// ======================================================

const currencies = {

    real: {
        name: 'Real Brasileiro',
        image: './assets/real.png',
        locale: 'pt-BR',
        currency: 'BRL'
    },

    dolar: {
        name: 'Dólar Americano',
        image: './assets/dolar.png',
        locale: 'en-US',
        currency: 'USD'
    },

    euro: {
        name: 'Euro',
        image: './assets/euro.png',
        locale: 'de-DE',
        currency: 'EUR'
    },

    libra: {
        name: 'Libra Esterlina',
        image: './assets/libra.png',
        locale: 'en-GB',
        currency: 'GBP'
    },

    bitcoin: {
        name: 'Bitcoin',
        image: './assets/bitcoin.png',
        locale: 'en-US',
        currency: 'BTC'
    },

    ethereum: {
        name: 'Ethereum',
        image: './assets/ethereum.png',
        locale: 'en-US',
        currency: 'ETH'
    },

    ouro: {
        name: 'Ouro (grama)',
        image: './assets/ouro.png',
        locale: 'pt-BR',
        currency: 'BRL'
    },

    prata: {
        name: 'Prata (grama)',
        image: './assets/prata.png',
        locale: 'pt-BR',
        currency: 'BRL'
    }
}


// ======================================================
// FORMATAÇÃO DOS VALORES
// ======================================================

function formatValue(value, currency) {

    // Ouro e prata são mostrados em gramas
    if (currency === 'ouro' || currency === 'prata') {

        return `${value.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6
        })} g`
    }


    // Bitcoin e Ethereum
    if (currency === 'bitcoin' || currency === 'ethereum') {

        return value.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        })
    }


    // Moedas tradicionais
    return new Intl.NumberFormat(
        currencies[currency].locale,
        {
            style: 'currency',
            currency: currencies[currency].currency
        }
    ).format(value)
}


// ======================================================
// CONVERSÃO
// ======================================================

function convertValues() {

    const inputValue = Number(inputCurrency.value)

    const fromCurrency = fromCurrencySelect.value
    const toCurrency = currencySelect.value


    // Verifica se o usuário digitou um número válido
    if (isNaN(inputValue) || inputValue <= 0) {

        currencyValueToConvert.innerHTML = 'Digite um valor válido'

        currencyValueConverted.innerHTML = '0,00'

        return
    }


    // ==================================================
    // 1º PASSO
    // Converte a moeda de origem para Real
    // ==================================================

    const valueInReal = inputValue * rates[fromCurrency]


    // ==================================================
    // 2º PASSO
    // Converte o Real para a moeda escolhida
    // ==================================================

    const convertedValue = valueInReal / rates[toCurrency]


    // ==================================================
    // MOSTRA O VALOR DE ORIGEM
    // ==================================================

    currencyValueToConvert.innerHTML =
        formatValue(inputValue, fromCurrency)


    // ==================================================
    // MOSTRA O VALOR CONVERTIDO
    // ==================================================

    currencyValueConverted.innerHTML =
        formatValue(convertedValue, toCurrency)
}


// ======================================================
// ALTERA A MOEDA DE ORIGEM
// ======================================================

function changeFromCurrency() {

    const selectedCurrency = fromCurrencySelect.value

    const currency = currencies[selectedCurrency]


    fromCurrencyName.innerHTML = currency.name

    fromCurrencyImage.src = currency.image

    fromCurrencyImage.alt = `Logo do ${currency.name}`


    convertValues()
}


// ======================================================
// ALTERA A MOEDA DE DESTINO
// ======================================================

function changeCurrency() {

    const selectedCurrency = currencySelect.value

    const currency = currencies[selectedCurrency]


    currencyName.innerHTML = currency.name

    currencyImage.src = currency.image

    currencyImage.alt = `Logo do ${currency.name}`


    convertValues()
}


// ======================================================
// EVENTOS
// ======================================================

fromCurrencySelect.addEventListener(
    'change',
    changeFromCurrency
)

currencySelect.addEventListener(
    'change',
    changeCurrency
)

convertButton.addEventListener(
    'click',
    convertValues
)