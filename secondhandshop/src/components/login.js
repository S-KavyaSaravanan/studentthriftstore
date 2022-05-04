import React, { Component } from "react";    
import './Login.css'  
import withContext from "../withContext";
import axios from 'axios';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
class Login extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
           student_email: '',    
           ppassword: '',    
           formErrors: {}    
        };    
   
        this.initialState = this.state;    
    }    
   
    handleFormValidation() {    
        const { student_email,ppassword} = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
   
       
   
        //Email    
        if (!student_email) {    
            formIsValid = false;    
            formErrors["student_emailErr"] = "Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(student_email))) {    
   
            formIsValid = false;    
            formErrors["student_emailErr"] = "Invalid email id.";    
        }    

       
   
        //Password
        if(!ppassword){
            formIsValid = false;    
            formErrors["passwordErr"] = "Password is required.";    
       
    }
   
       this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
   
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
   
    handleSubmit = async(e) => {    
        e.preventDefault();    
   
        if (this.handleFormValidation()) {    
        const res= await axios.post(
             'http://localhost:8083/login',
             JSON.stringify({ student_email:this.state.student_email,ppassword:this.state.ppassword}),
             {
             headers: {
               // Overwrite Axios's automatically set Content-Type
               'Content-Type': 'application/json'
             }
             }).catch((res) => {
             return { status: 400, message: 'bad request' }
           })

           if(res.status === 200) {
            alert("Login successfull")
           }
         }  
            this.setState(this.initialState)    
        }    
       
   
    render() {    
   
        const { student_emailErr,passwordErr } = this.state.formErrors;    
   
        return (    
            <div className="formDiv">    
                <h1 style={{ textAlign: "center" }} ><b>User Login </b></ h1>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                         
                            <label  className="label" style={{ textAlign: "left",marginLeft: '180px' }}>Student Email</label>    
                            <input type="text" name="student_email"    
                                value={this.state.student_email}    
                                onChange={this.handleChange}    
                                placeholder="Your email.."    
                                className={student_emailErr ? ' showError' : ''} />    
                            { student_emailErr&&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{student_emailErr}</div>    
                            }    
                          <label  className="label" style={{ textAlign: "left",marginLeft: '180px' }}>Password</label>    
                            <input type="text" name="ppassword"    
                                value={this.state.ppassword}    
                                onChange={this.handleChange}    
                                placeholder="Your password.."    
                                className={passwordErr ? ' showError' : ''} />    
                            {passwordErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>    
                            }    
   
                            <div className="field is-clearfix">
                            <button
                              className="button is-primary is-outlined is-pulled-center"
                            >
                              Submit
                            </button>
                              <div>
                              <p>Don't have an account?  <Link to="/register" className="Link is-primary is-outlined is-pulled-center">
                              Sign up
                              </Link>
                              </p>
                              </div>
               
                          </div>
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
   
export default withContext(Login);
