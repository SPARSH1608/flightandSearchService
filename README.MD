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

    - Once you've added your db config as listed above , go to the src folder  from your
    terminal and execute ` npx sequelize db: create ` and then execute ` npx sequelize db:migrate`

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

## TABLES

## City -> id, name , created_at, updated_at

### Airport -> id , name, address , city_id, created_at, updated_at

    Relationship-> city has many airports and Airport belongs to a city(one to many)
    city doesnt store any info about airport but every airport has a col of city_id so that when we want to have all airports of a city
    we does a where query and filter out

# how to create seed files

    npx sequelize seed:generate --name add-airplanes

# Creating flights model

    npx sequelize model:generate --name Flights --attributes flightNumber:String,airplaneId:integer,departureAirportId:intger,arrivalAirportId:integer,arrivalTime:DateTime,departureTime:DateTime,price:integer,boardingGate:String,duration:integer,totalSeats:integer

# Other Services Links

[FlightSearchService](https://github.com/SPARSH1608/flightandSearchService)

[AirTicketBookingService](https://github.com/SPARSH1608/AirTicketBookingService)

[AuthService](https://github.com/SPARSH1608/Auth_service)

[ReminderService](https://github.com/SPARSH1608/ReminderService)
