$(document).ready(function() {
    // Handler for .ready() called.

    // marvel API public key : e617b60a06e9a1a9e98f8e5e03090b96

    // INDEX home html – featured characters / comics
    // You should design a nice home page. Somewhere on the home page there should be 3 images 
    // of characters that are random, think of it as a "Featured Characters" section. There should also 
    // be a "Featured Comics" section for comics that will show the image of 3 random comics. 

    // // random image
    // function randomImg(){
    // //create a new array and name it myImages
    // var myImages = new Array();
    // // add images to array
    // myImages [1] = "images/banner1.png";
    // myImages [2]

    // // create the links array and name it myLinks
    // var myLinks = new Array ();
    // /



    $.ajax({
        // HOME PAGE
        url: "https://gateway.marvel.com:443/v1/public/characters?apikey=e617b60a06e9a1a9e98f8e5e03090b96",
        success: function(result) {
            console.log(result);
            // Loop over our array to get access to each day.
            var comicsArray = result.data.results

            // Put the search results info into our page.
            $("#randomCharacter1").html(`
            <img class="comicCharacter" src="${comicsArray[2].thumbnail.path}.${comicsArray[2].thumbnail.extension}">
            <h3>Name: ${comicsArray[2].name}</h3>
            `)
            $("#randomCharacter2").html(`
            <img class="comicCharacter" src="${comicsArray[1].thumbnail.path}.${comicsArray[1].thumbnail.extension}">
            <h3>Name: ${comicsArray[1].name}</h3>
            `)
            $("#randomCharacter3").html(`
            <img class="comicCharacter" src="${comicsArray[22].thumbnail.path}.${comicsArray[22].thumbnail.extension}">
            <h3>Name: ${comicsArray[22].name}</h3>
            `)

        }
    });









    // CHARACTERS page html
    // Have a "Characters" page that shows the name and picture of all the Marvel characters, 
    // then under the picture it should have a "Learn More" button and then once you click on it a 
    // description and a list of all the comics that character is in will appear. 
    // These should all be generated from the Marvel API.

    $("body").on("click", ".learnButton", function(e) {
        $(this).parent().find('div').toggleClass('hide');
    });


    var listTheCharacters = document.getElementById('listTheCharacters');
    var comicsURL = `https://gateway.marvel.com:443/v1/public/characters?apikey=e617b60a06e9a1a9e98f8e5e03090b96`;

    $.ajax({

        url: "https://gateway.marvel.com:443/v1/public/characters?apikey=e617b60a06e9a1a9e98f8e5e03090b96",
        success: function(result) {
            console.log(result);
            // Loop over our array to get access to each day.
            result.data.results.forEach(function(comic) {


                // Put the search results info into our page.
                $("#listTheCharacters").append(`
            <div class="comics col-md-2">
            <button id="butt" class="learnButton">Learn More</button>
            <img class="comicCharacter" src="${comic.thumbnail.path}.${comic.thumbnail.extension}">
            <h3>Name: ${comic.name}</h3>

            <div class="hide">
            <h1>${comic.description}</h1>
            </div>
            </div>`)

            });
        }
    });




    // COMICS html – list the comics
    // Have a "Comics" page that will show all the comics that Marvel gives back in there API. 
    // This page will include an image of each comic, along with a title and a price of the comic. 




    var placeholder = document.getElementById('listTheComics');
    var comicsURL = `https://gateway.marvel.com:443/v1/public/comics?apikey=e617b60a06e9a1a9e98f8e5e03090b96`;

    $.ajax({

        url: "https://gateway.marvel.com:443/v1/public/comics?apikey=e617b60a06e9a1a9e98f8e5e03090b96",
        success: function(result) {
            // Loop over our array to get access to each day.
            result.data.results.forEach(function(comic) {


                // Put the search results info into our page.
                $("#listTheComics").append(`
<div class="comics col-md-2">
<img id=${comic.id} class="comicArtwork" src="${comic.thumbnail.path}.${comic.thumbnail.extension}">
<h3>Title: ${comic.title}</h3>
<h3>Price: ${comic.prices[0].price}</h3>
<h1 class="hide">HELLO!</h1>
</div>`)

            });
        }
    });



    // CONTACT html
    // Also do a nice contact page and have it have a fake address, fake phone number and fake email. 
    // Also teach yourself how to integrate a google map into this page 
    // ( https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map ) 










    // MISC Reference

    // $("body").on("click" , ".trackArtwork", function(e) {
    //     var trackId = this.id;
    //     var streamURL = `https://api.soundcloud.com/tracks/${trackId}/stream?client_id=03e4633e2d85874a921380e47cac705d`;
    //     $("#player").attr("src" , streamURL);
    // });


    // $("button").on("click", function(e) {
    //             var search = $("#search").val();

    //             $.ajax({
    //                 url: "http://api.soundcloud.com/tracks/?client_id=03e4633e2d85874a921380e47cac705d&q=${search}",
    //                 success: function(result) {
    //                     // Assign the data variable to an array that we will loop over.
    //                     // Clear out any previous data.
    //                     $("#search").val("");
    //                     $("#searchResultsGoHere").empty();
    //                     // Put in the results

    //                     // Loop over our array to get access to each day.
    //                     result.forEach(function(track) {

    //                         // Put the search results info into our page.
    //                         $("#searchResultsGoHere").append(`
    //      <div class="music col-md-4">
    //      <h3></h3>
    //      <img id=${track.id} class="trackArtwork" src="${track.artwork_url}">
    //      <h3>Song Title:<br>${track.title}</h3>
    //      </div>
    //      `)
    //                     })
    //                 }
    //             });
    //         });

});
