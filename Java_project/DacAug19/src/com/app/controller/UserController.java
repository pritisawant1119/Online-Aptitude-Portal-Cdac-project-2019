package com.app.controller;

import java.util.List;

import javax.persistence.NoResultException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IUserDao;
import com.app.pojos.User;


@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	IUserDao dao;
	
	@Autowired
	private JavaMailSender mailSender;
	@GetMapping("/list")
	public List<User> getAllUsers()
	{
		System.out.println("list of users");
		return dao.getAllUsers();
	}
	@PostMapping("/register")
	public Integer register(@RequestBody User user)
	{
		System.out.println(user);
		//user.setRole(UserRole.STUDENT);
		if(user !=null)
		{
			
			String msg="Succesfully Registered!!! ";
			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setTo(user.getEmail());
			mailMessage.setSubject("Email");
			mailMessage.setText(msg);
			try
			{
				mailSender.send(mailMessage);
			}
			catch (MailException e) 
			{
				System.out.println("inside mail exception");
				e.printStackTrace();
			}
			
		}
		return dao.registerUser(user);
	}
	
	@PostMapping("/login")
	public User login(@RequestBody User user)
	{
		System.out.println(user);
		return dao.login(user);
	}
	@PostMapping("/forgot")
	public Integer processForgotPassword(@RequestBody User user ,HttpServletRequest request,Model map,HttpSession hs)
	{
		
		try
		{
			user = dao.findByEmail(user);
			hs.setAttribute("user", user);
			if(user !=null)
			{
				int otp = dao.generateOtp();
				hs.setAttribute("OTP", otp);
				String msg="Your one time password for forgot password is = "+otp;
				SimpleMailMessage mailMessage = new SimpleMailMessage();
				mailMessage.setTo(user.getEmail());
				mailMessage.setSubject("One Time Password");
				mailMessage.setText(msg);
				try
				{
					mailSender.send(mailMessage);
				}
				catch (MailException e) 
				{
					System.out.println("inside mail exception");
					e.printStackTrace();
				}
				return 1;
			}
		} catch (NoResultException e) 
		{
			map.addAttribute("msg", "Please enter valid email address");
			e.printStackTrace();
		}
		return 0;

	}
	

}
