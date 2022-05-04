import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import stephanhawkingIcon from './images/stephan_hawking.jpg';
import johngreesham from './images/johngreesham.jpg';
import charlesdarwin from './images/charles_darwin.jpg';

export const Cart = () => {
const [users, setUsers] = useState([])
    const array = [charlesdarwin, johngreesham, stephanhawkingIcon]
const history = useHistory();
    const paymentNavigation = () => {
 history.push("/payment");
}
 
 const fetchData = () => {
   fetch("http://localhost:8083/cart/getCartItems")
     .then(response => {
       return response.json()
     })
     .then(data => {
       setUsers(data)
     })
 }

 useEffect(() => {
   fetchData()
 }, [])
                return (
 <>
 <StyledDocHeader>
         <StyledHeader>
         <b>Buy Products</b>
         </StyledHeader>
     </StyledDocHeader>
 <StyledDocTileContainer>
{users.map((infoObj,index) => (
                 <StyledDocTile className='hp-doctile'>
                  <StyledIcon src={array[index]} alt='' />
                     <StyledTitle>{infoObj.Name}</StyledTitle>
                     <StyledPrice>{infoObj.Price}</StyledPrice>
                     <StyledInStock active={infoObj.InStock}>{infoObj.InStock}</StyledInStock>
                     <StyledOriginalPrice>{infoObj.OriginalPrice}</StyledOriginalPrice>
                     <StyledDiscount>{infoObj.Discount}</StyledDiscount>
                     <Button fontSize='2rem' onClick={paymentNavigation}>Checkout Product</Button>
                 </StyledDocTile>
             ))}
         </StyledDocTileContainer>
         </>
 );
}

const Button = styled.button`
background: transparent;
border-radius: 3px;
margin: 0 1em;
padding: 0.25em 1em;
color: #228B22;
border: 2px solid #228B22;

`;
export const StyledDocTile = styled.div`
height: 400px;
width: 200px;
background-color: #ffffff;
border-radius: 4px;
display: inline-block;
margin: 20px;
box-shadow: 0 5px 15px 1px rgb(0 0 0 / 7%);
`;

export const StyledIcon = styled.img`
height: 150px;
width: 110px;
float: center;

`;

export const StyledTitle = styled.div`
font-size: 20px;
text-transform: uppercase;
color: #FFA500;
margin-bottom: 15px;
`;

export const StyledHeader = styled.div`
font-size: 20px;
text-transform: uppercase;
color: #000000;
margin-bottom: 15px;
`;

export const StyledPrice = styled.div`
font-size: 14px;
width: 100%;
margin-bottom: 10px;
color: #3B4455;
font-weight: bold;
`;

export const StyledOriginalPrice = styled.div`
font-size: 14px;
width: 100%;
margin-bottom: 10px;
color: #3B4455;
font-weight: bold;
text-decoration: line-through;
`;

export const StyledInStock = styled.div`
width: 100%;
margin-bottom: 10px;
color: #008000;
`;

export const StyledDiscount = styled.div`
width: 100%;
margin-bottom: 10px;
color: #008000;
`;

export const StyledDocSearchBar = styled.div`
width: 100%;
height: 70px;
`;
export const StyledSearchBox = styled.div`
/* display: inline-block; */
float: right;
width: 50%;
`;
export const StyledSearchIcon = styled.img`
position: absolute;
   right: 20px;
   width: 35px;
   height: 35px;
   margin-top: 20px;
`;
export const StyledDocTileContainer = styled.div`
width: 100%;
`;
export const StyledDocHeader = styled.div`
width: auto;
height: 100px;
padding: 45px 0 30px 0;
background-color: #F5F5F6;
`;

export const StyledSpan = styled.span`
font-size: 14px;
color: #0077D9;
display: block;
margin-top: 20px;
`;
