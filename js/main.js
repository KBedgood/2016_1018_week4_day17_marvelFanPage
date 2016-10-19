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
			<img class="comicCharacter" src="${comicsArray[6].thumbnail.path}.${comicsArray[6].thumbnail.extension}">
			<h3>Name: ${comicsArray[6].name}</h3>
			`)







        }
    });










});
