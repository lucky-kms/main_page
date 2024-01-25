import React from 'react';
import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import './main.scss';

const Menu = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:20rem;
    height:100vh;
    color:red;
    font-size:2rem;
    background-color:#070707;
    margin:0 auto;
    z-index:100;

    ul > li > a {
        display:block;
        background-color:lightgreen;
        padding-left:2.5rem;
        padding-top:0.5rem;
        padding-bottom:0.5rem;
        font-size:1.5rem;
    }
`;

function Gnb() {
    return (
        <>
            <Menu>
                <ul>
                    <li>
                        <Link to="/page1" className="ft2" >메뉴1</Link>
                    </li>
                    <li>
                        <Link to="/page2" >메뉴2</Link>
                    </li>
                    <li>
                        <Link to="/page3" >메뉴3</Link>
                    </li>
                    <li>
                        <Link to="/page4" >메뉴4</Link>
                    </li>
                    <li>
                        <Link to="/page5" >메뉴2</Link>
                    </li>
                </ul>
            </Menu>

            <Routes>
                <Route path="/page1" element={<Page1/>} />
                <Route path="/page2" element={<Page2/>} />
                <Route path="/page3" element={<Page3/>} />
                <Route path="/page4" element={<Page4/>} />
                <Route path="/page5" element={<Page5/>} />
            </Routes>
        </>
    )
}

export default Gnb;