import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerDecorator } from 'handlebars';
import { Link } from 'react-router-dom';

const Register = () => {
	// const dispatch = useDispatch()
	const [item, setItem] = useState({
		email: '',
		username: '',
		password: '',
      });
      
​	 const handleChanges = e => {
		console.log(item)
		setItem({ ...item, [e.target.name]: e.target.value });
	};
​
	const submitForm = e => {
		e.preventDefault();
		// dispatch(addNew(item));
​
		// This is a reset for the password
		setItem({
			email: "",
		    username: "",
			password: "",
		});
	 };
​
	return (
		<div>
			<h1>Create Account</h1>
			<form>
				<label>
					Email
					<input type="email" name="email" onChange={handleChanges} value={item.email}></input>
				</label>
				<label>
					Username
					<input type="username" name="username" onChange={handleChanges} value={item.username}></input>
				</label>
				<label>
					Password
					<input type="password" name="password" onChange={handleChanges} value={item.password}></input>
				</label>
                <Link to ='/dashboard'>
                    <Button className="field" as="button" type="submit" name="submit">
                    Create Account
                    </Button>
                </Link>
			</form>
                <Subtitle>Already have an account?<Link to ='/signin'>
                <Span>Sign In</Span></Link></Subtitle>
		</div>
	)
}
​
export default Register;