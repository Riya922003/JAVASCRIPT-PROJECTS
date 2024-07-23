var bookedTickets = new Array();

function bookTicket(trainName) {
    var seat = document.getElementById('seat').value;
    var food = document.getElementById('food').value;
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var sex = document.getElementById('sex').value;

    const ticket = {
        trainName,
        seat,
        food,
        name,
        age,
        sex
    };

    bookedTickets.push(ticket);

    alert('Ticket booked successfully!');
    clearForm();

}



function clearForm() {
    document.getElementById('seat').value = 'Window';
    document.getElementById('food').value = 'Vegetarian';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('sex').value = 'Male';
}



function clearForm() {
    document.getElementById('seat').value = 'Window';
    document.getElementById('food').value = 'Vegetarian';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('sex').value = 'Male';
}
