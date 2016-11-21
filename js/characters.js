 $(document).ready(function() {

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
            <h3 class="charName">${comic.name}</h3>

            <div class="hide">
            <p class="details">${comic.description}</p>
            </div>
            </div>`)

            });
        }
    });
    });
