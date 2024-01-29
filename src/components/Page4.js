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
        <section className="section section4">
            <article className="article">
                <h2 className="ft2">메인4 page 입니다.</h2>
            </article>
        </section>
    )
}

export default Page1;