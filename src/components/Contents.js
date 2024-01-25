import React from 'react';
import styled from 'styled-components';
import './main.scss';

const content = styled.div`
    display:block;
    width:calc(100% - 20rem);
    height:100%;
    padding-left:20rem;
    overflow-x:auto;
    overflow-y:hidden;
`;

function Contents(){

    return (
        <p className="ft2">컨텐츠 메인 페이지</p>
    )
}

export default Contents;