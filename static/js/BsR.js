// Applicable for war as well
var playerNames = [...new Set(tableData.map(player => player.Name))];
autocomplete(document.getElementById("playerName"), playerNames);



function getPredictedBsR() {
    var name = document.getElementById("playerName").value;
    var bsr = tableData.filter(player => player.Name == name).map(player => [player.Season, player.Next_BsR])
    document.getElementById("Result").textContent = tableData.find(player => player.Name == name).prediction;
    plotData(bsr);
}

function getPredictedWAR() {
    var name = document.getElementById("playerName").value;
    var bsr = tableData.filter(player => player.Name == name).map(player => [player.Season, player.Next_WAR])
    console.log(tableData[0]);
    console.log(bsr)
    document.getElementById("Result").textContent = tableData.find(player => player.Name == name).prediction;
    plotData(bsr);
}

