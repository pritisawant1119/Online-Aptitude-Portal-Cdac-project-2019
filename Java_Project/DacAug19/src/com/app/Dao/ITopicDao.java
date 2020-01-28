package com.app.Dao;

import java.util.List;

import com.app.pojos.Topic;

public interface ITopicDao {

	List<Topic> listTopics(Integer id);
	Topic addTopics(Topic topic);
	Topic updateTopic(Topic topic);
	String deleteTopic(Topic topic);
	Topic getTopicDetails(int id);
	
}
