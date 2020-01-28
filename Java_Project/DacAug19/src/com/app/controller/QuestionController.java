package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.Dao.IQuestion;
import com.app.pojos.Question;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/question")
public class QuestionController {
	@Autowired
	IQuestion dao;
	
	@GetMapping("/list")
	public List<Question> getQuestions(@RequestParam int id)
	{
		System.out.println(id);
		List<Question> qlist=dao.listQuestions(id);
		System.out.println(qlist);
		return qlist;
	}
	@PostMapping("/insert")
	public Question addQuestion(@RequestBody Question question)
	{
		System.out.println("questions inserted");
		dao.addQuestions(question);
		return question;
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getQuestionDetails(@PathVariable int id)
	{
		System.out.println("In topic details "+id);
		Question questiondetails = dao.getQuestionDetails(id);
		if(questiondetails==null)
		{
			return new ResponseEntity<String>("question not Found ",HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Question>(questiondetails,HttpStatus.OK);
	}
	@PutMapping("/update")
	public ResponseEntity<?> updateQuestion(@RequestParam String queid,@RequestBody Question question)
	{
		System.out.println(queid);
		System.out.println("in update "+ " "+question);
		try
		{
			return new ResponseEntity<Question>(dao.updateQuestions(question),HttpStatus.OK);
		}
		catch (RuntimeException e) 
		{
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
			}
	
	@DeleteMapping("/delete/{id}")
	public Question deleteQuestion(@PathVariable Integer id)
	{
		Question question=new Question();
		question.setId(id);
		dao.deleteQuestions(question);
		return null;
	}
}
