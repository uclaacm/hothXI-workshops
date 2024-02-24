# HOTHXI Intro to Backend: Databases
**Date:** March 3, 2024 

**Teacher:** [Sneha Agarwal](https://github.com/snehaagar2023)

Hi! Welcome to HOTHXI's Database workshop, in this workshop we'll be covering the basics of what a database is and walkthrough how to set up, retrieve information, and add information to our database! Before starting this workshop I recommend checking out the React JS or React Native workshops if you're not familar with them. 

Now lets begin :)

## Resources
- [Slides](https://docs.google.com/presentation/d/1rkeQNLEeXlpSXsoHmFdx77FY4HgK-rTUSqRSs7JOe5E/edit?usp=sharing)
- [Workshop Recording]()

## Overview of Topics
- [What is a Database](#what-is-a-database)
- [When do we need Databases]()
- [Types of Databases]()
- [Choosing a Database]()
- [Installations]()
- [Demo]()

## What is a Database?
Before delving into databases, let's lay the groundwork by discussing **data**—the fundamental building blocks of information. Data is everywhere around is! From scrolling through social media, making online purchases, and logging into our laptops, we are constantly generating data. In order to use this data to be able to make meaningful insides, we can store it within a structure called a **database,** which will allow us to easily retrieve and updata our information.

**In your project** data may appear in different ways...
- **User Authentication:** usernames, profile pics, passwords
- **API Integration:** fetching data from external APIs (weather, maps, social media, news article)
- **Logging:** recording events, posts, messages
- **And More!**

Now that we know what kind of data can be stored, we can talk more about what a database is. A database is an organized collection of data which is controlled by a database management system. Think of a file cabinet but bigger, more organized, and digital!

## When do we need Databases?
Databases can be used whenever we need to efficiently manage, store, retrieve, and manipulate structured data. They serve as the backbone of countless applications and systems. Here are some common situations where databases are essential:

**Data Persistence**
- Data continues to exist when changes are made even when applications close

**Efficient Data Management**
- Organization for large volumes of data
- Efficient storage, retrieval, and updates

**Data Integrity and Security**
- Ensure only authorized users have access
- Ensure data is accurately stored and saved

## Types of Databases
**Relational Databases**
Data is organized into structured tables with **rows** and **columns,** rows represent records and columns represent fields. This setup simplifies data management and allows us to write complex queries to retrieve information. Multiple tables can be related to each other through keys: primary keys uniquely identify rows within a table, while foreign keys establish links between tables. This relational model forms the foundation of databases, supporting efficient data organization and complex relationships.

Some different examples of Relational Databases include PostgreSQL, MySQL, SQL Server and Oracle SQL.

**Non Relational Databases**
Non-relational databases organize data in a more flexible approach, and can be made in different formats such as documents, key-value pairs, and graphs. These types of databases allow us to have fast retrieval and insertion of entries. Rather than tables, data is stored in a sticky notes structure, where each individual sticky note represents a **document,** and a series of sticky notes constitutes a **collection.**

Some different examples of Non Relational Databses include MongoDB, Firebase, Redis, and Amazon DynamoDB.

## Choosing a Database
**Quick Overview of Key Differences**
**Relational databases** use structured tables similar to Excel spreadsheets, ideal for organized data. **Non-relational databases** offer flexibility as data is stored in folders or sticky notes, allowing for easy addition or modification of data without strict rules. They excel in fast data storage and retrieval, making them suitable for dynamic environments.

The overall **schema** of a database, (schema is the format in which our data is stored) differs for relational and non relational databases as they outline different ways to organizes data, setting rules for table, field, key, and relationship storage. Schemas defines both logical and physical aspects of the database structure.

**Today we are going to be using...**
**✨Firebase✨**
Firebase is a NoSQL database which allows for more flexibility for semi-structured and unstructured data making them easier to work with and scale. 

Firebase is a google service that helps us quickly develop apps and supports different client app platforms including iOS, Android, Web, C++, Unity, and Flutter. Firebase also offers multiple different products including:
- **Authentication:** Lets you know a users identity and authenticates them.
- **Could Firestore and Realtime Database:** noSQL databases
- **Cloud Storage:** stores big sections of data like photos, videos, audio
- **Hosting:** putting your app on the internet

**Firebase's Cloud Firestore**
Firestore is a NoSQL database provided by Google Cloud which allows us to store data in the cloud, with Google managing the underlying servers. Its syncs data facilitating real-time updates across various devices, ensuring seamless data consistency. It can be adapted to a wide range of applications, including web, mobile, and server-based systems. Firestore is also flexibility and scalability, offering an efficient solution for managing dynamic data requirements.


## Tech Stack 
**Our Tech Stack:** A list of technologies used to create a product
- **React JS:** Javascript library to make websites
- **Node.js:** Environment to run javascript code on server side
- **Firebase:** Our database where we are going to store data

## Installations
Below are the reccomended tools and technologies for setting up your database and the ones we will be using for this demo but feel free to use whatever platform you currently are working on in your laptop!
- **Text Editor:** [VS Code](https://code.visualstudio.com/download)
- **Package Handler:** [Node.js](https://nodejs.org/en/download) which also comes with npm!
- **Database:** [Firebase](https://firebase.google.com/?gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqjSp5rV6fNBePzS98xV-Vc8caHCpFqRJ8_8GkEwexwdB1p4-1qPfdBoCq5UQAvD_BwE&gclsrc=aw.ds)

In order to verify that you have Node and npm downloaded on your system you can run ``` node -v ``` and ``` npm -v ``` which should print out the version you're currently running. 

## Demo

**Step 1: Create a React App**
1. Open a new window of VS Code
2. Create a new folder for your project
3. Go to Navigation bar, click Terminal -> New Terminal
4. Inside your terminal run ```npx create-react-app nameOfYourApp```
5. In case you run into a dependency issue or warning with babel, run ``` npm install --save-dev @babel/plugin-proposal-private-property-in-object ```
6. Navigate to the folder we have just created our react app in ```cd appName```
7. Launch our application ```npm start```

This launches our application in a default web browser and opens a new tab displaying your React project! Additionally, it enables hot module reloading, meaning that any changes you make to your React code will automatically be reflected in the browser without needing to manually refresh the page. Yay!

**Step 2: Setting up Firebase**
1. Open [Firebase](https://firebase.google.com/?gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqjSp5rV6fNBePzS98xV-Vc8caHCpFqRJ8_8GkEwexwdB1p4-1qPfdBoCq5UQAvD_BwE&gclsrc=aw.ds) and create a project
3. Create a Web App (</>)
4. Open up VS Code again..
4. Copy ```npm install firebase``` into your VS Code terminal
5. Navigate to your src folder and create a new file ```firebase.js``` and copy the javascript code to configure your database and connect it to react
6. Add ```import {getFirestore} from “firebase/firestore”;``` to the top after the other import statements to import firestore
7. Add ```const db = getFirestore(app);``` and ```export default db;``` to the bottom of your file, this will define our database and allow us to export it so we can use it in other files
8. Navigate back to your browser where you have Firebase open and create a Firestore product then create your database!

**Step 3: Connecting Firebase to React**
Open App.js in src folder and add the following import statements to the top:
```import db from "./firebase";```
```import { doc, setDoc, getDoc } from "firebase/firestore";```
```import React, { useState } from 'react';```

Additionally, delete all the text in between the ```<header className="App-header">``` and ```</header>``` tags.

**Step 4: Fix Read/Write Permissions in Firestore**
To make sure that your settings allow you to modify the data in your database click on the Rules tab then go to line 16 and change the statement to:
```allow read, write: if true;```

**Quick Pause from Demo...**
In this demo we are going to be making a bookshop database that allows us to fetch information about current books in our bookstore and add more books to bookstore.

**Step 5: Define Schema in Firestore**
First we want to click on start a collection and name it **bookstore** then we want to define our schema by making our first sticky note object. Create a Document and name it Harry Potter then define the fields in the Document as Title: Harry Potter, Author: J. K Rowling, and Genre: Adventure. 

**Step 6: Back to App.js, lets get coding!**

Add your Book class under the import statements in App.js to define the schema within React. 
```JavaScript
class Book {
 constructor(title, author, genre) {
   this.title = title;
   this.author = author;
   this.genre = genre;
 }
}
```

Convert book objects in our React app to Firestore documents and vice versa
```JavaScript
const bookConverter = {
 toFirestore: (book) => {
   return {
     title: book.title,
     author: book.author,
     genre: book.genre,
   };
 },
 fromFirestore: (snapshot, options) => {
   const data = snapshot.data(options);
   return new Book(data.title, data.author, data.genre);
 }
};
```
Store Current Fetched Books using the “useState” hook from React to create a state variable currBook and setter function setCurrBook to update the state and add in your function App()

```JavaScript
const [currBook, setCurrBook] = useState({});
```

Fetch our Book data using a asynchronous function that creates a reference to a document, retrieves information from a document, updates the currBook state variable!

```JavaScript
 const fetchBooks = async () => {
   const docRef = doc(db, "bookstore", "Harry Potter").withConverter(bookConverter);
   const docSnap = await getDoc(docRef);
   setCurrBook(docSnap.data());
 }
```

Output our fetched data and display information about the current book. Add the following code to your return function. 
```JavaScript
       <h1>My Bookstore</h1>
       <div>
         <h2>Current Book:</h2>
         <div> Title: {currBook.title}</div>
         <div> Author: {currBook.author}</div>
         <div> Genre: {currBook.genre}</div>
       </div>
       <button onClick={fetchBooks}>Fetch Books</button>
```

Add Data to our Database using the “useState” hook to create a newBook variable, setter function setNewBook and track/update the input values in real time. Add this to function App (not inside return).

```JavaScript
 const [newBook, setNewBook] = useState({
   title: '',
   author: '',
   genre: ''
 });
 
 const handleChange = (prop) => (event) => {
   setNewBook({ ...newBook, [prop]: event.target.value });
 };
```

Create a new book using the information the user based in and set the information to a new doc

```JavaScript
 function addToDb() {
   const ref = doc(db, "bookstore", newBook.title).withConverter(bookConverter);
   setDoc(ref, new Book(newBook.title, newBook.author, newBook.genre));
 }
```

Get Data from user by creating textboxes for users to input in data then adds it to the database! Add this to your return function. 
```JavaScript
       <h2>Add a New Book</h2>
       <input placeholder="Title" value={newBook.title} onChange={handleChange('title')} />
       <input placeholder="Author" value={newBook.author} onChange={handleChange('author')} />
       <input placeholder="Genre" value={newBook.genre} onChange={handleChange('genre')} />
       <button onClick={addToDb}>Add to Database</button>
```

Return back to your terminal and run `npm start` to see our finished site!

We now have a functional database that can store and return values! Yay! Hopefully you now know a little bit more about implementing a database into your project and as always, happy hacking!

## More Resources
If you want to learn more about different functions you can implement using Firestore or different products that Firebase offers you can check out the resources below!
- [Adding Data](https://firebase.google.com/docs/firestore/manage-data/add-data)
- [Fetching Data](https://firebase.google.com/docs/firestore/query-data/get-data)
- [More Info!](https://firebase.google.com/docs/firestore)
- ACM Hack Officers (one of the best resources out there!)
- [Google](https://www.google.com/) (one of the second best resources out there (>▽<) )