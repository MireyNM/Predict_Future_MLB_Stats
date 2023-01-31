var playerNames = [...new Set(tableData.map(player => player.Name))];
autocomplete(document.getElementById("batterBsRName"), playerNames);



function getPredictedBsR() {
    var name = document.getElementById("batterBsRName").value;
    var res = tableData.filter(player => player.Name == name).map(player => [player.Season, player.Next_WAR])
    console.log(res);
    document.getElementById("BsRBATTResult").textContent = tableData.find(player => player.Name == name).Next_WAR;
}