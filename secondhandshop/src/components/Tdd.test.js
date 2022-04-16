import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';
import login from './login';
import home from './home';

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







