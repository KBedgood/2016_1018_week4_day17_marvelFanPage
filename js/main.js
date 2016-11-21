$(document).ready(function() {
     // Handler for .ready() called.
     $.ajax({
          // HOME PAGE
          url: "https://gateway.marvel.com:443/v1/public/characters?apikey=e617b60a06e9a1a9e98f8e5e03090b96",
          success: function(result) {
               // console.log(result);
               // Loop over our array to get access to each day.
               var comicsArray = result.data.results
               var numberOfCharacters = comicsArray.length
                    // console.log(numberOfCharacters)
               var randomCharacter1index = Math.floor(Math.random() * numberOfCharacters)
               var randomCharacter2index = Math.floor(Math.random() * numberOfCharacters)
               var randomCharacter3index = Math.floor(Math.random() * numberOfCharacters)

               // Put the search results info into our page.
               $("#randomCharacter1").html(`
<img class="comicCharacter" src="${comicsArray[randomCharacter1index].thumbnail.path}.${comicsArray[randomCharacter1index].thumbnail.extension}">
<h3 class="name"></h3><h3 class="charName"> ${comicsArray[randomCharacter1index].name}</h3>
`)

               $("#randomCharacter2").html(`
<img class="comicCharacter" src="${comicsArray[randomCharacter2index].thumbnail.path}.${comicsArray[randomCharacter2index].thumbnail.extension}">
<h3 class="name"><h3 class="charName"> ${comicsArray[randomCharacter2index].name}</h3>
`)

               $("#randomCharacter3").html(`
<img class="comicCharacter" src="${comicsArray[randomCharacter3index].thumbnail.path}.${comicsArray[randomCharacter3index].thumbnail.extension}">
<h3 class="name"></h3><h3 class="charName"> ${comicsArray[randomCharacter3index].name}</h3>
`)
          }
     });

     $.ajax({
          // HOME PAGE COMICS
          url: "https://gateway.marvel.com:443/v1/public/comics?apikey=e617b60a06e9a1a9e98f8e5e03090b96",
          success: function(result) {
               console.log(result);
               // Loop over our array to get access to each day.
               var comicsArray = result.data.results
               var numberOfComics = comicsArray.length
               console.log(numberOfComics)
               var randomComic1index = Math.floor(Math.random() * numberOfComics)
               var randomComic2index = Math.floor(Math.random() * numberOfComics)
               var randomComic3index = Math.floor(Math.random() * numberOfComics)

               // Put the search results info into our page.
               $("#randomComic1").html(`
<img class="comicComic1" src="${comicsArray[randomComic1index].thumbnail.path}.${comicsArray[randomComic1index].thumbnail.extension}">
<h3 class="comicName"> ${comicsArray[randomComic1index].title}</h3>
`)
               $("#randomComic2").html(`
<img class="comicComic" src="${comicsArray[randomComic2index].thumbnail.path}.${comicsArray[randomComic2index].thumbnail.extension}">
<h3 class="comicName"> ${comicsArray[randomComic2index].title}</h3>
`)
               $("#randomComic3").html(`
<img class="comicComic" src="${comicsArray[randomComic3index].thumbnail.path}.${comicsArray[randomComic3index].thumbnail.extension}">
<h3 class="comicName"> ${comicsArray[randomComic3index].title}</h3>
`)
          }
     });
});
