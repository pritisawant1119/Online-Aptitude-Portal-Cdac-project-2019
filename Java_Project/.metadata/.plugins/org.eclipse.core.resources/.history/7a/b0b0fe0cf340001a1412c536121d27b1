package com.app.pojos;



import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;



@Entity

public class User {
	private Integer id;
	private String name;
	private String email;
	private String password;
	private UserRole role;  
	private String phone;
	private int otp;
	
	
	
	
	private List<Feedback> feedback;
	
	public User() {
		System.out.println("Inside user Constructor");
	}

	public User(String name, String email, String password, UserRole role, String phone) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
		this.phone = phone;
		
	}
	
	public User(String password, int otp) {
		super();
		this.password = password;
		this.otp = otp;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}
	

	public void setName(String name) {
		this.name = name;
	}
	
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	@Enumerated(EnumType.STRING)
	public UserRole getRole() {
		return role;
	}

	public void setRole(UserRole role) {
		this.role = role;
	}
	
	@Column(unique=true)
	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	@Transient
	public int getOtp() {
		return otp;
	}

	public void setOtp(int otp) {
		this.otp = otp;
	}
	@JsonBackReference
	@OneToMany(mappedBy = "users",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.EAGER)
	public List<Feedback> getFeedback() {
		return feedback;
	}

	public void setFeedback(List<Feedback> feedback) {
		this.feedback = feedback;
	}


	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", role=" + role
				+ ", phone=" + phone + "]";
	}

	
	
	
	
	
}
