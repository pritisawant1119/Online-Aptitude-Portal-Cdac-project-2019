package com.app.Dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Subject;

@Service
@Transactional
public class SubjectDaoImpl implements ISubject {
	@Autowired
	private SessionFactory sf;

	@Override
	public Subject addSubject(Subject subject) {
		sf.getCurrentSession().save(subject);
		return subject;
	}

	@Override
	public String deleteSubject(Subject subject) {
		sf.getCurrentSession().delete(subject);
		return null;
	}

	@Override
	public String updateSubject(Subject subject) {

		sf.getCurrentSession().update(subject);
		return subject.getId() + "Subject updated  ";
	}

	@Override
	public List<Subject> listSubject() {
		String jpql = "select s from Subject s";
		return sf.getCurrentSession().createQuery(jpql, Subject.class).getResultList();
	}

}
