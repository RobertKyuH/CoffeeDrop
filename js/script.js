$(document).ready(function () {

    /* For the sticky navigation */
    /* For the sticky nav -when scroll down to nav class add sticky class else scroll up and remove class*/
    $('.js--section-work').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
        /*function waypoint does 60px before get class js--section-work*/
    }, {
            offset: '60px;'
        });

    /* Animation on scroll with waypoint */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated pulse');
    
    }, {
           offset: '50%'
        });
    
    /* Mobile nav */
    $('.js--mobile-nav').click(function() {
        var nav = $('.js--nav');
        var icon = $('.js--mobile-nav i');
       
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-md-menu')) {
                icon.addClass('ion-md-close');
                icon.removeClass('ion-md-menu');
        } else {
                icon.addClass('ion-md-menu');
                icon.removeClass('ion-md-close');
        }      
    });

    /* Maps */ 
    var map = new GMaps({
        div: '.map',
        lat: 54.25,
        lng: -3.18,
        zoom: 12,
      });

      map.addMarker({
        lat: 54.25,
        lng: -3.18,
        title: 'Kirkby-in-Furness',
        infoWindow: {
            content: '<p>Unnamed Road<br>LA17 7UY"</p>'
          }
      });

      map.addMarker({
        lat: 53.14,
        lng: -3.85,
        title: 'Trefriw',
        infoWindow: {
            content: '<p>Ty Hunt Ir Gors<br>Llanrhychwyn<br>Trefriw<br>LL27 0YX</p>'
          }
      });

      map.addMarker({
        lat: 53.53,
        lng: -2.5,
        title: 'Atherton',
        infoWindow: {
            content: '<p>6 Kirby Avenue<br>Llanrhychwyn<br>Atherton<br>M46 9PU</p>'
          }
      });
      
      map.addMarker({
        lat: 55.58,
        lng: -1.65,
        title: 'Seahouses',
        infoWindow: {
            content: '<p>The Old Bakery<br>Crown Street<br>Seahouses<br>NE68 7TQ</p>'
          }
      });

      map.addMarker({
        lat: 53.6,
        lng: -2.67,
        title: 'Standish',
        infoWindow: {
            content: '<p>301<br>Preston Road<br>Standish<br>WN6 0QG</p>'
          }
      });
});
