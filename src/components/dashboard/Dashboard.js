import React, { useState } from "react";
// import { withFormik, Form, Field } from "formik";
// import axios from "axios";
import styled from "styled-components";
// import { Link } from 'react-router-dom'

import TripCard from './../../TripCard';

import NewTrip from './NewTrip';


const Div1 = styled.div`
    min-width: 35%;
    padding: 3%;
    margin: 0 auto;
`;

const H3 = styled.h3`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const DashBoard = () => {
  const [user, setUser] = useState();
  const [trip, setTrip] = useState();

  return (
    <Div1>
      <H3>DASHBOARD</H3>
          
          
          <NewTrip />
          <TripCard />

    </Div1>
  );
};

export default DashBoard;

