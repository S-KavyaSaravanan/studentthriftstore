import React, { useState } from 'react';
import styled from 'styled-components';
import withContext from "../withContext";
import { MaskedTextbox, Button } from './controls';
import { useHistory } from "react-router-dom";

export const StyledPaymentPage = styled.div`
position: absolute;
top: calc(50% - 190px);
left: calc(50% - 200px);
width: 400px;
height: auto;
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
height: 800px;
width: 100%;
opacity: 0.8;
background-color: #3B4455;
pointer-events: none;
`;

export const Payment = () => {
const history = useHistory();
    const paymentNavigation = () => {
 history.push("/success");
}

return (
<StyledModel>
         <StyledPaymentPage>
             <StyledTitle>Payment Details</StyledTitle>
             <StyledContent>
                 <MaskedTextbox title="Card Number" type="number" />
                 <MaskedTextbox title="Valid Till" type="number" />
                 <MaskedTextbox title="CVV" type="number" />
                 <MaskedTextbox title="Remarks" type="text" />
             </StyledContent>
             <StyledFooter>
             <div className="field is-clearfix">
             <button
               className="button is-primary is-outlined is-pulled-center" onClick={paymentNavigation}
             >
               Submit
             </button>
               </div>
             </StyledFooter >
         </StyledPaymentPage>
     </StyledModel>
 );
}
export default withContext(Payment);
