package com.app.dao;

import java.util.List;

import com.app.pojos.Topic;

public interface ITopicDao {

	List<Topic> listTopics();
	Topic addTopics(Topic topic);
	String updateTopic(Topic topic);
	String deleteTopic(Topic topic);
}
