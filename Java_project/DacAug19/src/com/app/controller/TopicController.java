package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.ITopicDao;
import com.app.pojos.Topic;

@RestController
@RequestMapping("/topic")
public class TopicController {
	@Autowired
	ITopicDao topdao;
	
	@GetMapping("/topiclist")
	public List<Topic> listTopics()
	{
		return topdao.listTopics();
	}
	@PostMapping("/insert")
	public Topic addTopics(@RequestBody Topic topic)
	{
		System.out.println("topic inserted");
		topdao.addTopics(topic);
		return topic;
	}
	
	@PutMapping("/update")
	public Topic updateTopics(@RequestBody Topic topic)
	{
		System.out.println("Topic updated");
		topdao.updateTopic(topic);
		return null;
	}
	
	@DeleteMapping("/delete/{id}")
	public Topic deleteTopic(@PathVariable Integer id)
	{
		Topic topic=new Topic();
		topic.setTopicId(id);
		topdao.deleteTopic(topic);
		return null;
	}
}
