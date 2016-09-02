# HTML & CSS

The web is built with 3 fundamental languages: HTML, CSS and JavaScript. HTML and CSS provide the structure and styling of what we see and interact with. JavaScript provides the interaction behaviour, but we can focus on that later, after we're more familiar with HTML and CSS.

## HTML Elements (aka Tags)

HTML is made up of _elements_ and they have a consistent shape.

```xml
<em>I am emphasised</em>
```

Most of the time there is an opening part and a closing part.

Sometimes there isn't a closing part.

```xml
I'm on one line.<br>
And I'm on the next line.

How 'bout a sweet horizontal rule?<hr>
```


## HTML Attributes

Often an element needs more information to do its job. That's where _attributes_ come in.  Each element has a handful of attributes for it.

```xml
<img src="mount-eden.jpg" alt="Mount Eden">
```

Attributes are made up of a name and a value. For example, in the example above, `src` is the source of the image and `alt` is the alternative text that is shown when you hover your mouse over the image or if the image isn't shown.

And that's the basics of HTML elements. Now you just need to which elements are available. Check out this [HTML Cheat Sheet](http://www.simplehtmlguide.com/cheatsheet.php) for a list of the most common HTML elements and their attributes.


## Structure of a web page

A web page is constructed with specific elements and attributes.

```xml
<html>
  <head>
    <title>Blog home</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>Nice to have you here!</p>
  </body>
</html>
```


## Cascading Style Sheets (CSS)

CSS gives us a way to style our page. Some of things involved with styling includes colors, fonts and sizes of things. To create the styles we define _rules_ for specific sets of elements. A rule is made up of a _selector_ and a block of _declarations_. Before we talk about how to write selectors and declarations, let's see how to attach our CSS to our HTML page.

### Adding to a web page

There are a number of ways to add styling to a web page, but we'll focus on the easiest way for now. Just create a `<style>` element inside the `<head>` element of your page and put your rules inside them.

```xml
<html>
  <head>
    <title>CSS FTW!</title>
    <style>
      [CSS rules go in here]
    </style>
  </head>
  <body>
    CSS is FUN!
  </body>
</html>
```


### Selectors

There are a lot of ways to select a set of elements but we'll just focus on a few ways. One way is to make a selection using the element name.

```css
h1 { color: purple; }
```

In the above example, `h1` is the selector that selects all `h1` elements on the page.

A really popular way to select elements is to assign them a _class_ and then target the classes in your selection. The first step is to assign a class to an element.

```xml
<div class="blue thin">I'm thin and blue</div>
```

Notice how you can add as many as you like just by separating them with a space.

The next step is to select the classes in your CSS file. You do this by prefixing a full stop before the class name.

```css
.blue { color: blue; }
.thin { border-width: 1px; }
```


## Declarations

Declarations are made up of the style you want to change and the style's new value. Here are a few examples:

```css
.blue-all-the-things {
  color: blue;
  background-color: blue;
  border-color: blue; 
}

.not-fancy {
  font: 16px "Open Sans", sans-serif;
}

.icon {
  background-image: url(icon.png);
}

.bigger-border {
  border-width: 5px;
}
```

Now that you have the fundamentals, the next step is to have a play and explore all of the possibilities. Perhaps have a look at the [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) and find something new to try.
