export const restaurantConfig = {
  name: "Churrasquinho da Vila",
  tagline: "Cozinha tradicional - diárias & takeaway",
  description: "O melhor sabor da cozinha regional e tradicional. Venha desfrutar de uma experiência gastronómica única em Riba de Ave.",
  heroText: "A sua satisfação é a nossa motivação!",
  aboutTitle: "Sobre nós",
  aboutText: [
    "O nosso restaurante, situado em Riba de Ave, oferece um ambiente acolhedor e familiar.",
    "A qualidade dos nossos ingredientes e o cuidado na preparação de cada prato são a nossa prioridade.",
    "Para garantir a variedade e frescura, os nossos pratos do dia mudam todas as semanas."
  ],
  address: {
    street: "Av. Narciso Ferreira N 292",
    city: "Riba de Ave",
    postalCode: "4765-202",
    country: "Portugal",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Av.+Narciso+Ferreira+N+292+Riba+De+Ave",
    embedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-8.38!3d41.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIzJzM0LjkiTiA4wrAyMycwMC4wIlc!5e0!3m2!1spt!2spt!4v1711234567890!5m2!1spt!2spt"
  },
  contact: {
    phone: "252 042 014 | 913 332 700",
    email: "churrasquinho.da.vilaribadeave@gmail.com",
    facebook: "https://www.facebook.com/profile.php?id=100063574236912",
    instagram: "https://www.instagram.com/churrasquinho.da.vila/"
  },
  hours: {
    lunch: "11:00 - 15:00",
    dinner: "18:00 - 23:00",
    days: "Terça a Domingo",
    closed: "Encerrado ao Domingo (jantar) e Segunda"
  },
  services: {
    title: "Takeaway & Entrega",
    subtitle: "Serviço de qualidade e entregas ao domicílio",
    description: "Para além do nosso serviço de sala, dispomos de um serviço de Takeaway completo e entrega.",
    items: [
      "Aos preços indicados acresce o custo de embalagem e saco (Lei em vigor)",
      "Encomendas: 252 042 014 / 913 332 700",
      "Dispomos de serviço de entrega ao domicílio"
    ]
  },
  menu: {
    carne_grelhados: [
      { name: "Frango", priceHalf: "3,50€", priceFull: "7,00€" },
      { name: "Frango da Guia", priceHalf: null, priceFull: "15,00€" },
      { name: "Costelinha na Brasa", priceHalf: "9,00€", priceFull: "15,00€" },
      { name: "Picanha na Brasa", priceHalf: "14,00€", priceFull: "24,00€" },
      { name: "Costeleta de Vitela", priceHalf: "12,00€", priceFull: "20,00€" },
      { name: "Costelão de Novilho", priceHalf: "13,00€", priceFull: "22,00€" },
      { name: "Grelhado Misto", priceHalf: "15,00€", priceFull: "25,00€" },
      { name: "Espetadas à nossa moda", priceHalf: "9,00€", priceFull: "14,00€" }
    ],
    carne_tradicional: [
      { name: "Arroz de Pato", priceHalf: "9,00€", priceFull: "14,00€" },
      { name: "Bife do Vazio", priceHalf: "12,00€", priceFull: "20,00€" },
      { name: "Carne à Alentejana", priceHalf: "9,00€", priceFull: "15,00€" },
      { name: "Rojões à Minhota", priceHalf: "9,00€", priceFull: "15,00€" },
      { name: "Lombo assado", priceHalf: "9,00€", priceFull: "15,00€" },
      { name: "Vitela assada", priceHalf: "10,00€", priceFull: "17,00€" },
      { name: "Naquinhos à Vila", priceHalf: "14,00€", priceFull: "24,00€" }
    ],
    carne_diversos: [
      { name: "Alheira de Mirandela", priceHalf: "9,00€", priceFull: "14,00€" },
      { name: "Panados", priceHalf: "9,00€", priceFull: "14,00€" },
      { name: "Lombinhos c/ Champignon", priceHalf: "9,00€", priceFull: "14,00€" },
      { name: "Panadinhos à Vila", priceHalf: "9,00€", priceFull: "14,00€" },
      { name: "Bife à Chefe", priceHalf: "9,00€", priceFull: "18,00€" },
      { name: "Prego no Prato", priceHalf: null, priceFull: "8,00€" },
      { name: "Francesinha à Vila", priceHalf: null, priceFull: "9,00€" }
    ],
    peixe: [
      { name: "Filetes de Pescada", priceHalf: "9,00€", priceFull: "18,00€" },
      { name: "Bacalhau Recheado", priceHalf: "15,00€", priceFull: "26,00€" },
      { name: "Bacalhau no Forno", priceHalf: "15,00€", priceFull: "28,00€" },
      { name: "Bacalhau c/ Broa", priceHalf: "15,00€", priceFull: "28,00€" }
    ],
    encomenda: [
      { name: "Lulas Grelhadas", price: "19,00€" },
      { name: "Polvo à Lagareiro", price: "25,00€" },
      { name: "Filetes de Polvo", price: "25,00€" },
      { name: "Bacalhau na Brasa", price: "26,00€" },
      { name: "Coelho na Brasa", price: "20,00€" },
      { name: "Cabrito", price: "Sob Consulta" },
      { name: "Pica no Chão", price: "20,00€" }
    ],
    acompanhamentos: [
      { name: "Arroz", priceHalf: "1,80€", priceFull: "2,50€" },
      { name: "Batata Frita", priceHalf: "1,80€", priceFull: "2,50€" },
      { name: "Feijão Preto", priceHalf: "1,80€", priceFull: "2,50€" },
      { name: "Legumes salteados", priceHalf: "1,80€", priceFull: "2,50€" },
      { name: "Salada Russa", priceHalf: "1,80€", priceFull: "2,50€" },
      { name: "Salada Mista", priceHalf: null, priceFull: "2,50€" },
      { name: "Sopa", priceHalf: null, priceFull: "1,80€" },
      { name: "Toscana", priceHalf: null, priceFull: "1,50€" }
    ]
  },
  seo: {
    keywords: "restaurante, cozinha regional, gastronomia, comida tradicional, reserva de mesa, eventos",
    author: "Nome da Agência / Empresa"
  },
  images: {
    logo: "/images/logo_new.png",
    hero: "/images/hero_grill.jpg",
    cover: "/images/hero_grill.jpg"
  }
};
