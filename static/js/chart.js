function plotData(data) {
    var xdata = null
    var ydata = null
    var zdata = null
    data = data.sort((a,b)=> b[0] - a[0])
    for (var i =0, xdata = new Array(), ydata = new Array(), zdata = new Array(); i < data.length; i++) {
        xdata.push(data[i][0]) 
        ydata.push(data[i][1]) 
        zdata.push(data[i][2])
    }
    // input for the x and y of plot
    var trace1 = {
        x: xdata,
        y: ydata,
        name: 'next_BsR',
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
        title: "Batters' prediction",
        xaxis: {title: "Seasons",
            tickmode: "linear",
            dtick:1},
        yaxis: {title: "BsR"}

    }

    graph = document.getElementById('lineGraph')

    Plotly.newPlot(graph, lineData, lineLayout)
}

