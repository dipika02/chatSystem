function sillyname() {
    function rnd(n) { return Math.floor(Math.random()*n) }

    return ["Runny","Buttercup","Dinky","Princess","Crusty",
    "Greasy","Gidget","Cheesypoof","Lumpy","Wacky","Tiny","Flunky",
    "Fluffy","Zippy","Doofus","Gobsmacked","Slimy","Grimy","Salamander",
    "Dr","Burrito","Bumpy","Loopy",
    "Snotty","Irving","Egbert"][rnd(25)] +

    ["Waffer","Lilly","Bubblegum","Sand","Fuzzy","Kitty",
    "Puppy","Snuggles","SpacePrincess","Stinky","Lulu",
    "Lala","Sparkle","Glitter",
    "Silver","Golden","Rainbow","Cloud",
    "Rain","Stormy","Wink","Sugar",
    "Twinkle","Star","Halo","Angel"][rnd(25)];
}