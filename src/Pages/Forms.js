import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, Form, Input, Select, Button, Option, Formcon } from './Styles/Forms.styles';

const theme = {
  colors: {
    primary: '#FFD700', // yellow
    background: '#000000', // black
    text: '#FFFFFF', // white
  },
  maxWidth: '800px',
  maxHeight: '600px',
};

const PurchaseForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    location: '',
    product: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <ThemeProvider theme={theme}>
        <Formcon>
      <Container>
        <h1>Purchase Form</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="location"
            placeholder="Location or Address"
            value={formData.location}
            onChange={handleChange}
          />
          <Select
            name="product"
            value={formData.product}
            onChange={handleChange}
          >
            <Option value="" disabled>Select a Product</Option>
            <Option value="radio1">Rhyno SE03 LITE</Option>
            <Option value="radio2">Rhyno SE03</Option>
            <Option value="radio3">Rhyno SE03 Max</Option>
          </Select>
          <Button type="submit">Purchase</Button>
        </Form>
      </Container>
      </Formcon>
    </ThemeProvider>
  );
};

export default PurchaseForm;
