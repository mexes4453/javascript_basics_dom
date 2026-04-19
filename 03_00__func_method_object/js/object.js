// creating an object with curly bracket
var hotel = {
    name: 'quay',
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ['twin', 'double', 'suite'],
    checkAvailability: function() {
        return this.rooms - this.booked;
   }
};

// accessing the object
var hotelName = hotel.name;
var roomsFree = hotel.checkAvailability();
var hasGym = hotel['gym'];

var elName = document.getElementById('idHotelName');
elName.textContent = hotel.name;
var elRooms = document.getElementById('idRooms');
elRooms.textContent = hotel.rooms;



// object modification
hotel.name = "best western"
elName.textContent = hotel.name;


hotel['name'] = "park view"
elName.textContent = hotel.name;

// remote object attribute
delete hotel.name


// check the console for output
console.log(hotel)

// object creation with construction notation
function Hotel( name, rooms, booked)
{ 
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability =  function() {
        return this.rooms - this.booked;
   };
}
var hotelEuropa = new Hotel('Europa', 40, 25);
var detailsHotelEuropa = hotelEuropa.name + ' Rooms: ';
detailsHotelEuropa += hotelEuropa.checkAvailability();

var elHotelEuropa = document.getElementById('idHotelEuropa');
elHotelEuropa.textContent = detailsHotelEuropa;


// window.alert(window.location);
// window.open(); // opens a new tab.
window.document.write("Passed");
window.document.write("\nFailed");
//window.print();
