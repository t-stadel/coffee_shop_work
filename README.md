# Coffee Shop App

This project is build as a coffee shop app for udacity students. <br>

There are different users with different permissions to access the app. <br>

The public access is to get the overview of the drinks of the coffee shop. <br>
In the drink details the barista can see the ingredients to prepare the
drink. <br>
The manager has access to create and update the drinks with its recipes and can
delete the drinks. <br>

The User-Management-Access includes showing, creating, updating and deleting
the managers and baristas. <br>

#### Drink-Permissions

| User           | view | view detail | create | update | delete |
|----------------|:----:|:-----------:|:------:|:------:|:------:|
| Public         |  *   |             |        |        |        |
| Barista        |  *   |      *      |        |        |        |
| Manager        |  *   |      *      |   *    |   *    |   *    |
| Administrator  |  *   |      *      |   *    |   *    |   *    |

#### User-Management-Permissions

| User           | Manage Baristas | Manage Mangers |
|----------------|:---------------:|:--------------:|
| Public         |                 |                |
| Barista        |                 |                |
| Manager        |        *        |                |
| Administrator  |        *        |       *        |

# Getting startet

# Backend - Coffeeshop

### Installing Dependencies for the Backend

1. **Python 3.7** - Follow instructions to install the latest version of python
   for your platform in
   the [python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python)


2. **Virtual Enviornment** - We recommend working within a virtual environment
   whenever using Python for projects. This keeps your dependencies for each
   project separate and organaized. Instructions for setting up a virual
   enviornment for your platform can be found in
   the [python docs](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)


3. **PIP Dependencies** - Once you have your virtual environment setup and
   running, install dependencies by naviging to the `/backend` directory and
   running:

```bash
pip install -r requirements.txt
```

This will install all of the required packages we selected within
the `requirements.txt` file.

4. **Key Dependencies**

- [Flask](http://flask.pocoo.org/) is a lightweight backend microservices
  framework. Flask is required to handle requests and responses.

- [SQLAlchemy](https://www.sqlalchemy.org/)
  and [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
  are libraries to handle the lightweight sqlite database. Since we want you to
  focus on auth, we handle the heavy lift for you in `./src/database/models.py`
  . We recommend skimming this code first so you know how to interface with the
  Drink model.

- [jose](https://python-jose.readthedocs.io/en/latest/) JavaScript Object
  Signing and Encryption for JWTs. Useful for encoding, decoding, and verifying
  JWTS.

### Running the server

Before running the server, check the [.env](./.env) file in the `root`
directory for correct parameters. <br>
Here you have to set the valid attributes from your
auth0-account: `AUT0_DOMAIN` `AUTH0_CLIENT_ID` `AUTH0_API_AUDIENCE` `AUTH0_ALGORITHMS` <br>
In this project the SQLite database is used to store your data.
The `DATABASE_FILENAME` is also to set in the .env file. <br>

To initialize the app (the first time), uncomment the line with the
function `db_drop_and_create_all()` in the [api.py](./backend/src/api.py). <br>

For Testcases check the variables in the
file [test_flaskr.py](./backend/test_flaskr.py).

From within the `backend/src` directory first ensure you are working using your
created virtual environment.

Each time you open a new terminal session, run:

| OS      | Command                                                        |
|---------|----------------------------------------------------------------|
| Linux   | `export FLASK_APP=api.py` <br> `export FLASK_ENV=developement` |
| Windows | `set FLASK_APP=api.py` <br> `set FLASK_ENV=developement`       |

To run the server, execute:

```bash
flask run --reload
or
python -m flask run --reload
```

### The `--reload` flag will detect file changes and restart the server automatically.

> _Important:_<br>
> After running the app, comment out the line with the function `db_drop_and_create_all()` in the [api.py](./backend/src/api.py). <br>
> (If not, the database will be initialized on every new server start. Your data will be lost!).

---

# Frontend - Coffeeshop

### Getting Setup

> _Tip_: <br>
> This frontend is designed to work with [Flask-based Backend](./backend). <br>
> It is recommended you stand up the backend first. <br>
> Then use Postman and test the functionality that there are no errors. <br>
> Therefore import the postman collection `udacity-fsnd-udaspicelatte.postman_collection.json`, stored in the [backend-directory](./backend). <br>
> Click the collection folders: *barista*, *manager* and *admin*. Here set the working JWT token for each role in the authorization tab. (Type: Bearer Token) <br>
> If the postman collection works fine then the frontend should integrate smoothly.<br>
> Otherwise restart the backend and clean up the errors. Please note that you have to reinitialize the database for this.

### Installing Dependencies

1. **Installing Node and NPM**<br>
   This project depends on Nodejs and Node Package Manager (NPM). Before
   continuing, you must download and install Node (the download includes NPM)
   from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

2. **Installing Ionic Cli**<br>
   The Ionic Command Line Interface is required to serve and build the
   frontend. Instructions for installing the CLI is in
   the [Ionic Framework Docs](https://ionicframework.com/docs/installation/cli)
   .

3. **Installing project dependencies**<br>
   This project uses NPM to manage software dependencies. NPM Relies on the
   package.json file located in the `frontend` directory of this repository.
   After cloning, open your terminal and run:

```bash
npm install
```

> _tip_: **npm i** is shorthand for **npm install**

## Required Tasks

### Configure Environment Variables

Ionic uses a configuration file to manage environment variables. These
variables ship with the transpiled software and should not include secrets.

- Open `./src/environments/environments.ts` and ensure each variable reflects
  the system you stood up for the backend.

## Running Your Frontend in Dev Mode

Ionic ships with a useful development server which detects changes and
transpiles as you work. The application is then accessible through the browser
on a localhost port. To run the development server, cd into the `frontend`
directory and run:

```bash
ionic serve
```

> _tip_: Do not use **ionic serve** in production. Instead, build Ionic into a build artifact for your desired platforms.
> [Checkout the Ionic docs to learn more](https://ionicframework.com/docs/cli/commands/build)


---

# API - Reference

This is the `backend-base-URl` of our API: `http://localhost:5000/` <br>
The default `frontend-base-URl` is `http://localhost:8100`<br>

## Errors

The response-codes of errors are:<br>
`400` - `Bad request` <br>
`404` - `Resource not found` <br>
`405` - `Method not allowed` <br>
`409` - `Conflict` <br>
`422` - `Unprocessable` <br>
`500` - `Server error`

The response-codes of authentication-errors are:<br>
`400` - `Permissions not included in jwt.` <br>
`400` - `Unable to parse authentication token.` <br>
`400` - `Unable to find the appropiate key.` <br>
`401` - `Authorization header is expected.` <br>
`401` - `Authorization header must start with "Bearer".` <br>
`401` - `Token not found.` <br>
`401` - `Authorization header must be bearer token.` <br>
`401` - `Authorization malformed. (Invalid Header)` <br>
`401` - `Incorrect claims. Please, check the audience and issuer.` <br>
`401` - `Problem with jwt token` <br>
`401` - `Token expired.` <br>
`403` - `You dont have the permission.` <br>

---

## Error codes - Error responses - Examples

### Error 400 - "Bad request"

````json
{
  "success": false,
  "error": 400,
  "message": "Bad request"
}
````

### Error 404 - "Resource not found"

````json
{
  "success": false,
  "error": 404,
  "message": "Resource not found"
}
````

### Error 401 - "Authorization header is expected."

````json
{
  "success": false,
  "error": 401,
  "message": "Authorization header is expected."
}
````

### Error 403 - "You dont have the permission."

````json
{
  "success": false,
  "error": 403,
  "message": "You dont have the permission."
}
````

___

# Resource endpoint library

## Drinks

### Get drinks

| Description  | Url                                 |
|--------------|-------------------------------------|
| Method       | `GET`                               |
| Usage        | `http://localhost:5000/drinks`      |
| Example      | `http://localhost:5000/drinks`      |
| curl example | `curl http://localhost:5000/drinks` |

General:

* Returns the success value and all drinks with the short description of the recipe

#### Response

````json
{
  "drinks": [
    {
      "id": 3,
      "recipe": [
        {
          "color": "ghostwhite",
          "parts": 4
        },
        {
          "color": "#EEEBE0",
          "parts": 1
        },
        {
          "color": "#331B03FF",
          "parts": 1
        }
      ],
      "title": "Chocolate"
    },
    {
      "id": 4,
      "recipe": [
        {
          "color": "#562C0DFF",
          "parts": 2
        },
        {
          "color": "ghostwhite",
          "parts": 1
        }
      ],
      "title": "Latte"
    }
  ],
  "success": true
}

````

---

### Get drinks detail

| Description  | Url                                                                                                                               |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Method       | `GET`                                                                                                                             |
| Usage        | `http://localhost:5000/drinks-detail`                                                                                             |
| Example      | `http://localhost:5000/drinks-detail`                                                                                             |
| curl example | `curl http://localhost:5000/drinks-detail -H "Content-Type: application/json" -H "Authorization: Bearer >>Your JWT Token here<<"` |

General:

* Returns the success value and all drinks with the full description of the recipe

#### Response

````json
{
  "drinks": [
    {
      "id": 3,
      "recipe": [
        {
          "color": "ghostwhite",
          "name": "milk",
          "parts": 4
        },
        {
          "color": "#EEEBE0",
          "name": "sugar (2 tbsp)",
          "parts": 1
        },
        {
          "color": "#331B03FF",
          "name": "bittersweet chocolate (4 oz)",
          "parts": 1
        }
      ],
      "title": "Chocolate"
    },
    {
      "id": 4,
      "recipe": [
        {
          "color": "#562C0DFF",
          "name": "Espresso",
          "parts": 2
        },
        {
          "color": "ghostwhite",
          "name": "Milk",
          "parts": 1
        }
      ],
      "title": "Latte"
    }
  ],
  "success": true
}
````

---

### Create a new drink

| Description  | Url                                                                                                                                                                                                                                                    |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Method       | `POST`                                                                                                                                                                                                                                                 |
| Usage        | `http://localhost:5000/drinks`                                                                                                                                                                                                                         |
| Example      | `http://localhost:5000/drinks`                                                                                                                                                                                                                         |
| curl example | `curl -X POST` <br> `-H "Content-Type: application/json"` <br> `-H "Authorization: Bearer >>Your JWT Token here<<"` <br> `-d '{"title": "Water", "recipe": [ {"name": "Water", "color": "blue", "parts": 1} ] }'`  <br> `http://localhost:5000/drinks` |

General:

* Returns a success value, and the details of the created drink (id, title and recipe)

#### Response

````json
{
    "drink": {
        "id": 5,
        "recipe": [
            {
                "color": "blue",
                "name": "Water",
                "parts": 1
            }
        ],
        "title": "Water"
    },
    "success": true
}
````

---

### Update an existing drink

| Description  | Url                                                                                                                                                                                            |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Method       | `PATCH`                                                                                                                                                                                        |
| Usage        | `http://localhost:5000/drinks/<drink-id>`                                                                                                                                                      |
| Example      | `http://localhost:5000/drinks/5`                                                                                                                                                               |
| curl example | `curl -X PATCH` <br> `-H "Content-Type: application/json"` <br> `-H "Authorization: Bearer >>Your JWT Token here<<"` <br> `-d '{"title": "Table Water"}'`  <br> `http://localhost:5000/drinks` |

General:

* Returns a success value, and the details of the updated drink (id, title and recipe)

#### Response

````json
{
    "drinks": [
        {
            "id": 5,
            "recipe": [
            {
                "color": "blue",
                "name": "Water",
                "parts": 1
            }
        ],
            "title": "Table Water"
        }
    ],
    "success": true
}
````

---

### Delete an existing drink

| Description  | Url                                                                                                                                    |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Method       | `DELETE`                                                                                                                               |
| Usage        | `http://localhost:5000/drinks/<drink_id>`                                                                                              |
| Example      | `http://localhost:5000/drinks/2`                                                                                                       |
| curl example | `curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer >>Your JWT Token here<<" http://localhost:5000/drinks/2` |

General:

* Returns a success value, the id of the deleted drink

#### Response

````json
{
  "success": true,
  "deleted": "2"
}
````

---

## User-Management

> _Information:_ <br>
> The following endpoints are equal for "managers" and "baristas". In the description are "managers" used. <br>
> You only have to differentiate these in the URl. `http://localhost:5000/managers` or `http://localhost:5000/baristas` <br>
> Please note, that the access is limited (Managers can only be managed by administrators. Baristas can be managed by administrators and managers.) <br>
> Baristas don't have the permission to manage users.

### Get all managers (baristas)

| Description              | Url                                                                                     |
|--------------------------|-----------------------------------------------------------------------------------------|
| Method                   | `GET`                                                                                   |
| Usage                    | `http://localhost:5000/managers`                                                        |
| Example                  | `http://localhost:5000/managers`                                                        |
| Example with page number | `http://localhost:5000/managers`                                                        |
| curl example             | `curl -H "Authorization: Bearer >>Your JWT Token here<< http://localhost:5000/managers` |

General:

* Returns a success value and a list of all managers (or baristas) with their email and id

#### Response

````json

{
    "managers": [
        {
            "email": "manager1@email.com",
            "id": "151515"
        },
        {
            "email": "manager2@email.com",
            "id": "262626"
        }
    ],
    "success": true
}
````

---

### Get a single manager or barista

| Description  | Url                                                                                                              |
|--------------|------------------------------------------------------------------------------------------------------------------|
| Method       | `GET`                                                                                                            |
| Usage        | `http://localhost:5000/managers/<manager_id>`                                                                    |
| Example      | `http://localhost:5000/managers/6133606d8ffb740071d9e8f5`                                                        |
| curl example | `curl -H "Authorization: Bearer >>Your JWT Token here<< http://localhost:5000/managers/6133606d8ffb740071d9e8f5` |

General:

* Returns a success value and the id and email of the manager or barista

#### Response

````json
{
    "manager": [
        {
            "email": "manager1@email.com",
            "id": "6133606d8ffb740071d9e8f5"
        }
    ],
    "success": true
}
````

---

### Create a new manager or barista

| Description  | Url                                                                                                                                                                                                                                      |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Method       | `POST`                                                                                                                                                                                                                                   |
| Usage        | `http://localhost:5000/managers`                                                                                                                                                                                                         |
| Example      | `http://localhost:5000/managers`                                                                                                                                                                                                         |
| curl example | `curl -X POST`<br> `-H "Content-Type: application/json"` <br> `-H "Authorization: Bearer >>Your JWT Token here<<"` <br> `-d '{"email": "TheVeryNewManagers@mail.com", "password": "myVeryTopSecretKey"}' http://localhost:5000/managers` |

General:

* Returns the success value, the id and the email address of the created manager/barista

#### Response

````json
{
    "manager": [
        {
            "email": "TheVeryNewManagers@mail.com",
            "id": "989898"
        }
    ],
    "success": true
}

````

---

### Update an existing manager or barista

| Description  | Url                                                                                                                                                                                                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Method       | `PATCH`                                                                                                                                                                                                                                                                              |
| Usage        | `http://localhost:5000/managers/<manager_id>`                                                                                                                                                                                                                                        |
| Example      | `http://localhost:5000/managers/6133606d8ffb740071d9e8f5`                                                                                                                                                                                                                            |
| curl example | `curl -X PATCH`<br> `-H "Content-Type: application/json"` <br> `-H "Authorization: Bearer >>Your JWT Token here<<"` <br> `-d '{"email": "MyAbsolutelyNewManagerMailAddress@mail.com", "password": "myNewVeryTopSecretKey"}' http://localhost:5000/managers/6133606d8ffb740071d9e8f5` |

General:

* Returns the success value, the id and the email address of the updated manager/barista

#### Response

````json
{
    "manager": [
        {
            "email": "MyAbsolutelyNewManagerMailAddress@mail.com",
            "id": "6133606d8ffb740071d9e8f5"
        }
    ],
    "success": true
}

````

---

### Delete manager or barista

| Description  | Url                                                                                                                         |
|--------------|-----------------------------------------------------------------------------------------------------------------------------|
| Method       | `DELETE`                                                                                                                    |
| Usage        | `http://localhost:5000/managers/<manager_id>`                                                                               |
| Example      | `http://localhost:5000/managers/6133606d8ffb740071d9e8f5`                                                                   |
| curl example | `curl -X DELETE -H "Authorization: Bearer >>Your JWT Token here<<" http://localhost:5000/managers/6133606d8ffb740071d9e8f5` |

General:

* Returns the success value and the id of the deleted manager/barista
 
#### Response

````json
{
    "manager": "6133606d8ffb740071d9e8f5",
    "success": true
}

````



---
# Authors
---
The app is based on a template of udacity.

