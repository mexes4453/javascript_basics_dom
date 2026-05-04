//01.
/**
var elUsername = document.getElementById('username'); // Get the user input
var elMsg = document.getElementById('feedback');      // fetch the feedback element 

function checkUsername()
{
    // This is needed only when using the html event handler 
    //var elMsg = document.getElementById('feedback');      // fetch the feedback element 
    //var elUsername = document.getElementById('username'); // Get the user input
    if (elUsername.value.length < 5)
    {
        elMsg.textContent = 'Username must be 5 Characters or more'; // set msg to element
    }
    else 
    {
        elMsg.textContent = '';
    }
}
*/


//02 tradition dom event handler. the recommened way to do this is with eventlistener.
//elUsername.onblur = checkUsername; // calls the checkUsername() when the element losses focus. 

//03 using dom event listener
// elUsername.addEventListener('blur', checkUsername, false); // calls the checkUsername() when the element losses focus. 




//04 alternative -> using functions with argument but requires anonymous function to invoke them within 
/**
function checkUsername(minLength)
{
    
    // This is needed only when using the html event handler 
    // var elUsername = document.getElementById('username'); // Get the user input
    if (elUsername.value.length < minLength)
    {
        // Set the error message
        elMsg.textContent = 'Username must be ' + minLength + ' Characters or more'; // set msg to element
    }
    else 
    {
        elMsg.textContent = '';
    }
}
//binding the function with paramenters
// calls the checkUsername(10) when the element losses focus. 
elUsername.addEventListener('blur', 
                            function(){
                               checkUsername(10);
                            }, false); 
*/ 



//05. event listener with no paramenters
// This allows properties and methods of the event object to be used within the event handler function
/**
function checkUsername(e)
{
    var target = e.target; // get the target of the event
}
var el = document.getElementById('username'); // Get the user input
el.addEventListener('blur', checkUsername, false);
*/



//06. event listener with paramenters
/**
function checkUsername(e, minLength)
{
    var target = (e.target); // get the target of the event
    alert("element(" + target +"); event:(" + e.type + ")");

    var elUsername = document.getElementById('username'); // Get the user input
    var elMsg = document.getElementById('feedback');      // fetch the feedback element 
    if (elUsername.value.length < minLength)
    {
        // Set the error message
        elMsg.textContent = 'Username must be ' + minLength + ' Characters or more'; // set msg to element
    }
    else 
    {
        elMsg.textContent = '';
    }
}

var el = document.getElementById('username'); // Get the user input
el.addEventListener('blur',
                    function(e){
                       checkUsername(e, 10);
                    }, false);
*/
//
//07. using event listeners with the event object
//parentNode, previousSibling, nextSibling, firstChild, lastChild
function checkUsername(e, minLength)
{
    var el, elMsg;
    if (!e)
    {
        e = window.event;
    }
    el = e.target; // capture the element for which the event was invoked upon.
    elMsg = document.getElementById('feedback');      // fetch the feedback element 
    if (el.value.length < minLength)                  // 
    {
        elMsg.textContent = 'Username must be ' + minLength + ' Characters or more'; // set msg to element
    }
    else 
    {
        elMsg.textContent = '';
    }
}

var el = document.getElementById('username'); // Get the user input
el.addEventListener('blur',
                    function(e){
                       checkUsername(e, 10);
                    }, false);





/**
 * ------------------------------------------------------------------------------
 * 08. event delegation
 * brief: Shows how to perform event delegation for element with multiple
 *        children that requires event action. 
 * Detail: This is acheived by assigned the event listener to the parent element 
 *         and upon handling the event, disabling the bubble-up to prevent 
 *         further trigger of the event of other child element.
 * ------------------------------------------------------------------------------
 */
function getTarget(e)
{
    if (!e)
    {
        e = window.event;
    }
    return e.target;
}


function itemDone(e)
{
    // Remove item from the list
    var target, elParent, elGrandparent;          // Declare variables
    target = getTarget(e);                        // Get the item clicked upon <a>
    elParent = target.parentNode;                 // Get its list item <li>
    elGrandparent = target.parentNode.parentNode; // Get its list <ul>
    elGrandparent.removeChild(elParent);          // Remove list item from list.

    // Prevent the link from taking you elsewhere - halting the bubble-up or captive
    e.preventDefault();
}

// Set up event listener to call itemDone() on click
var el = document.getElementById('shoppingList'); // Get shopping list
el.addEventListener('click', 
                     function(e){ 
                         itemDone(e);
                     },
                     false);

