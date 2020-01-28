package com.app.pojos;

import java.util.Arrays;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "subject")
public class Subject 
{
  private Integer sId;
  private String sname;
  @JsonIgnore
  private byte[] picture;
  
  private User user;
  
  
  private List<Topic>topics;
  
  
  public Subject() {
	System.out.println("Inside Subject Constructor");
}

  
public Subject(String sname, byte[] picture) {
	super();
	this.sname = sname;
	this.picture = picture;
}

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
public Integer getsId() {
	return sId;
}


public void setsId(Integer sId) {
	this.sId = sId;
}

@Column(nullable=false)
public String getSname() {
	return sname;
}


public void setSname(String sname) {
	this.sname = sname;
}

@Lob
public byte[] getPicture() {
	return picture;
}


public void setPicture(byte[] picture) {
	this.picture = picture;
}

@JsonBackReference
@OneToMany(mappedBy = "subject",cascade = CascadeType.ALL)
public List<Topic> getTopics() {
	return topics;
}


public void setTopics(List<Topic> topics) {
	this.topics = topics;
}

@ManyToOne
@JoinColumn(name = "u_id")
public User getUser() {
	return user;
}


public void setUser(User user) {
	this.user = user;
}


@Override
public String toString() {
	return "Subject [sId=" + sId + ", sname=" + sname + ", picture=" + Arrays.toString(picture) + "]";
}
  
  
}
