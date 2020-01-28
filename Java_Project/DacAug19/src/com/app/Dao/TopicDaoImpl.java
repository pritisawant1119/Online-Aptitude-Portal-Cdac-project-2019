package com.app.Dao;

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
	public List<Topic> listTopics(Integer id) {
		
	String jpql="select t from Topic t where t.subject.id=:id";
	return sf.getCurrentSession().createQuery(jpql,Topic.class).setParameter("id",id).getResultList();
		
	}

	@Override
	public Topic addTopics(Topic topic) {
		sf.getCurrentSession().save(topic);
		return topic;
	}

	@Override
	public Topic updateTopic(Topic topic) {
		sf.getCurrentSession().update(topic);
		return topic;
	}

	@Override
	public String deleteTopic(Topic topic) {
		sf.getCurrentSession().delete(topic);
		return null;
	}
	
	@Override
	public Topic getTopicDetails(int id) {
		String jpql ="select t from Topic t where t.id =:id";
		return sf.getCurrentSession().createQuery(jpql,Topic.class).setParameter("id", id).getSingleResult();	}


}
