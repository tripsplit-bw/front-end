import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { login } from '../../store/actions'; 
import { connect } from 'react-redux';

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  color: #666a86;
  text-transform: uppercase;
`;

const Labels = styled.label`
  margin-top: 2%;
  color: grey;
`;

const Input = styled.input`
  border-radius: 20px;
  border: 1px solid gray;
  width: 180px;
  padding: 15px 30px;
`;


const Button = styled.button`
  border: 3px solid #D1FFD7;
  border-radius: 20px;
  width: 220px;
  padding: 7px 20px;
  color: #666a86;
  font-weight: bold;
  font-size: 16px;
  margin-top:4vh;
  background: none;
`;

const SignIn = () => {
    const [userName, setUserName] = useState({ username: "", password: "" });

    const handleUserNameInput = event => {
        setUserName({...userName, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        login(userName);
        setUserName({
          username: "",
          password: "",
        });
    };


    return (
        <div>
            {console.log(userName)}

  

                <h2>Welcome back!</h2>
                <Title>Log In Here</Title>
                <form onSubmit={event => handleSubmit(event)}>
                <Div1>
                    <Labels>Username</Labels>
                    <Input
                        type="text"
                        name="username"
                        value={userName.username}
                        onChange={event => handleUserNameInput(event)}
                    />
                   
                    <Labels>Password</Labels>
                    <Input
                        type="password"
                        name="password"
                        value={userName.password}
                        onChange={event => handleUserNameInput(event)}
                    />
                </Div1>
                <Link to='/dashboard'>
                    <Button className="field" as="button" type="submit" name="submit">
                    SIGN IN
                    </Button>
                </Link>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(
  mapStateToProps,
{
  login
})(SignIn);