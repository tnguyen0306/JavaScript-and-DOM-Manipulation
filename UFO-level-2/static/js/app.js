// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");

  // Get the value property of the input element
  var valueDate = inputDate.property("value");
  var valueCity = inputCity.property("value");
  var valueState = inputState.property("value");
  var valueCountry = inputCountry.property("value");
  var valueShape = inputShape.property("value");

  // Print the value to the console
  console.log(valueDate);
  console.log(valueCity);
  console.log(valueState);
  console.log(valueCountry);
  console.log(valueShape);

  // Filter the data based on input value
  var filteredData = tableData.filter(dataInfo => 
    dataInfo.datetime === valueDate &&
    dataInfo.city === valueCity &&
    dataInfo.state === valueState &&
    dataInfo.country === valueCountry &&
    dataInfo.shape === valueShape
    );

  // Print the value to the console
  console.log(filteredData);

  // // Then, select the unordered list element by class name
  var list = d3.select("tbody");

  // remove any children from the list to
  list.html("");

  // append stats to the list
  filteredData.forEach(events => {
    var row = list.append("tr");
    var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
    columns.forEach(column => row.append("td").text(events[column])
    )
  });
  
};