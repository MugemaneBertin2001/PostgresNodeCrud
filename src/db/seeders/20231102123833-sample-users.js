'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'janesmith@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Michael',
        lastName: 'Johnson',
        email: 'michael@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Emily',
        lastName: 'Brown',
        email: 'emily@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'David',
        lastName: 'Wilson',
        email: 'david@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Sophia',
        lastName: 'Jones',
        email: 'sophia@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'James',
        lastName: 'Lee',
        email: 'james@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Olivia',
        lastName: 'Clark',
        email: 'olivia@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Daniel',
        lastName: 'Martinez',
        email: 'daniel@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Ava',
        lastName: 'Garcia',
        email: 'ava@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ]
    )
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {})
    
  }
};
