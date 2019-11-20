import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
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
`;

const h6 = styled.h6`
  color: grey;
  text-decoration: none;
`;

const Span = styled.span`
  text-transform: uppercase;
  text-decoration: none;
  color: #666a86;
`;

const UpdateProfile = ({ values }) => {
  return (
    <Div1>
      <Title>Update Profile</Title>
      <Form>
        <Div2>
          <Labels>First Name</Labels>
          <FieldInfo type="text" name="firstName" />

          <Labels>Last Name</Labels>
          <FieldInfo type="text" name="lastName" />

          <Labels>User Name</Labels>
          <FieldInfo type="text" name="userName" />

          <Labels>Email </Labels>
          <FieldInfo type="text" name="email" />

          <Labels>Password</Labels>
          <FieldInfo type="password" name="password" />

          <Labels>Confirm Password</Labels>
          <FieldInfo type="password" name="confirmPassword" />
        </Div2>
        <Link to =''>
          <Button className="field" as="button" type="submit" name="submit">
          Update Profile
          </Button>
        </Link>
      </Form>
      <h6>Already have an account?<Link to ='/SignIn'>
       <Span>Sign In</Span></Link></h6>
     
    </Div1>
  );
};
const FormikUpdateProfile = withFormik({
  mapPropsToValues({ firstName, lastName, userName, email, password, confirmPassword }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      userName: userName || "",
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || ""
    };
  },
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(response => {
        setStatus(response.data);
        console.log(response);
      })
      .catch(error => console.log(error.response));
  }
})(UpdateProfile);
export default FormikUpdateProfile;