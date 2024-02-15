import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`

const slideup = keyframes`
    from {
        transform:translateY(50%);
    }
    to {
        transform:translateY(0%);
    }
`

const ModalBgPop = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:rgba(0,0,0,0.8);
    z-index: 1000;

    animation-duration: 0.25s;
    animation-name:${fadein};
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwrad;
`

const ModalInner = styled.div`
    position:absolute;
    top:300px;
    left:40%;
    /* transform:translate(-50%, -50%); */
    display:block;
    min-width:32.5rem;
    max-width:32.5rem;
    min-height:17rem;
    max-height:17rem;
    background-color:#fff;
    border:1px solid #ddd;
    border-radius:1rem;

    animation-duration: 0.35s;
    animation-name:${slideup};
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwrad;

    & .titlebox {
        padding:1rem;
    }
`

const Title = styled.h2`
    font-size:1.5rem;
    font-weight:700;
    color:#555;
`
const Description = styled.p`
    text-align:center;
    font-size:1rem;
    color:#777;
    padding:2rem 0rem;
`


const BtnModalpop = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    padding:1rem;
`

const BtnModalblock = styled.button`
    margin-bottom:auto;
    display:block;
    font-size:1rem;
    color:#fff;
    padding:.5rem 1rem;
    background-color:#fa5252;

    & + & { 
        margin-left:1rem;
        background-color:#1B84FF;
    }
`



function Modalpop({
    titletext, 
    contenttext, 
    confirmText, 
    cancleText,
    onCancle,
    onConfirm,
    visible
 }) {

    if(!visible) return null;

    return (
        <ModalBgPop>
            <ModalInner>
                <div className="titlebox">
                    <Title>{titletext}</Title>
                    <Description>{contenttext}</Description>
                </div>
                <BtnModalpop>
                    <BtnModalblock onClick={onCancle}>{cancleText}</BtnModalblock>
                    <BtnModalblock onClick={onConfirm}>{confirmText}</BtnModalblock>
                </BtnModalpop>
            </ModalInner>
        </ModalBgPop>
    )
}

Modalpop.defaultProps = {
    confirmText : '확인',
    cancleText : '취소',
}

export default Modalpop;