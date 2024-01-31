import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import './main.scss';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

const content = styled.div`
    display:block;
    width:calc(100% - 20rem);
    height:100%;
    padding-left:20rem;
`;

function Contents(){

    return (
        <Routes>
            <Route path="/page1" element={<Page1/>} />
            <Route path="/page2" element={<Page2/>} />
            <Route path="/page3" element={<Page3/>} />
            <Route path="/page4" element={<Page4/>} />
            <Route path="/page5" element={<Page5/>} />
        </Routes>
    )
}

export default Contents;