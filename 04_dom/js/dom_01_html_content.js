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
// create a new list item
var newEl = document.createElement('li');

// create a text node and store it in a variable
var newText = document.createTextNode('quinoa');

//Attach the new text node to the new element
newEl.appendChild(newText);

// Find the position where the new element should be added
var position = document.getElementsByTagName('ul')[0];
alert(position);
position.appendChild(newEl);
