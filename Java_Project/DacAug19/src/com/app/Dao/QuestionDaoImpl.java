package com.app.Dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Question;



@Service
@Transactional
public class QuestionDaoImpl implements IQuestion {
	@Autowired
	SessionFactory sf;

	@Override
	public List<Question> listQuestions(Integer id) {
		String jpql="select q from Question q where q.topic.id=:id";
		return sf.getCurrentSession().createQuery(jpql,Question.class).setParameter("id",id).getResultList();
	}

	@Override
	public Question addQuestions(Question question) {
		sf.getCurrentSession().save(question);
		return question;
		
	}

	@Override
	public Question updateQuestions(Question question) {
		sf.getCurrentSession().update(question);
		return question;
	}

	@Override
	public String deleteQuestions(Question question) {
		sf.getCurrentSession().delete(question);
		return null;
	}
	@Override
	public Question getQuestionDetails(int id) {
		String jpql ="select q from Question q where q.id =:id";
		return sf.getCurrentSession().createQuery(jpql,Question.class).setParameter("id", id).getSingleResult();	}

	}
   
	

