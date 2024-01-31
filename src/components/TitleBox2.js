import React from 'react';
import './main.scss';
import styled from 'styled-components';

const TitleArea2 = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    padding:1.5rem .25rem 2.5rem;
`

const TtlInner = styled.div`

    h3 {
        font-size:1%.25;
        color:inherit;
    }

`

function TitleBox({children}) {
    return (
        <TitleArea2>
            <TtlInner>
                <h3>{children}</h3>
            </TtlInner>
        </TitleArea2>
    )
}

export default TitleBox;