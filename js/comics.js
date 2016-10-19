$(document).ready(function() {
    // Handler for .ready() called.

    // marvel API public key : e617b60a06e9a1a9e98f8e5e03090b96

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
});
