let initialized = false;

let items = new Map();

function init() {
    items = new Map([
        ["Acorn Heights", document.getElementById("Acorn Heights")],
        ["Airship Fortress", document.getElementById("Airship Fortress")],
        ["Boo Cinema", document.getElementById("Boo Cinema")],
        ["Bowsers Castle", document.getElementById("Bowsers Castle")],
        ["Cheep Cheep Falls", document.getElementById("Cheep Cheep Falls")],
        ["Choco Mountain", document.getElementById("Choco Mountain")],
        ["Crown City", document.getElementById("Crown City")],
        ["Dandelion Depths", document.getElementById("Dandelion Depths")],
        ["Desert Hills", document.getElementById("Desert Hills")],
        ["Dino Dino Jungle", document.getElementById("Dino Dino Jungle")],
        ["DK Pass", document.getElementById("DK Pass")],
        ["DK Spaceport", document.getElementById("DK Spaceport")],
        ["Dry Bones Burnout", document.getElementById("Dry Bones Burnout")],
        ["Faraway Oasis", document.getElementById("Faraway Oasis")],
        ["Great Question Mark Block Ruins", document.getElementById("Great Question Mark Block Ruins")],
        ["Koopa Troopa Beach", document.getElementById("Koopa Troopa Beach")],
        ["Mario Bros Circuit", document.getElementById("Mario Bros Circuit")],
        ["Mario Circuit", document.getElementById("Mario Circuit")],
        ["Moo Moo Meadows", document.getElementById("Moo Moo Meadows")],
        ["Peach Beach", document.getElementById("Peach Beach")],
        ["Peach Stadium", document.getElementById("Peach Stadium")],
        ["Rainbow Road", document.getElementById("Rainbow Road")],
        ["Salty Salty Speedway", document.getElementById("Salty Salty Speedway")],
        ["Shy Guy Bazaar", document.getElementById("Shy Guy Bazaar")],
        ["Sky-High Sundae", document.getElementById("Sky-High Sundae")],
        ["Starview Peak", document.getElementById("Starview Peak")],
        ["Toads Factory", document.getElementById("Toads Factory")],
        ["Wario Shipyard", document.getElementById("Wario Shipyard")],
        ["Wario Stadium", document.getElementById("Wario Stadium")],
        ["Whistletop Summit", document.getElementById("Whistletop Summit")]
    ]);
    initialized = true;
}

function toggle(id) {
    if (!initialized) {
        return;
    }
    let target = items.get(id).style;
    target.opacity = (target.opacity == 0) ? 1 : 0;
}