$(document).ready(function () {
    //initialize firebase
    var config = {
        apikey: "AIzaSyB23lmjrjWcP9KqRKvei6bjilxnl0XuDHc"  //firebase web API key
        authDomain: "coder-bay-views.firebaseapp.com",
        databaseURL: "https://coder-bay-views.firebaseio.com",
        storageBucket: "coder-bay-views.appspot.com",
        messagingSenderId: "17945436261"

    }
    firebase.initializeApp(config);

    var database = firebase.database();


    //Capture Button Click
    $("#addtrain").on("click", function (event) {
        event.preventDefault()
    
        var connectionsRef = database.ref("/connections");
        var connectedRef = database.ref(".info/connected");
// Assumptions
var tFrequency = 3;

// Time is 3:30 AM
var firstTime = "03:30";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
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
</script>