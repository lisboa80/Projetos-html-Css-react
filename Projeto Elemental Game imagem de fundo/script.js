// Seleção dos elementos do HTML
const result = document.querySelector('#result-message')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

// Contadores para sequências consecutivas
let vitoriasSeguidas = 0
let derrotasSeguidas = 0

const playHuman = (humanChoice) => {
    // Efeito visual no botão clicado
    const botao = document.getElementById(humanChoice)
    if (botao) {
        botao.classList.add('clicked')
        setTimeout(() => botao.classList.remove('clicked'), 200)
    }

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['fogo', 'agua', 'planta']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine)

    // EMPATE
    if (human === machine) {
        vitoriasSeguidas = 0
        derrotasSeguidas = 0
        result.innerHTML = 'Deu empate! 😐'
    }
    // VITÓRIA DO JOGADOR
    else if (
        (human === 'fogo' && machine === 'planta') ||
        (human === 'agua' && machine === 'fogo') ||
        (human === 'planta' && machine === 'agua')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber

        vitoriasSeguidas++
        derrotasSeguidas = 0

        // Regra das vitórias: 1x = 😊 | 2x = 😎 | 3x ou mais = 🥳
        if (vitoriasSeguidas >= 3) {
            result.innerHTML = '3ª vitória,  Receba! Obrigado Pai! 🙅‍♂️'
        } else if (vitoriasSeguidas === 2) {
            result.innerHTML = 'Você ganhou de novo! 😎'
        } else {
            result.innerHTML = 'Você ganhou! 😊'
        }
    }
    // DERROTA DO JOGADOR
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber

        derrotasSeguidas++
        vitoriasSeguidas = 0

        // Regra das derrotas: 1x = 😢 | 2x = 😭 | 3x ou mais = 😡
        if (derrotasSeguidas >= 3) {
            result.innerHTML = 'Que raiva! Robô Xitado! 😡'
        } else if (derrotasSeguidas === 2) {
            result.innerHTML = 'Você perdeu de novo! 😭'
        } else {
            result.innerHTML = 'Você perdeu para o Robô! 😢'
        }
    }
}