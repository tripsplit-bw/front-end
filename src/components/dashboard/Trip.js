import React, { useState } from 'react';
import { withFormik, Form, Field } from "formik";
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TripUserCard from './TripUserCard';
// import TripCard from '../TripCard';
// import DatePicker from './DatePicker';



const Div1 = styled.div`
    padding: 5%;
    margin: 0 auto;
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

const Div3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Div4 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Div5 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Div6 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Addbutton = styled(Field)`
    background-color: none;
    border: none;
    width: 150px;
    padding: 0;
    margin: 5px
    &:active {
        outline: none;
        border: none;
    }
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

const Trip = ({ values }) => {
    const [newUser, setNewUser] = useState();
    console.log(newUser);
    const toggleNew = () => {
        const nextIndex = newUser.findIndex(display => {
            return display === true;
        });
        const nextArray = newUser;
        nextArray[nextIndex] = !nextArray[nextIndex];
        setNewUser(nextArray)
    };

    return (
        <Div1>
        <Title>Split the Trip</Title>
     
        <Form>
            <Div2>
                <Labels>Event Name</Labels>
                <FieldInfo
                    type="text"
                    name="title"
                    placeholder="Event name"
                />
            </Div2>

            <Div3>
                <Labels>Destination</Labels>
                <FieldInfo
                    type="text"
                    name="title"
                    placeholder="Trip destination"
                />
            </Div3>

            <Div4>
                {/* <DatePicker /> */}
            </Div4>
            
            <Div5>
                <Labels>Expense</Labels>
                <FieldInfo
                type="text"
                name="total"
                placeholder="$"
                />
            </Div5>

            <Div6>
                <Labels>Riders</Labels>
                <FieldInfo
                type="text"
                name="riders"
                placeholder="Number of Riders"
                />
            </Div6>
       
            {/* <TripCard /> */}
            <TripUserCard />
            {/* {newUser.map((user, index) => (
                <TripUserCard hidden={newUser[index]} />
            ))} */}
            <div>
                <Addbutton
                type="submit"
                name="button"
                as="button"
                // onClick={toggleNew}
                >
                    add
                </Addbutton>

                {/* <button onClick={newUser}>Add</button> */}
                
            </div>
            <Link to='/dashboard'>
                <Button as="button" type="submit" name="submit">Add Trip</Button>
            </Link>
        </Form>
    </Div1>    
    );
};

const FormikTrip = withFormik({
    mapPropsToValues({ title, total }) {
        return {
            title: title || "",
            total: total || ""
        };
    },

    // handleSubmit(values) {
    //     axios
    //     .post("https://regres.in/api/users/", values)
    //     .then(response => {
    //         // setNewUser(response.data);
    //         console.log(response);
    //     })
    //     .catch(error => console.log(error.response));
    // }
})(Trip);
export default FormikTrip;

