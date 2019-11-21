import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";
import axios from "axios";


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

const FieldInfo = styled(Field)`
  border-radius: 20px;
  border: 1px solid gray;
  width: 180px;
  padding: 7px 20px;
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

// const Span = styled.span`
//   text-decoration: underline;
// `;

function SignIn() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    // const logName = () => {
    //     console.log(userName);
    //     console.log(password);
    // };

    const handleUserNameInput = event => {
        setUserName(event.target.value);
    };
   
    const handlePasswordInput = event => {
        setPassword(event.target.value);
    };

    return (
        <div>
            <h2>Welcome back!</h2>
            <Title>Log In Here</Title>
            <Form>
                <Div1>
                    <Labels>Username</Labels>
                    <FieldInfo
                        type="text"
                        onChange={handleUserNameInput}
                        value={userName}
                    />
                    
                    <Labels>Password</Labels>
                    <FieldInfo
                        type="password"
                        onChange={handlePasswordInput}
                        value={password}
                    />
            </Div1>
            <Button className="field" as="button" type="submit" name="submit">
          SIGN IN
          </Button>
          </Form>
        </div>
    );
}

const FormikSignIn = withFormik({
    mapPropsToValues({ userName, password }) {
        return {
            username: userName || "",
            password: password || ""
        };
    },
    handleSubmit(values, { setStatus }) {
        alert('Start signin axios')
        // axios
        // .post("https://regre.in/api/users/", values)
        // .then(response => {
        //     setStatus(response.data);
        //     console.log(response);
        // })
        // .catch(error => console.log(error.response));
    }
})(SignIn)
export default FormikSignIn;