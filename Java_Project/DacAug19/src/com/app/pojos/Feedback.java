package com.app.pojos;

import javax.persistence.*;



@Entity
public class Feedback {
	private Integer id;
	private String suggestion;
	private int rating;
	
	private User users;
	
	public Feedback() {
		System.out.println("Inside Feedback Controller");
	}
	
	public Feedback(String suggestion, int rating) {
		super();
		this.suggestion = suggestion;
		this.rating = rating;
	}


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSuggestion() {
		return suggestion;
	}

	public void setSuggestion(String suggestion) {
		this.suggestion = suggestion;
	}
	
	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	
	@ManyToOne
	@JoinColumn(name="u_id")
	public User getUsers() {
		return users;
	}

	public void setUsers(User users) {
		this.users = users;
	}

	@Override
	public String toString() {
		return "Feedback [id=" + id + ", suggestion=" + suggestion + ", rating=" + rating + "]";
	}
	
	
	
}
