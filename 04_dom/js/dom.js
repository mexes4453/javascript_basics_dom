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
var els = document.querySelectorAll('li.cool');
els[1].className = 'hot';
// ouput: changes the pine nuts background to red

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
// - firstChild
// - lastChild
setTimeout( function (){ el.parentNode.className = 'hot';}, 2000);

