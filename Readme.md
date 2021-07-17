# Author: Venkata Sai Madhav Kaza | Central Michign University

# CSS Questions 
1. How can you switch a css style when the screen size is below a certain size?

Sol:

By using Javascript with CSS, we can switch css style when the screen size is below a certain size. In the code we access the elements by using QuerySelector in the javascript code to get the document required for us to change the CSS style for the web page.

2. What is the benefit of using stylesheets instead of inline styles?

Sol:

When you use a style sheet using href it requires another request to the server, then the parsing of the file after response. With inline styles there is none of that, just direct parsing.

The only reason we use style sheets is to be organised

3. Is there a way to manage CSS with variables and functions?

Sol:

Yes. The var() function is used to insert the value of a CSS variable. CSS variables have access to the DOM, which means that you can create variables with local or global scope, change the variables with JavaScript, and change the variables based on media queries.

A good way to use CSS variables is when it comes to the colors of your design. Instead of copy and paste the same colors over and over again, you can place them in variables.

4. Review and update the following erroneous CSS:


.button, input[type="submit"], button {
position: relative
display: inline-block;
padding-front: 0;
margin: 0;
border: none;
text-decoration: none;
text-align: center;
white-space: nowrap;
overflow: visible;
bgcolor: red;
text-transform: uppercase
font-color: #fZb034;
font-size: 18px;
font-family: 'FuturaBT-Book';
line-height. 20px;
height: 20px;
-webkit-transition: color 0.2s ease-in-out;
transition: color 0.2s ease-in-out
}

Sol: 

There were some errors in the CSS scripts and I have attached the correct CSS script in this file. 

.button, input[type="submit"], button {
position: relative;
display: inline-block;
padding: 0;
margin: 0;
border: none;
text-decoration: none;
text-align: center;
white-space: nowrap;
overflow: visible;
background-color: red;
text-transform: uppercase;
color: #ffb034;
font-size: 18px;
font-family: 'FuturaBT-Book';
line-height: 20px;
height: 20px;
-webkit-transition: color 0.2s ease-in-out;
transition: color 0.2s ease-in-out
}

# Javascript Questions

1. What’s the difference between the following three “car” approaches?
function Car(){}
var car = Car();
var car = new Car()

Sol:

function Car(){} It is always advised to create own functions from Scratch in the JS files. This approach is naive approach and correct approach to solve the object function creation.

var car = Car(); It is the aproach which makes sure that an old instantiated object is retrieved to the car variable. This approach is in middle between best approach of creating an object and worst approach of creating an object Car() with the function.

var car = new Car() It is the approach which is used n java to create new objects of a class called in main(). This is the best approach to call the new object without any instantiation from the default instantiated values in the class.


2. Explain what AJAX is and it’s advantages/disadvantages.

Sol:

AJAX stands for Asynchronous JavaScript And XML. In a nutshell, it is the use of the XMLHttpRequest object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files.

Some of the many benefits of using Ajax in web-based applications include the following:
Improved user experience.
Asynchronous processing.
Reduced server hits and network load.
Platform and architecture neutrality.
Multibrowser support.
Faster page renders and improved response times.

Disadvantages of AJAX:
It increases design and development time.
Complex.
Less security.
Search Engines cannot index AJAX pages.
Browsers which disabled JavaScript cannot use the application.
Another server cannot display information within the AJAX.



3. Describe how event bubbling works in the context of clicking on the “Hello World” text:
<body>
	<div id=”container”>
		<span id=”textContainer”>Hello World</span>
	</div>
</body>

Sol:

Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event. It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy. In event bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

When we hover our mouse to HelloWorld, then the textContainer field is activated to get the results of the field through our HTML application.


4. Create a loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

Sol:

for(var i=1;i<=100;i++, msg=""){
    if (!(i%3)) msg+="Fizz"; 
    if (!(i%5)) msg+="Buzz"; 
    console.log(msg || i); 
}

5. Please fix the following erroneous JavaScript code.
/**
* Returns the header element.
*
* @return {(object|null)} The JQuery header element or null if the element does not exist
*/
function getHeaderElement() {
// Get header element by its id.
header = $(“myHeader”);
if (header === null
&& TypeOf header === undefined
) {
console.log(‘header element exists!”);
}
console.log(“
header element does not exist!
“))
return header
}

Sol:

There were some errors in the JS scripts and I have attached the correct JS script in this file. 

function getHeaderElement() {
// Get header element by its id.
	header = $('myHeader');
	if (header === null && TypeOf(header) === undefined) {
		console.log('header element does not exist!');
	}
	else{
		console.log('header element exists!');
	}
	return header
}

