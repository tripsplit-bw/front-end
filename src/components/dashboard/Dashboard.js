import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import styled from "styled-components";
import { Link } from 'react-router-dom'

// import TripCard from './../../TripCard';
// import Trip from './../Trip';

import NewTrip from './NewTrip';


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
  margin: 25px 170px 8px 0;
`;

// const H4 = styled.h4`
//   margin-top: 50px;
// `;

const H3 = styled.h3`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const DashBoard = () => {
  const [newUser, setNewUser] = useState([]);
  const [newTrip, setNewTrip] = useState([]);

  return (
    <Div1>
      {/* <Title>TRIP SPLIT</Title>
      <Form>
        <Link to='/trip'>
            <Fieldbutton className="field" as="button" type="submit" name="submit">
            Create A Trip
            </Fieldbutton>
        </Link>
        <Div2>
          <Label3>Search</Label3>
          <FieldInfo type="text" name="email" />
        </Div2>
      </Form> */}

      <H3>DASHBOARD</H3>

          {/* <h4>TO PAY</h4>
          <ToPay />
          <H4>DUE TO YOU</H4>
          <DueToYou />


      <H3>PAID</H3>

          <h4>YOU PAID</h4>
          <YouPaid />
          <H4>PAID TO YOU</H4>
          <PaidToYou /> */}
          
          <NewTrip />
          {/* <TripCard /> */}

    </Div1>
  );
};
export default DashBoard;

// const FormikDashBoard = withFormik({
//   mapPropsToValues({ username, password }) {
//     return {
//       username: username || "",
//       password: password || ""
//     };
//   },
//   handleSubmit(values) {
//     axios
//       .post("https://reqres.in/api/users/", values)
//       .then(response => {
//         setStatus(response.data);
//         // console.log(response);
//       })
//       .catch(error => console.log(error.response));
//   }
// })(DashBoard);

// export default FormikDashBoard;