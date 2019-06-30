// $(document).ready(function () {

//initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyB23lmjrjWcP9KqRKvei6bjilxnl0XuDHc",
    authDomain: "wildestdeuce-project.firebaseapp.com",
    databaseURL: "https://wildestdeuce-project.firebaseio.com",
    projectId: "wildestdeuce-project",
    storageBucket: "",
    messagingSenderId: "727276126279",
    appId: "1:727276126279:web:030d717b2b7da2a0"
};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();


//Capture Button Click
$("#train-submit ").on("click", function (event) {
    event.preventDefault();
    database.ref().push({
        train: $("#trainName").val().trim(),
        destination: $("#destination").val().trim(),
        time: $("#firstTrain").val().trim(),
        frequency: $("#frequency").val().trim(),
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    });
});
// grab data from database and populate divs in table
database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val().train);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().time);
    console.log(childSnapshot.val().frequency);
    //code to populate divs
    $("#train-name").append(childSnapshot.val().train);
    $("#going").append(childSnapshot.val().destination);
    $("#min").append(childSnapshot.val().frequency)
    $("#next-arrival").append(childSnapshot.val().time);
   // $("#minutes-away").append(childSnapshot.val().time);

});

