import React, { useState } from 'react';

function Contact() {
  const [selectedStore, setSelectedStore] = useState(null);

  const storeOptions = [
    { name: 'Aarhus', phone: '52606896', email: 'cafevesuviusaarhus@gmail.com', address: 'Slipvej 4, 8000 Aarhus' },
    { name: 'Odense', phone: '42786490', email: 'cafevesuviusodense@gmail.com', address: 'Gamle Havnekaj 3, 5000 Odense C' },
    { name: 'Copenhagen', phone: '112', email: 'cafevesuviuscopenhagen@gmail.com', address: 'Tuborg Havnevej 7, 2900 Hellerup' },
  ];

  const handleStoreChange = (event) => {
    setSelectedStore(event.target.value);
  };

  return (
    <div className="containerdiv">
  <div className="contact-container">
    <div className="contact-info">
      <div className="contact-wrapper">
      <h2>Get in contact with us!</h2>
      <p>You can contact us at <a href="tel:+4552606896">123-456-7890</a> to get redirected automatically</p>
      <p>Or you can select a store below to choose a location manually</p>
      <select value={selectedStore} onChange={handleStoreChange} className="select-store">
        <option value={null}>Select a store</option>
        {storeOptions.map((store) => (
          <option key={store.name} value={store.name}>{store.name}</option>
        ))}
      </select>
      {selectedStore && (
        <div>
          <p>Phone: {storeOptions.find((store) => store.name === selectedStore).phone}</p>
          <p>Email: {storeOptions.find((store) => store.name === selectedStore).email}</p>
          <p>Address: {storeOptions.find((store) => store.name === selectedStore).address}</p>
        </div>
      )}
      </div>
    </div>
    <div className="map-container">
      <iframe src="https://www.google.com/maps/d/embed?mid=1Pc-EONicBWC_0HceD7tqcsucqk7-EGw&ehbc=2E312F&noprof=1" width="150%" height="480"></iframe>
    </div>
  </div>
</div>
  );
}

export default Contact;

