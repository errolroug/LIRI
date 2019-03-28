
require("dotenv").config();





var keys = require("./keys");

// Import the axios npm package.
var axios = require("axios");

// Import the moment npm package.
var moment = require("moment");

// Import the FS package for read/write.
var fs = require("fs");

// Initialize the spotify API client using our client id and secret
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");



const concertThis = function(artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  
    axios.get(queryURL).then(
      function(response) {
        var resObj = response.data;
  
  
        for (var i = 0; i < resObj.length; i++) {
          var show = resObj[i];
  
          console.log(
            show.venue.city +
              "," +
              (show.venue.region || show.venue.country) +
              " at " +
              show.venue.name +
              " " +
              moment(show.datetime).format("MM/DD/YYYY")
          );
        }
      }
    );
  };


  const spotifyThisSong = function(song) {
    
  
    spotify.search(
      {
        type: "track",
        query: song
      },
      function(err, data) {
        if (err) {
          console.log("Error occurred: " + err);
          return;
        }
  
        var songs = data.tracks.items;
  
        for (var i = 0; i < songs.length; i++) {
          console.log(i);
          console.log("artist(s): " + songs[i].artists.map(getArtistNames));
          console.log("song name: " + songs[i].name);
          console.log("preview song: " + songs[i].preview_url);
          console.log("album: " + songs[i].album.name);
          
        }
      }
    );
  };
  
  var movieThis = function(movie) {
   
  
    var movieQuery =
      "http://www.omdbapi.com/?t=" + movie + "&y=&plot=full&tomatoes=true&apikey=trilogy";
  
    axios.get(movieQuery).then(
      function(response) {
        var movie = response.data;
  
        console.log("Title: " + movie.Title);
        console.log("Year: " + movie.Year);
        console.log("Rated: " + movie.Rated);
        console.log("IMDB Rating: " + movie.imdbRating);
        console.log("Country: " + movie.Country);
        console.log("Language: " + movie.Language);
        console.log("Plot: " + movie.Plot);
        console.log("Actors: " + movie.Actors);
        console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);
      }
    );
  };
//attempted to code out a handle function to take in input from user and depending on first arg pass on data from arg 2 and run an function
  function  handleInput (process.argv[2], process.argv[3]){

  }
  
  
  