// ========================================
// FORMULÁRIO
// ========================================

const formulario =
    document.querySelector(".formulario");

const mascara =
    document.querySelector(".mascara-formulario");


function mostrarForm() {

    formulario.style.left = "50%";

    formulario.style.transform =
        "translate(-50%, -50%)";

    mascara.style.visibility =
        "visible";

    mascara.style.opacity =
        "1";
}


function esconderForm() {

    formulario.style.left =
        "-500px";

    formulario.style.transform =
        "translateY(-50%)";

    mascara.style.visibility =
        "hidden";

    mascara.style.opacity =
        "0";
}


function enviarFormulario(evento) {

    evento.preventDefault();

    alert(
        "Mensagem enviada com sucesso! 🔥"
    );

    formulario.reset();

    esconderForm();
}


// ========================================
// PERSONAGENS
// ========================================

const modalPersonagem =
    document.querySelector(".modal-personagem");

const nomePersonagem =
    document.querySelector("#nome-personagem");

const descricaoPersonagem =
    document.querySelector("#descricao-personagem");


const personagens = {

    Goku: {
        descricao:
            "Son Goku é um guerreiro Saiyajin conhecido por sua força, determinação e vontade de superar seus próprios limites."
    },

    Vegeta: {
        descricao:
            "Vegeta é o príncipe dos Saiyajins. Orgulhoso e determinado, está sempre buscando alcançar novos níveis de poder."
    },

    Gohan: {
        descricao:
            "Gohan é filho de Goku e possui um enorme potencial. Quando precisa proteger aqueles que ama, seu poder pode atingir níveis incríveis."
    },

    Piccolo: {
        descricao:
            "Piccolo é um poderoso guerreiro Namekuseijin, conhecido por sua inteligência, experiência e técnicas de combate."
    }

};


function mostrarPersonagem(nome) {

    nomePersonagem.textContent =
        nome;

    descricaoPersonagem.textContent =
        personagens[nome].descricao;

    modalPersonagem.style.visibility =
        "visible";

    modalPersonagem.style.opacity =
        "1";

    document.querySelector(
        ".modal-conteudo"
    ).style.transform =
        "scale(1)";
}


function fecharPersonagem() {

    modalPersonagem.style.visibility =
        "hidden";

    modalPersonagem.style.opacity =
        "0";

    document.querySelector(
        ".modal-conteudo"
    ).style.transform =
        "scale(0.8)";
}


// ========================================
// TECLA ESC
// ========================================

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Escape") {

            esconderForm();

            fecharPersonagem();

        }

    }
);