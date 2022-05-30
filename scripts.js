var jsonData = null;
var Data = null;


async function loadLanguageData(lang) {
    var json = await fetch("https://eyefyre.github.io/Civilization-5-Quotes/JSONData/Quotes" + lang + ".json");
    jsonData = await json.json();
    populateWonderSelection()
    displayRandomQuote()
}

function displayRandomQuote(){
    $('#soundd').get(0).pause()
    $('#soundB').addClass("fa-play").removeClass("fa-pause")
    item = jsonData[Math.floor(Math.random() * jsonData.length)]
    fadeInBackgroundImage(item);
}

function populateWonderSelection() {
    $("#wonderList").empty()
    for (var i = 0; i < jsonData.length; i++) {
        var n = jsonData[i]["name"].split("|")[0]
        $("#wonderList").append("<li id='" + i + "' class='nav-item w-100 wonderListItem px-3'><button class='nav-link w-100' data-bs-dismiss='offcanvas' aria-current='page' onclick='displayQuote("+ i + ")'><h4>" + n + "</h4></button></li>")
    }
}

function displayQuote(wonderID) {
    populateWonderSelection()
    $('#soundd').get(0).pause()
    $('#soundB').addClass("fa-play").removeClass("fa-pause")
    item = jsonData[wonderID]
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
        $("#black-faded-background").fadeIn(1000)
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



