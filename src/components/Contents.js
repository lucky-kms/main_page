import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import './main.scss';

import { BiBell, BiCalendar, BiEnvelope, BiSolidUser, BiSun} from "react-icons/bi";

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

const SectionArea = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    flex-direction:column;
    flex-wrap:wrap;
    width:100%;
`

const Topcon = styled.div`
    position:sticky;
    top:0;
    display:flex;
    align-items:stretch !important;
    justify-content:space-between;
    padding:0 3rem;
    width:100%;
    /* background-color:#fff; */
    backdrop-filter: blur(33px);
    height:5rem;
    box-shadow:0px 10px 30px 0px rgba(82, 63, 105, 0.05);
`;

const Btmcon = styled.div`
    width:100%;
`;

const UserMenu = styled.div`
    width:100%;

    ul{
        display:flex;
        align-items:center;
    }

    ul > li{
        font-size:.925rem;
    }

    ul > li{
        font-size:.925rem;
    }

    ul > li > a{
        padding: 0.825rem;
        font-size:1.25rem;
        color:#4B5675;
    }
`

const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    width:100%;
    height: 100%;

    .btnMenu{
        font-size:1.8rem;
        
        button {
            padding:0 1rem;
        }

        svg {
            color:#99A1B7;
        }
    }
`

function Contents(){

    const topmenu = [
        {
            id:1,
            url:'',
            pagename:'메뉴1',
            active:false,
        },
        {
            id:2,
            url:'',
            pagename:'메뉴2',
            active:false,
        },
        {
            id:3,
            url:'',
            pagename:'메뉴3',
            active:false,
        },
        {
            id:4,
            url:'',
            pagename:'메뉴4',
            active:false,
        },
        {
            id:5,
            url:'',
            pagename:'메뉴5',
            active:false,
        }
    ]

    return (
        <SectionArea>
            <Topcon>
                <UserMenu>
                    <Inner>
                        <ul>
                            {
                                topmenu.map(data => (
                                    <li key={data.id}>
                                        <Link to={data.url}>{data.pagename}</Link>
                                    </li>
                                ))
                            }
                        </ul>

                        <div className="btnMenu">
                            <button type="button"><BiBell /></button>
                            <button type="button"><BiCalendar /></button>
                            <button type="button"><BiEnvelope /></button>
                            <button type="button"><BiSolidUser /></button>
                            <button type="button"><BiSun /></button>
                        </div>
                    </Inner>
                </UserMenu>
            </Topcon>
            <Btmcon>
                <Routes>
                    <Route path="/page1" element={<Page1/>} />
                    <Route path="/page2" element={<Page2/>} />
                    <Route path="/page3" element={<Page3/>} />
                    <Route path="/page4" element={<Page4/>} />
                    <Route path="/page5" element={<Page5/>} />
                </Routes>
            </Btmcon>
        </SectionArea>
    )
}

export default Contents;