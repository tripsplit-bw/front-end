import React from 'react';
import { 
    Card, 
    Image, 
    Icon 
} from 'semantic-ui-react';
import styled from 'styled-components';

import Trip from './components/Trip';

const Div1 = styled.div`
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
    min-width: 35%;
    padding: 3%;
    margin-bottom: 10%;
    color: #666a86;
    font-size: 15px;
    text-transform: uppercase;
    background-color: #D1FFD7;
    border-radius: 20px;
`;

const TripCard = props => {
    return (
        <Card>
            <Image src='' wrapped ui={false} />
            <Card.Content>
                <Div1>
                    <Card.Header>{props.trip ? props.trip.name : 'Trip Name'}</Card.Header>
                </Div1>
            <Card.Meta>
                {props.trip ? props.trip.users.map(user => <p>{user.name}</p>) : 'User List'}
            </Card.Meta>
            <Card.Description>
                Information
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            
                <Icon name='user' />
                {props.trip ? props.trip.users.length : 0} users
            
            </Card.Content>
            <Trip />
        </Card>

    
    );

};

export default TripCard;