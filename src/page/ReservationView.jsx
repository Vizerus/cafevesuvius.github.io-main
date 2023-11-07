import React, { useState, useEffect } from 'react';

const ReservationView = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const dummyReservations = [
            { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '12345678', location: 'Odense', date: '2021-09-01', time: '18:00', partySize: 4 },
            { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', phone: '87654321', location: 'Copenhagen', date: '2021-09-02', time: '19:00', partySize: 2 },
            { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com', phone: '55555555', location: 'Aarhus', date: '2021-09-03', time: '20:00', partySize: 6 },
        ];

        setReservations(dummyReservations);
    }, []);

    return (
        <div>
            <h1>Reservations</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Guests</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        <tr key={reservation.id}>
                            <td>{reservation.id}</td>
                            <td>{reservation.name}</td>
                            <td>{reservation.email}</td>
                            <td>{reservation.phone}</td>
                            <td>{reservation.location}</td>
                            <td>{reservation.date}</td>
                            <td>{reservation.time}</td>
                            <td>{reservation.partySize}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReservationView;