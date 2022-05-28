var jsonData = null;
var Data = null;


async function loadLanguageData(lang) {
    var json = await fetch("https://eyefyre.github.io/Civilization-5-Quotes/JSONData/Quotes" + lang + ".json");
    jsonData = await json.json();
    populateWonderSelection()
}

function populateWonderSelection() {
    for (var i = 0; i < jsonData.length; i++) {
        var n = jsonData[i]["name"].split("|")[0]
        $("#wonderrow").append("<div class='col'>" + n + "</div>")
    }
    displayQuote()
}


function displayQuote() {
    $('#soundd').get(0).pause()
    $('#soundB').addClass("fa-play").removeClass("fa-pause")
    item = jsonData[Math.floor(Math.random() * jsonData.length)]
    fadeInBackgroundImage(item);
}

function fadeInBackgroundImage(item) {
    if (item["sound"] == null) {
        $('#soundB').addClass("fa-volume-off").removeClass("fa-pause").removeClass("fa-play")
        $('#sound-button').prop('disabled', true);
    }
    else {
        $('#soundB').removeClass("fa-volume-off").addClass("fa-play")
        $('#sound-button').prop('disabled', false);
    }
    $('#soundd').attr("src", item["sound"])
    $('#quote').text(item["quote"])
    $('#quotee').text("- " + item["quotee"])
    $('#title').text(item["name"])
    $("#black-faded-background").hide()
    $("#background-image").css("background", "url('" + item["art"] + "') no-repeat center center fixed")
    $("#background-image").css("background-size", "cover")
    $("#background-image").css("-webkit-background-size", "cover")
    $("#background-image").hide()
    $('#background-image').fadeIn(2000, function () {
        $("#black-faded-background").fadeIn(1500)
    })
}

function playPause() {
    if ($('#soundd').get(0).paused) {
        $('#soundd').get(0).play()
        $('#soundB').addClass("fa-pause").removeClass("fa-play")
    }
    else {
        $('#soundd').get(0).pause()
        $('#soundB').addClass("fa-play").removeClass("fa-pause")
    }
}
function audioEnded() {
    $('#soundB').addClass("fa-play").removeClass("fa-pause")
}



