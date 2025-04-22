package com.saad.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saad.model.Register;
import com.saad.service.RegisterService;
@RestController 
@RequestMapping("/register")
@CrossOrigin(origins="http://localhost:3000/")
public class RegisterController {
@Autowired
private RegisterService rservice;
@PostMapping("/add")
public ResponseEntity<String> addData(@RequestBody Register r){
	String msg="REGISTRATION SUCCESSFULL";
	rservice.addData(r);
	return new ResponseEntity<String>(msg,HttpStatus.CREATED);
}

@GetMapping("/fetch")
public ResponseEntity<List<Register>> getData(){
	List<Register> rlist=rservice.getData();
	return new ResponseEntity<List<Register>>(rlist,HttpStatus.OK);
}
@GetMapping("/login/{uname}/{pass}")
public ResponseEntity<String> checkLogin(@PathVariable String uname,@PathVariable String pass){
	String msg="";
	Register rs=rservice.checkLogin(uname, pass);
	if(rs != null) {
		 msg="LOGGED IN..";
		 
	}
	else {
		msg="WRONG USERNAME OR PASSWORD";
	}
	return new ResponseEntity<String>(msg,HttpStatus.OK);
	
}
}
