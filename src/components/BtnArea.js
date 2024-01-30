import React from 'react';
import styled from 'styled-components';
import './main.scss';

const BtnAreaflex = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;

const BtnDefault = styled.button`
    align-self: flex-end;
`

function BtnArea({children}) {
    return (
        <BtnAreaflex>
            <BtnDefault className="btnDefault">{children}</BtnDefault>
        </BtnAreaflex>
    )
}

export default BtnArea;