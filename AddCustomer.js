import React, { useState } from 'react';
import axios from 'axios';

const AddCustomer = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/customers/add', form);
      alert('Customer added successfully!');
      setForm({ name: '', phone: '', email: '', address: '' });
    } catch (err) {
      alert('Error adding customer: ' + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br /><br />
        <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required /><br /><br />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br /><br />
        <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} /><br /><br />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;
