import { Route } from 'react-router-dom';

const Statistics = () => {
    const currentReservations = 5;
    const guestsServedToday = 50;
    const guestsServedThisMonth = 500;

    return (
        <div>
            <h1>Statistics</h1>
            <p>Current Reservations: {currentReservations}</p>
            <p>Guests Served Today: {guestsServedToday}</p>
            <p>Guests Served This Month: {guestsServedThisMonth}</p>
        </div>
    );
};

export default Statistics;