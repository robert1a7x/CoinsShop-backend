'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'user',
        email: 'user@user.com',
        password: '123456',
        role: 'user',
        coins: 500,
      },
      {
        id: 2,
        name: 'admin',
        email: 'admin@admin.com',
        password: '123456',
        role: 'admin',
        coins: 9999,
      },
      ], { timestamps: false });
  },

  async down(queryInterface,) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
