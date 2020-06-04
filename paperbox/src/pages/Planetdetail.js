import React, { PureComponent } from "react";
import axios from "axios";
import Resident from "../components/Resident"

class PlanetDetail extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            url: "",
            planetInfo: {},
            isGettingPlanetInfo: false
        };
    }

  getPlanetInfo = () => {
    this.setState({
      isGettingPlanetInfo: true
    });

    axios({
      method: "GET",
      url: this.state.url
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          planetInfo: response.data,
          isGettingPlanetInfo: false
        });
      })
      .catch(error => {
        this.setState({
          isGettingPlanetInfo: false
        });
        console.log(
          "You've made an error with the planet detail load charles: ",error
        );
      });
  };

  componentDidMount = () => {
    this.setState(
      {
        url: this.props.location.state.planet.url
      },
      this.getPlanetInfo
    );
  };

  render() {
    return (
      <div>
            <div>
            {this.state.isGettingPlanetInfo ? 
            (<p>Getting planet info...</p>) :
            typeof this.state.planetInfo === "object" && Object.keys(this.state.planetInfo).length ? 
            (  
            <div>
                <h1>Planet details</h1>
                <p>planet name: {this.state.planetInfo.name}</p>
                <p>rotation period: {this.state.planetInfo.rotation_period}</p>
                <p>orbital period: {this.state.planetInfo.orbital_period}</p>
                <p>diameter: {this.state.planetInfo.diameter}</p>
                <p>climate: {this.state.planetInfo.climate}</p>
                <p>gravity: {this.state.planetInfo.gravity}</p>
                <p>terrain: {this.state.planetInfo.terrain}</p>
                <p>surface water: {this.state.planetInfo.surface_water}</p>
                <p>population: {this.state.planetInfo.population}</p>
            </div>
            ) : (
            ""
            )}
        </div>
        <div>

            <h1>Notable people</h1>;
            {
            this.state.planetInfo.residents.map((url) => (<Resident url={url} />))
            }
            }

        </div>
      </div>
    );
  }
}

export default PlanetDetail