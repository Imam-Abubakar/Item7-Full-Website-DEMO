
    var locations = [
      ['OKE-ODO OUTLET', 8.481561048429652, 4.628752720010739, 4],
      ['OKE-ODO OUTLET', 8.481561048429652, 4.628752720010739, 5],
      ['OKE-ODO OUTLET', 8.481561048429652, 4.628752720010739, 3],
      ['OKE-ODO OUTLET', 8.481561048429652, 4.628752720010739, 2],
      ['OKE-ODO OUTLET', 8.481561048429652, 4.628752720010739, 1]
    ];
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });
      
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
