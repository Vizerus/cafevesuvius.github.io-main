import React, { useState, useEffect } from 'react';

export function Reservation() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const InsertHours = (openingHour, closingHour) => {
    let hourSelect = document.getElementById('hours');
    let minuteSelect = document.getElementById('minutes');

    for (let i = openingHour; i <= closingHour; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.text = i;
      hourSelect.add(option);
    }
    let val = 0;
    for (let i = 0; i < 4; i++) {

      let option = document.createElement('option');
      option.value = val;
      option.text = val;
      val = val + 15;
      minuteSelect.add(option);
    }
  }

  useEffect(() => {
    InsertHours(9, 17);
    console.log("test");
  }, []);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  }

  return (
    <div className="containerdiv">
      <div className="reservation-page">
        <div className="centerdiv">
          <div className="ReservationDiv">
            <h2>Make a reservation</h2>
            <form>
              <label htmlFor="name">Full name:</label><br />
              <input type="text" id="name" name="name" /><br />
              <label htmlFor="email">Email:</label><br />
              <input type="email" id="email" name="email" /><br />
              <label htmlFor="phone">Phone:</label><br />
              <input type="text" id="phone" name="phone" /><br />
              <label htmlFor="location">Location:</label><br />
              <select id="location" value={selectedLocation} onChange={handleLocationChange}>
                <option disabled selected value={"test"}>Select a location</option>
                <option value="Odense">Odense</option>
                <option value="Aarhus">Aarhus</option>
                <option value="Copenhagen">Copenhagen</option>
              </select><br />
              <label htmlFor="date">Date:</label><br />
              <input type="date" id="date" name="date" /><br />
              <label >Time:</label><br />
              <select id="hours" placeholder='hours' />
              <select id="minutes" placeholder='minutes' /><br />
              <label htmlFor="Guests">Guests:</label><br />
              <select id="location" value={selectedLocation} onChange={handleLocationChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select><br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;