# leaflet-challenge
Module 15 Challenge

# Earthquake Visualization Project

## Overview

This project involves creating a visualization tool for earthquake data provided by the United States Geological Survey (USGS). The tool utilizes Leaflet, D3, and GeoJSON to create an interactive map displaying earthquake information, with markers sized by magnitude and colored by depth.

## Project Structure

1. **Map Initialization:**
   - Initialized the map with a focus on the United States using Leaflet.

2. **Data Retrieval:**
   - Utilized D3 to fetch earthquake data in GeoJSON format from the [USGS API](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).

3. **Marker Styling:**
   - Defined a function to style each marker based on earthquake depth and magnitude.

4. **Color Grading:**
   - Implemented a color grading system for markers based on earthquake depth.

5. **Popups and Legend:**
   - Added popups with detailed information for each earthquake marker. Created a legend with color-coded squares to represent depth levels.

## Styling

For styling, a separate CSS file (`style.css`) is used to enhance the presentation.

## References

1. [Leaflet Documentation](https://leafletjs.com/)
2. [D3.js Documentation](https://d3js.org/)
3. [USGS Earthquake Data - GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
4. [OpenStreetMap](https://www.openstreetmap.org/)
5. [Zoom to fit all markers in Mapbox or Leaflet](https://stackoverflow.com/questions/16845614/zoom-to-fit-all-markers-in-mapbox-or-leaflet)
6. [Center a map in D3 given a GeoJSON object](https://stackoverflow.com/questions/14492284/center-a-map-in-d3-given-a-geojson-object)



