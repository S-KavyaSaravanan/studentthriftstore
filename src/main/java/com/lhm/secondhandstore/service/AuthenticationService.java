package com.lhm.secondhandstore.service;

import java.util.Base64.Encoder;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lhm.secondhandstore.model.StudentEntity;
import com.lhm.secondhandstore.model.StudentRegisterationEntity;
import com.lhm.secondhandstore.repository.StudentRegisterationRepository;
import com.lhm.secondhandstore.repository.StudentRepository;

@Service
public class AuthenticationService {

	@Autowired
	private StudentRegisterationRepository studentRegisterRepository;
	

	@Autowired
	private StudentRepository studentRepository;

	public boolean isValidUser(String email, String passWord) {
		StudentEntity studententity = studentRepository.findByEmail(email);
		if (null != studententity) {
			return true;
		}
		return false;
	}

	public void saveStudentInfo(StudentRegisterationEntity student) {
		studentRegisterRepository.save(student);
	}

}
