package com.lhm.secondhandstore.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.lhm.secondhandstore.Api.CartItemsApi;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CartItemController implements CartItemsApi {
	@Autowired
	private com.lhm.secondhandstore.service.CartService cartService;

	@Override
	public ResponseEntity<?> getCartItems() {
		JSONObject productsJson = cartService.fetchCartItems();
		if (productsJson != null) {
			return new ResponseEntity<Object>(productsJson.getJSONArray("cartitems").toString(), HttpStatus.OK);
		}
		return new ResponseEntity<Object>(productsJson, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
