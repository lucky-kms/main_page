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
        width:800px;
    }
`

function Page1(){

    return (
        <Section className="section">
            <p className="ft2">메인 page1 입니다.</p>
            <article className="article">상품 페이지</article>
            <article className="article">상품 페이지</article>
            <article className="article">상품 페이지</article>
            <article className="article">상품 페이지</article>
            <article className="article">상품 페이지</article>
        </Section>
    )
}

export default Page1;