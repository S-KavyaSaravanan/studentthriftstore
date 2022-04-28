package com.lhm.secondhandstore.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class UserInfoService {
	public JSONObject fetchUserDetails(){
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		JSONObject item = new JSONObject();
		item.put("FullName", "Kavya Sarvanan");
		item.put("StudentEmail","21497015@student.uwl.ac.uk");
		item.put("Address", "St Mary's Rd, London W5 5RF, United Kingdom");
		array.put(item);
		json.put("userdetails",array);
	    return json;
		
	}
}
