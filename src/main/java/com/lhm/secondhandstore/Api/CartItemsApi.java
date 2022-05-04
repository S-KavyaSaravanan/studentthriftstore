package com.lhm.secondhandstore.Api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RequestMapping(value = "/cart")
public interface CartItemsApi {
	@RequestMapping(value = "/getCartItems", produces = { "application/json" }, method = RequestMethod.GET)
	ResponseEntity<?> getCartItems();
}
