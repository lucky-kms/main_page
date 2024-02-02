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
                <h2 className="ft2">Style Guide</h2>

                <p className="subttl1">부제목</p>
                <p className="subttl2">부제목</p>
                <p className="subttl3">부제목</p>
                <p className="subttl4">부제목</p>
                <p className="subttl5">부제목</p>
            </article>
        </section>
    )
}

export default Page1;