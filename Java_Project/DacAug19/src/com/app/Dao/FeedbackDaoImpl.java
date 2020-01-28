package com.app.Dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Feedback;
import com.app.pojos.User;

@Service
@Transactional
public class FeedbackDaoImpl implements IFeedback 
{
	@Autowired
	SessionFactory sf;
	
	@Override
	public List<Feedback> Feedbacklist() {
		String jpql="select f from Feedback f";
		return sf.getCurrentSession().createQuery(jpql,Feedback.class).getResultList();
	}
	
	@Override
	public Integer addFeedback(Feedback feedback, int u_id )
	{
		
		int fid= (Integer) sf.getCurrentSession().save(feedback);
		
		Feedback f = sf.getCurrentSession().get(Feedback.class,fid);
		
		User u = sf.getCurrentSession().get(User.class, u_id);
	
		f.setUsers(u);
	
		return u.getId();
	
	}
}
