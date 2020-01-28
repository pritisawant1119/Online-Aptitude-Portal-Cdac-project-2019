package com.app.controller;

import java.util.List;

import javax.persistence.NoResultException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.http.HttpStatus.*;
import com.app.Dao.IUserDao;
import com.app.pojos.User;
import com.app.pojos.UserRole;
import com.app.service.IUserSevice;
@SuppressWarnings("unused")
@CrossOrigin(allowedHeaders="*")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private IUserDao dao;
	
	@Autowired
	private IUserSevice Iservice;
	
	User user;
	int otp;
	
	@Autowired
	private JavaMailSender mailSender;
	@GetMapping("/list")
	public List<User> getAllUsers()
	{
		System.out.println("list of users");
		return dao.getAllUsers();
	}
	
	@GetMapping("/getubyemail")
	private User getUserByEmail(@RequestParam String email) {
		return dao.findByEmail(email);

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
	@GetMapping("/forgot")
	public Integer processForgotPassword(@RequestParam String email)
	{
		
		System.out.println(email);
		try
		{
			user= dao.findByEmail(email);
			System.out.println(user);
			if(user !=null)
			{
				System.out.println("asdfghj");
				otp = Iservice.generatorOTP();
				System.out.println(otp);
				String msg="Your one time password for forgot password is = "+otp;
				SimpleMailMessage mailMessage = new SimpleMailMessage();
				mailMessage.setTo(user.getEmail());
				mailMessage.setSubject("One Time Password");
				mailMessage.setText(msg);
				System.out.println();
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
			
			e.printStackTrace();
		}
		return 0;

		
	}
	@PostMapping("/confirmOtp")
	public ResponseEntity<?> confirmOtp(@RequestBody User user1) {
		//System.out.println(otp);
		//System.out.println(user1.getOtp());
		//System.out.println(user1.getPassword());
	//	System.out.println("poo"+user1);
	//	System.out.println(otp);
		if (otp == user1.getOtp())
		{
			
			//System.out.println("poo");
			System.out.println("asdfd"+user.getEmail());
			Iservice.setPassword(user1.getPassword(), user.getEmail());
			return new ResponseEntity<Integer>(1, OK);

		} else {
			return new ResponseEntity<Integer>(0, OK);
		}

	}
	@PostMapping("/setpass")
	public ResponseEntity<?> setpassword(@RequestBody User u)
	{
		System.out.println(u);
		System.out.println("mail "+user.getEmail()+" otp "+otp);
		if(otp==u.getOtp())
		{
			dao.setPass(u.getPassword(),user.getEmail());
			return new ResponseEntity<Integer>(1,OK);
		}
		else 
		{
			return new ResponseEntity<Integer>(0,OK);
		}	
	}



}
