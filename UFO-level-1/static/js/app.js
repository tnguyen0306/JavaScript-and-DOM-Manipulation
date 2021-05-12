// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Select the unordered list element by class name
var list = d3.select("tbody");

// Create initial table
tableData.forEach(events => {
  var row = list.append("tr");
  var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
  columns.forEach(column => row.append("td").text(events[column])
  )
});

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);

  // Filter the data based on input value
  var filteredData = tableData.filter(dataInfo => dataInfo.datetime === inputValue);

  // Print the value to the console
  console.log(filteredData);

  // Remove any children from the list to
  list.html("");

  // Append stats to the list
  filteredData.forEach(events => {
    var row = list.append("tr");
    var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
    columns.forEach(column => row.append("td").text(events[column])
    )
  });
  
};