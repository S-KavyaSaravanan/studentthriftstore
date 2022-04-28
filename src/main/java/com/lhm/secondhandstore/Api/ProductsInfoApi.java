package com.lhm.secondhandstore.Api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@RequestMapping(value = "/products")
public interface ProductsInfoApi {
	@RequestMapping(value = "/getItems", produces = { "application/json" }, method = RequestMethod.GET)
	ResponseEntity<?> getProductsinfo();
}
