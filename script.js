import myJson from './mox.json' assert {type: 'json'};

let task1, task2, task3, committingAdvice;
committingAdvice = "Each assignment should have 1 or more commits in your repo, but avoid grouping more than one assignment in a single commit. Please mention the assignment number in the commit message, e.g. ״TASK 1 - make MovieList display movie posters”, etc";
task1 = "create ui of movie list with boxes showing the movie posters. set those boxes onClick UI to show movie details in a modal. Use our movies api to render movie list. no specific styling is required, this is your chance to show-off your css skills";
task2 = "Add some “Sort” UI for sorting movies list. Implement next sorting options on the “Sort” pull-down menu: A->Z, Z->A, Star Rating. Please sort the results locally (do not use the API sort option).";
task3 = "Replace movie mock data with real data coming from the API of TMDB (The Movie DataBase). Use their “now playing” endpoint (find the API documentation on the TMDB website). Please load the first 3 pages of movies from the API when the application starts.";

// "(1) Movies' Posters - displays titles"


myJson.forEach((el) => {
    const d = document;
    const b = document.body;
    const p = d.createElement(`p`)
    p.textContent = el.title;
    b.appendChild(p);
})

let movieObj = {
    "vote_count": 11027,
    "id": 278,
    "video": false,
    "vote_average": 8.6,
    "title": "The Shawshank Redemption",
    "popularity": 36.049,
    "poster_path": "/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
    "original_language": "en",
    "original_title": "The Shawshank Redemption",
    "genre_ids": [
        18,
        80
    ],
    "backdrop_path": "/j9XKiZrVeViAixVRzCta7h1VU9W.jpg",
    "adult": false,
    "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    "release_date": "1994-09-23"
}
const properties = Object.keys(movieObj);
const entries = Object.entries(movieObj);
    for (let i = 0; i < properties.length; i+=1) {
    console.log(`${entries[i][0]} : ${entries[i][1]}`);
    }