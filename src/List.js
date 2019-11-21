import React, { useState, useEffect } from 'react';
import TripCard from './TripCard.js';

const List = props => {
    // useEffect(() => {

    // }, [])
    const [trips, setTrips] = useState([]);
    return (
        <div>
            {trips.length != 0 ? trips.map(trip => <TripCard trip={trip} />) : <TripCard />}
        </div>
    );

};

export default List;