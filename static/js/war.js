// Applicable for war
var pitcherName = [...new Set(WARData.map(player => player.Name))];
autocomplete(document.getElementById("pitcherName"), pitcherName);

function getPredictedWAR() {
    var name = document.getElementById("pitcherName").value;
    var bsr = WARData.filter(player => player.Name == name).map(player => [player.Season, player.Next_WAR, player.prediction])
    console.log(WARData[0]);
    console.log(bsr)
    document.getElementById("pitcherResult").textContent = WARData.find(player => player.Name == name).prediction;
    plotData(bsr);
}