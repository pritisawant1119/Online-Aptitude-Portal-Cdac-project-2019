package com.app.pojos;

import javax.persistence.*;


@Entity
public class Question {
	private Integer id;
	private String question;
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	
	private String answerkey;
	
	private Topic topic;
	
	public Question() {
		System.out.println("Inside Question Controller");
	}
	
	
	public Question(Integer id, String question, String option1, String option2, String option3, String option4,
			String answerkey) {
		super();
		this.id = id;
		this.question = question;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
		this.answerkey = answerkey;
	}


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(nullable=false)
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}
	
	@Column(nullable=false)
	public String getAnswerkey() {
		return answerkey;
	}


	public void setAnswerkey(String answerkey) {
		this.answerkey = answerkey;
	}
	@ManyToOne
	@JoinColumn(name="t_id")
	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}
	
	@Override
	public String toString() {
		return "Question [id=" + id + ", question=" + question + ", option1=" + option1 + ", option2=" + option2
				+ ", option3=" + option3 + ", option4=" + option4 + ", answerkey=" + answerkey + "]";
	}

	
	
	
}
