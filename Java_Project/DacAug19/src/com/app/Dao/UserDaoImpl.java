package com.app.Dao;
import java.util.List;


import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.pojos.User;

@Service
@Transactional
public class UserDaoImpl implements IUserDao {
	@Autowired
		SessionFactory sf;
	
	@Override
	public Integer registerUser(User user) {
		
		return (Integer) sf.getCurrentSession().save(user);
	}

	@Override
	public List<User> getAllUsers() {
		String jpql="select u from User u";
		return sf.getCurrentSession().createQuery(jpql,User.class).getResultList();
	}

	@Override
	public User login(User user) {
		String jpql="select u from User u where u.email=:email and u.password=:password";
		return sf.getCurrentSession().createQuery(jpql,User.class).setParameter("email",user.getEmail()).
				setParameter("password",user.getPassword()).getSingleResult();
	}

	@Override
	public User findByEmail(String email) {
		// TODO Auto-generated method stub
		String jpql="select u from User u where u.email=:email";
		return sf.getCurrentSession().createQuery(jpql,User.class).setParameter("email",email).
				getSingleResult();
		
	}

	@Override
		public void setPass(String pass, String email) {
			System.out.println("akash");
			System.out.println(email);
			String str = "select u from User u where u.email=:em";
		User u= sf.getCurrentSession().createQuery(str,User.class).setParameter("em",pass).
					getSingleResult();
		System.out.println(u);
		
			u.setPassword(email);
		
		}
		
	

}
