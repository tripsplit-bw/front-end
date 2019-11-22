import React, { useState, useEffect } from "react";
// import { withFormik, Form, Field } from "formik";
// import axios from "axios";
import styled from "styled-components";
// import { Link } from 'react-router-dom'
import TripCard from './TripCard.js';

import NewTrip from './NewTrip';

import { fetchTrips } from '../../store/actions'; 
import { connect } from 'react-redux';


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

//Getter function 👇
  const [user, setUser] = useState();
  const [trip, setTrip] = useState();

  useEffect(() => {
    fetchTrips();
    console.log('Initial Fetch...')
  }, [])

  return (
    <Div1>
      <H3>DASHBOARD</H3>
          
          {/* Should be a form that allows you to add new trips. We'll need to pass this a getter function. */}
          <NewTrip />

          {/* Need to have a list component that renders all trips the user has been on. That will render the trip cards. */}
          <TripCard />
      <p onClick={fetchTrips()}>
        click
      </p>
    </Div1>
  );
};

const mapStateToProps = state => {
  return {
      trips: state.trips
  }
}

export default connect(
  mapStateToProps,
{
  fetchTrips
})(DashBoard);

