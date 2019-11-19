import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const TripCard = props => {
    return (
        <Card>
            <Image src='' wrapped ui={false} />
            <Card.Content>
            <Card.Header>{props.trip ? props.trip.name : 'Trip Name'}</Card.Header>
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
        </Card>
    );

};

export default TripCard;