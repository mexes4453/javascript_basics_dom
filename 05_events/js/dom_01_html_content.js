/**
 * adding and removing html content can be achieved by two means
 * - innerHTML property
 * - DOM manipulation 
 */


/**
 * approach - innerHTML : this approach is discouraged 
 */
// retreive the first item on the list
var firstItem = document.getElementById('one');
// retrieve the contents of the first list item
var itemContent = firstItem.innerHTML;
// update the content of the first list item so it now has a link
alert(itemContent);
firstItem.innerHTML = "<a href='http://example.org'>" + itemContent + '</a>';


/**
 * approach - DOM :  This approcah provides three methods for adding elements
 * createElement() -> creates a new element node
 * createTextNode() -> creates a new text node. They can used to provide element contents
 * appendChild() -> allows you to specify which element you want a node to add as a child to it.
 *               -> this also adds new elements to the DOM tree.
 */

/**
 * adding new item via DOM manipulation */ 
alert('adding new item to the dom tree');
// create a new list item
var newEl = document.createElement('li');

// create a text node and store it in a variable
var newText = document.createTextNode('quinoa');

//Attach the new text node to the new element
newEl.appendChild(newText);

// Find the position where the new element should be added
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);


/**
 * removing an  item via DOM manipulation
 * --------------------------------------
 *  1. store the element to removed in a variable 
 *  2. store the parent of that element in a variable 
 *  3. remove the element from its containing element */ 
alert('removing an item to the dom tree');
var removeEl = document.getElementsByTagName('li')[2]; // the element to remove.
var containerEl = removeEl.parentNode;                 // store its containing element
containerEl.removeChild(removeEl);                     // remove the element.


/**
 * element attributes
 * hasAttribute
 * getAttribute
 * setAttribute
 */ 
// Check for attribute
var firstItem = document.getElementById('one');
if (firstItem.hasAttribute('class'))
{
    var attr = firstItem.getAttribute('class');
    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p> Attributes: The first item has a class name: ' + attr + '</p>';
}

// creating attributes and changing their value 
alert('change the class attribute for item two');
var secondItem = document.getElementById('two');
secondItem.className ='cool';

// adding attributes and changing their value 
alert('add the class attribute for item four');
var el3 = document.getElementsByTagName('li')[3]; // the element to add.
el3.setAttribute('class', 'cool');

// adding attributes and changing their value 
alert('remove the class attribute for item one');
var el1 = document.getElementById('one'); // the element to remove its attributes.
if (el1.hasAttribute('class'))            // check if it has class attribute
{
    el1.removeAttribute('class');         // remove the class attribute if presentt
}



/**
 * putting it together 
 * */ 
// add items to start and end of list 
var list = document.getElementsByTagName('ul')[0]; // fetch the ul element 

// add new item to end of list
alert('adding new Item to list bottom');
var newItemLast = document.createElement('li');     // create an element 
var newTextLast = document.createTextNode('cream'); // create text node
newItemLast.appendChild(newTextLast);               // add text node to element 
list.appendChild(newItemLast);                      // add element to end of list

// add new item to start of list
// This is achieve by using the insertBefore() method (parent.insertBefore(newItem, target))
alert('adding new Item to list top');
var newItemFirst = document.createElement('li');    // create an element
var newTextFirst = document.createTextNode('kale'); // create text node
newItemFirst.appendChild(newTextFirst);             // add text node to element 
list.insertBefore(newItemFirst, list.firstChild);   // add element to list

// set the class name for all list item
alert('setting all list item to class (cool)');
var listItems = document.querySelectorAll('li');
var idx;
for (idx=0; idx<listItems.length; idx++)
{
    listItems[idx].className = 'hot';
}
var heading = document.querySelector('h2');       // find h2 element
var headingText = heading.firstChild.nodeValue;   // current h2 text
var totalItems = listItems.length;                // no of <li> elements
var newHeading = headingText + '<span>' + totalItems + '</span>'; // new h2 text
heading.textContent = newHeading;
