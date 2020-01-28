package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.app.Dao.IFeedback;
import com.app.pojos.Feedback;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/feedback")
public class FeedbackController 
{
	@Autowired
	private IFeedback dao;
	
	@GetMapping("/list")
	public List<Feedback> listFeedback()
	{
		System.out.println("feedback list");
		return dao.Feedbacklist();
	}
	
	@PostMapping("/addFeedback")
	public Integer addFeedback(@RequestBody Feedback feedback,@RequestParam int u_id)
	{
		System.out.println("IN Add Feedback");
		
		return dao.addFeedback(feedback,u_id);
	}
}
