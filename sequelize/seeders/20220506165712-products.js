'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('products',
      [{
        id: 1,
        name: 'Mouse Logitech',
        description: 'O G403 entra no ringue com a nova geração do sensor HERO 16K. Prepare-se para um mouse com rastreamento 1:1 no próximo nível, faixa de sensibilidade de 100-16.000 DPI e suavização, filtragem ou aceleração zero.',
        price: 90,
        image: 'https://a-static.mlcdn.com.br/618x463/mouse-gamer-logitech-usb-g403-hero-preto/primetek/020296/366059a129683a62bbdcc45958f69e9e.jpg',
        createdAt: new Date('2021-08-01T19:58:00.000Z'),
      },
      {
        id: 2,
        name: 'Teclado Redragon',
        description: 'Teclado Mecânico Gamer Redragon Kumara K552, Switch Blue, Com Led, ABNT2, Black.',
        price: 140,
        image: 'https://img.terabyteshop.com.br/archive/3643141585/teclado-redragon-kumara-led-k552-01.png',
        createdAt: new Date('2021-08-01T19:58:00.000Z'),
      },
      {
        id: 3,
        name: 'Headset Logitech',
        description: 'Ouça os inimigos se aproximando, detecte ataques aéreos e tudo mais ao seu redor. Fique totalmente imerso na jogo e ouça as trilhas sonoras épicas por completo',
        price: 140,
        image: 'https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/g635/g635-hero.png',
        createdAt: new Date('2021-08-01T19:58:00.000Z'),
      }
      ], { timestamps: false });
  },

  async down(queryInterface,) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
