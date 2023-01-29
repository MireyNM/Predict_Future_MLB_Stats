var playerNames = tableData.map(player => player.Name);
autocomplete(document.getElementById("batterVSRName"), playerNames);



function getPredictedVSR() {
    var name = document.getElementById("batterVSRName").value;
    document.getElementById("VSRBATTResult").textContent = tableData.find(player => player.Name == name).Next_WAR;
}