import React, { PureComponent } from 'react'
import axios from "axios";

class Resident extends PureComponent {
    constructor(props) {
        super(props)
 
        this.state = {
          resident: "",
        }
    }
 
    componentDidMount() {
       this.fetchData("https://swapi.dev/people/");
    }
   
    async fetchData(url) {
       try {
          const response = await axios({
              method: "GET",
              url
          });
 
          this.setState({ resident: response.data });
 
        } catch (error) {
            console.error("Error retrieving resident", error);
        }
    }
 
    render() {
        return (
            this.state.resident ? (
                  <div>
                    <span>{this.state.resident.name}</span>
                  </div>
                ) : (
                  <div>Fetching resident...</div>
                )
            )
        };                  
    }
 
export default Resident