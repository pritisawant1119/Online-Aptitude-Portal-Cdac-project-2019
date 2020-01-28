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

import com.app.Dao.ITopicDao;
import com.app.pojos.Topic;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/topic")
public class TopicController {
	@Autowired
	ITopicDao topdao;
	
	@GetMapping("/list")
	public List<Topic> listTopics(@RequestParam int id)
	{
		//int id=topic.getId();
		System.out.println(id);
		List<Topic> tlist=topdao.listTopics(id);
		System.out.println(tlist);
		return tlist;
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getTopicDetails(@PathVariable int id)
	{
		System.out.println("In topic details "+id);
		Topic topicDetails = topdao.getTopicDetails(id);
		if(topicDetails==null)
		{
			return new ResponseEntity<String>("Topic not Found ",HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Topic>(topicDetails,HttpStatus.OK);
	}
	
	
	@PostMapping("/insert")
	public Topic addTopics(@RequestBody Topic topic)
	{
		System.out.println("topic inserted");
		topdao.addTopics(topic);
		return topic;
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updateTopic(@RequestParam String topicid,@RequestBody Topic topic)
	{
		System.out.println(topicid);
		System.out.println("in update "+ " "+topic);
		try
		{
			return new ResponseEntity<Topic>(topdao.updateTopic(topic),HttpStatus.OK);
		}
		catch (RuntimeException e) 
		{
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
 		}
	}
	
	
	@DeleteMapping("/delete/{id}")
	public Topic deleteTopic(@PathVariable Integer id)
	{
		Topic topic=new Topic();
		topic.setId(id);
		topdao.deleteTopic(topic);
		return null;
	}
}