package com.lhm.secondhandstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lhm.secondhandstore.model.StudentEntity;

@Repository
public interface StudentRepository extends JpaRepository < StudentEntity, Long > {
	    StudentEntity findByEmail(String studentEmail);
	}

