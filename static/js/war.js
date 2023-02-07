// JS file for pitcher
// // Selecting the player name throughout the dataset
var pitcherName = [...new Set(WARData.map(player => player.Name))];
autocomplete(document.getElementById("pitcherName"), pitcherName);

// Filtering through player name selecting the x-data (Season) and y-data (Next_WAR and prediction)
function getPredictedWAR() {
    var name = document.getElementById("pitcherName").value;
    var bsr = WARData.filter(player => player.Name == name).map(player => [player.Season, player.Next_WAR, player.prediction])
    document.getElementById("pitcherResult").textContent = WARData.find(player => player.Name == name).prediction;
    // Plotting the selected player
    plotData(bsr);
}