package com.lhm.secondhandstore.controller;

import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lhm.secondhandstore.service.AuthenticationService;
import com.lhm.secondhandstore.Api.AutenticationApi;
import com.lhm.secondhandstore.model.StudentEntity;
import com.lhm.secondhandstore.model.StudentRegisterationEntity;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AuthenticationController implements AutenticationApi {

	@Autowired
	AuthenticationService authService;

	@Override
	public ResponseEntity<?> login(@RequestBody String loginDetails) {
		boolean response = false;
		JSONObject obj = new JSONObject(loginDetails);
		if (null != obj) {
			String email = obj.optString("email");
			String password = obj.optString("password");
			response = authService.isValidUser(email, password);
		}

		if (response) {
			return new ResponseEntity<Object>("User Logged in Successfully", HttpStatus.OK);
		}
		return new ResponseEntity<Object>("Invalid user", HttpStatus.INTERNAL_SERVER_ERROR);

	}

	@Override
	public ResponseEntity<?> logOut() { // TODO Auto-generated method
		return new ResponseEntity<Object>("LoggedOutSuccessfully", HttpStatus.OK);
	}

	@Override
	public ResponseEntity<?> register(@RequestBody String registerdetails) {
		System.out.println("registerdetails" + registerdetails);
		boolean response = false;
		JSONObject obj = new JSONObject(registerdetails);
		if (null != obj) {
			String email = obj.optString("student_email");
			String firstName = obj.optString("first_name");
			String lastName = obj.optString("last_name");
			String password = obj.optString("ppassword");
			String studentAddress = obj.optString("student_address");
			String studentPostcode = obj.optString("student_postcode");
  			StudentRegisterationEntity student = new StudentRegisterationEntity();
			   student.setStudent_email(email);
			   student.setFirst_name(firstName);
			   student.setLast_name(lastName);
			   student.setPassword(password);
			   student.setAddress(studentAddress);
			   student.setPostcode(studentPostcode);
			   
			authService.saveStudentInfo(student);
		}

		if (response) {
			return new ResponseEntity<Object>("User Logged in Successfully", HttpStatus.OK);
		}
		return new ResponseEntity<Object>("Unable to Login", HttpStatus.INTERNAL_SERVER_ERROR);

	}

}
