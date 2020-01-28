package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Topic;

@Service
@Transactional
public class TopicDaoImpl implements ITopicDao {

	@Autowired
	SessionFactory sf;
	@Override
	public List<Topic> listTopics() {
	String jpql="select t from Topic t";
	return sf.getCurrentSession().createQuery(jpql,Topic.class).getResultList();
		
	}

	@Override
	public Topic addTopics(Topic topic) {
		sf.getCurrentSession().save(topic);
		return topic;
	}

	@Override
	public String updateTopic(Topic topic) {
		sf.getCurrentSession().update(topic);
		return topic.getTopicId()+"Topic updated";
	}

	@Override
	public String deleteTopic(Topic topic) {
		sf.getCurrentSession().delete(topic);
		return null;
	}

}
