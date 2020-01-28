package com.app.service;

import com.app.pojos.User;

public interface IUserSevice {
	public void updatePassword(User user);
	public int generatorOTP();
	public void setPassword(String getPassword, String getEmail);
}
