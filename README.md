# Sistem Kehadiran Online
- Ivan Fadhila (05111540000039)
- Muhammad Adib Arinanda (05111540000111)
- R. Sidqi Tri Priwi (05111540000153)

## Prerequisites

1. Node.js v11.0.0, along with npm v4.6.1. You  can download the LTS [here](https://nodejs.org/en/download/)
2. PostgreSQL v10.5

## Installation Notes

- Run postgresql on port 5432. Please create a postgresql user first other than postgres super-user.
You can refer to this guide to create a new postgresql user directly from CLI, [here](https://www.postgresql.org/docs/10/static/app-createuser.html).
Or you can login first into psql using superuser (postgres / Admin) and create new user from there, you can follow this guide [here](https://www.postgresql.org/docs/10/static/sql-createuser.html).
- Create the database that will be used for development, test, and production. The db names are:

  - DEVELOPMENT: `sik`
  - TEST: `sik`
  - PRODUCTION: `sik`
- Create  new file named `config.json` inside `/config` then add:

  ```
    {
    "development": {
        "username": "<your username>",
        "password": "<your password>",
        "database": "sik",
        "host": "127.0.0.1",
        "dialect": "postgres"
        },
    "test": {
        "username": "<your username>",
        "password": "<your password>",
        "database": "sik",
        "host": "127.0.0.1",
        "dialect": "postgres"
        },
    "production": {
        "username": "<your username>",
        "password": "<your password>",
        "database": "sik",
        "host": "127.0.0.1",
        "dialect": "postgres"
        }
    }

## Running using npm for Development

NOTES : Make sure all the prerequisites are already installed and running.

1. Clone this repository.
2. Navigate to the project directory.
3. Run `sequelize db:migrate` to migrate the migrations to the database.
4. Run `npm install` to download all the dependencies.
5. Run `npm start` to start the application.
6. Open your browser and go to `localhost:3000`

For the API Docs, you can check it [here](https://github.com/2019-pemrogramanberbasiskerangkakerja-g/sistem-kehadiran-online-menantu_idaman/tree/master/routes/api)