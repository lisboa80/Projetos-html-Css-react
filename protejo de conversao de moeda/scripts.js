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
// Quanto 1 unidade da moeda/ativo vale em Reais.
// Os valores abaixo são de reserva e são atualizados pela API.
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

const GRAMS_PER_TROY_OUNCE = 31.1035


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
        symbol: '₿'
    },

    ethereum: {
        name: 'Ethereum',
        image: './assets/ethereum.png',
        symbol: 'Ξ'
    },

    ouro: {
        name: 'Ouro (grama)',
        image: './assets/ouro.png'
    },

    prata: {
        name: 'Prata (grama)',
        image: './assets/prata.png'
    }
}


// ======================================================
// BUSCA AS COTAÇÕES NA API
// ======================================================

async function loadRates() {

    const url = 'https://economia.awesomeapi.com.br/json/last/' +
        'USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL,ETH-BRL,XAU-BRL,XAG-BRL'

    try {

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`)
        }

        const data = await response.json()

        rates.dolar = Number(data.USDBRL.bid)
        rates.euro = Number(data.EURBRL.bid)
        rates.libra = Number(data.GBPBRL.bid)
        rates.bitcoin = Number(data.BTCBRL.bid)
        rates.ethereum = Number(data.ETHBRL.bid)

        // Ouro e prata vêm em onça troy, convertemos para grama
        rates.ouro = Number(data.XAUBRL.bid) / GRAMS_PER_TROY_OUNCE
        rates.prata = Number(data.XAGBRL.bid) / GRAMS_PER_TROY_OUNCE

        convertValues()

    } catch (error) {

        console.error('Não foi possível atualizar as cotações:', error)
        // Mantém os valores de reserva
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


    // Bitcoin e Ethereum (símbolo + formato brasileiro)
    if (currency === 'bitcoin' || currency === 'ethereum') {

        return `${currencies[currency].symbol} ${value.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        })}`
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

    // Campo vazio ou inválido vira 0, e valores negativos também
    const inputValue = Math.max(Number(inputCurrency.value) || 0, 0)

    const fromCurrency = fromCurrencySelect.value
    const toCurrency = currencySelect.value


    // 1º passo: converte a moeda de origem para Real
    const valueInReal = inputValue * rates[fromCurrency]

    // 2º passo: converte o Real para a moeda escolhida
    const convertedValue = valueInReal / rates[toCurrency]


    currencyValueToConvert.textContent = formatValue(inputValue, fromCurrency)

    currencyValueConverted.textContent = formatValue(convertedValue, toCurrency)
}


// ======================================================
// ALTERA A MOEDA DE ORIGEM
// ======================================================

function changeFromCurrency() {

    const currency = currencies[fromCurrencySelect.value]

    fromCurrencyName.textContent = currency.name

    fromCurrencyImage.src = currency.image

    fromCurrencyImage.alt = `Logo do ${currency.name}`

    convertValues()
}


// ======================================================
// ALTERA A MOEDA DE DESTINO
// ======================================================

function changeCurrency() {

    const currency = currencies[currencySelect.value]

    currencyName.textContent = currency.name

    currencyImage.src = currency.image

    currencyImage.alt = `Logo do ${currency.name}`

    convertValues()
}


// ======================================================
// EVENTOS
// ======================================================

fromCurrencySelect.addEventListener('change', changeFromCurrency)

currencySelect.addEventListener('change', changeCurrency)

convertButton.addEventListener('click', convertValues)

// Converte ao apertar Enter no campo de valor
inputCurrency.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') convertValues()
})


// ======================================================
// INICIALIZAÇÃO
// ======================================================

loadRates()

// Atualiza as cotações a cada 60 segundos
setInterval(loadRates, 60000)