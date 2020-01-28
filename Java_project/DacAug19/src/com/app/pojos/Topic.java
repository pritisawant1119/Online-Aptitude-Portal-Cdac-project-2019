package com.app.pojos;

import java.util.Date;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "topic")
public class Topic {
	private Integer topicId;
	private String tname;
	private String description;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date modifiedOn;
	private Subject subject;
	public Topic() {
		
	}
	
	public Topic(String tname, String description, Date modifiedOn, Subject subject) {
		super();
		this.tname = tname;
		this.description = description;
		this.modifiedOn = modifiedOn;
		this.subject = subject;
	}




	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getTopicId() {
		return topicId;
	}

	public void setTopicId(Integer topicId) {
		this.topicId = topicId;
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

	@Temporal(TemporalType.DATE)
    public Date getModifiedOn() {
		return modifiedOn;
	}

	public void setModifiedOn(Date modifiedOn) {
		this.modifiedOn = modifiedOn;
	}

	@ManyToOne
    @JoinColumn(name = "s_id")
	public Subject getSubject() {
		return subject;
	}


	public void setSubject(Subject subject) {
		this.subject = subject;
	}

	@Override
	public String toString() {
		return "Topic [topicId=" + topicId + ", tname=" + tname + ", description=" + description + ", modifiedOn="
				+ modifiedOn + ", subject=" + subject + "]";
	}


	

}
