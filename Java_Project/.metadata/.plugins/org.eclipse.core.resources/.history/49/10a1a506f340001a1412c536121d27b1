package com.app.pojos;

import java.util.List;

import javax.persistence.*;



import com.fasterxml.jackson.annotation.JsonBackReference;



@Entity

public class Topic {
	private Integer id;
	private String tname;
	private String description;
	private Subject subject;
	private List<Question> question;
	public Topic() {
		
	}
	
	

	public Topic(String tname, String description) {
		super();
		this.tname = tname;
		this.description = description;
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
	public String getTname() {
		return tname;
	}

	

	public void setTname(String tname) {
		this.tname = tname;
	}
	@Column(length=1000)
	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	@ManyToOne
    @JoinColumn(name = "s_id")
	public Subject getSubject() {
		return subject;
	}


	public void setSubject(Subject subject) {
		this.subject = subject;
	}
	@JsonBackReference
	@OneToMany(mappedBy = "topic",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.EAGER)
	public List<Question> getQuestion() {
		return question;
	}

	public void setQuestion(List<Question> question) {
		this.question = question;
	}



	@Override
	public String toString() {
		return "Topic [id=" + id + ", tname=" + tname + ", description=" + description + "]";
	}

	

	


	

}