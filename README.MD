# Welcome to Flights Services

## Project Setup

    -clone the project on your local
    -Execute `npm install` on same path as your root directory of the downloaded project
    -Create a .env file in root directory of the downloaded project and add following environment variables
    -Inside the  project `src/config/config.json` then add following information

````
        ```{
        "development": {
            "username": "root",
            "password": "SparshG@1608",
            "database": "flights_Search_DB_DEV",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "test": {
            "username": "root",
            "password": null,
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "production": {
            "username": "root",
            "password": null,
            "database": "database_production",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
        }
````

## folder structure

    - src/
        index.js //server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repository/

    -tests/[later]
    -static/
    -temp/

## DB design

    - Airplane Table
    - Flight Table
    - Airport Table
    - City Table

    - A flight belongs to an airplane but one airplane can be used in multiple flights
    - A city has many airports but one airport belongs to a city
    - One airport can have many flights but a flight belongs to one airport
