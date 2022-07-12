import { getBrownEyedHeroNames } from "./functions.js";
import { getHeroSlugWith4Aliases } from "./functions.js";
import { getDarkHorseComicHeroes } from "./functions.js";
import { getTeamCount } from "./functions.js";
import { getHeroesByRace } from "./functions.js";
import { getHeroesBasedOnSpeed } from "./functions.js";

const heroes = [
    {
        "id": 1,
        "name": "A-Bomb",
        "slug": "1-a-bomb",
        "powerstats": {
            "intelligence": 38,
            "strength": 100,
            "speed": 17,
            "durability": 80,
            "power": 24,
            "combat": 64
        },
        "appearance": {
            "gender": "Male",
            "race": ["Human"],
            "height": [
                "6'8",
                "203 cm"
            ],
            "weight": [
                "980 lb",
                "441 kg"
            ],
            "eyeColor": "Yellow",
            "hairColor": "No Hair"
        },
        "biography": {
            "fullName": "Richard Milhouse Jones",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Rick Jones"
            ],
            "placeOfBirth": "Scarsdale, Arizona",
            "firstAppearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "work": {
            "occupation": "Musician, adventurer, author; formerly talk show host",
            "base": "-"
        },
        "connections": {
            "groupAffiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
            "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
        },
        "teams": ["Ace", "Manic"]
    },
    {
        "id": 2,
        "name": "Abe Sapien",
        "slug": "2-abe-sapien",
        "powerstats": {
            "intelligence": 88,
            "strength": 28,
            "speed": 35,
            "durability": 65,
            "power": 100,
            "combat": 85
        },
        "appearance": {
            "gender": "Male",
            "race": ["Icthyo Sapien"],
            "height": [
                "6'3",
                "191 cm"
            ],
            "weight": [
                "145 lb",
                "65 kg"
            ],
            "eyeColor": "Blue",
            "hairColor": "No Hair"
        },
        "biography": {
            "fullName": "Abraham Sapien",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Langdon Everett Caul",
                "Abraham Sapien",
                "Langdon Caul"
            ],
            "placeOfBirth": "-",
            "firstAppearance": "Hellboy: Seed of Destruction (1993)",
            "publisher": "Dark Horse Comics",
            "alignment": "good"
        },
        "work": {
            "occupation": "Paranormal Investigator",
            "base": "-"
        },
        "connections": {
            "groupAffiliation": "Bureau for Paranormal Research and Defense",
            "relatives": "Edith Howard (wife, deceased)"
        },
        "teams": ["Havoc"]
    },
    {
        "id": 3,
        "name": "Abin Sur",
        "slug": "3-abin-sur",
        "powerstats": {
            "intelligence": 50,
            "strength": 90,
            "speed": 53,
            "durability": 64,
            "power": 99,
            "combat": 65
        },
        "appearance": {
            "gender": "Male",
            "race": ["Ungaran"],
            "height": [
                "6'1",
                "185 cm"
            ],
            "weight": [
                "200 lb",
                "90 kg"
            ],
            "eyeColor": "Blue",
            "hairColor": "No Hair"
        },
        "biography": {
            "fullName": "",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Lagzia"
            ],
            "placeOfBirth": "Ungara",
            "firstAppearance": "Showcase #22 (October, 1959)",
            "publisher": "DC Comics",
            "alignment": "good"
        },
        "work": {
            "occupation": "Green Lantern, former history professor",
            "base": "Oa"
        },
        "connections": {
            "groupAffiliation": "Green Lantern Corps, Black Lantern Corps",
            "relatives": "Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)"
        },
        "teams": ["Manic", "Boom"]
    },
    {
        "id": 4,
        "name": "Abomination",
        "slug": "4-abomination",
        "powerstats": {
            "intelligence": 63,
            "strength": 80,
            "speed": 53,
            "durability": 90,
            "power": 62,
            "combat": 95
        },
        "appearance": {
            "gender": "Male",
            "race": ["Human", "Radiation"],
            "height": [
                "6'8",
                "203 cm"
            ],
            "weight": [
                "980 lb",
                "441 kg"
            ],
            "eyeColor": "Green",
            "hairColor": "No Hair"
        },
        "biography": {
            "fullName": "Emil Blonsky",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Agent R-7",
                "Ravager of Worlds"
            ],
            "placeOfBirth": "Zagreb, Yugoslavia",
            "firstAppearance": "Tales to Astonish #90",
            "publisher": "Marvel Comics",
            "alignment": "bad"
        },
        "work": {
            "occupation": "Ex-Spy",
            "base": "Mobile"
        },
        "connections": {
            "groupAffiliation": "former member of the crew of the Andromeda Starship, ally of the Abominations and Forgotten",
            "relatives": "Nadia Dornova Blonsky (wife, separated)"
        },
        "teams": ["Blast", "Havoc"]
    },
    {
        "id": 5,
        "name": "Abraxas",
        "slug": "5-abraxas",
        "powerstats": {
            "intelligence": 88,
            "strength": 63,
            "speed": 83,
            "durability": 100,
            "power": 100,
            "combat": 55
        },
        "appearance": {
            "gender": "Male",
            "race": ["Cosmic Entity"],
            "height": [
                "-",
                "0 cm"
            ],
            "weight": [
                "- lb",
                "0 kg"
            ],
            "eyeColor": "Blue",
            "hairColor": "Black"
        },
        "biography": {
            "fullName": "Abraxas",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "-"
            ],
            "placeOfBirth": "Within Eternity",
            "firstAppearance": "Fantastic Four Annual #2001",
            "publisher": "Marvel Comics",
            "alignment": "bad"
        },
        "work": {
            "occupation": "Dimensional destroyer",
            "base": "-"
        },
        "connections": {
            "groupAffiliation": "Cosmic Beings",
            "relatives": "Eternity (\"Father\")"
        },
        "teams": ["Ace"]
    },
    {
        "id": 6,
        "name": "Absorbing Man",
        "slug": "6-absorbing-man",
        "powerstats": {
            "intelligence": 38,
            "strength": 80,
            "speed": 25,
            "durability": 100,
            "power": 98,
            "combat": 64
        },
        "appearance": {
            "gender": "Male",
            "race": ["Human"],
            "height": [
                "6'4",
                "193 cm"
            ],
            "weight": [
                "270 lb",
                "122 kg"
            ],
            "eyeColor": "Blue",
            "hairColor": "No Hair"
        },
        "biography": {
            "fullName": "Carl Creel",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Greithoth",
                "\"Crusher\" Creel",
                "Rocky Davis",
                "Dynamite Davis",
                "Lightningbolt",
                "Prisoner #24957"
            ],
            "placeOfBirth": "New York City, New York",
            "firstAppearance": "Daredevil #1 (April, 1964) (As Rocky Davis)",
            "publisher": "Marvel Comics",
            "alignment": "bad"
        },
        "work": {
            "occupation": "Professional criminal; former professional boxer",
            "base": "-"
        },
        "connections": {
            "groupAffiliation": "Masters of Evil, Lethal Legion; formerly Worthy, Frightful Four: former agent of Loki and They Who Wield Power",
            "relatives": "Mary MacPherran (Titania) (wife); Jerry Sledge (son); Rockwell \"Rocky\" Davis (Hi-Llite) (cousin)"
        },
        "teams": ["Flame"]
    },
    {
        "id": 7,
        "name": "Adam Monroe",
        "slug": "7-adam-monroe",
        "powerstats": {
            "intelligence": 63,
            "strength": 10,
            "speed": 12,
            "durability": 100,
            "power": 100,
            "combat": 64
        },
        "appearance": {
            "gender": "Male",
            "race": [],
            "height": [
                "-",
                "0 cm"
            ],
            "weight": [
                "- lb",
                "0 kg"
            ],
            "eyeColor": "Blue",
            "hairColor": "Blond"
        },
        "biography": {
            "fullName": "",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Takezo Kensei",
                "Richard Sanders"
            ],
            "placeOfBirth": "-",
            "firstAppearance": "Heroes S02E01 - Four Months Later...",
            "publisher": "NBC - Heroes",
            "alignment": "good"
        },
        "work": {
            "occupation": "former samurai swordsman, former British mercenary commander, former soldier in the Confederate Army",
            "base": "U.S.; formerly Diedenshausen, Germany; Milan, Italy; Paris, France; Japan; England; Atlanta, GA; Montreal, Canada"
        },
        "connections": {
            "groupAffiliation": "-",
            "relatives": "-"
        },
        "teams": ["Manic", "Flame"]
    },
    {
        "id": 8,
        "name": "Adam Strange",
        "slug": "8-adam-strange",
        "powerstats": {
            "intelligence": 69,
            "strength": 10,
            "speed": 33,
            "durability": 40,
            "power": 37,
            "combat": 50
        },
        "appearance": {
            "gender": "Male",
            "race": ["Human"],
            "height": [
                "6'1",
                "185 cm"
            ],
            "weight": [
                "195 lb",
                "88 kg"
            ],
            "eyeColor": "Blue",
            "hairColor": "Blond"
        },
        "biography": {
            "fullName": "Adam Strange",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Warrior of Two Worlds",
                "Savior of Rann"
            ],
            "placeOfBirth": "Chicago, Illinois",
            "firstAppearance": "Outsiders #6 (April, 1986)",
            "publisher": "DC Comics",
            "alignment": "good"
        },
        "work": {
            "occupation": "Adventurer, archaelogist, ambassador",
            "base": "Rann, Alpha Centauri System"
        },
        "connections": {
            "groupAffiliation": "Omega Men, L.E.G.I.O.N., R.E.B.E.L.S., formerly Seven Soldiers of Victory",
            "relatives": "Alanna Strange (wife); Aleea Strange (daughter); Sardath (father-in-law); Janey Strange (sister); Todd Strange (brother, deceased); Bantteir (mother-in-law); Adam Strange II (descendent)"
        },
        "teams": ["Havoc", "Flame"]
    },
    {
        "id": 10,
        "name": "Agent Bob",
        "slug": "10-agent-bob",
        "powerstats": {
            "intelligence": 10,
            "strength": 8,
            "speed": 13,
            "durability": 5,
            "power": 5,
            "combat": 20
        },
        "appearance": {
            "gender": "Male",
            "race": ["Human"],
            "height": [
                "5'10",
                "178 cm"
            ],
            "weight": [
                "181 lb",
                "81 kg"
            ],
            "eyeColor": "Brown",
            "hairColor": "Brown"
        },
        "biography": {
            "fullName": "Bob",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Bob",
                "agent of Hydra",
                "Bob",
                "agent of A.I.M"
            ],
            "placeOfBirth": "-",
            "firstAppearance": "Cable & Deadpool #38 (May, 2007)",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "work": {
            "occupation": "Mercenary, janitor; former pirate, terrorist",
            "base": "Mobile; formerly Manhattan, Hellcarrier"
        },
        "connections": {
            "groupAffiliation": "A.I.M., Deadpool; formerly Agency X, Hydra",
            "relatives": "Allison (ex-wife); Terry and Howie (sons)"
        },
        "teams": ["Ace"]
    },
    {
        "id": 11,
        "name": "Agent Zero",
        "slug": "11-agent-zero",
        "powerstats": {
            "intelligence": 75,
            "strength": 28,
            "speed": 50,
            "durability": 80,
            "power": 72,
            "combat": 95
        },
        "appearance": {
            "gender": "Male",
            "race": [],
            "height": [
                "6'3",
                "191 cm"
            ],
            "weight": [
                "230 lb",
                "104 kg"
            ],
            "eyeColor": "-",
            "hairColor": "-"
        },
        "biography": {
            "fullName": "Christoph Nord",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Maverick"
            ],
            "placeOfBirth": "Unrevealed location in former East Germany",
            "firstAppearance": "-",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "work": {
            "occupation": "Mercenary, former government operative, freedom fighter",
            "base": "-"
        },
        "connections": {
            "groupAffiliation": "Formerly Weapon X, Weapon Plus, Team X, Cell Six, former bodyguard of Psi-Borg, former agent of Major Barrington",
            "relatives": "Unidentified parents (deceased), Andreas Nord (brother, deceased), Ginetta Lucia Barsalini (wife, deceased), unnamed child (deceased)"
        },
        "teams": ["Boom"]
    },
    {
        "id": 12,
        "name": "Air-Walker",
        "slug": "12-air-walker",
        "powerstats": {
            "intelligence": 50,
            "strength": 85,
            "speed": 100,
            "durability": 85,
            "power": 100,
            "combat": 40
        },
        "appearance": {
            "gender": "Male",
            "race": [],
            "height": [
                "6'2",
                "188 cm"
            ],
            "weight": [
                "240 lb",
                "108 kg"
            ],
            "eyeColor": "Blue",
            "hairColor": "White"
        },
        "biography": {
            "fullName": "Gabriel Lan",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "-"
            ],
            "placeOfBirth": "Xandar, a planet in the Tranta system, Andromeda galaxy",
            "firstAppearance": "Fantastic Four #120",
            "publisher": "Marvel Comics",
            "alignment": "bad"
        },
        "work": {
            "occupation": "Former starship captain, Herald of Galactus",
            "base": "-"
        },
        "connections": {
            "groupAffiliation": "Former member of Nova Corps, Heralds of Galactus",
            "relatives": "-"
        },
        "teams": ["Manic", "Boom", "Fury"]
    },
    {
        "id": 13,
        "name": "Ajax",
        "slug": "13-ajax",
        "powerstats": {
            "intelligence": 56,
            "strength": 48,
            "speed": 35,
            "durability": 80,
            "power": 34,
            "combat": 55
        },
        "appearance": {
            "gender": "Male",
            "race": ["Cyborg"],
            "height": [
                "6'4",
                "193 cm"
            ],
            "weight": [
                "200 lb",
                "90 kg"
            ],
            "eyeColor": "Brown",
            "hairColor": "Black"
        },
        "biography": {
            "fullName": "Francis",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "\"Frankie\"",
                "the A-Man",
                "the Attending"
            ],
            "placeOfBirth": "-",
            "firstAppearance": "Deadpool #14 (March, 1998)",
            "publisher": "Marvel Comics",
            "alignment": "bad"
        },
        "work": {
            "occupation": "-",
            "base": "-"
        },
        "connections": {
            "groupAffiliation": "Formerly Weapon X",
            "relatives": "-"
        },
        "teams": ["Fury", "Ace"]
    },
    {
        "id": 14,
        "name": "Alan Scott",
        "slug": "14-alan-scott",
        "powerstats": {
            "intelligence": 63,
            "strength": 80,
            "speed": 23,
            "durability": 90,
            "power": 100,
            "combat": 32
        },
        "appearance": {
            "gender": "Male",
            "race": [],
            "height": [
                "5'11",
                "180 cm"
            ],
            "weight": [
                "201 lb",
                "90 kg"
            ],
            "eyeColor": "Blue",
            "hairColor": "Blond"
        },
        "biography": {
            "fullName": "Alan Ladd Wellington Scott",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Green Lantern",
                "White King",
                "Sentinal"
            ],
            "placeOfBirth": "Gotham City",
            "firstAppearance": "All-American Comics 16 (1940)",
            "publisher": "DC Comics",
            "alignment": "good"
        },
        "work": {
            "occupation": "-",
            "base": "Gotham City and New York City; Formerly Capitol City"
        },
        "connections": {
            "groupAffiliation": "Justice Society of America; Formerly Checkmate; the Sentinels of Magic; Formerly All-Star Squadron",
            "relatives": "Harlequin (Molly Mayne-Scott) (wife), Thorn (Rose Canton) (first wife, deceased), Todd Rice (Obsidian, son), Jennie-Lynn Hayden (Jade, daughter, deceased)"
        },
        "teams": ["Ace", "Boom", "Fury"]
    },
    {
        "id": 15,
        "name": "Alex Mercer",
        "slug": "15-alex-mercer",
        "powerstats": {
            "intelligence": 50,
            "strength": 80,
            "speed": 40,
            "durability": 90,
            "power": 100,
            "combat": 50
        },
        "appearance": {
            "gender": "Male",
            "race": ["Human"],
            "height": [
                "-",
                "0 cm"
            ],
            "weight": [
                "- lb",
                "0 kg"
            ],
            "eyeColor": "-",
            "hairColor": "-"
        },
        "biography": {
            "fullName": "Alexander J. Mercer",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Prototype",
                "Zues",
                "Blacklight"
            ],
            "placeOfBirth": "-",
            "firstAppearance": "-",
            "publisher": "Wildstorm",
            "alignment": "bad"
        },
        "work": {
            "occupation": "-",
            "base": "-"
        },
        "connections": {
            "groupAffiliation": "Gentek, The Infected",
            "relatives": "Dana Mercer (sister)"
        },
        "teams": ["Havoc", "Ace"]
    },
    {
        "id": 17,
        "name": "Alfred Pennyworth",
        "slug": "17-alfred-pennyworth",
        "powerstats": {
            "intelligence": 63,
            "strength": 10,
            "speed": 17,
            "durability": 10,
            "power": 7,
            "combat": 55
        },
        "appearance": {
            "gender": "Male",
            "race": ["Human"],
            "height": [
                "5'10",
                "178 cm"
            ],
            "weight": [
                "160 lb",
                "72 kg"
            ],
            "eyeColor": "Blue",
            "hairColor": "Black"
        },
        "biography": {
            "fullName": "Alfred Thaddeus Crane Pennyworth",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Alfred Beagle"
            ],
            "placeOfBirth": "-",
            "firstAppearance": "Batman #16 (April, 1943)",
            "publisher": "DC Comics",
            "alignment": "good"
        },
        "work": {
            "occupation": "Butler; Caretaker, former Actor; Field Medic; Government Agent",
            "base": "Wayne Manor; Batcave; Gotham City"
        },
        "connections": {
            "groupAffiliation": "Batman Family, Outsiders",
            "relatives": "Jarvis Pennyworth (father, deceased), Wilfred Pennyworth (older brother), Daphne Pennyworth (niece); Bruce Wayne (Batman, legal ward)"
        },
        "teams": ["Boom"]
    },
    {
        "id": 18,
        "name": "Alien",
        "slug": "18-alien",
        "powerstats": {
            "intelligence": 50,
            "strength": 28,
            "speed": 42,
            "durability": 90,
            "power": 57,
            "combat": 60
        },
        "appearance": {
            "gender": "Male",
            "race": ["Xenomorph XX121"],
            "height": [
                "8'0",
                "244 cm"
            ],
            "weight": [
                "375 lb",
                "169 kg"
            ],
            "eyeColor": "-",
            "hairColor": "No Hair"
        },
        "biography": {
            "fullName": "Xenomorph",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "-"
            ],
            "placeOfBirth": "Your chest :)",
            "firstAppearance": "Alien (1979)",
            "publisher": "Dark Horse Comics",
            "alignment": "bad"
        },
        "work": {
            "occupation": "-",
            "base": "-"
        },
        "connections": {
            "groupAffiliation": "-",
            "relatives": "Alien Queen (mother)"
        },
        "teams": ["Fury", "Flame"]
    },
    {
        "id": 20,
        "name": "Amazo",
        "slug": "20-amazo",
        "powerstats": {
            "intelligence": 63,
            "strength": 100,
            "speed": 83,
            "durability": 100,
            "power": 100,
            "combat": 100
        },
        "appearance": {
            "gender": "Male",
            "race": ["Android"],
            "height": [
                "8'5",
                "257 cm"
            ],
            "weight": [
                "385 lb",
                "173 kg"
            ],
            "eyeColor": "Red",
            "hairColor": "-"
        },
        "biography": {
            "fullName": "",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Professor Ivos Amazing Android",
                "Timazo",
                "Humazo",
                "Hourmazo"
            ],
            "placeOfBirth": "-",
            "firstAppearance": "Brave and the Bold #30 (July, 1960)",
            "publisher": "DC Comics",
            "alignment": "bad"
        },
        "work": {
            "occupation": "-",
            "base": "-"
        },
        "connections": {
            "groupAffiliation": "Formerly the Secret Society of Super Villains",
            "relatives": "Professor Ivo (creator), Kid Amazo (cyborg offspring)"
        },
        "teams": ["Ace", "Flame"]
    }
];

console.log("Q1:");
console.log(getBrownEyedHeroNames(heroes));

console.log("\nQ2:");
console.log(getHeroSlugWith4Aliases(heroes));

console.log("\nQ3:");
console.log(getDarkHorseComicHeroes(heroes));

console.log("\nQ4:");
console.log("# of heroes on Ace: " + getTeamCount(heroes, "Ace"));
console.log("# of heroes on Flame: " + getTeamCount(heroes, "Flame"));
console.log("# of heroes on Blast: " + getTeamCount(heroes, "Blast"));

console.log("\nQ5:");
console.log("Human heroes:");
console.log(getHeroesByRace(heroes, "Human"));
console.log("Android heroes:");
console.log(getHeroesByRace(heroes, "Android"));

console.log("\nQ6:");
console.log("Heroes whose speed is in the range [40, 50]:");
console.log(getHeroesBasedOnSpeed(heroes, [40, 50]));