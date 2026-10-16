// LÓGICA DO CARROSSEL DE SLIDES
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
let slideInterval = setInterval(proximoSlide, 5000);

function mostrarSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function proximoSlide() {
  mostrarSlide(currentSlide + 1);
}

function mudarSlide(direcao) {
  clearInterval(slideInterval);
  mostrarSlide(currentSlide + direcao);
  slideInterval = setInterval(proximoSlide, 5000);
}

function irParaSlide(index) {
  clearInterval(slideInterval);
  mostrarSlide(index);
  slideInterval = setInterval(proximoSlide, 5000);
}

// RENDERIZADOR DE PRODUTOS
function renderizarProdutos(lista) {
  const container = document.getElementById('gridProdutos');
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;">Nenhum tênis encontrado nesta categoria.</p>`;
    return;
  }

  lista.forEach(prod => {
    container.innerHTML += `
      <div class="card-produto">
        <span class="tag-desconto">${prod.desconto}</span>
        <div class="img-box">
          <img src="${prod.imagem}" alt="${prod.nome}" loading="lazy">
        </div>
        <div>
          <span class="marca-tag">${prod.marca}</span>
          <h3 class="produto-nome">${prod.nome}</h3>
          <div class="avaliacao">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(5.0)</span>
          </div>
          <div class="preco-container">
            <span class="preco-atual">${prod.preco}</span>
            <span class="preco-antigo">${prod.precoAntigo}</span>
          </div>
        </div>
        <a href="${prod.checkoutUrl}" target="_blank" class="btn-checkout">
          <i class="fa-solid fa-bag-shopping"></i> Comprar Agora
        </a>
      </div>
    `;
  });
}

// FILTRAR MARCAS NO MENU LATERAL
function filtrarMarca(marca, elemento) {
  document.querySelectorAll('.marca-item').forEach(item => item.classList.remove('active'));
  if (elemento) elemento.classList.add('active');

  const tituloSecao = document.getElementById('titulo-secao');

  if (marca === 'Todas') {
    tituloSecao.innerText = "Todos os Tênis";
    renderizarProdutos(produtos);
  } else {
    tituloSecao.innerText = `Tênis ${marca}`;
    const filtrados = produtos.filter(p => p.marca.toLowerCase() === marca.toLowerCase());
    renderizarProdutos(filtrados);
  }
}

// CAMPO DE BUSCA
function filtrarProdutos() {
  const termo = document.getElementById('searchInput').value.toLowerCase();
  const filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(termo) ||
    p.marca.toLowerCase().includes(termo)
  );
  renderizarProdutos(filtrados);
}

// REDIRECIONAMENTO WHATSAPP IA
function abrirWhatsAppIA() {
  const mensagem = encodeURIComponent("Olá! Vim pelo site e gostaria de falar com a IA para tirar dúvidas e escolher o meu tênis.");
  window.open(`https://wa.me/${TELEFONE_WHATSAPP}?text=${mensagem}`, '_blank');
}

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  renderizarProdutos(produtos);
});