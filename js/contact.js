$(document).ready(function() {
    // Handler for .ready() called.

    // google maps API key = AIzaSyDcUEbAgkUk04iNkzawnm6Mx74w-F-uVKQ 

    // CONTACT html
    // Also do a nice contact page and have it have a fake address, fake phone number and fake email. 
    // Also teach yourself how to integrate a google map into this page 
    // ( https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map ) 



	var googleMap = document.getElementById("map");

      function initMap() {
        googleMap = new google.maps.Map(googleMap, {
          center: {lat: 30.0218667, lng: -90.0225584},
          zoom: 8
        });
      }

      window.initMap = initMap;

});
