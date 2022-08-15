import myJson from './json-data/mox.json' assert {type: 'json'};

let task1, task2, task3, committingAdvice;
committingAdvice = "Each assignment should have 1 or more commits in your repo, but avoid grouping more than one assignment in a single commit. Please mention the assignment number in the commit message, e.g. ״TASK 1 - make MovieList display movie posters”, etc";
task1 = "create ui of movie list with boxes showing the movie posters. set those boxes onClick UI to show movie details in a modal. Use our movies api to render movie list. no specific styling is required, this is your chance to show-off your css skills";
task2 = "Add some “Sort” UI for sorting movies list. Implement next sorting options on the “Sort” pull-down menu: A->Z, Z->A, Star Rating. Please sort the results locally (do not use the API sort option).";
task3 = "Replace movie mock data with real data coming from the API of TMDB (The Movie DataBase). Use their “now playing” endpoint (find the API documentation on the TMDB website). Please load the first 3 pages of movies from the API when the application starts.";

// "(1) Movies' Posters - displays titles"
// const diRep = function () { document.createElement('div') }
var o = document.getElementById(`output`);
myJson.forEach((el) => {
    const d = document;
    const di = d.createElement(`div`);
    const diCH = d.createElement(`div`);
    const diCB = d.createElement(`div`);
    const modAncr = d.createElement('a');
    di.classList.add('card', 'col-6', 'col-lg-3');
    diCB.classList.add("card-body");
    diCH.classList.add("card-header");
    diCH.textContent = el.title;
    modAncr.classList.add('modal-link');
    o.appendChild(di);
    di.appendChild(diCB);
    diCB.appendChild(diCH);
    modAncr.setAttribute('data-bs-target', '#myModal');
    modAncr.setAttribute('href', '');
    modAncr.setAttribute('data-bs-toggle', 'modal');
    diCB.appendChild(modAncr);
});


let movieObj = {
    "vote_count": 12575,
    "id": 680,   
    "video": false,   
    "vote_average": 8.4,   
    "title": "Pulp Fiction",
    "popularity": 39.11,   
    "poster_path": "/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
    "original_language": "en",
    "original_title": "Pulp Fiction",
   
    "genre_ids": [
      53,
      80
    ],
    "backdrop_path": "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
    "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",   
    "release_date": "1994-09-10",
    "adult": false,
};
const properties = Object.keys(movieObj);
const entries = Object.entries(movieObj);
    for (let i = 0; i < properties.length; i+=1) {
    const d = document;
    const m = d.getElementById("modal-body")
    const p = d.createElement("p")
    m.append(p);
    p.classList.add("text-center");
    p.textContent = `${entries[i][0]} : ${entries[i][1]}`;
    };
