package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Dao.ISubject;
import com.app.pojos.Subject;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/subject")
public class SubjectController {
	@Autowired
	private ISubject subdao;
	
	@GetMapping("/list")
	public List<Subject> listSubject()
	{
		return subdao.listSubject();
	}
	
	@PostMapping("/insert")
	public Subject addDetails(@RequestBody Subject subject)
	{
		System.out.println(subject);
		subdao.addSubject(subject);
		return subject;
	}
	
	@PutMapping("/update")
	public Subject updateDetails(@RequestBody Subject subject)
	{
		System.out.println(subject);
		subdao.updateSubject(subject);
		return null;
	}
	
	@DeleteMapping("/delete/{id}")
	public Subject deleteDetails(@PathVariable Integer id)
	{
		Subject subject=new Subject();
		subject.setId(id);
		subdao.deleteSubject(subject);
		return null;
	}
}
