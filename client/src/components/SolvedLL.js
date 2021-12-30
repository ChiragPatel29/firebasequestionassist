import React, { Component } from 'react';
import axios from 'axios';

const Exercise = props => (
 <li className="list-group-item text-left"><a href={props.exercise.url} target="_blank">{props.exercise.name} </a>
    </li>
  
)

export default class SolvedLL extends Component {
  constructor(props) {
    super(props);


    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('https://proassistbackend.herokuapp.com/solved/'+this.props.name)
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }



  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} />;
    })
  }

  render() {
    return (
      <div className="container">
      <h6>{this.props.dname}</h6>
    <ul className="list-group">
            { this.exerciseList() }
    </ul>
  </div>
    )
  }
}
