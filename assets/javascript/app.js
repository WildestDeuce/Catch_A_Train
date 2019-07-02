// $(document).ready(function () {

//initialize firebase
var firebaseConfig = {
    apiKey: 'AIzaSyB23lmjrjWcP9KqRKvei6bjilxnl0XuDHc',
    authDomain: 'wildestdeuce-project.firebaseapp.com',
    databaseURL: 'https://wildestdeuce-project.firebaseio.com',
    projectId: 'wildestdeuce-project',
    storageBucket: '',
    messagingSenderId: '727276126279',
    appId: '1:727276126279:web:030d717b2b7da2a0'
};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//Capture Button Click
$('#train-submit ').on('click', function (event) {
    event.preventDefault();
    database.ref().push({
        train: $('#trainName')
            .val()
            .trim(),
        destination: $('#destination')
            .val()
            .trim(),
        time: $('#firstTrain')
            .val()
            .trim(),
        frequency: $('#frequency')
            .val()
            .trim(),
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});
// grab data from database and populate divs in table
database.ref().on('child_added', function (childSnapshot) {
    console.log(childSnapshot.val().train);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().time);
    console.log(childSnapshot.val().frequency);
    //code to populate divs
    var mydata = childSnapshot.val();
    var tdTrain = $(`<td>${mydata.train}</td>`);
    var tdDestination = $(`<td>${mydata.destination}</td>`);
    var tdFrequency = $(`<td>${mydata.frequency}</td>`);
    var tdTime = $(`<td>${mydata.time}</td>`);
    var tdNextTrain = $(`<td>${tMinutesTillTrain}</td>`);
    var tr = $(`<tr>`);
    tr.append(tdTrain);
    tr.append(tdDestination);
    tr.append(tdFrequency);
    tr.append(tdTime);
    tr.append(tdNextTrain);
    $('#trainTable').append(tr);
});

// Assumptions
var tFrequency = 5

// Time is set to input
var firstTime = "12:30";

var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));