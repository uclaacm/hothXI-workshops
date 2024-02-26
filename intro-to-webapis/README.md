# Intro to Web APIs

**Date**: March 3rd 2024

**Teacher**: [Kaylin Chung](https://github.com/kaylin-chung)

Hello! Welcome to HOTH XI's Intro to Web APIs workshop. This is a guide to introduce you to the foundations of Web APIs that will allow you to integrate them into any fullstack project. We will be covering the client-server model, HTTP requests & responses, and how we can leverage external servers to retrieve data and services for an app. Keep reading to learn more!

## Resources
- [Slides](http://tinyurl.com/yxxapev3)
- [Recording](TBD)

## Overview of Topics
- [The Client-Server Model](#the-client--server-model)
- [HTTP: The Language of Client-Server Communication](#http-the-language-of-client-server-communication)
- [What is an API?](#what-is-an-api?)
- [Demo: Building a React APP Using Unsplash API](#demo-building-a-react-app-using-unsplash-api)
  
## The Client-Server Model
The client-server model is a fundamental architecture that forms the basis for most web interactions, including those involving Web APIs. In this model:

#### Client: 
A computer that initiates communication by sending a request for data or any resource to a server.
#### Server: 
Another computer that responds to the client's requests.
An analogy to understand this model is a restaurant, where the customer (client) places an order (request) and the kitchen and staff (server) prepare and serve the order (response).

## HTTP: The Language of Client-Server Communication
HTTP (Hypertext Transfer Protocol) is the foundational protocol used for communication between clients and servers on the web. It is a request-response protocol, meaning that a client sends a request to a server, and the server responds with the requested information or an error message. 

#### Key Components of an HTTP Request:
Method: 
This indicates the action to be performed on the resource. Common methods include GET (retrieve data), POST (submit data), PUT (update data), and DELETE (remove data).
URL: 
Specifies the location of the resource on the server. It consists of the protocol (http), the domain name (example.com), and the path to the resource (/index.html).
Headers: 
These provide additional information about the request, such as the type of content being sent, authentication details, and other metadata.
Body: 
In requests that submit data to the server (like POST or PUT), the body contains the data being sent. This is not present in GET requests.

#### Key Components of an HTTP Response:
Status Line: 
Includes the HTTP version, a status code (e.g., 200 for success, 404 for not found), and a status text (e.g., "OK" or "Not Found").
Headers: 
Similar to request headers, response headers provide additional information about the response, such as the content type, content length, and server information.
Body: 
Contains the actual data being returned by the server. This could be an HTML document, a JSON object, an image, or any other type of content.

## What is an API?
An API (Application Programming Interface) is like a menu in a restaurant. It provides a list of operations or requests that you can make to interact with an application or service. In an API:

Endpoints are like individual menu items, representing specific functions or resources.
Requests are like ordering a dish, specifying the data or function you want.
Responses are like the served dish, providing the requested data or result of the function.

## Demo: Building a React App Using Unsplash API
In this workshop, we will build a simple React app that utilizes the Unsplash API to display high-quality images based on user search queries. The app will have the following components:

#### App Component: 
Organizes all subcomponents and manages the state for fetched images.
#### SearchBar Component: 
Provides a search bar for users to input search terms.
#### ImageList Component: 
Displays a list of images using the ImageShow component.
ImageShow Component: Renders individual images.

### Unsplash API Overview
Unsplash is a platform that offers high-quality, freely usable images. The Unsplash API provides developers with access to their vast library of photos, allowing them to integrate these images into their applications or websites.

#### Getting Started:
1) Create an Unsplash Developer Account: 
Sign up for an Unsplash account and register as a developer to access the API.
2) Obtain an Access Key:
Once registered, you will receive an access key (and a secret key) that you'll use to authenticate your API requests.
3) Read the Documentation:
You should familiarize yourself with the API endpoints and request/response formats by reviewing the Unsplash API Documentation!


Now is the time to write out some code to make our actual HTTP request. As a side note, React has no functionality for making HTTP requests, so we need to download something called axios, which is a JavaScript library that allows us to make these requests.

1. Open the terminal in your project directory and install axios:

   ```bash
   npm install axios
   ```

   This will place the library into the `node_modules` folder inside your directory to make use of.

2. The Axios Library is an object that has a couple of different functions tied to it. In our case, we want to make a GET request, so we would call the function `axios.get` and then pass in the URL that we want to fetch.

   ```javascript
   axios.get('https://api.unsplash.com/search/photos', {
     params: { query: term },
     headers: {
       Authorization: 'Client-ID YOUR_ACCESS_KEY'
     }
   });
   ```

3. To handle this function correctly, we need to make a couple of adjustments. The first is adding the `await` keyword. JavaScript doesn’t automatically pause when you make a request, so the response probably hasn’t been received yet. The `await` keyword is a way of telling JavaScript to wait until we get a response to run the next line of code.

   Testing Through Console:

   ```javascript
   const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID YOUR_ACCESS_KEY',
        },
        params: {
            query: term,
        },
    });
    return response.data.results;
} 

This function will log the array of image objects coming back from the API to the console.

4. In your other React components, you can use the `searchImages` function to fetch images based on a search term and update the state in your components accordingly.

## Closing Notes
Web APIs are a great way to add neat features and functionality to any app, and I hope this workshop gave you some working familiarity with them to help you get started on a cool project of your own!
Good luck and happy hacking!

## Looking for Your Next API?
Check out these popular sites!

- [Spotify API](https://developer.spotify.com/documentation/web-api)
- [Google Maps API](https://developers.google.com/maps/apis-by-platform)
- [Twitter API](https://developer.twitter.com/en/docs/twitter-api)
- [Meta API](https://developers.facebook.com/docs/instagram/)
- [WhatsApp API](https://business.whatsapp.com/developers/developer-hub)


