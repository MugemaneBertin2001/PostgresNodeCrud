
# PostgresNodeCrud

PostgresNodeCrud is a simple Node.js application that uses Sequelize and PostgreSQL to perform CRUD (Create, Read, Update, Delete) operations on a database. It serves as a basic example for building a RESTful API with Node.js and PostgreSQL.

## Features

- Create, read, update, and delete operations for a PostgreSQL database.
- Express.js for routing.
- Sequelize for database interaction.
- Pre-configured environment variables for database configuration.
- Example routes for handling user data.
- Minimal setup for quick development.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (v12 or higher).
- PostgreSQL database server installed and running.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MugemaneBertin2001/PostgresNodeCrud.git
   cd PostgresNodeCrud
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your PostgreSQL database and update the database configuration in `config/config.json`.

4. Run the migration to create database tables:

   ```bash
   npx sequelize db:migrate
   ```

5. Start the application:

   ```bash
   npm start
   ```

The API will be available at `http://localhost:3000/postgres`.

## Usage

- Create a user: `POST /users`
- Retrieve all users: `GET /users`
- Retrieve a single user: `GET /users/:id`
- Update a user: `PUT /users/:id`
- Delete a user: `DELETE /users/:id`

## Configuration

You can configure the application by setting the following environment variables:

- `DATABASE_URL`: The PostgreSQL database connection URL.
- `PORT`: The port on which the application will run.

## Contributing

Feel free to contribute to this project. You can open issues and create pull requests to help improve it.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

