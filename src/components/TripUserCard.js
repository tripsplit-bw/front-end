import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";

const Div1 = styled.div``;
const Div2 = styled.div``;
const Div3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Section = styled(Field)`
    display: flex;
    flex-direction: row;
`;

const User = styled(Field)`
    border-radius: 20px;
    border: 1px solid gray;
    width: 180px;
    padding: 7px 20px; 
`;

const Userh6 = styled.h6`
    color: #666a86;
    font-weight: bold;
    font-size: 16px;
`;

const Amount = styled(Field)`
    border-radius: 20px;
    border: 1px solid gray;
    width: 180px;
    padding: 7px 20px; 
`;

const TripUserCard = props => {
    const { values } = props;

    return (
        <Div1 style={{ display: props.hidden ? "none" : "block" }}>
            <Form>
                <Userh6>Users:</Userh6>
                <Section>
                <Div2>
                    <User 
                    type="text"
                    name="title"
                    placeholder="Username" />
                </Div2>
                <Div3>
                    <Amount 
                    type="text"
                    name="amount"
                    placeholder="Amount per rider" />
                </Div3>
                </Section>
            </Form>
        </Div1>
    );
};

const FormikTripUserCard = withFormik({
    mapPropsToValues({ title }) {
        return {
            title: title || ""
        };
    },
    handleSubmit(values, { setStatus }) {
        axios
        .post("https://regres.in/api/users/", values)
        .then(response => {
            setStatus(response.data);
            console.log(response);
        })
        .catch(error => console.log(error.response));
    }
}) (TripUserCard);

export default FormikTripUserCard;