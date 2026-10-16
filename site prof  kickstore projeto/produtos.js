// BANCO DE DADOS DE PRODUTOS E CONFIGURAÇÕES
const TELEFONE_WHATSAPP = "5511999999999"; // Digite seu número com DDD aqui

const produtos = [
  {
    id: 1,
    nome: "Tênis Nike Air Jordan 1 High",
    marca: "Nike",
    preco: "R$ 899,90",
    precoAntigo: "R$ 1.199,90",
    desconto: "-25%",
    imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    checkoutUrl: "https://seu-checkout.com/jordan1-high"
  },
  {
    id: 2,
    nome: "Tênis Adidas Yeezy Boost 350",
    marca: "Adidas",
    preco: "R$ 749,90",
    precoAntigo: "R$ 950,00",
    desconto: "-21%",
    imagem: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
    checkoutUrl: "https://seu-checkout.com/yeezy350"
  },
  {
    id: 3,
    nome: "Tênis Nike Dunk Low Retro",
    marca: "Nike",
    preco: "R$ 699,90",
    precoAntigo: "R$ 820,00",
    desconto: "-15%",
    imagem: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80",
    checkoutUrl: "https://seu-checkout.com/dunk-low"
  },
  {
    id: 4,
    nome: "Tênis Puma RS-X Bold",
    marca: "Puma",
    preco: "R$ 449,90",
    precoAntigo: "R$ 599,90",
    desconto: "-25%",
    imagem: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80",
    checkoutUrl: "https://seu-checkout.com/puma-rsx"
  },
  {
    id: 5,
    nome: "Tênis New Balance 9060",
    marca: "New Balance",
    preco: "R$ 849,90",
    precoAntigo: "R$ 999,90",
    desconto: "-15%",
    imagem: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80",
    checkoutUrl: "https://seu-checkout.com/nb-9060"
  },
  {
    id: 6,
    nome: "Tênis Adidas Forum Low",
    marca: "Adidas",
    preco: "R$ 499,90",
    precoAntigo: "R$ 649,90",
    desconto: "-23%",
    imagem: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80",
    checkoutUrl: "https://seu-checkout.com/forum-low"
  },
  {
    id: 7,
    nome: "Tênis Nike Air Force 1 '07",
    marca: "Nike",
    preco: "R$ 599,90",
    precoAntigo: "R$ 699,90",
    desconto: "-14%",
    imagem: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=600&q=80",
    checkoutUrl: "https://seu-checkout.com/airforce1"
  },
  {
    id: 8,
    nome: "Tênis Asics Gel-Kayano 29",
    marca: "Asics",
    preco: "R$ 679,90",
    precoAntigo: "R$ 899,90",
    desconto: "-24%",
    imagem: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
    checkoutUrl: "https://seu-checkout.com/asics-kayano"
  }
];