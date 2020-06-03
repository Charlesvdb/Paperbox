import React, { PureComponent } from 'react'
import axios from "axios";
import {Link} from "react-router-dom"

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            planets: [],
            filteredPlanets: []
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){ // eslint-disable-next-line
        let planetssearchlist = this.state.planets.filter(planet => {
             if(planet.name){
                if(planet.name.toLowerCase().includes(e.target.value.toLowerCase())){
                    return true 
                }   
            }
        })
        this.setState({
            filteredPlanets: planetssearchlist
        })
    }

    componentDidMount(){
        axios({
            method: "GET",
            url: "https://swapi.dev/api/planets/"
        })
        .then(response => {
            console.log(response.data.results)
            let planetslist = response.data.results;
            this.setState({planets: planetslist, filteredPlanets: planetslist})
        })
        .catch(error => {
            console.log("You've made an error with the planets load charles: ",error)
        })
    }

    render() {
        return (

        <div>
            <h1>Star Wars Planets</h1>

            <form>
                <input placeholder="searchbar" type="text" onChange={this.handleChange}></input>
            </form>
         
            {
                this.state.filteredPlanets.map((planet,i) => (
                    <Link to={{ pathname: "/info", state:{planet:planet} }}><p key={i}>{planet.name}</p></Link>
                ))   
            }

        </div>    

        )
    }
}

export default Home