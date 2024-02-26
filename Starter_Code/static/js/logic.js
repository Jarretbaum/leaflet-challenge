// Define the map and set the center to the United States
var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 3,
});

// Add a tile layer (OpenStreetMap as an example)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(myMap);

// Use D3 to fetch the earthquake data in GeoJSON format
var url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(url).then(function (data) {
  // Create a function to set the style of each marker based on the earthquake depth
  function style(feature) {
    return {
      opacity: 1,
      fillOpacity: 0.8,
      fillColor: getColor(feature.geometry.coordinates[2]),
      radius: getRadius(feature.properties.mag),
      color: "black",
      weight: 1,
    };
  }

  // Create a function to determine the color based on the depth
  function getColor(depth) {
    switch (true) {
      case depth > 90:
        return "#FF4500"; // or any color you prefer
      case depth > 70:
        return "#FFA500";
      case depth > 50:
        return "#FFD700";
      case depth > 30:
        return "#FFFF00";
      case depth > 10:
        return "#ADFF2F";
      default:
        return "#00FF00";
    }
  }

  // Create a function to determine the radius based on the magnitude
  function getRadius(magnitude) {
    return magnitude * 5; // Adjust the multiplier as needed for better visualization
  }

  // Add a GeoJSON layer with the earthquake data
  L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },
    style: style,
    onEachFeature: function (feature, layer) {
      // Create popups with information about each earthquake
      layer.bindPopup(
        "Magnitude: " +
          feature.properties.mag +
          "<br>Location: " +
          feature.properties.place +
          "<br>Depth: " +
          feature.geometry.coordinates[2] +
          " km"
      );
    },
  }).addTo(myMap);

  // Create a legend
  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info legend");
    var depthLevels = [-10, 10, 30, 50, 70, 90];

    div.innerHTML += "<h4>Depth</h4>";

    for (var i = 0; i < depthLevels.length; i++) {
      // Create legend items with color-coded squares
      div.innerHTML +=
        '<i style="background:' +
        getColor(depthLevels[i] + 1) +
        '"></i> ' +
        depthLevels[i] +
        (depthLevels[i + 1]
          ? "&ndash;" + depthLevels[i + 1] + " km<br>"
          : "+ km and deeper");
    }

    return div;
  };

  legend.addTo(myMap);
});


  
  
  
  
  
  
  
  