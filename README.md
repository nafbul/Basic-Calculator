# Basic-Calculator
I made this calculator, its a small project I worked on a few weeks ago. I am fairly new to coding with little knowledge to JavaScript and CSS. This is a personal project which I dont expect anyone to use. I made this as a small project to understand and get better at code. If anyone does download this, Congrats, you're probably the only one.

The HTML code is a badly made, however, it is a simple code which adds buttons and has CSS inside it which makes the calculator look better.


The JavaScript is simple and small. The It defines three functions for a calculator: addToDisplay, clearDisplay, and calculate.

The addToDisplay function takes a value argument and adds it to the calculator display. The function first gets the calculator display element using the document.getElementById method and then appends the value argument to the value property of the element. For example, if the value argument is 5, the function will add 5 to the calculator display.

The clearDisplay function clears the calculator display. The function gets the calculator display element using the document.getElementById method and sets the value property of the element to an empty string. For example, if the calculator display currently shows 5 + 3, the clearDisplay function will set the display to an empty string.

The calculate function evaluates the expression in the calculator display and displays the result. The function first gets the calculator display element using the document.getElementById method and gets the value property of the element, which represents the expression to be evaluated. The function then uses the eval function to evaluate the expression and assigns the result to the result variable. Finally, the function sets the value property of the calculator display element to the result. For example, if the calculator display currently shows 5 + 3, the calculate function will evaluate the expression and display 8 in the calculator display.
