package com.app.Dao;

import java.util.List;

import com.app.pojos.Question;


public interface IQuestion {
	List<Question> listQuestions(Integer id);
	
	Question addQuestions(Question question);
	
	Question updateQuestions(Question question);
	
	String deleteQuestions(Question question);
	
	Question getQuestionDetails(int id);
}
