
# HOTH XI - Intro to React.js

**Date**: March 3, 2024

**Teacher**: [Kayla Hamakawa](https://github.com/kaylahama)

Hello! Welcome to the Intro to React JS workshop for HOTH XI! Here we will be introducing frontend web development using React. 

In this workshop we will utilize HTML, CSS, and JavaScript, so I would recommend watching the workshop on those if you are not already familiar with them!


## Topics Covered
- [React Introduction](#react-introduction)
- [Getting Started](#getting-started)
- [Components](#components)
- [Props](#props)
- [State](#state)
- [Closing](#closing)

## Resources

- [Slides](http://tinyurl.com/hothXI-react-slides)

## React Introduction
### What is React?
This whole workshop is on using React, but what is it? Well, React is
- a free and open-source JavaScript (JS) library used for building UI (user interfaces)
- maintained by Meta and an open-source community
- a tool used for front-end web development
- what's widely used for mainstream websites such as Netflix, Facebook, Uber, etc.
### Why React?
So now we know what React is, but why are we choosing to use it? First of all, React can 'react' quickly to changes in the state of our code. React updates parts of the page without having to reload the entire page each time, which leads to better efficiency. As mentioned before, it's also widely used, so there are a lot of useful resources to use as supplement tools with React as well as a large community that can help you when you are learning React. Lastly, React is an in-demand skill right now in industry. 
### JSX Introduction
JSX stands for JavaScript XML, but you can think of it as a combination of JavaScript and HTML for convenience. It's the programming language used in React, and it allows us to write HTML within JavaScript. It allows us to easily edit how our page looks.

An example of JSX:

```javascript
const num = 11;
const message = <h1>HOTH {num} </h1>
```
```javascript
const nameFunction = () => {
    return 'HOTH';
};
const elem = <h1>So excited for {nameFunction()}!</h1>
```
As you can see, with JSX we can use JavaScript expressions or functions within curly braces! As you work more with React, you will hopefully gain a better working intuition with JSX.

## Getting Started  ✅
   
### Installations
In order to build a React project, you will need the following:

* VSCode: [VSCode Download](https://code.visualstudio.com/download)
    * The text editor we will be using for our code
* Node.js: [Node Download](https://nodejs.org/en/)
    * Allows for the development server that lets us see our changes to our code in real time
    * Download recommended version

### Setting Up a React project
In order to create a simple React project, you will first go to your terminal (can be your VSCode terminal) and run the following line:
```bash
  npm create vite@latest
```
We are using Vite to create our React app, as it has recently become the more standard practice. After running this line, you will be prompted to type in your project name in a format similar to this `Project name: <your-project-name>`, as well as choose the `React` and `JavaScript` options from a menu. Finally you can run the following lines to see your project open up on your browser:
```bash
  cd <your-project-name>
  npm install
  npm run dev
```
## Components
Components in React are the building blocks of the webpage you are creating. They are very useful because they allow us to reuse code instead of rewriting it over-and-over again for elements that are used multiple times. If you consider practically any webstite, you could break down the page into the different components that make up the page.

In practice, components will look like JavaScript functions, and simple components will return the HTML that represents what you see on your webpage. An example of what a component can look like is this:
```javascript
function Song () {
    return (
        <div>
            <img src=https://media.pitchfork.com/photos/5c7425267ad40308b4a8835c/master/pass/JapaneseHouse_GoodAtFalling.jpg/>
            <h3>Song Title</h3>
            <p>Song Artist</p>
        </div>
    );
}
```
For this demo example, this component represents one song in a playlist. As you can imagine, this component would be reused several times to make up the content of a playlist.

### Imports and Exports 📮
When using components and different files within your project, it's important to always remember your imports and exports. If you look back to our Song component example, it's rather useless since we have no way of accessing this component in any other file. So, we must make sure to add an export statement at the end.
```javascript
export default Song;
```
This line allows for this Song component to be used in other files. However, you must also make sure to import any component or file you want to use at the top of the file you would like to access them in. For instance, if you would like to access this Song component in your main App.js file, you should use 
```javascript
import Song from './components/Song'
```
Notice that the `'./components/Song'` is the example file path to locate the Song file within the React project. When you are locating a file within the directory of the current file, you will use '.' at the beginning of the file path, while when you are locating a file outside of the current file's directory, then you will use '..' at the beginning. Keep in mind that these import/export statements will differ depending on what you've named files and the different file paths in your project.
## Props
Now that we can make components, we want to be able to diversify the information of them while in the same format. For instance, instead of hard coding one song's information, we want to be able to change the song information each time we want to represent a new song. We can do this with props!

Props allow us to pass in different data into a component. This is done by passing in props as an argument to the component's function, or in other words, providing props as an input for the function to take in. By doing this, we can replace the manual data we typed out with the name of a property.
```javascript
function Song (props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.artist}</p>
        </div>
    );
}
```
In order to input the information we want to use for each Song component, we can use props in line:
```javascript
       <Song index='1'albumCover="https://media.pitchfork.com/photos/…/JapaneseHouse_GoodAtFalling.jpg" title="i saw you in a dream" artist="The Japanese House" time="3:30"/>

```
Or props as an object:
```javascript
{
    title: "i saw you in a dream"
    artist: "The Japanese House"
    albumCover: "https://media.pitchfork.com/photos/…/JapaneseHouse_GoodAtFalling.jpg"
    time: "3:30"
}

```
### *array*.map() function 🗺️
We will need to use the *array*.map() function in order to avoid having to manually type out the props in line. 

The .map() function is called on an array and performs the following:

  1.   takes in each item of the array

  2.  performs specified operation on the item

  3.  puts new item after operation into a new array

A simple code example to illustrate this is calling .map() on an array of integers and doubling each of them.

```javascript
const arr = [1,2,3,4,5]
console.log(arr.map(x => x*2))

```
This would result in an array of `[2,4,6,8,10]`. 

For our purposes, this function is very useful to use with an array of objects so that we can pass in different information to a component.
## State
State contains data on a component's property values and is what allows us to keep track of changes to properties. A good example of a change of state is a like button, where when the user clicks the button, the state of the like button should change from the state of not liked to the state of being liked. When the state is updated, React re-renders the component to reflect the update.

In order to change the state, we will use a React hook called `useState()`. If we want to use this React hook, we must import it at the top of our file.

```javascript
import React, { useState } from 'react'
```
When working with state, you want to declare state variables. For the following example, you can see that useState() returns an array of two elements. The first element is the variable that gets updated (here it is the boolean variable called `liked`), and the second element is the function that will be used to update the variable (here is it called `setLiked`). On the right, useState() takes in a parameter that indicates the initial/default value you would like to set the variable to (in this case the value of `false`).
```javascript
const [liked, setLiked] = useState(false)
```
In order to update the state variable, you can set the function to how you'd like to change the variable. In our demo case, we would like to change the liked boolean variable to the opposite value, so it would be:
```javascript
setLiked(!liked)
```
## Closing 🚪
Congratulations for making it this far! Hopefully you were able to get a grasp on the React concepts that we introduced:
- React Introduction
- Building a React Project
- Components
- Props and array.map()
- State

If you would like to see the bigger picture of what you can do with these concepts, I would recommend looking through the playlist demo mentioned here as well as watching the workshop recording. This workshop is just the beginning though, so I encourage you to keep exploring what you can do with React!

**Good luck on your project and happy hacking!**
