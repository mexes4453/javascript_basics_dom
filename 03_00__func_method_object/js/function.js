var msg = "Sign up to receive our newsletter for 10% off!";
function updateMessage()
{
    var el = document.getElementById('message');
    el.textContent = msg;
}

updateMessage();

// function that returns multiple values
function getSize(width, height, depth)
{
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [ area, volume ];
    return sizes;
}
var areaOne = getSize(3,2,3)[0];
var volumeOne = getSize(3,2,3)[1];

// named functions
var volume = function(w,h,l)
             {
                return w* h* l;
             }
var vol = volume(3,4,5);


//immediately invoked function expressions (iffe)
// These function are executed once and they dont have a name.
// They are used in event handlers and listeners to perform task when event occurs.
// The help to prevent conflicts between two scripts.
var area = ( function() {
               var width = 3;
               var height = 2;
               return width * height;
             }()
           );


