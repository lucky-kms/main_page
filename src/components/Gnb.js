import React, { useState, useRef } from 'react';
import './main.scss';
import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';

import { FaReact } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiFillPicture } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { HiChartPie } from "react-icons/hi";

import './main.scss';
import Lnbsub from './Lnbsub';

const Menu = styled.aside`
    position:sticky;
    top:0;
    flex: 0 0 20rem;
    width:auto;
    height:100vh;
    font-size:2rem;
    z-index:100;

    ul > li > a {
        display:block;
        padding-left:2.5rem;
        padding-top:1.2rem;
        padding-bottom:1.2rem;
        font-size:1.25rem;
    }

    & .submenu {
      display:block;
      font-size:1rem;
      padding:.5rem 0;
      padding-left:3.4rem;
    }

    .active > a {
        color: #fff;
      }
  
    .active ul {
      max-height:500px;
    }
   
`;

const Hometext = styled.div`
  text-align:left;
  height:6.3rem;
  line-height:6.3rem;
  color:inherit;
  padding:0.5rem 1rem 0.5rem 1.5rem;

  .iconlogo svg {
    vertical-align:-0.25rem;
  }
`


const arrGnb = () => {
    const arrList = [
      {
        id: 1,
        pagename: '등록',
        pageurl: 'page1',
        iconname:FaUser

      },
      {
        id: 2,
        pagename: '회원목록 ',
        pageurl: 'page2',
        iconname:AiFillSafetyCertificate
      },
      {
        id: 3,
        pagename: '탈퇴목록 : Axios API ',
        pageurl: 'page3',
        iconname:AiFillPicture
      },
      {
        id: 4,
        pagename: 'Style Guide',
        pageurl: 'page4',
        iconname:AiFillMail
      },
      {
        id: 5,
        pagename: 'QnA',
        pageurl: 'page5',
        iconname:HiChartPie
      }
    ];

    return arrList;
}



function Gnb() {
    const [getToggle, setToggle] = useState('false');
    const menuParent = useRef(null);
    // Gnb
    const list = arrGnb();

    const toggleClass = (e) => {
      
      setToggle(getToggle == 'false'? 'true' : 'false')
    
      //setToggle('true');
      console.log('클릭bool: ', getToggle, '_this:', menuParent)
    }

    return (
      <>
        <Menu>
          <Hometext>
            <Link className="iconlogo" > <FaReact className="logoRotate" /> HOME</Link>
          </Hometext>
          <ul>
            {
              list.map(menu => (
                <li ref={menuParent} key={menu.id} className={getToggle == 'true'? 'active':''} onClick={toggleClass}>
                  <Link className="mlink" to={menu.pageurl}>{<menu.iconname/>} {menu.pagename}</Link>

                  <Lnbsub />
                </li>
              ))
            }
            {
            
            /* <li>
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