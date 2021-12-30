import React, { Component } from 'react';
import axios from 'axios';


export default class Scoreboard extends Component {
  constructor(props) {
    super(props);

 
    this.state = {solved:0,unsolved:524};
  }

  componentDidMount() {
     axios.get('https://proassistbackend.herokuapp.com/total')
      .then(response => {
        this.setState({ solved: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

 

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Your Score</h1>
    <p className="lead">
      {this.state.solved}/
      {this.state.unsolved}
    </p>
  </div>
</div>
    )
  }
}

