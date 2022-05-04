import React, { useEffect, useState } from "react"
import styled from 'styled-components';
import orderimage from './images/orderplacedimage.png';
import { Button } from './controls';
import { useHistory } from "react-router-dom";


export  const Success = () => {
const [randomNumber, setRandom] = useState();
const random = () => {
   setRandom(() => {
     return Math.floor(Math.random() * 100)*124;
   });
}
const history = useHistory();
    const HomeNavigation = () => {
 history.push("/");
}

useEffect(() => {
random()
 }, [])
      return (
 <>
 <StyledDocHeader>
         <StyledHeader>
             <b>Order Placed Successfully</b>
         </StyledHeader>
     </StyledDocHeader>
 <StyledDocTileContainer>
<StyledDocTile className='hp-doctile'>
                  <StyledIcon src={orderimage} alt='' />
                  <StyledLabel>Order id : <b>#{randomNumber}</b></StyledLabel>
                  <StyledLabel>Payment Method : <b>Card</b></StyledLabel>
                  <StyledLabel>Estimated Delivery Date : <b>Mon,May 9 2022 </b></StyledLabel>
              </StyledDocTile>
                 
         </StyledDocTileContainer>
         <div className="field is-clearfix">
            <button
              className="button is-primary is-outlined is-pulled-center" onClick={HomeNavigation}
            >
              Return Back To Home
            </button>
              </div>

         </>
 );
}


export const StyledDocTile = styled.div`
height: 400px;
width: 300px;
background-color: #ffffff;
border-radius: 4px;
display: inline-block;
margin: 20px;
box-shadow: 0 5px 15px 1px rgb(0 0 0 / 7%);
`;

export const StyledIcon = styled.img`
height: 150px;
width: 150px;
float: center;

`;

export const StyledLabel = styled.div`
font-size: 18px;
width: 100%;
margin-bottom: 10px;
color: #3B4455;
`;

export const StyledTitle = styled.div`
font-size: 20px;
text-transform: uppercase;
color: #FFA500;
margin-bottom: 15px;
`;

export const StyledHeader = styled.div`
font-size: 15px;
text-transform: uppercase;
color: #000000;
margin-bottom: 15px;
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
