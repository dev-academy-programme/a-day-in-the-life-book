# JavaScript

While the web browser is loading our HTML and CSS, it's creating a structure called the _Document Object Model (DOM)_. If the DOM changes after it has been created by the browser, we see the results of those changes in the browser right away. JavaScript is the language we use to alter the DOM. This allows us to create behaviours that add interactivity to our pages.

## Variables

Variables allow us to work with values in a generic way and are used a lot in programming. To create variables we use the `var` keyword.

```js
var age = 40
var name = 'Sally Stevens'

// An object
var customer = {
  age: age,
  name: name,
  address: '123 Happy Place',
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


### Before we start

In any program using jQuery, we need to wait until the browser tells us the DOM is ready. We do this using a special function called [`ready`](https://learn.jquery.com/using-jquery-core/document-ready/):

```js
$(document).ready(function () {

  // All the rest of our code goes here!

})
```


### Selecting elements

The first part of manipulating DOM elements is to find the one we want to work with. We do this using [_selectors_](https://api.jquery.com/category/selectors/). Selectors work in a very similar way to CSS:

 - to select an element with **id** 'wombat', we use `#wombat` (hash prefix)
 - to select an element with **class** 'wombat', we use `.wombat` (dot prefix)
 - to select an element by **tag** name, we use the tag name itself with no prefix (e.g. `p` or `h1`)

In jQuery, this looks like:

```js
// There should only ever be one element with a given id
var wombatById = $('#wombat')

// There could be more than one element with a given class
var allWombatsByClass = $('.wombat')

// There could be lots of 'p' tags in the document
var allParagraphTags = $('p')
```


### Changing elements

Great, so we can find the parts of the DOM we'd like to work with. Now what?

jQuery provides a wide variety of functions for manipulating elements once we've selected them. One of the most common is to change their CSS classes. For example:

```js
// Add the CSS class `red` to the element with id `wombat`
$('#wombat').addClass('red')

// Remove the CSS class
$('#wombat').removeClass('red')

// If it's on, switch it off. If it's off, switch it on!
$('#wombat').toggleClass('red')
```

Notice that each time we change an element, we have to _select_ it first.

We can also manipulate the styles directly:

```js
// Change the colour of all elements that have class `wombat`
$('.wombat').css('color', 'blue')
```

Because many elements might have class `wombat`, this could make quite a bit of the page blue!


### Event handlers


