var wiki = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=1&titles=";
var wikiEnd = "&explaintext=1&exsectionformat=plain&format=json";
var inp = document.getElementById("searchBar");
var btn = document.getElementById("searchBtn");

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

btn.addEventListener('click', function() {
    readTextFile(wiki + inp.value + wikiEnd, function(text){
        var data = JSON.parse(text);
        // Continue Code
        console.log(data);
    });
});