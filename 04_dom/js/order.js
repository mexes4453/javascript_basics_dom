var greeting = 'Howdy ';
var name = 'Molly';
var message = ', Please check your order:';

var welcome = greeting + name +  message;

var sign = "Montague House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
// Replace the content of that element with the personalized welcome message
var el = document.getElementById('greeting');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;



var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

var elSubTotal = document.getElementById('shipping');
elSubTotal.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
