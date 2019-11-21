import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Title = styled.h1`
  color: #177c84;
  font-size: 44px;
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
const Fieldbutton = styled(Field)`
  border-radius: 20px;
  border: 1px solid #bdc3c7;
  width: 230px;
  padding: 10px;
  background: #7eb2b7;
  color: white;
  font-size: 15px;
  margin-bottom: 20px;
`;

const Label3 = styled.label`
  margin-right: 170px;
  margin-bottom: 8px;
`;

const H4 = styled.h4`
  margin-top: 50px;
`;
const H3 = styled.h3`
  margin-top: 50px;
`;

const Dashboard = () => {
  return (
    <div>
      <h3>Test</h3>
    </div>
  )
}

export default Dashboard


// const FormikDashBoard = withFormik({
//   mapPropsToValues({ username, password }) {
//     return {
//       username: username || "",
//       password: password || ""
//     };
//   },
//   handleSubmit(values, { setStatus }) {
//     axios
//       .post("https://reqres.in/api/users/", values)
//       .then(response => {
//         setStatus(response.data);
//         console.log(response);
//       })
//       .catch(error => console.log(error.response));
//   }
// })(DashBoard);

// export default FormikDashBoard;