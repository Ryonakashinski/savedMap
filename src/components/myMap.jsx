import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "./../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

class MyMap extends Component {
  state = {};

  componentDidMount() {
    console.log(mapData);
  }

  countryStyle = {
    fillColor: "yellow",
    // the color is pink as it has transparency.
    fillOpacity: 0.3,
    // frame border
    color: "black",
    weight: 2,
    // dot line
    // dashArray: 5,
  };

  printMessageToConsole = (event) => {
    console.log("Clicked");
  };

  changeCountryColor = (event) => {
    event.target.setStyle({
      color: "green",
      fillColor: "red",
      fillOpacity: 0.5,
    });
  };

  onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    console.log(countryName);
    // display the country's name
    layer.bindPopup(countryName);

    layer.options.fillOpacity = 0.3;

    layer.on({
      click: this.changeCountryColor,
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>My Map</h1>
        <MapContainer style={{ height: "80vh" }} zoom={2} center={[20, 100]}>
          <GeoJSON
            style={this.countryStyle}
            data={mapData.features}
            onEachFeature={this.onEachCountry}
          />
        </MapContainer>
      </div>
    );
  }
}

export default MyMap;
