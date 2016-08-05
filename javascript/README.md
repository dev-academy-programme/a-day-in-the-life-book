# JavaScript

While the web browser is loading our HTML and CSS, it's creating a structure called the _Document Object Model (DOM)_. If the DOM changes after it has been created by the browser, we see the results of those changes in the browser right away. JavaScript is the language we use to alter the DOM. This allows us to create behaviours that add interactivity to our pages.

## Variables

Variables allow us to work with values in a generic way and are used a lot in programming. To create variables we use the `var` keyword.

```js
var age = 40
var name = "Sally Stevens"

// An object
var customer = {
  age: age,
  name: name,
  address: "123 Happy Place",
  city: 'Auckland',
  country: 'NZ',
  postalCode: 1010
}

// An array
var listOfStuff = [age, name, customer]
```

As you can see from the example above, we can store many different kinds of values in a variable.


## Functions

Functions give us a way to perform operations. Using functions is a two-step process. First we have to define the function.

```js
function addNumbers (num1, num2) {
  var result = num1 + num2
  return result
}
```

Once a function has been defined, we can use it. 

```js
var sum = addNumbers(44, 22)
console.log(sum)
```


## Adding a script to a web page

To add a script to a web page, we use the `<script>` element.

```xml
<html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <p>Hello</p>
    <script src="script.js"></script>
  </body>
</html>
```

## jQuery

[jQuery](http://jquery.com) is a JavaScript library that makes it much easier to work with the DOM. The most common things we use jQuery for are to select elements, change elements, and set up event handlers.

### Selecting elements


### Changing elements


### Event handlers


