// import the data from data.js
// const tableData = next_war;
// print(tableData)

// Reference the HTML table using d3
// var tbody = d3.select("tbody");

fetch('http://127.0.0.1:5000/',{
    method: "POST"
})
    .then((response) => response.json())
    .then((data) => console.log(data));