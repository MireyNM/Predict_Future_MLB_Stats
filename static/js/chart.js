// Plotting the data for batter player
function plotData(data) {
    // Creating the variable so that it can be stored later
    var xdata = null
    var ydata = null
    var zdata = null
    // sorting through the data in order
    data = data.sort((a,b)=> b[0] - a[0])
    // Creating a for loop for the new arrays and collecting the data that fits the selected filter from input
    for (var i =0, xdata = new Array(), ydata = new Array(), zdata = new Array(); i < data.length; i++) {
        xdata.push(data[i][0]) 
        ydata.push(data[i][1]) 
        zdata.push(data[i][2])
    }
    // trace for next_BsR
    var trace1 = {
        x: xdata,
        y: ydata,
        name: 'next_BsR',
        type: 'line'
    }
    // trace for prediction
    var trace2 = {
        x: xdata,
        y: zdata,
        name: 'prediction',
        type: 'scatter'
    }
    // combining traces
    var lineData = [trace1, trace2]

    // layout for the graph
    var lineLayout = {
        title: "Batters' prediction",
        xaxis: {title: "Seasons",
            tickmode: "linear",
            // spacing for the xticks
            dtick:'1'},
        yaxis: {title: "BsR"}

    }

    graph = document.getElementById('lineGraph')

    Plotly.newPlot(graph, lineData, lineLayout)
}
// Function for war data
function plotData(war_data) {
    var xdata = null
    var ydata = null
    var zdata = null
    data = war_data.sort((a,b)=> b[0] - a[0])
    for (var i =0, xdata = new Array(), ydata = new Array(), zdata = new Array(); i < data.length; i++) {
        xdata.push(data[i][0]) 
        ydata.push(data[i][1]) 
        zdata.push(data[i][2])
    }
    // input for the x and y of plot
    var trace1 = {
        x: xdata,
        y: ydata,
        name: 'next_WAR',
        type: 'line'
    }
    var trace2 = {
        x: xdata,
        y: zdata,
        name: 'prediction',
        type: 'scatter'
    }
    var lineData = [trace1, trace2]

    var lineLayout = {
        title: "Pitchers' prediction",
        xaxis: {title: "Seasons",
            tickmode: "linear",
            dtick:'1'},
        yaxis: {title: "WAR"}

    }

    graph = document.getElementById('lineGraph')

    Plotly.newPlot(graph, lineData, lineLayout)
}

