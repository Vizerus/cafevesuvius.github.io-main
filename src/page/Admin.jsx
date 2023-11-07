import React, { useState, useEffect } from 'react';
import '../style.scss';
import FetchMenu from '../fetch/edit-menu';

const reservationData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '12345678',
        location: 'Odense',
        date: '01/01/2022',
        time: '18:00',
        partySize: 4,
        tableNumber: 1,
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        phone: '87654321',
        location: 'Copenhagen',
        date: '01/02/2022',
        time: '19:00',
        partySize: 6,
        tableNumber: 2,
    },
    {
        id: 3,
        name: 'Bob Johnson',
        email: 'bobjohnson@example.com',
        phone: '55555555',
        location: 'Aarhus',
        date: '01/03/2022',
        time: '20:00',
        partySize: 2,
        tableNumber: 3,
    },
];

function ReservationRow({ reservation, onEdit, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedReservation, setEditedReservation] = useState(reservation);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(editedReservation);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedReservation(reservation);
    };

    const handleDelete = () => {
        onDelete(reservation.id);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedReservation({ ...editedReservation, [name]: value });
    };

    return (
        <tr className={isEditing ? 'editing' : ''}>
            <td>
                {isEditing ? (
                    <input type="text" name="name" value={editedReservation.name} onChange={handleInputChange} />
                ) : (
                    reservation.name
                )}
            </td>
            <td>
                {isEditing ? (
                    <input type="text" name="date" value={editedReservation.date} onChange={handleInputChange} />
                ) : (
                    reservation.date
                )}
            </td>
            <td>
                {isEditing ? (
                    <input type="text" name="time" value={editedReservation.time} onChange={handleInputChange} />
                ) : (
                    reservation.time
                )}
            </td>
            <td>
                {isEditing ? (
                    <input type="number" name="tableNumber" value={editedReservation.tableNumber} onChange={handleInputChange} />
                ) : (
                    reservation.tableNumber
                )}
            </td>
            <td>
                {isEditing ? (
                    <input type="number" name="partySize" value={editedReservation.partySize} onChange={handleInputChange} />
                ) : (
                    reservation.partySize
                )}
            </td>
            <td>
                {isEditing ? (
                    <>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </>
                ) : (
                    <>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </>
                )}
            </td>
        </tr>
    );
}

function Admin() {
    const [reservations, setReservations] = useState([]);
    const [tablesReserved, setTablesReserved] = useState(5);
    const [tablesAvailable, setTablesAvailable] = useState(3);
    const [guestsServedToday, setGuestsServedToday] = useState(20);
    const [guestsServedThisMonth, setGuestsServedThisMonth] = useState(500);
    const [revenue, setRevenue] = useState(10000);
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    const [openingHours, setOpeningHours] = useState([
        { day: 'Monday', hours: '9am - 5pm' },
        { day: 'Tuesday', hours: '9am - 5pm' },
        { day: 'Wednesday', hours: '9am - 5pm' },
        { day: 'Thursday', hours: '9am - 5pm' },
        { day: 'Friday', hours: '9am - 5pm' },
        { day: 'Saturday', hours: '11am - 5pm' },
        { day: 'Sunday', hours: 'Closed' },
    ]);

    useEffect(() => {
        setReservations(reservationData);
        setTablesReserved(5);
        setTablesAvailable(3);
        setGuestsServedToday(20);
        setGuestsServedThisMonth(500);
        setRevenue(10000);
    }, []);

    const handleEditReservation = (editedReservation) => {
        const updatedReservations = reservations.map((reservation) => {
            if (reservation.id === editedReservation.id) {
                return editedReservation;
            } else {
                return reservation;
            }
        });
        setReservations(updatedReservations);
        setSelectedReservation(null);
        setIsEditFormOpen(false);
    };

    const handleDeleteReservation = (reservationId) => {
        const updatedReservations = reservations.filter((reservation) => reservation.id !== reservationId);
        setReservations(updatedReservations);
    };

    const handleReservationClick = (reservation) => {
        setSelectedReservation(reservation);
        setIsEditFormOpen(true);
    };

    const handleHoursChange = (day, newHours) => {
        const updatedHours = openingHours.map((item) => {
            if (item.day === day) {
                return { ...item, hours: newHours };
            }
            return item;
        });
        setOpeningHours(updatedHours);
    };

    const handleSaveChanges = () => {
        // Save changes to opening hours
    };

    const handleDiscardChanges = () => {
        // Discard changes to opening hours
    };

    return (
        <div className="containerdiv">
            <div className="admin-container">
                <div className="admin-wrapper">
                    <h1>Reservations</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Table number</th>
                                <th>Party Size</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map((reservation) => (
                                <ReservationRow
                                    key={reservation.id}
                                    reservation={reservation}
                                    onEdit={handleEditReservation}
                                    onDelete={handleDeleteReservation}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="admin-wrapper">
                    {isEditFormOpen && (
                        <div>
                            <h2>Edit Reservation</h2>
                            <form>
                                <label>
                                    Name:
                                    <input type="text" name="name" value={selectedReservation.name} onChange={() => {}} />
                                </label>
                                <label>
                                    Date:
                                    <input type="text" name="date" value={selectedReservation.date} onChange={() => {}} />
                                </label>
                                <label>
                                    Time:
                                    <input type="text" name="time" value={selectedReservation.time} onChange={() => {}} />
                                </label>
                                <label>
                                    Party Size:
                                    <input type="number" name="partySize" value={selectedReservation.partySize} onChange={() => {}} />
                                </label>
                                <button onClick={() => setIsEditFormOpen(false)}>Close</button>
                            </form>
                        </div>
                    )}
                    <h1>Statistics</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Tables reserved</th>
                                <th>Tables available</th>
                                <th>Guests served today</th>
                                <th>Guests served this month</th>
                                <th>Revenue (DKK)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{tablesReserved}</td>
                                <td>{tablesAvailable}</td>
                                <td>{guestsServedToday}</td>
                                <td>{guestsServedThisMonth}</td>
                                <td>{revenue}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="admin-wrapper">
                    <h1>Menu</h1>
                    <FetchMenu />
                </div>
                <div className="admin-wrapper">
                    <h1>Opening Hours</h1>
                    <ul className="opening-hours">
                        {openingHours.map((item) => (
                            <li key={item.day}>
                                {item.day}: <input type="text" value={item.hours} onChange={(e) => handleHoursChange(item.day, e.target.value)} />
                            </li>
                        ))}
                    </ul>
                    <div className="opening-hours-buttons">
                        <button onClick={handleSaveChanges}>Save Changes</button>
                        <button onClick={handleDiscardChanges}>Discard</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;