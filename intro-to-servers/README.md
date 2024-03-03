# HOTH XI - Intro to Servers

**Date**: March 3rd, 2024

**Teacher**: [Samuel Perrott](https://github.com/SPerrott22)

**Resources**:

- [Slides](https://docs.google.com/presentation/d/1RRLdpQPd8cEvC-9tqNKD9qUO08CcmGYJo30rTwJiQkU/edit?usp=sharing)
- [Workshop Recording](https://drive.google.com/file/d/1B15A9H4GUWSNhagBk6XYZWyCs0A2K3cj/view?usp=sharing)

## Overview

- [Servers](#servers)
- [Clients](#clients)
- [CRUD](#crud)
  - [HTTP Requests](#http-requests)
  - [HTTP Responses](#http-responses)
- [JSON](#json)
- [DEMO](#demo)

Nota Bene: This workshop will be using Python and JavaScript to create a server and client, respectively. If you are unfamiliar with these languages, it is recommended to familiarize yourself with them before continuing. Feel free to check out the Intro to HTML/CSS/JS workshop for a refresher on JavaScript!

## Servers

What is a server?

The first thing that may come to mind is a ~~minecraft server~~ waiter at a restaurant, but in the context of technology, a server is something slightly (although not entirely) different.

Hardware-wise, a server is a computer that is always on. These servers are stored in data centers and are used to store and manage data, host websites, and run applications. For example, many websites are hosted on Google Cloud, which is a collection of servers that Google owns and maintains.

Software-wise, a server is a program that provides services to other programs or devices. This can be a web server, which hosts webpages, or a database server, which stores and manages data.

## Clients

What is a client?

A client is a program or device that makes a request to a server for a specific resource or service. This can be a web browser, which requests webpages from a web server, or a mobile app, which requests data from a database server.

For instance, when you watch lecture recordings via Bruinlearn, your web browser is the client and Kaltura's server is the computer that hosts the lecture recordings.

If you pay attention to your browser's developer tools "Network" tab when you load a webpage, you can see all the requests that your browser makes to the server to load the webpage.

Generally, the client is the frontend / user-facing side of an application while the server is part of the backend / server-side of an application.

## CRUD

In our case, we will be creating a server that will handle requests to perform CRUD operations on a database.

CRUD stands for Create, Read, Update, and Delete, which are the four basic operations that can be performed on a database.

Your application will likely need its own data store to keep track of users, posts, comments, etc. This is where CRUD operations come in handy.

### HTTP Requests

We can perform CRUD operations on a database through HTTP requests.

An HTTP request consists of three parts: a request line, optional headers, and an optional body.

```HTTP
POST /plants HTTP/1.1
Host: localhost:8000
Content-Type: application/json
Cache-Control: no-cache

{
     "Name": "Sea Fig",
     "Type": "invasive species",
     "Age": 2,
}
```

The request line takes the following form:

`HTTP-METHOD URI/ENDPOINT HTTP-PROTOCOL`

in our case:

`POST /plants HTTP/1.1`

There are several HTTP methods (see [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)) - but the four main ones you'll need are GET, POST, PUT, and DELETE.

- `GET` is used to read data from the database.
- `POST` is used to add new data to the database.
- `PUT` is used to update a an item in the database.
- `DELETE` is used to delete something from the database.

The URI/ENDPOINT is the path to the place where you want to perform a request on the server. A URL is a specific type of URI that identifies a resource available on the internet. Your URI will likely be on localhost, as you are testing your server locally.

The HTTP protocol is the version of HTTP you are using. The version will not affect how you interact with an HTTP API, but newer HTTP versions tend to be faster and more secure.

The headers are key-value pairs that provide information about the request, and the body of an HTTP request will contain the data that you want to send to the server (for instance, in a POST or PUT request).

### HTTP Responses

An HTTP response is similar to a request and contains three parts: a status line, headers, and an optional body.

```HTTP
HTTP/1.1 200 OK
Date: Wed, 10 Aug 2016 23:26:07 GMT
Server: Apache
Accept-Ranges: bytes
Content-Length: 68894
Content-Type: text/html; charset=UTF-8

<!doctype html><html …
```

The status line takes the following form:
`HTTP-PROTOCOL STATUS_CODE STATUS_MESSAGE`

The three-digit status codes follow the format:

- `1xx`: informational
- `2xx`: successful
- `3xx`: redirection
- `4xx`: client-side error
- `5xx`: server-side error

You can find the full list of status codes [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Anything in the 200s is a successful response, and anything in the 400s or 500s is an unsuccessful response.

The headers are key-value pairs that provide information about the response, and the body of an HTTP response will contain the data that you requested from the server.

## JSON

The body of an HTTP Request / Response can be in many formats such as XML, YAML, HTML, images, etc., but we will mostly be dealing with JSON. JSON integrates nicely with JavaScript and is essentially the same as a Python dictionary where the keys have to be strings.

HTTP Body Example (JSON):

```JSON
{
    "Name": "Spiny Ephedra",
    "Habitat": "Desert",
    "Perennial": true,
    "Uses": ["Medicine", "Tea"],
    "Image": "https://www.fs.fed.us/wildflowers/plant-of-the-week/images/spinyephedra/spinyephedra_1.jpg",
    "Age": 21,
    "Relatives": {
        "Genus": "Ephedra",
        "Family": "Ephedraceae"
    }
}
```

## DEMO

Let's go ahead and create an example server with Flask and connect it to a React frontend.

Flask is a popular framework used to build servers. It is written in Python and is easy to use and understand, making it a great tool for beginners to learn how to build server APIs.

Things you will need to have beforehand:

- [VSCode](https://code.visualstudio.com/Download)
  - [Postman Extension](https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode)
- [Node.js](https://nodejs.org/en/download/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React](https://reactjs.org/docs/getting-started.html)
- [Python](https://www.python.org/downloads/)

To get started, create a new directory/folder for our app.

```shell
mkdir demo-app
cd demo-app
```

We will have two folders inside our `demo-app` folder: one for the server and one for the client. Let's first create the backend folder (which will store our server and - in your case - may also include a database).

```shell
mkdir backend
cd backend
```

Now, let's create a new Python virtual environment to install Flask in.

```shell
python3 -m venv venv
source venv/bin/activate
```

Ok, let's install Flask and the other packages we will need.

```shell
pip install flask flask-restful flask-cors
```

Cool! Now we have Flask installed in our virtual environment. Let's create a new file called `app.py` and open it in your text editor.

```shell
touch app.py
code .
```

We'll start off with following boilerplate code for our server:

```python
from flask import Flask, request
from flask_restful import Api, Resource, abort, reqparse
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)  # Will be used to add endpoints to our server
CORS(app)  # Allows our frontend to communicate with our server

### Your code here ###

if __name__ == '__main__':
    app.run(debug=True)
```

This code initializes a Flask app and an API, and sets up CORS (Cross-Origin Resource Sharing) to allow our server to communicate with our React frontend. The last line allows us to run the file as a script and starts the server in debug mode.

Usually, now is when you would connect your server to a database (check out this [article](https://medium.com/@choihalim/python-building-restful-apis-with-flask-and-sqlalchemy-4bd0997bae3a) for an example of connecting to a SQL databse or this [article](https://betterprogramming.pub/api-development-in-python-with-flask-resful-and-mongodb-71e56a70b3a6) for an example of connecting to a No-SQL database), but for this example, we will just use a dictionary to store our data.

```python
PLANTS = {
    1: {'name': 'Ginko', 'type': 'tree', 'age': 3.0},
    2: {'name': 'Kelp', 'type': 'seaweed', 'age': 1.2},
    3: {'name': 'Cactus', 'type': 'succulent', 'age': 5.0},
    4: {'name': 'Fern', 'type': 'fern', 'age': 2.0},
}
```

This dictionary simulates a typical table that has items with a primary key (unique id) and other columns. The keys will be the plant IDs, and the values will be dictionaries containing the plant's name, type, and age.

Let's add some endpoints to our server to interact with this data. First, we will add a GET endpoint to get a list of all the plants in our database.

When making a RESTful API, we want our endpoints to refer to resources, not actions. For example, instead of having an endpoint like `/get-plants`, we would have an endpoint like `/plants`. For every resource, we will define a class that inherits from `Resource` and add it to our API.

```python
class PlantList(Resource):
    def get(self):
        return list(PLANTS.values()), 200

api.add_resource(PlantList, '/plants')
```

Here, we define a class `PlantList` that inherits from `Resource` and has a method `get` that returns a list of all the plants in our database. The first return value is the JSON body of our HTTP response and the second is the status code. `200` is used to indicate that the request was successful. Optional headers could be placed in a third return value. We then add this class to our API with the endpoint `/plants`.

At this point, our `app.py` is already a fully functioning server that can handle GET requests to the `/plants` endpoint.

You can run the server by typing the following in your terminal (make sure you are in the `backend` folder):

```shell
python app.py
```

If you browse to `http://localhost:5000/plants`, you should see a JSON list of all the plants in our database.

```JSON
[
    {
        "name": "Ginko",
        "type": "tree",
        "age": 3.0
    },
    {
        "name": "Kelp",
        "type": "seaweed",
        "age": 1.2
    },
    {
        "name": "Cactus",
        "type": "succulent",
        "age": 5.0
    },
    {
        "name": "Fern",
        "type": "fern",
        "age": 2.0
    }
]
```

What if we wanted to add a new plant to our database? We would use a POST request to the `/plants` endpoint.

We would also need to specify the name, type, and age of the plant we want to add. We can do this by sending a JSON body with our request.

In order to parse the JSON body of our request, we will use the `reqparse` module from Flask-RESTful.

```python
parser = reqparse.RequestParser()
parser.add_argument('name')
parser.add_argument('type')
parser.add_argument('age', type=float)
```

Now we can add a new method to our `PlantList` class to handle a POST request.

```python
    def post(self):
        args = parser.parse_args()
        plant_id = max(PLANTS.keys()) + 1
        PLANTS[plant_id] = {'name': args['name'], 'type': args['type'], 'age': args['age']}
        return PLANTS[plant_id], 201
```

This method will parse the JSON body of our request and add a new plant to our database with a unique id. The `201` status code is used to indicate that the request was successful and that a new resource was created.

Since this a request to the same endpoint, we don't need to add a new resource to our API. Just adding the method to our `PlantList` class is enough.

Now, suppose you want to make a POST request to `http://localhost:5000/plants` with a JSON body like this:

```JSON
{
    "name": "Rose",
    "type": "flower",
    "age": 0.5
}
```

To do this, type `>Postman: Create a new HTTP Request` in your VSCode search bar and select `POST` as the HTTP method. Then, enter `http://localhost:5000/plants` as the URL and select the `Body` tab under the URL input box. Change the body type from `raw` to `JSON` and enter the JSON body above. After that, you can hit send and Postman should output the body of the HTTP response and its status code at the bottom.

You can check to see if this plant is in our database by then making a GET request to `http://localhost:5000/plants`.

Yay, you've just created a server with Flask that can handle GET and POST requests! :tada:

As a challenge, try adding another endpoint to the server from which we can delete, update, or get information about a specific plant in the database. You can use the `parser` to parse the JSON body of the request and the `del` keyword to delete a key-value pair from a dictionary. Check out the solutions in the [`app.py`](intro-to-servers/demo/backend/app.py) file in this repository if you get stuck.

## Frontend

Now, let's create a React frontend to interact with our server.

In the terminal, navigate back to the `demo-app` folder and create a new folder for our frontend via:

```shell
npx create-react-app client
```

This will create a boiler plate React frontend in a folder called `client` inside our `demo-app` folder. Go ahead and replace the contents of the default `client/src/App.js` file with the code I've provided in the [`App.js`](intro-to-servers/App.js) file in this repository.

> Side Note:
>
> if you want to avoid typing the full URI, you can add the following key-value pair to your package.json file:
>
> ```JSON
> "proxy": "http://localhost:5000"
> ```
>
> This will allow you to make fetch requests to relative URIs. For example, instead of making a fetch request to `http://localhost:5000/plants`, you can make a fetch request to `/plants`.

Now, navigate to the `client` folder and start the React server:

```shell
cd client
npm start
```

You should see a webpage that displays a list of all the plants in our database and a form to add a new plant. If you add a new plant, it should appear in the list of plants (you may need to refresh the page).

Congratulations! You've just created a full-stack application with a server and a client! :tada:

To learn more about Flask-RESTful and why I used it instead of vanilla Flask, check out the [documentation](https://flask-restful.readthedocs.io/en/latest/).

## Happy Hacking! :computer:
