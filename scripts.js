var jsonData = null;
var currentLanguage = null;
var englishData = null;
var germanData = null;
var frenchData = null;
var italianData = null;
var polishData = null;
var russianData = null;
var koreanData = null;
var chineseData = null;
var japaneseData = null;
var spanishData = null;

async function loadLanguageData() {
    var json = await fetch("JSONData/QuotesEnglish.json");
    englishData = await json.json();
    json = await fetch("JSONData/QuotesGerman.json");
    germanData = await json.json();
    json = await fetch("JSONData/QuotesFrench.json");
    frenchData = await json.json();
    json = await fetch("JSONData/QuotesItalian.json");
    italianData = await json.json();
    json = await fetch("JSONData/QuotesPolish.json");
    polishData = await json.json();
    json = await fetch("JSONData/QuotesRussian.json");
    russianData = await json.json();
    json = await fetch("JSONData/QuotesKorean.json");
    koreanData = await json.json();
    json = await fetch("JSONData/QuotesChinese.json");
    chineseData = await json.json();
    json = await fetch("JSONData/QuotesJapanese.json");
    japaneseData = await json.json();
    json = await fetch("JSONData/QuotesSpanish.json");
    spanishData = await json.json();
    loadJSONData("English")
}
function loadJSONData(language) {
    currentLanguage = language
    switch (language) {
        case "English":
            jsonData = englishData
            break;
        case "German":
            jsonData = germanData
            break;
        case "French":
            jsonData = frenchData
            break;
        case "Italian":
            jsonData = italianData
            break;
        case "Spanish":
            jsonData = spanishData
            break;
        case "Polish":
            jsonData = polishData
            break;
        case "Russian":
            jsonData = russianData
            break;
        case "Korean":
            jsonData = koreanData
            break;
        case "Japanese":
            jsonData = japaneseData
            break;
        case "Chinese":
            jsonData = chineseData
            break;
        default:
            jsonData = englishData
    }
    displayQuote();
}

function displayQuote() {
    $('#soundd').get(0).pause()
    $('#soundB').addClass("fa-play").removeClass("fa-pause")
    item = jsonData[Math.floor(Math.random() * jsonData.length)]
    console.log(item)
    fadeInBackgroundImage(item);
}

function fadeInBackgroundImage(item) {
    console.log(item["sound"])
    if (item["sound"] == null) {
        $('.snd').hide()
    }
    else {
        $('.snd').show()
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



