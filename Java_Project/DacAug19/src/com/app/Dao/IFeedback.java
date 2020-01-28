package com.app.Dao;

import java.util.List;

import com.app.pojos.Feedback;

public interface IFeedback {
	
 List<Feedback> Feedbacklist();
 
 public Integer addFeedback(Feedback feedback, int u_id);
 
}
