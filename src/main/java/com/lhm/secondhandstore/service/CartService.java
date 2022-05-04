package com.lhm.secondhandstore.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class CartService {
public JSONObject fetchCartItems(){
	String message;
	JSONObject json = new JSONObject();
	JSONArray array = new JSONArray();
	JSONObject item = new JSONObject();
	item.put("Name", "The Origin of species");
	item.put("Price","£14.99");
	item.put("InStock", "InStock");
	item.put("ProfilPic", "./images/charles_darwin.jpg");
	item.put("Discount", "save 30%");
	item.put("OriginalPrice", "£19.48");
	array.put(item);
	json.put("cartitems",array);
    return json;
}
}
