# Intro
This workshop covers the basics of Web Development - HTML, CSS, and JavaScript! Together, they make up the structure (HTML), the style (CSS), and the functionality (JS) of a web application. Keep reading or watch the workshop to learn how to utilize these tools to make a super cool web application of your own!

# Resources
- [Slides](http://tinyurl.com/4hdpf7nz)

# HTML
HTML, more formally known as HyperText Markup Language, is the structure of a web page. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages.


### HyperText:
Links that connect web pages to one another, either within a single website or between websites


### Markup:
How HTML annotates text, images, and other content for display in a web browser. HTML markup basically just outlines the different parts of a piece of text, kind of like how you might take notes for a literature class.


For example, say you had an assignment for a class to outline the important parts of an article. You might make note of the title, the paragraphs, and any images that might appear in the work. HTML does the same thing for content on web pages using things called tags:


`<tagname>Content!</tagname>`


In HTML, tags are used exactly like how you would markup an assignment for a class; there are tags for headings, paragraphs, and much more! Some common examples include:


`<h1>Heading 1</h1>`


`<h2>Heading 2</h2>`


`<p>Paragraph</p>`


`<a href="https://somewebsite.com">Check out this website!</a>`


`<b>Bold text</b>`


```
<li>List item 1</li>
<li>List item 2</li>
```


Everything from the start tag to the end tag is called an element. Some tags, like the image tag above, are self closing, meaning you don't need to put an ending tag at the end (this is the case when there's no content in the HTML element).


## Steps to make your own HTML Page:
1. Create a new folder
2. Open that folder in a text editor (Visual Studio is pretty easy to use)
3. Create a new file in your folder with with a .html extension (e.g., index.html)
4. Add some basic elements to your HTML file:


    a. At the top of your .html file, add


    `<!DOCTYPE html>`


    This tells the browser that the document is an HTML file


    b. Beneath the DOCTYPE tag, add an html element

    ```<!DOCTYPE html>
    <html>More stuff goes here</html>```


    c. Inside the html element, add a head element and a body element
    
``` <html>
        <head>
        </head>


        <body>
        </body>
    </html>```

    The head tags contain metadata about the webpage, usually including the title, character set, styles, and scripts.

    The body tags contain everything visible on the webpage.


## Final Notes
For more information of HTML, check out this website https://www.w3schools.com/html/html_intro.asp.


Some things to remember:


1. Remember to close your tags!
2. Pay attention to how your elements nest - some tags cannot be children of other tags; your text editor will probably warn you when this happens but make sure to look out for it or your webpage won't render!


# CSS
CSS, or Cascading Style Sheets are how we can beautify our web pages! They define how HTML elements are displayed on screen.


There are three parts of a CSS rule:


1. Selector: points to the HTML element where you want the CSS to apply.
2. Property: specifies what you're styling (e.g.,color, font, etc.)
3. Value: says what you want to do with the property (e.g., make the color red)


Here's an example of a CSS rule:
```
h1 {
    color: red;
    font-weight: bold
}
```
In this example, h1 is the selector, color and font-weight are properties, and red and bold are values.


## Steps to Create and Link a CSS Page with HTML:
1. Create a new file in your folder with a .css extension (e.g., style.css)
2. Add a link element to the head section of your html file


`<link rel="stylesheet" href="style.css">`


The rel attribute is optional and specifies the relationship between your html file and the linked css file.


3. Add rules to your .css file!


## CSS Classes and IDs
CSS classes and IDs let you apply CSS to specific sections of your code.


A class is a type of CSS rule that can be applied to multiple elements on a page and has the following syntax:
```
.classExample {
    color: blue;
    font-family: Impact;
}
```
An ID is a type of CSS rule that can only be applied to one element on a page and has the following syntax:
```
#idExample {
    color: green;
    text-decoration: underline;
}
```
To use classes and IDs you can use the class and/or id attribute in your HTML elements.


`<h1 class="classExample">Some content!</h1>`


`<h1 id="idExample">Some more content!</h1>`


# JavaScript
Now onto the most important part of our web page - the functionality! We are going to implement this with JavaScript, which is the backbone of interactive web applications. JavaScript has a LOT of components, most of which won't be covered in this workshop, however, there are a ton of online resources if you'd like to learn more!


## Getting Started
1. In your folder, create a subfolder named scripts
2. In your scripts folder, create a new file with a .js extension (e.g., main.js)
3. In your index.html file, create a new script element in the head section linking your .js file to your html


`<script src="scripts/main.js"></script>`


## The Basics


### Functions
Functions in JS, and in programming as a whole, are sets of instructions that perform specific tasks or that calculate values. In our case, functions let us define what we want our web application to actually do! An example JavaScript function is:
```
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
```
Obviously there are a lot more complicated and cool things we can do with functions, the multiply example above is just to get an idea of the syntax!


### Objects
JavaScript Objects are variables that contain multiple values. In particular, they store collections of key-value pairs. Each pair is known as a property. To access values from a key-value pair in an object we use dot.notation:
```
const car = {
    make: 'Ford',
    model: 'F-150',
    color: 'red',
    year: 1998
}


const Year = car.year;
```
### Documents
A Document in JS is an Object that holds all the elements of a webpage. Documents in JS come with a lot of helpful built-in functions called methods that make it easy to access and manipulate elements from an HTML page. For example, one useful Document is the getElementsByClassName method, which returns a list of all the elements on a page with the indicated class name.


`document.getElementsByClassName("className);`


### Document Object Model (DOM)
The Document Object Model in Javascript is what connects web pages to scripts. The DOM represents HTML documents and webpages as a hierarchy of parent and child components, which enables JS to understand and change what gets rendered on a page. Like many things in CS, the DOM has a treelike structure. You can see a picture of what this looks like on Slide 43 of the workshop or simply by Googling JavaScript DOM!


### Event Handlers
In JS, event handlers are code structures that listen for activity in a browser and run code in response. An example of an event that you might want to handle in some way is the Click event, which is fired by the browser when a user clicks something with their mouse. Let's look at some sample event handler code!


In main.js file:
```
let text = "";
function funFunc() {
    text += "yay!";
    document.getElementById("text").innerHtml=text;
}
```
In index.html file:
```
<button onClick="funFunction()">Click here for some fun!</button>
<h2 id="text"></h2>
```
In the above code, when a user clicks on the button containing the text "Click here for some fun!", all the elements with the attribute id="text" will be updated to have "yay!" as their content!


## Closing Notes
While that is nowhere near all the important and useful components of JavaScript, hopefully the above information will enable you to get started on a project of your own! Learning through doing is truly the best way to grow your skills! If you need any help, we are here to help! Good luck and happy hacking!

## For More Information...
Check out these sites!

- [W3 Schools - Intro to HTML](https://www.w3schools.com/html/html_intro.asp)
- [Mozilla - CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [Mozilla - JavaScript First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)

