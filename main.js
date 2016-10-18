$( document ).ready(function() {
  // Handler for .ready() called.


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
// 		<div class="music col-md-4">
// 		<h3></h3>
// 		<img id=${track.id} class="trackArtwork" src="${track.artwork_url}">
// 		<h3>Song Title:<br>${track.title}</h3>
// 		</div>
// 		`)
//                     })
//                 }
//             });
//         });

});
