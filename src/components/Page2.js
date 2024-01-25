import React from 'react';
import styled from 'styled-components';
import './main.scss';

const prdCardArea = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

function Page1(){

    return (
        <section className="section">
            <p className="ft2">메인2 page 입니다.</p>
        </section>
    )
}

export default Page1;