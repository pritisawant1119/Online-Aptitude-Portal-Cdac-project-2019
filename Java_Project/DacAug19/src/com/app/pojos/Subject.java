package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
//import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity

public class Subject 
{
  private Integer id;
  private String subject;
 
  private List<Topic> topic=new ArrayList<>();
  
  
  public Subject() {
	System.out.println("Inside Subject Constructor");
}

public Subject(String subject) {
	super();
	this.subject = subject;
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
public String getSubject() {
	return subject;
}

public void setSubject(String subject) {
	this.subject = subject;
}

@JsonBackReference
@OneToMany(mappedBy = "subject",cascade=CascadeType.ALL,orphanRemoval = true)
public List<Topic> getTopic() {
	return topic;
}
public void setTopic(List<Topic> topic) {
	this.topic = topic;
}

@Override
public String toString() {
	return "Subject [id=" + id + ", subject=" + subject + "]";
}

}
