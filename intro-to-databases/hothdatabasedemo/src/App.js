import logo from './logo.svg';
import './App.css';
import db from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import React, { useState } from 'react';

class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
 }
 
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

 
function App() {
  const [currBook, setCurrBook] = useState({});

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: ''
  });

  const handleChange = (prop) => (event) => {
    setNewBook({ ...newBook, [prop]: event.target.value });
  };

  function addToDb() {
    const ref = doc(db, "bookstore", newBook.title).withConverter(bookConverter);
    setDoc(ref, new Book(newBook.title, newBook.author, newBook.genre));
  }

  const fetchBooks = async () => {
    const docRef = doc(db, "bookstore", "Harry Potter").withConverter(bookConverter);
    const docSnap = await getDoc(docRef);
    setCurrBook(docSnap.data());
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>My Bookstore</h1>
       <div>
         <h2>Current Book:</h2>
         <div> Title: {currBook.title}</div>
         <div> Author: {currBook.author}</div>
         <div> Genre: {currBook.genre}</div>
       </div>
       <button onClick={fetchBooks}>Fetch Books</button>


       <h2>Add a New Book</h2>
       <input placeholder="Title" value={newBook.title} onChange={handleChange('title')} />
       <input placeholder="Author" value={newBook.author} onChange={handleChange('author')} />
       <input placeholder="Genre" value={newBook.genre} onChange={handleChange('genre')} />
       <button onClick={addToDb}>Add to Database</button>


      </header>
    </div>
  );
}

export default App;
