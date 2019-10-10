

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey : "AIzaSyADT6gjOuhOQjqQG-a09vFwNDg8n3YXwNo",
    authDomain: "train-schedule-68cfe.firebaseapp.com",
    databaseURL: "https://train-schedule-68cfe.firebaseio.com",
    projectId: "train-schedule-68cfe",
    storageBucket: "train-schedule-68cfe.appspot.com",
    messagingSenderId: "619667029089",
    appId: "1:619667029089:web:7e70fa8e3cdb724387be20",
    measurementId: "G-BTHCQE94K5"
  
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  
  
  // train button
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  // grab them inputs
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainStart = moment($("#start-input").val().trim(), "hh:mm").format("X");
    var trainFrequency = $("#frequency-input").val().trim();
  
    // local storage bb
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      firstTrain: trainStart,
      frequency: trainFrequency
    };
  
    // pushin to that base
    database.ref().push(newTrain);
  
    // loggin to that console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.start);
    console.log(newTrain.frequency);
  
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#start-input").val("");
    $("#frequency-input").val("");
  });
  
  // 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainStart = childSnapshot.val().start;
    var
     trainFrequency = childSnapshot.val().frequency;
  
    // train Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainStart);
    console.log(trainFrequency);
  
  
    todo
    // Prettify the train start
    var trainStartPretty = moment.unix(trainStart).format("00:00");
  
    // Calculate the months worked using hardcore math
    // To calculate the months worked
    var nextArrival = moment().diff(moment(trainStart, "X"), "minutes");
    console.log(trainMinutes);
  
    // Calculate the total billed rate
    var minutesAway = trainStart * trainFrequency;
    console.log(trainBilled);
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDestination),
      $("<td>").text(trainFrequency),
      $("<td>").text(nextArrival),
      $("<td>").text(minutesAway)
    );
  
    // Append the new row to the table
    $("#train-table > tbody").append(newRow);
  });
  