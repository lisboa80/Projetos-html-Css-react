// BOTÕES PARA TROCAR O TIPO DE SORTEIO

const botaoNumero = document.querySelector("#botao-numero")
const botaoPessoa = document.querySelector("#botao-pessoa")

const areaNumero = document.querySelector("#area-numero")
const areaPessoa = document.querySelector("#area-pessoa")


// ÁREA DO DADO

const dado = document.querySelector("#dado")


// BOTÃO SORTEAR

const botaoSortear = document.querySelector("#sortear")


// RESULTADO

const resultado = document.querySelector("#resultado")


// CAMPOS DE NÚMEROS

const numeroMinimo = document.querySelector("#numero-minimo")
const numeroMaximo = document.querySelector("#numero-maximo")


// PESSOAS

const listaPessoas = document.querySelector("#lista-pessoas")

const buscarPessoa = document.querySelector("#buscar-pessoa")

const listaNomes = document.querySelector("#lista-nomes")


// VARIÁVEL PARA SABER QUAL SORTEIO ESTÁ ATIVO

let tipoAtual = "numero"



// ==========================================
// BOTÃO SORTEAR NÚMERO
// ==========================================

botaoNumero.addEventListener("click", function () {

    tipoAtual = "numero"

    areaNumero.classList.remove("escondido")

    areaPessoa.classList.add("escondido")

    botaoNumero.classList.add("ativo")

    botaoPessoa.classList.remove("ativo")

})



// ==========================================
// BOTÃO SORTEAR PESSOA
// ==========================================

botaoPessoa.addEventListener("click", function () {

    tipoAtual = "pessoa"

    areaPessoa.classList.remove("escondido")

    areaNumero.classList.add("escondido")

    botaoPessoa.classList.add("ativo")

    botaoNumero.classList.remove("ativo")

})



// ==========================================
// MOSTRAR LISTA DE NOMES
// ==========================================

listaPessoas.addEventListener("input", mostrarNomes)


function mostrarNomes() {

    const pessoas = listaPessoas.value
        .split(",")
        .map(function (nome) {
            return nome.trim()
        })
        .filter(function (nome) {
            return nome !== ""
        })


    listaNomes.innerHTML = ""


    pessoas.forEach(function (pessoa) {

        listaNomes.innerHTML += `

            <div class="nome">
                ${pessoa}
            </div>

        `

    })

}



// ==========================================
// BUSCAR PESSOA
// ==========================================

buscarPessoa.addEventListener("input", function () {

    const busca = buscarPessoa.value.toLowerCase()

    const nomes = document.querySelectorAll(".nome")


    nomes.forEach(function (nome) {

        if (
            nome.innerText.toLowerCase().includes(busca)
        ) {

            nome.style.display = "block"

        } else {

            nome.style.display = "none"

        }

    })

})



// ==========================================
// BOTÃO REALIZAR SORTEIO
// ==========================================

botaoSortear.addEventListener("click", function () {


    // COMEÇA A GIRAR O DADO

    dado.classList.add("girando")


    // ESCONDE O RESULTADO DURANTE O SORTEIO

    resultado.innerHTML = "..."


    // ESPERA 2 SEGUNDOS

    setTimeout(function () {


        // PARA O DADO

        dado.classList.remove("girando")


        // =====================================
        // SORTEIO DE NÚMEROS
        // =====================================

        if (tipoAtual === "numero") {


            const minimo = Number(numeroMinimo.value)

            const maximo = Number(numeroMaximo.value)


            if (minimo >= maximo) {

                alert(
                    "O número máximo deve ser maior que o número mínimo!"
                )

                resultado.innerHTML = "?"

                return

            }


            const numeroSorteado =

                Math.floor(

                    Math.random() *

                    (maximo - minimo + 1)

                ) + minimo


            resultado.innerHTML = numeroSorteado

        }



        // =====================================
        // SORTEIO DE PESSOAS
        // =====================================

        if (tipoAtual === "pessoa") {


            const pessoas = listaPessoas.value

                .split(",")

                .map(function (nome) {

                    return nome.trim()

                })

                .filter(function (nome) {

                    return nome !== ""

                })


            // VERIFICA SE EXISTEM PESSOAS

            if (pessoas.length === 0) {

                alert(
                    "Digite pelo menos uma pessoa!"
                )

                resultado.innerHTML = "?"

                return

            }


            // ESCOLHE UMA PESSOA ALEATORIAMENTE

            const pessoaSorteada =

                pessoas[

                Math.floor(

                    Math.random() *

                    pessoas.length

                )

                ]


            resultado.innerHTML = pessoaSorteada

        }


    }, 2000)


})