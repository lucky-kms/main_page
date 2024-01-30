import React from 'react';
import './main.scss';
import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';

import './main.scss';

const Menu = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:20rem;
    height:100vh;
    font-size:2rem;
    background-color:#4c6ef5;
    margin:0 auto;
    z-index:100;

    ul > li > a {
        display:block;
        padding-left:2.5rem;
        padding-top:1.2rem;
        padding-bottom:1.2rem;
        font-size:1.5rem;
    }
`;

const Hometext = styled.div`
  text-align:center;
  height:6.3rem;
  line-height:6.3rem;
  color:#fff;
`

const arrGnb = () => {
    const arrList = [
      {
        id: 1,
        pagename: '가입',
        pageurl: 'page1'
      },
      {
        id: 2,
        pagename: '회원목록 ',
        pageurl: 'page2'
      },
      {
        id: 3,
        pagename: '탈퇴목록 : Axios API ',
        pageurl: 'page3'
      },
      {
        id: 4,
        pagename: '재가입자',
        pageurl: 'page4'
      },
      {
        id: 5,
        pagename: 'QnA',
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
          <Hometext>HOME</Hometext>
          <ul>
            {
              list.map(menu => (
                <li key={menu.id} >
                  <Link className="mlink" to={menu.pageurl}>{menu.pagename}</Link>
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