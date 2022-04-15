import React, { Component } from "react";    
import './Registration.css'   
import withContext from "../withContext";
import axios from 'axios';
    
class Register extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            student_email: '',    
            first_name: '',    
            last_name: '',    
            ppassword: '',    
            student_address: '',    
            student_postcode: '',    
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { student_email, first_name,last_name,ppassword,student_address,student_postcode} = this.state;    
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

        //Student name     
        if (!first_name) {    
            formIsValid = false;    
            formErrors["first_nameErr"] = "First Name is required.";    
        }    
     
        if (!last_name) {    
            formIsValid = false;    
            formErrors["last_nameErr"] = "Last Name is required.";    
        }    
    
        //Password
        if(!ppassword){
            formIsValid = false;    
            formErrors["passwordErr"] = "Password is required.";    
        
    }
    
    
        //Address    
        if (!student_address) {    
            formIsValid = false;    
            formErrors["student_addressErr"] = "Address is required.";    
        }       
         //PostCode    
         if (!student_postcode) {    
        formIsValid = false;    
        formErrors["student_postcodeErr"] = "PostCode is required.";    
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
        		      'http://localhost:8083/register',
        		      JSON.stringify({ student_email:this.state.student_email, first_name:this.state.first_name,last_name:this.state.last_name,ppassword:this.state.ppassword,student_address:this.state.student_address,student_postcode:this.state.student_postcode }),
        		      {
        		    	  headers: {
        		    	    // Overwrite Axios's automatically set Content-Type
        		    	    'Content-Type': 'application/json'
        		    	  }
        		      }).catch((res) => {
        		      return { status: 400, message: 'bad request' }
        		    })

        		    if(res.status === 200) {
        		     alert("Registration successfull")
        		    } 
        		  }   
            this.setState(this.initialState)    
        }    
       
    
    render() {    
    
        const { student_emailErr, first_nameErr,last_nameErr,passwordErr,student_addressErr,student_postcodeErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h1 style={{ textAlign: "center" }} ><b>Student Registration Form </b></ h1>    
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
    
                           
                            <label className="label" style={{ textAlign: "left",marginLeft: '180px' }}>First Name</label>    
                            <input type="text" name="first_name"    
                                value={this.state.first_name}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={first_nameErr ? ' showError' : ''} />    
                            {first_nameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{first_nameErr}</div>    
                            }    
    
                       
                            <label  className="label" style={{ textAlign: "left",marginLeft: '180px' }}>Last Name</label>    
                            <input type="text" name="last_name"    
                                value={this.state.last_name}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={last_nameErr ? ' showError' : ''} />    
                            {last_nameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{last_nameErr}</div>    
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
    
                         
                            <label  className="label" style={{ textAlign: "left",marginLeft: '180px' }}>Address</label>    
                            <input type="text" name="student_address"    
                                value={this.state.student_address}    
                                onChange={this.handleChange}    
                                placeholder="Your address.."    
                                className={student_addressErr ? ' showError' : ''} />    
                            {student_addressErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{student_addressErr}</div>    
                            }    
    
                         
                            <label  className="label" style={{ textAlign: "left",marginLeft: '180px' }}>PostCode</label>    
                            <input type="text" name="student_postcode"    
                                value={this.state.student_postcode}    
                                onChange={this.handleChange}    
                                placeholder="Your postcode.."    
                                className={student_postcodeErr ? ' showError' : ''} />    
                            {student_postcodeErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{student_postcodeErr}</div>    
                            }    
    
                      
                        
                         <div>
                            <button
                            className="button is-primary is-outlined is-pulled-center"
                          >
                            Register
                          </button>   
                            </div>
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default withContext(Register);