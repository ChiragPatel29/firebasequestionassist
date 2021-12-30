import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // <--- import `withRouter`. We will use this in the bottom of our file.

import './login.css'
export default class Login extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          password: ''
        }
      }
      onChangeUserName(e) {
        this.setState({
          username: e.target.value
        })
      }

      onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
      }
    
    
      onSubmit(e) {
        e.preventDefault();
        // console.log(this.state.username);
        // console.log(this.state.password);
        
        if(this.state.username=='chirag' && this.state.password=='aaa'){
             window.location = '/list';
        }
        else{
            alert("Wrong Id Password Please Don't use system");
        }
    }

  render() {
    return (
        <React.Fragment>
        <div className="sidenav">
        <div className="login-main-text">
           <h2>Programming Assist<br/> Login Page</h2>
           <p>Login here to access.</p>
        </div>
     </div>
     <div className="main">
        <div className="col-md-6 col-sm-12">
           <div className="login-form">
              <form onSubmit={this.onSubmit}>
                 <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" placeholder="User Name" value={this.state.username}
              onChange={this.onChangeUserName}/>
                 </div>
                 <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={this.state.password}
              onChange={this.onChangePassword}/>
                 </div>
                 <input type="submit" value="Add Question" className="btn btn-primary" />
              </form>
           </div>
        </div>
     </div>
     </React.Fragment>
    )
  
}
}
