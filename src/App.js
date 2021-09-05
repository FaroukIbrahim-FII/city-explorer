import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      location : '',
      lat:'',
      lon:'',
    }
  }

  getInputData = async (event) =>{
    event.preventDefault();
    const locationName = event.target.location.value;
    console.log(locationName);
    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${locationName}&format=json`;
    const respone = await axios.get(url);
    // console.log(respone);
    this.setState({
      location:respone.data[0].display_name,
      lon:respone.data[0].lon,
      lat:respone.data[0].lat,
    })
    // console.log(this.state.lat);
  }


  render() {
    return (

      <>
        <Form onSubmit={this.getInputData}>
          <Form.Group className="mb-3" controlId="place">
            <Form.Label>Place Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Place Name" name="location" />
          </Form.Group>

          <Button variant="primary" type="submit" >
            Explore!
          </Button>
        </Form>
        <p>Location Name: {this.state.location}, at latitude: {this.state.lat}, by longitude: {this.state.lon}</p>
        

        

      </>

    )

  }

}

export default App;