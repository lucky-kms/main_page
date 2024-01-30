import React from 'react';
import styled from 'styled-components';
import './main.scss';

const BtnAreaflex = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding:5rem 0 3rem;
`;

const BtnDefault = styled.button`
    margin-left:auto;
`

function BtnArea(props) {
    const {children, btnEvent} = props;

    return (
        <BtnAreaflex>
            <BtnDefault className="btnDefault" onClick={ () => btnEvent()} >{children}</BtnDefault>
        </BtnAreaflex>
    )
}

export default BtnArea;