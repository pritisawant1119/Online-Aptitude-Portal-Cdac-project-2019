package com.app.pojos;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "user")
public class User {
	private Integer uid;
	private String name;
	private String email;
	private String password;
	private UserRole role;  
	private String phone;
	
	private List<Subject> subjects;
	
	public User() {
		
	}

	public User(String name, String email, String password, UserRole role, String phone) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
		this.phone = phone;
		
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getUid() {
		return uid;
	}

	public void setUid(Integer uid) {
		this.uid = uid;
	}

	@Column(length=50,nullable=false)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	@Column(length=50,unique=true)
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	@Column(length=50)
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
	
	@JsonBackReference
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,fetch = FetchType.EAGER,orphanRemoval = true)
	public List<Subject> getSubjects() {
		return subjects;
	}

	public void setSubjects(List<Subject> subjects) {
		this.subjects = subjects;
	}

	@Override
	public String toString() {
		return "User [uid=" + uid + ", name=" + name + ", email=" + email + ", role=" + role + ", phone=" + phone
				+ "]";
	}

	
	
}
