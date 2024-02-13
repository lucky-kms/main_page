import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './main.scss';


function Lnbsub() {

    const Depth2 = [
        {
            id:1,
            subname:'서브메뉴테스트1',
            pageurl:'/page1'
        },
        {
            id:2,
            subname:'서브메뉴테스트2',
            pageurl:'/page2'
        },
        {
            id:3,
            subname:'서브메뉴테스트3',
            pageurl:'/page3'
        },
        {
            id:4,
            subname:'서브메뉴테스트4',
            pageurl:'/page4'
        },
        {
            id:5,
            subname:'서브메뉴테스트5',
            pageurl:'/page5'
        }
    ]

    return (
        <>
            <ul className="subListArea">
                {

                    Depth2.map(data => (
                        <ll className="submenu" key={data.id}>
                            <Link to={data.pageurl}>{data.subname}</Link>
                        </ll>
                    ))
                }
                
            </ul>
        </>
    )
}

export default Lnbsub;