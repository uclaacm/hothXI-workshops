# HOTH XI - Intro to React Native

**Date**: March 3, 2024

**Teacher**: [Max Lee](https://github.com/maxywaxyy)

Hello and welcome to our Intro to React Native workshop README! We'll be covering the basics of React Native in a way that I hope is simple to understand and impactful enough to teach some key features of app development. Happy hacking!


## Topics Covered
- [Introduction to React Native](#introduction-to-react-native)
- [Setting Up Our Environment](#setting-up-our-environment)
- [Core Components](#core-components)
- [Stylesheets](#stylesheets)
- [Custom Components and Props](#custom-components-and-props)
- [State and Hooks](#state-and-hooks)
- [Navigation](#navigation)

## Resources
- [Slides](http://tinyurl.com/26hp2379)
- [Workshop Recording](https://drive.google.com/file/d/1dBS9Y73iAYSK3JTj0bNOYb6ZlZe3bKc7/view?usp=sharing)

## Introduction to React Native
### What is React Native?
- JavaScript tool for building native mobile apps
- What is native development? Creating an app specifically for a particular platform	
### Why React Native?
- Cross-platform: JavaScript code is translated into each platform’s native code write code once and use it across multiple platforms (IOS, Android, etc.)
- Lots of community support: third-party libraries, examples, solutions to errors, etc. 
- Very similar to React (a JavaScript library for web development): easy transition to React Native for people already comfortable with React

## Setting Up Our Environment
### Installations
In order to build a React Native project, you will need the following:
* VSCode: [VSCode Download](https://code.visualstudio.com/download)
    * The text editor we will be using for our code
* Node.js: [Node Download](https://nodejs.org/en/)
    * Allows for the development server that lets us see our changes to our code in real time
    * Download recommended LTS version
* Expo Go: [Expo Go Download](https://expo.dev/client)
    * This is an app you’d download to your phone on the app store unless you have a simulator on computer
### Setting Up a React Native project
In order to create a simple React Native project, you will first go to your terminal (can be your VSCode terminal) and run the following line:
```bash
  npx create-expo-app “name of app”
```
After running this line, navigate into your app by running the following line: 
```bash
  cd “name of app”
```
 Finally you can run the following line to see choose a method of locally developing your project:
```bash
  npx expo start
```
Choose a method of locally developing your project! Either scan the QR Code that's shown using Expo Go on your mobile device, or type `i` (if you have XCode on a Macbook) to use a simulator, or type `a` (if you have Android Studios on a Windows device) to use an emulator.  

## Core Components
### What is JSX
JSX is the programming language used in React Native. However, it is essentially a combination of JavaScript and XML-- which is pretty much a combination of JavaScript and HTML. If you don't know what either of those are, that's ok! All you need to know is that JSX lets us write user interface components using JavaScript. In other words, we can quickly edit how our app looks by using JSX.

It does this by storing something called "markup" code into variables, before directly writing it into JavaScript. ("Markup" is just a fancy term for how we format our screen.)

A brief example of what JSX looks like:
```jsx
<View> 
  <Text>Hello!</Text>
</View>
```

Of course, this is only a very fundamental example, but there's so much syntax that it'd be difficult to give an example of every single one (and I doubt that's much fun to read, either). Instead, as you follow through this workshop, you hopefully will gain a better understanding and feel of syntax, and of course if you're ever stuck-- this isn't some math test. Google is your friend.
### What are Core Components?
Components are basic app elements that React Native provides to us. Some basic examples of this include `<Text><Text/>` and `<Image/>`-- or text and images. However, there are dozens of components, including buttons, scrollView, textInput, and so much more. 

Text and Image are two of the most used components. Their syntax is as follows:
```JSX
<Text> Good luck at this Hackathon! </Text>
<Image source={require("HOTHXI.png")} />
```
...where the first line of code will show "Good Luck at this Hackathon!" and the second line will show an image of some file named "duck.png". For images, you also often need to include the filepath to the image-- such as "./assets/HOTHXI.png" if the image was in your assets folder, as an example. If you're still confused about this, I recommend looking at the video for a clearer demonstration!
### Views
Views are the most fundamental core component. They are containers that hold components! However, views themselves are invisible. Basically, views are useful in that we can sandwich multiple things within them in order to format things are group things together. The syntax for a view is:
```JSX
<View>
// stuff goes inside here
</View>
```
Example of putting multiple components inside a view:
```JSX
<View>
  <Text> Good luck at this Hackathon! </Text>
  <Image source={require("HOTHXI.png")} />
</View>
```

## Stylesheets
Now, we're able to put components onto our screen, but they may not look how we want them to at all! Say you wanted the background of your text to be blue, or your image to be aligned a certain way. How do we do that?

Stylesheets! Stylesheets are the most common way to format views and components in React Native. We put all the formatting for a view under one "style" that we get to name, and can include multiple styles under one stylesheet. As an example, let's take a look at the following code:

```JSX
export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Hello I'm Jakob<Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 50,
    backgroundColor: 'yellow',
  },
});
```
Let's break it down. At the beginning, we have our app code on its own-- a view, holding a Text and Image component. However, now there's something new. At the bottom of our total code, there's a constant called `styles` that's declared. Notice that inside this stylesheet, there are two styles I created-- one named `container` and one named `textStyle`. Inside each of these styles are particular formattings that specify "flex" (which is just like alignment on the screen), backgroundColor, borderColor, and so on.

Notice that after I declared each style, I needed to specify what component to apply each style to. The overall view that contains everything has the "container" style applied to it, which you can observe in the syntax:
```JSX
<View> style={styles.container}>
//A bunch of stuff inside
</View>
```
This is basically telling the program "HEY! THIS VIEW SHOULD BE FORMATTED WITH ALL THE STUFF UNDER THIS THING CALLED 'container'!"

And the same goes for `textStyle`.

Notice the curly brackets we use in the declaration? Those are examples of JSX being applied into our code! JSX basically lets us use those curly brackets to take something from the styles sheet ("container", in this case) and apply it to a component.

You now have the freedom to customize how your exactly how you would like your app to look!

## Custom Components and Props
Components in React are the building blocks of the webpage you are creating. They are very useful because they allow us to reuse code instead of rewriting it over-and-over again for elements that are used multiple times. If you consider practically any webstite, you could break down the page into the different components that make up the page.

In practice, components will look like JavaScript functions, and simple components will return the HTML that represents what you see on your webpage. An example of what a component can look like is this:
```javascript
function Post () {
    return (
        <div>
            <Text>My name is Max</Text>
    );
}
```
For this demo example, this component represents one line of test that introduces a name. 

### Imports and Exports 
When using components and different files within your project, it's important to always remember your imports and exports. If you look back to our Post component example, it's rather useless since we have no way of accessing this component in any other file. So, we must make sure to add an export statement at the end.
```javascript
export default Post;
```
This line allows for this Post component to be used in other files. However, you must also make sure to import any component or file you want to use at the top of the file you would like to access them in. For instance, if you would like to access this Post component in your main App.js file, you should use 
```javascript
import Post from './components/Post'
```
Notice that the `'./components/Post` is the example file path to locate the Post file within the React project. When you are locating a file within the directory of the current file, you will use '.' at the beginning of the file path, while when you are locating a file outside of the current file's directory, then you will use '..' at the beginning. Keep in mind that these import/export statements will differ depending on what you've named files and the different file paths in your project.

## Props
Now that we can make components, we want to be able to diversify the information of them while in the same format. For instance, instead introducing the same name with each post, we want to be able to change the name of the person we are introducing in post. We can do this with props!

Props allow us to pass in different data into a component. This is done by passing in props as an argument to the component's function, or in other words, providing props as an input for the function to take in. By doing this, we can replace the manual data we typed out with the name of a property.
```javascript
function Post ({name}) {
    return (
        <div>
            <Text>My name is {name}</Text>
    );
}
```
Now, when calling this function, we can pass in information to customize the name that is being posted:
```javascript
       <Post name='Nathan'/>
```

## State and Hooks
State contains data on a component's property values and is what allows us to keep track of changes to properties. A good example of a change of state is a like count button, where when the user clicks the button, the state of the like button is incremented by a number. When the state is updated, React re-renders the component to reflect the update.

In order to change the state, we will use a React hook called `useState()`. If we want to use this hook, we must import it at the top of our file.

```javascript
import {useState} from 'react';
```
When working with state, you want to declare state variables. For the following example, you can see that useState() returns an array of two elements. The first element is the variable that gets updated (here it is the boolean variable called `likes`), and the second element is the function that will be used to update the variable (here is it called `setLikes`). On the right, useState() takes in a parameter that indicates the initial/default value you would like to set the variable to (in this case the integer value 0).
```javascript
const [likes, setLikes] = useState(0);
```
In order to update the state variable, you can set the function to how you'd like to change the variable. In our demo case, we would like to change the likes integer variable by incrementing by 1, so it would be:
```javascript
setLikes(likes + 1)
```

## Navigation
In a mobile React Native app, navigation refers to the process of moving between different screens or views within the app. The two main methods of doing so are called Stack Navigation and Tab Navigation: 
* Stack Navigation
    * Navigate to the next or previous screen in the stack
    * Like a deck of cards
* Tab Navigation
    * Each tab is like a category or section, neatly dividing your screens
    * Like a table of contents

In order to use Navigation within your React Native app, you will first go to your terminal (can be your VSCode terminal) and run the following lines:
```bash
    npm install @react-navigation/native
    npx expo install react-native-screens react-native-safe-area-context
    npm install @react-navigation/stack
    npm install @react-navigation/bottom-tabs
```
Next, within App.js, you first want to import navigation with the following lines: 
```javascript
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
```
Then, you want to declare either Stack or Tab with the following lines: 
```javascript
    const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
```
Finally, within the return function of App.js, you want to follow this routing order. NavigationContainer wraps all navigators and screens within your application. Stack.Navigator or Tab.Navigator sets up the layout of navigation to be either stack or tab. Stack.Screen or Tab.Screen defines each screen as a screen of type Stack or Tab. 
For Stack: 
```javascript
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='FirstScreen' component={FirstScreen} />
        <Stack.Screen name='SecondScreen' component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
```
For Tab: 
```javascript
    return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='FirstScreen' component={FirstScreen} />
        <Tab.Screen name='SecondScreen' component={SecondScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
```
