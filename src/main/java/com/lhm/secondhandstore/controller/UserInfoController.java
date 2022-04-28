package com.lhm.secondhandstore.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.lhm.secondhandstore.Api.UserInfoApi;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserInfoController implements UserInfoApi {
	@Autowired
	private com.lhm.secondhandstore.service.UserInfoService UserInfoService;

	@Override
	public ResponseEntity<?> getUserinfo() {
		JSONObject productsJson = UserInfoService.fetchUserDetails();
		if (productsJson != null) {
			return new ResponseEntity<Object>(productsJson.getJSONArray("userdetails").toString(), HttpStatus.OK);
		}
		return new ResponseEntity<Object>(productsJson, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
