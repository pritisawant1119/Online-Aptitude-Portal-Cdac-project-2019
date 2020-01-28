package com.app.dao;

import java.util.List;

import com.app.pojos.User;

public interface IUserDao {

	public List<User> getAllUsers();
	public Integer registerUser(User user);
	public User login(User user);
	public User findByEmail(User user);
	public int generateOtp();
}
