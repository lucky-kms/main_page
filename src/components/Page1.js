import React from 'react';
import styled from 'styled-components';
import './main.scss';

const prdCardArea = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const Section = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    flex-direction:row;
    overflow-y:hidden;
    overflow-x:auto;

    .article {
        flex:none;
        width:800px;
    }

    .article:nth-child(even) {
        background-color:#222;
    }
`

function Page1(){

    return (
        <Section className="section section1">
            <article className="article">
                <h2 className="ft2">메인1 page 입니다.</h2>
            </article>
            <article className="article">상품 페이지</article>
            <article className="article">상품 페이지</article>
            <article className="article">상품 페이지</article>
            <article className="article">상품 페이지</article>
            <article className="article">상품 페이지</article>
        </Section>
    )
}

export default Page1;