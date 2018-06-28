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


## The Document Object Model (DOM)

The document object model is an in-memory representation of the HTML document that is created by the browser after it reads the HTML file. The DOM is a hierarchical structure of objects that represent each HTML element, also known as a _node_. When we want to programmatically alter the web page with JavaScript, we do so by manipulating the DOM. In addition to adding and removing elements from the document, we can also select existing elements/nodes, add and remove classes from elements, and be notified when the user performs actions such as clicking or hovering on elements.

Before we can run any script that reads or modifies the DOM, we need to ensure the DOM is completely loaded and stabalised. To ensure this, we want our code to run after the `DOMContentLoaded` event. For example, we could do this:

```js
document.addEventListener('DOMContentLoaded', function () {
  // now we can safely access the DOM
})
```

### Selecting existing elements

To understand how to select DOM elements programmatically, we need some HTML to work with. In our explanations below, let's use the following HTML and CSS files.

```xml
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <div class="foo">
    <h1 class="header">This is foo</h1>
    <ul class="list">
      <li class="item">I am one</li>
      <li class="item">I am two</li>
    </ul>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

```css
/* styles.css */
.red {
  color: 'red';
}
```

The most flexible function to select single elements is [`querySelector(selectorString)`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector). This will return the first element that matches the `selectorString`, which uses a very similar syntax to CSS selectors (e.g. `.` to select classes).

If we want to output "This is foo" (from `.header`), to the console, we could do this:

```js
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.header')
  console.log(header.innerText)
})
```

Sometimes we need to select multiple elements at once. To do this we can use [`querySelectorAll(selectorString)`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll).

For example, if we want to output the contents of the `<li>` tags, we could do it like this:

```js
document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.item')
  items.forEach(function (item) {
    console.log(item.innerText)
  })
})
```


### Adding and removing CSS classes on an element

Once we've selected the elements we want to work with, one of the most powerful things we can do is modify the CSS classes on that element. We do this with the [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) property of the element. The classes are defined in our CSS files and when we add and remove them on elements, the browser applies the style changes right away.

For example, if we want add the `red` CSS class to the elements with the `item` class, we could do this:

```js
document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.item')
  items.forEach(function (item) {
    item.classList.add('red')
  })
})
```


### Adding and using event handlers

Being able to select elements and modify an element's CSS classes is super cool, but the last thing we'll cover today that _really_ unlocks the power of front-end web development is the ability to respond to user actions. We do this using events. The function [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) allows us to register an event _handler_, which is just a function that runs when the event happens on the element we register the handler.

For example, if we want to turn the header red when we click on it, we can do this:

```js
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.header')
  header.addEventListener('click', makeRed)
})

function makeRed (event) {
  event.target.classList.add('red')
}
```

And just as another example, what if we wanted to turn the list items red when we hovered our mouse over them?

```js
document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.item')
  items.forEach(function (item) {
    item.addEventListener('mouseover', addRed)
    item.addEventListener('mouseout', removeRed)
  })
})

function addRed (event) {
  event.target.classList.add('red')
}

function removeRed (event) {
  event.target.classList.remove('red')
}
```

Notice how we're adding the `mouseover` and `mouseout` event listeners to each of the items individually inside the `forEach` call.


## In conclusion

Obviously we've only just scratched the surface of what is possible when running JavaScript in the browser. But this should be enough to start making some dynamic experiences if you use your imagination. If you're not sure how to do something, do a quick search or (if you're still at the Day in the Life event) ask one of the teachers. Most importantly, be curious and have fun!
