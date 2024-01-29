import React from 'react';
import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';

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

const arrGnb = () => {
    const arrList = [
      {
        id: 1,
        pagename: '메뉴1',
        pageurl: 'page1'
      },
      {
        id: 2,
        pagename: '메뉴2 : Rest API : fecth API ',
        pageurl: 'page2'
      },
      {
        id: 3,
        pagename: '메뉴3 : Rest API : Axios API ',
        pageurl: 'page3'
      },
      {
        id: 4,
        pagename: '메뉴4',
        pageurl: 'page4'
      },
      {
        id: 5,
        pagename: '메뉴5',
        pageurl: 'page5'
      }
    ];

    return arrList;
}

function Gnb() {
    // Gnb
    const list = arrGnb();

    return (
      <>
        <Menu>
          <ul>
            {
              list.map(menu => (
                <li key={menu.id} >
                  <Link to={menu.pageurl}>{menu.pagename}</Link>
                </li>
              ))

            }
            {/* <li>
                <Link to="/page1" className="ft2" >메뉴1</Link>
            </li>
            <li>
                <Link to="/page2">메뉴2</Link>
            </li>
            <li>
                <Link to="/page3">메뉴3</Link>
            </li>
            <li>
                <Link to="/page4">메뉴4</Link>
            </li>
            <li>
                <Link to="/page5">메뉴5</Link>
            </li> */}
          </ul>
        </Menu>
      </>
    )
}

export default Gnb;