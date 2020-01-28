package com.app.Dao;

import java.util.List;

import com.app.pojos.User;

public interface IUserDao {

	public List<User> getAllUsers();
	public Integer registerUser(User user);
	public User login(User user);
	public User findByEmail(String Email);
	void setPass(String pass, String email);
}
