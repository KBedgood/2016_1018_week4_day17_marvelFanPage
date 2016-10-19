$(document).ready(function() {
    // Handler for .ready() called.

    // google maps API key = AIzaSyDcUEbAgkUk04iNkzawnm6Mx74w-F-uVKQ 

    // CONTACT html
    // Also do a nice contact page and have it have a fake address, fake phone number and fake email. 
    // Also teach yourself how to integrate a google map into this page 
    // ( https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map ) 

$.ajax({

	var map = document.getElementsById("map");

      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

});
