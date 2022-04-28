package com.lhm.secondhandstore.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class ProductsService {
public JSONObject fetchPractionerDetails(){
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
	JSONObject item1 = new JSONObject();
	item1.put("Name", "The Last Juror");
	item1.put("Price","£16.99");
	item1.put("InStock", "InStock");
	item1.put("ProfilPic", "./images/johngreesham.jpg");
	item1.put("Discount", "save 20%");
	item1.put("OriginalPrice", "£19.53");
	JSONObject item2 = new JSONObject();
	item2.put("Name", "Black Holes");
	item2.put("Price","£12.99");
	item2.put("InStock", "OutofStock");
	item2.put("ProfilPic", "./images/stephan_hawking.jpg");
	item2.put("Discount", "save 15%");
	item2.put("OriginalPrice", "£14.84");
	array.put(item);
	array.put(item1);
	array.put(item2);
	json.put("productsdetails",array);
    return json;
	
}
}
