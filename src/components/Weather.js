import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';


class Weather extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         date1:'',
    //     }
    // }

    // getWeatherData = ()=>{
    //     this.setState({
    //         date1:this.props.weatherData[0].date
    //     })
    // }

    // day={this.state.day}
    //     day2={this.state.day2}
    //     day3={this.state.day3}
    //     description={this.state.description}
    //     description2={this.state.description2}
    //     description3={this.state.description3}


    render(){
        
        return(
            <>
            <br></br>
                {!(this.props.weatherErr) && this.props.day && <p>date: {this.props.day}</p>}
                {!(this.props.weatherErr) && this.props.description && <p>description: {this.props.description}</p>}
                <br></br>
                {!(this.props.weatherErr) && this.props.day2 && <p>date: {this.props.day2}</p>}
                {!(this.props.weatherErr) && this.props.description2 && <p>description: {this.props.description2}</p>}
                <br></br>
                {!(this.props.weatherErr) && this.props.day3 && <p>date: {this.props.day3}</p>}
                {!(this.props.weatherErr) && this.props.description3 && <p>description: {this.props.description3}</p>}
                {this.props.weatherErr && <p>Status Code: 400, 404, 500</p>}
            </>
        )
    }
}

export default Weather;