import React, { Component } from 'react';
import axios from 'axios';

export default class Addquestions extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeSub = this.onChangeSub.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      qname: '',
      url: '',
      sub: ''
    }
  }
  onChangeName(e) {
    this.setState({
      qname: e.target.value
    })
  }

  onChangeUrl(e) {
    this.setState({
      url: e.target.value
    })
  }

  onChangeSub(e) {
    this.setState({
      sub: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      qname: this.state.qname,
      url: this.state.url,
      sub: this.state.sub,
    }

    console.log(exercise);

    axios.post('https://proassistbackend.herokuapp.com/questions/add', exercise)
      .then(res => console.log(res.data));
    this.setState({
      qname:'',
      url: ''
    })
   // window.location = '/add';
  }

  render() {
    return (
    <div>
      <h3>Add new Question</h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.qname}
              onChange={this.onChangeName}
              />
        </div>


        <div className="form-group"> 
          <label>Link: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.url}
              onChange={this.onChangeUrl}
              />
        </div>

        <div className="form-group"> 
          <label>Sub Type: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.sub}
              onChange={this.onChangeSub}
              />
        </div>


        <div className="form-group">
          <input type="submit" value="Add Question" className="btn btn-primary" />
        </div>
      </form>
      
    </div>
    )
  }
}
