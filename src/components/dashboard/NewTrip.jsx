import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Labels = styled.label`
  margin-top: 2%;
  color: grey;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  color: #666a86;
  text-transform: uppercase;
`;

const Input = styled.div`
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

const NewTrip = () => {
    const [trip, setTrip] = useState({ eventName: "", destination: "", date: "", expense: "", riders: "" });

    const handleTripInput = event => {
        setTrip({...trip, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(trip.eventName);
        console.log(trip.destination);
        console.log(trip.date);
        console.log(trip.expenses);
        console.log(trip.riders);
    };

    return (
        <Div1>
            {console.log(trip)}

                <Title>Create A New Trip</Title>
                <form onSubmit={event => handleSubmit(event)}>
                <Div2>
                    <Labels>Event Name</Labels>
                    <Input
                        type="text"
                        name="eventName"
                        value={trip.eventName}
                        onChange={event => handleTripInput(event)}
                    />
                   
                    <Labels>Destination</Labels>
                    <Input
                        type="text"
                        name="destination"
                        value={trip.destination}
                        onChange={event => handleTripInput(event)}
                    />

                    <Labels>Date</Labels>
                    <Input
                        type="date"
                        name="date"
                        value={trip.date}
                        onChange={event => handleTripInput(event)}
                    />

                    <Labels>Expenses</Labels>
                    <Input
                        type="text"
                        name="destination"
                        value={trip.destination}
                        onChange={event => handleTripInput(event)}
                    />

                    <Labels>Riders</Labels>
                    <Input
                        type="text"
                        name="destination"
                        value={trip.destination}
                        onChange={event => handleTripInput(event)}
                    />
                </Div2>
                <Link to=''>
                    <Button className="field" as="button" type="submit" name="submit">
                    ADD NEW TRIP
                    </Button>
                </Link>
            </form>
        </Div1>
    );
}

export default NewTrip;