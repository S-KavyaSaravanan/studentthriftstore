package com.lhm.secondhandstore.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductsInfoController implements com.lhm.secondhandstore.Api.ProductsInfoApi {
	@Autowired
	private com.lhm.secondhandstore.service.ProductsService productsService;

	@Override
	public ResponseEntity<?> getProductsinfo() {
		
		JSONObject productsJson = productsService.fetchPractionerDetails();
		if (productsJson != null) {
			return new ResponseEntity<Object>(productsJson.getJSONArray("productsdetails").toString(), HttpStatus.OK);
		}
		return new ResponseEntity<Object>(productsJson, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
