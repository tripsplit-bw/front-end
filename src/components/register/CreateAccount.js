import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import  {Link}  from 'react-router-dom';

const Title = styled.h3`
  color: #666a86;
  font-size: 24px;
  margin: 3vh 0 1vh 0;
  text-transform: uppercase;
`;

const Div1 = styled.div`
    // box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
    min-width: 35%;
    padding: 3%;
    margin: 0 auto;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FieldInfo = styled(Field)`
  border-radius: 20px;
  border: 1px solid gray;
  width: 200px;
  padding: 10px;
`;

const Labels = styled.label`
  margin-top: 4%;
  color: grey;
`;

const Button = styled.button`
  font-weight: bold;
  background-color: #666a86;
  border-radius: 20px;
  border: 1px solid #bdc3c7;
  width: 220px;
  padding: 10px 20px;
  color: #D1FFD7;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 4%;
  &:hover {
    background-color: #D1FFD7;
    color: #666a86;
  }
`;

const Subtitle = styled.h6`
  color: grey;
  text-decoration: none;
`;

const Span = styled.span`
  text-transform: uppercase;
  text-decoration: none;
  color: #666a86;
  margin-left: 5px;
`;

const CreateAccount = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <Div1>
      <Title>Create An Account</Title>

      <Form>
        <Div2>
        <Labels>Username</Labels>
        <FieldInfo type='text' name='username' />
        {touched.username && errors.username && <p className='error'>{errors.username}</p>}

        <Labels>Password</Labels>
        <FieldInfo type='password' name='password' />
        {touched.password && errors.password && <p className='error'>{errors.password}</p>}

        <Labels>Email</Labels>
        <FieldInfo type='email' name='email' />
        {touched.email && errors.email && <p className='error'>{errors.email}</p>}

        </Div2>
      
        <Link to ='/dashboard'>
           <Button className="field" as="button" type="submit" name="submit">
           Create Account
          </Button>
        </Link>
        </Form>
        <Subtitle>Already have an account?<Link to ='/signIn'>
        <Span>Sign In</Span></Link></Subtitle>

        {users.map(users => (
          <div key={users.id}>
            <h3>{users.username}</h3>
            <li>password: {users.password}</li>
            <li>email: {users.email}</li>
          </div>
        ))}

      </Div1>
  );
};

  const FormikCreateAccount = withFormik({
    mapPropsToValues({ username, password, email }) {
      return {
        username: username || "",
        password: password || "",
        email: email || ""
      }
    },

    validationSchema: yup.object().shape({
      username: yup.string().min(6,'Username must be at least 6 characters.').required('Username is required.'),
      email: yup.string().email('Email must be valid.').required('Email is required.'),
      password: yup.string().min(8,'Password must be at least 8 characters.').required('Password is required.')
  }),

  handleSubmit(values, {props, setStatus, resetForm }) {
      console.log(props)
      axios
          .post("https://reqres.in/api/users/", values)
          .then(response => {
              setStatus(response.data);
              console.log(response.data);
              resetForm();
          })
          .catch(error => console.log(error.response));
  }
}  
)(CreateAccount);

export default FormikCreateAccount;
