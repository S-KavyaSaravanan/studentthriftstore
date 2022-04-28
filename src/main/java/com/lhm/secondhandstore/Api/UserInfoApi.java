package com.lhm.secondhandstore.Api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RequestMapping(value = "/user")
public interface UserInfoApi {
	@RequestMapping(value = "/getUserInfo", produces = { "application/json" }, method = RequestMethod.GET)
	ResponseEntity<?> getUserinfo();
}
