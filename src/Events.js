import React from 'react';
import './App.css';

const EventData = [
    {
        name: 'Group Ride',
        date: 'July7,2017, at 5:00PM',
        description: 'Weekly Group Ride'
    },
    {
        name: 'Open Water Swim',
        date: 'July 8, 2017, at 10:00AM',
        description: 'Weekly Open Water Swim Clinic'
    },
    {
        name: 'Group Run',
        date: 'July 10, 2017, at 5:00Pm',
        description: 'Weekly Group Run'
    },
];

function EventList(props){
    return (
        <div className="events-card">
            <h2>{props.name}</h2>
            <ul>
                <li><strong>Name:</strong> {props.name}</li>
                <li><strong>Date:</strong> {props.date}</li>
                <li><strong>Description:</strong> {props.description}</li>
            </ul>

        </div>

    );
}
export default function Events(){
    let eventDisplay = EventData.map((event) => <EventList name={event.name} date={event.date} description={event.description}/>);

    return (

        <div className="events"> {eventDisplay}</div>
    );
}
