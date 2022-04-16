import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import styled from 'styled-components';
import { MaskedTextbox, Password, Button } from './controls';
import RegisterPage from './registration';
import { useNavigate } from "react-router-dom";

export const StyledLoginPage = styled.div`
position: absolute;
top: calc(50% - 190px);
left: calc(50% - 200px);
width: 450px;
height: 400px;
padding: 10px;
box-shadow: 0 5px 15px 1px rgb(0 0 0 / 7%);
z-index: 2;
background-color: #ffffff;
pointer-events: all;
`;

export const StyledTitle = styled.div`
text-align: center;
font-size: 24px;
margin-top: 20px;
margin-bottom: 40px;
`;

export const StyledContent = styled.div`
    text-align: left;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    .hp-textbox {
        margin-bottom: 25px;
    }
`;

export const StyledFooter = styled.div`
    text-align: center;
    font-size: 24px;
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`;

export const StyledModel = styled.div`
height: 80vh;
width: 100%;
opacity: 0.8;
background-color: #3B4455;
pointer-events: none;
`;

export const LoginPage = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const _onUsernameChange = (eventObj) => {
        setUsername(eventObj.target.value);
    }

    const _onPasswordChange = (eventObj) => {
        setPassword(eventObj.target.value);
    }

    const _onClick = () => {
        if (username === 'Kavya' && password === 'Kavya@123') {
            alert('Login successful');
            props.onClick();
        } else {
            alert('Login failed');
        }
    }

    const _onRegister = () => {
        let navigate = useNavigate();
            navigate.push=('/registration');
        
    }



    return (
        <>
        <StyledModel>
            <StyledLoginPage>
                <StyledTitle>Login</StyledTitle>
                <StyledContent>
                    <MaskedTextbox title="Username" type="text" onChange={_onUsernameChange} />
                    <MaskedTextbox title="Password" type="password" onChange={_onPasswordChange} />
                </StyledContent>
                <StyledFooter>
                    <Button title="Submit" onClick={_onClick} />
                    <Button title="Register" onClick={_onRegister} />
                </StyledFooter >

            </StyledLoginPage>
        </StyledModel>
        </>
    );
    
}
