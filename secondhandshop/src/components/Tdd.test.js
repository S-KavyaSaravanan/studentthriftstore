import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';
import login from './login';
import home from './home';
import UserProfile from './UserProfile';
import ProductItem from './ProductItem';
import CartItem from './CartItem';


//HomePage
test('should compulsory have menu titles', () => {

  const rendered = render(<home />);

  rendered.getAllByText("ProductList");
  rendered.getAllByText("Cart");
  rendered.getAllByText("Login");
  rendered.getAllByText("UserProfile");


});

//Registration
test('should compulsory have fields email and password and name for registration', () => {

  const rendered = render(<Register />);

  rendered.getAllByText("Student Email");
  rendered.getAllByText("Password");
  rendered.getAllByText('First Name');
  rendered.getAllByText('Last Name');

});

//Login
it('should compulsory have fields email and password and button for logging in', () => {

  const rendered = render(<login />);

  rendered.getAllByText("Student Email");
  rendered.getAllByText("Password");
  rendered.getAllByText('Submit');
  

});

//UserProfile
test('should compulsory display user details', () => {

  const rendered = render(<UserProfile />);

  rendered.getAllByText("Student Email");
  rendered.getAllByText("Full Name");
  rendered.getAllByText("Address");

});


//FindingProducts
test('should compulsory display uploaded items', () => {

  const rendered = render(<ProductItem />);

  rendered.getAllByText("Product Name");
  rendered.getAllByText("Price");
  rendered.getAllByText("Add to cart");

});

//cart
test('should compulsory have check out option', () => {

  const rendered = render(<CartItem />);
  rendered.getAllByText("Check Out");
 

});

//payment
test('should compulsory take card number, valid till and cvv for making the payment', () => {

  const rendered = render(<Payment />);

  rendered.getAllByText("Card Number");
  rendered.getAllByText("Valid Till");
  rendered.getAllByText("CVV");

});




