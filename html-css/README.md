# HTML & CSS

The web is built with 3 fundamental languages: HTML, CSS and JavaScript. HTML and CSS provide the structure and styling of what we see and interact with. JavaScript provides the interaction behaviour, but we can focus on that later, after we're more familiar with HTML and CSS.

## Elements (aka Tags)

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


## Attributes

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


