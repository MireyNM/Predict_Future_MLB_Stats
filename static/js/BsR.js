var playerNames = tableData.map(player => player.Name);
autocomplete(document.getElementById("batterBsRName"), playerNames);



function getPredictedBsR() {
    var name = document.getElementById("batterBsRName").value;
    document.getElementById("BsRBATTResult").textContent = tableData.find(player => player.Name == name).Next_WAR;
}