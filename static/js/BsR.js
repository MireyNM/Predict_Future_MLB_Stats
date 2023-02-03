var playerNames = [...new Set(tableData.map(player => player.Name))];
autocomplete(document.getElementById("batterBsRName"), playerNames);



function getPredictedBsR() {
    var name = document.getElementById("batterBsRName").value;
    var bsr = tableData.filter(player => player.Name == name).map(player => [player.Season, player.Next_BsR])
    console.log(bsr);
    document.getElementById("BsRBATTResult").textContent = tableData.find(player => player.Name == name).prediction;
    plotData(bsr);
}


// function getPredictedWAR() {
//     var name = document.getElementById("batterBsRName").value;
//     var war = tableData.filter(player => player.Name == name).map(player => [player.Season, player.Next_BsR])
//     console.log(war);
//     document.getElementById("BsRBATTResult").textContent = tableData.find(player => player.Name == name).prediction;
// }


