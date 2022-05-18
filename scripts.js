var jsonData = null;

async function loadJSONData() {
    const json = await fetch("JSONData/QuotesEnglish.json");
    jsonData = await json.json();
    displayQuote();
}

function displayQuote() {
    $('#soundd').get(0).pause()
    $('#soundB').addClass("fa-play").removeClass("fa-pause")
    item = jsonData[Math.floor(Math.random() * jsonData.length)]
    fadeInBackgroundImage(item);
}

function fadeInBackgroundImage(item) {
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
function audioEnded(){
    $('#soundB').addClass("fa-play").removeClass("fa-pause")
}

