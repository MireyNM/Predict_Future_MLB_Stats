function plotData(data) {
    var xdata = null
    var ydata = null
    data = data.sort((a,b)=> b[0] - a[0])
    for (var i =0, xdata = new Array(), ydata = new Array(); i < data.length; i++) {
        xdata.push(data[i][0]) 
        ydata.push(data[i][1]) 
    }
    // input for the x and y of plot
    var trace = {
        x: xdata,
        y: ydata,
        type: 'line'
    }
    var lineData = [trace]

    var lineLayout = {
        title: "Batters' prediction",
        xaxis: "Years",
        yaxis: "BsR"

    }

    graph = document.getElementById('lineGraph')

    Plotly.newPlot(graph, lineData, lineLayout)
}

