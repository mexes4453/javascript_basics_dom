var elements = document.getElementsByTagName('li');   // Finds <li> elements
if (elements.length > 0)   // if 1 or more are found
{
    var el = elements[0];   // Select the first one using array syntax. 
    el.className = 'cool';  // Change the value of the class attribute.
}
// ouput: changes the fresh figs background to blue




//querySelector() only returns the first match
var el = document.querySelector('li.hot');
el.className = 'cool';
// ouput: changes the pine nuts background to blue


//querySelectorAll() returns a NodeList (collection)
// ouput: changes the pine nuts background to red
var els = document.querySelectorAll('li.cool');
els[1].className = 'hot';


// repeating actions for an entire nodelist
function modifyNodeList()
{
    var itemsHot = document.querySelectorAll('li.hot');
    for (var i=0; i < itemsHot.length; i++)
    {
        itemsHot[i].className = "cool";
    }
}
setTimeout(modifyNodeList, 2000);


// transversing the NodeList pg.209[220]
// - parentNode
// - previousSibling
// - nextSibling
// - firstChild - Returns the element within a nested element
// - lastChild
setTimeout( function (){ el.parentNode.className = 'hot';}, 2000);


/**
 * nodeValue, textContent, innerText - These attributes supports
 * accessing and upodating of text within elements.
 * Access & update a text node with nodevalue 
 * <li id="one" class="hot"><em>fresh</em> figs</li>
 * To access the text node figs
 * this item has two children (element:<em> and textNode:figs )
*/ 
var txtNodeValue = document.getElementById('one').firstChild.nextSibling.nodeValue;
alert(txtNodeValue);


/**
 * Access & change a text node. 
 * ----------------------------
 * This is achieved by fetching the nodevalue, replace the retreived values
 * and setting it back to element.
 */
var oldText = 'pine nuts';
var itemTwo = document.getElementById('two');
itemTwo.firstChild.nodeValue = oldText;
var elText = itemTwo.firstChild.nodeValue;
elText = elText.replace('pine nuts', 'kale');
setTimeout( function (){ itemTwo.firstChild.nodeValue = elText;}, 2000);




/**
 * 05
 * Retreive the text within element with attribute textContent
 * This approach ignores any markup element within the text.
 * markups includes italics elements
 */
var itemOneTxt = document.getElementById('one').textContent;
alert('05: Get text with textContent-> ' + itemOneTxt);

/**
 * 06 : Accessing text only 
 * This demonstrate the difference between textContent and innerText
 * approach to get the value of a text node.
 * <li id="one" class="hot"><em>fresh</em> figs</li>
 * note that the css file hides the visibility of <em> element.
 * The output - shows that the attribute textContent reveals all text including <em>
 * The output - shows that the attribute innerText omits text within <em> element
 */ 
var firstItem = document.getElementById('one'); // find first list item
var showTextContent = firstItem.textContent; // Get value by textContent
var showInnerText = firstItem.innerText;
var msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;
firstItem.textContent = 'sourdough bread';  // update the first list item.

