import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
 <li className="list-group-item text-left"><a href={props.exercise.url} target="_blank">{props.exercise.name} </a>
 
    <span className="text-right"><button type="button" className="btn btn-success float-right" onClick={() => { props.deleteExercise(props.exercise._id) }}>Done</button></span>
    </li>
  
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('https://proassistbackend.herokuapp.com/'+this.props.name)
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {

    axios.post('https://proassistbackend.herokuapp.com/exercises/update/' +id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
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
