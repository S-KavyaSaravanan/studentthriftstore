import React, { useState } from 'react';
import styled from 'styled-components';
import { Dropdown } from './controls';
import logo from './images/storeLogo.JPG';
import home from './images/home.jpg';
import withContext from "../withContext";

export const StyledHeader = styled.div`
width: 100%;
height: 100px;
margin-top: 20px;
position: relative;
`;

export const StyledLogo = styled.img`
height: 70px;
width: 70px;
padding: 2px 20px 10px 20px;
float: left;
`;

export const StyledTitle = styled.div`
font-family: 'Papyrus';
font-weight: bold;
font-size: 32px;
color: #000000;
float: left;
margin-top: 5px;
width: 180px;
cursor: pointer;
`;

export const StyedHomeBanner = styled.img`
width: 100%;
box-shadow: 0 5px 15px 1px rgb(0 0 0 / 7%);
`;

export const StyledMenu = styled.div`
float: right;
height: 75px;
width: calc(100% - 388px);
padding: 25px 20px 0 0;
text-align: end;
`;

export const StyledContent = styled.div`
width: calc(100% - 20px);
height: calc(100% - 300px);
padding: 10px;
`;

export const StyledHomeHeader = styled.div`
width: auto;
height: 40px;
padding: 25px 0;
background-color: #F5F5F6;
`;

export const StyledContentTitle = styled.div`
width: 100%;
font-size: 18px;
`;

export const StyledDiv = styled.div`
margin: 10px;
color: #3B4455;
border-bottom: 1px solid #3b4455;

h2 {
    color: #0077D9;
}
`;

export const UserProfile = () => {
return (
        <>
            <StyledContent>
                <StyedHomeBanner src={home} alt='' />
                    <StyledHomeHeader>
                        <StyledContentTitle>Contact Us</StyledContentTitle>
                    </StyledHomeHeader>
                    </StyledContent>
            </>
    );
}
export default withContext(UserProfile);
