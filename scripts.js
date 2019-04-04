var horses = [
    {number: 1, name: "Anibale Fly", odds: 11},
    {number: 2, name: "Valtor", odds: 50},
    {number: 3, name: "Tiger Roll", odds: 3.5},
    {number: 4, name: "Outlander", odds: 100},
    {number: 5, name: "Don Poli", odds: 66},
    {number: 6, name: "Go Conquer", odds: 33},
    {number: 7, name: "Mala Beach", odds: 50},
    {number: 8, name: "Minella Rocco", odds: 25},
    {number: 9, name: "Lake View Lad", odds: 14},
    {number: 10, name: "Pleasant Company", odds: -1}, // unknown odds
    {number: 11, name: "Ballyoptic", odds: 33},
    {number: 12, name: "Dounikos", odds: 33},
    {number: 13, name: "Rathvinden", odds: 8},
    {number: 14, name: "One For Arthur", odds: 25},
    {number: 15, name: "Rock The Kasbah", odds: 20},
    {number: 16, name: "Warriors Tale", odds: 50},
    {number: 17, name: "Regal Encore", odds: 50},
    {number: 18, name: "Magic Of Light", odds: 50},
    {number: 19, name: "A Toi Phil", odds: -1}, // unknown odds
    {number: 20, name: "Jury Duty", odds: 16},
    {number: 21, name: "Noble Endeavor", odds: 33},
    {number: 22, name: "Monbeg Notorious", odds: 66},
    {number: 23, name: "Ramses De Teillee", odds: 25},
    {number: 24, name: "Tea For Two", odds: 40},
    {number: 25, name: "Step Back", odds: 20},
    {number: 26, name: "Ultragold", odds: 50},
    {number: 27, name: "Blow By Blow", odds: 66},
    {number: 28, name: "Up For Review", odds: 25},
    {number: 29, name: "Singlefarmpayment", odds: 50},
    {number: 30, name: "Vieux Lion Rouge", odds: 33},
    {number: 31, name: "Valseur Lido", odds: 66},
    {number: 32, name: "Vintage Clouds", odds: 11},
    {number: 33, name: "General Principle", odds: 40},
    {number: 34, name: "Livelovelaugh", odds: 66},
    {number: 35, name: "Walk In The Mill", odds: 25},
    {number: 36, name: "Folsom Blue", odds: 50},
    {number: 37, name: "Captain Redbeard", odds: 50},
    {number: 38, name: "Bless The Wings", odds: 66},
    {number: 39, name: "Joe Farrell", odds: 25},
    {number: 40, name: "Just A Par", odds: -1}  // unknown odds
];

var listElems = $(".horseList li");

function random_horses() {
    var shuffled = horses.slice(0), i = horses.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, 10);
}

var colourScale = d3.scaleLinear()
    .domain([3.5, 48.25, 100])
    .range(["green", "#f0a30a", "red"]);

function badge_colour(odds) {
    return colourScale(odds);
}

function update_list_item(elem, horse) {
    var horseNumber = horse["number"];
    var horseName = horse["name"];
    var horseOdds = horse["odds"];

    $(".horseNumber", elem).text("#" + horseNumber.toString());
    $(".horseName", elem).text(horseName);
    $(".horseOdds", elem).text(horseOdds.toString() + "-to-1")
        .css("background-color", badge_colour(horseOdds));

    $(elem).addClass("d-flex");
}

var output = $("#output");

function pickEm() {
    $("#pickEm").addClass("disabled").prop("disabled", true);

    var entrant = $("#entrant").val();

    var pickedHorses = random_horses();
    var horseNumbers = [entrant];

    for (var i = 0; i < 10; i++) {
        elem = listElems[i];
        horse = pickedHorses[i];
    
        update_list_item(elem, horse);

        horseNumbers.push(horse["number"]);
    }

    $(output).text(horseNumbers.join(","));
}
