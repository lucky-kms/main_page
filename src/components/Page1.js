import React, { useRef, useState, useEffect, useMemo, useCallback, useReducer } from 'react';
import styled from 'styled-components';
import './main.scss';
import UserList from './UsersList';
import CreateUser from './CreateUser';
import TitleBox from './TitleBox2';
import Modalpop from '../layerpopup/Modalpop';


const prdCardArea = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const Section = styled.div`
    /* display:flex;
    align-items:flex-start;
    justify-content:flex-start; */

    .article {
       
    }

    .article:nth-child(even) {
        background-color:#222;
    }
`

const CountUser = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content:flex-end;
    padding:20px 1rem;
    line-height:1;

    & .num {
        font-weight:700;
        font-size:2rem;
        padding:0 .5rem;
    }
`

function CountActiveUser(users) {
    console.log('활성 사용자 수 체크중...');
    return users.filter(user => user.active).length;
}

const initialState = { 
    inputs: {
        username:'',
        email:''
    },
    users: [ 
            {
                id:1,
                username:'홍길동',
                email:'kmpluto83@gmail.com',
                active: true
            },
            {
                id:2,
                username:'아무개',
                email:'kmpluto83@naver.com',
                active: false
            },
            {
                id:3,
                username:'사용자1',
                email:'kmpluto83@hanmail.net',
                active: true
            },
            {
                id:4,
                username:'홍길동',
                email:'kmpluto83@gmail.com',
                active: true
            },
            {
                id:5,
                username:'아무개',
                email:'kmpluto83@naver.com',
                active: true
            }
    ]
}

function reducer(state, action) {

    switch (action.type) {
        case 'CHANGE_INPUT' : 
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            }
        case 'CREATE_USER' : 
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            }
        case 'TOGGLE_USER' : 
            return {
                ...state,
                users: state.users.map(user => user.id == action.id ? {...user, active: !user.active} : user)
            }
        case 'REMOVE_TYPE' :
            {
                return {
                    ...state,
                    users: state.users.filter(data => data.id != action.id)
                }
            }
        default :
            return state;
    }
}

function Page1(){

    const [state, dispatch] = useReducer(reducer, initialState);
    const {users} = state;
    const {username, email} = state.inputs;

    const countupRef = useRef(null);
    let countUpAnim;

    useEffect(() => {
        initCountUp();
        onClick();
      }, []);

    async function initCountUp() {
        const countUpModule = await import('countup.js');
        countUpAnim = new countUpModule.CountUp(countupRef.current, count);

        if (!countUpAnim.error) {
            console.log('카운트 시작1');
            countUpAnim.start();
        } else {
            console.log('카운트 시작2');
            console.error(countUpAnim.error);
        }
      }
    
    // const [inputs, setInputs] = useState({
    //     username:'',
    //     email:''
    // });
    //const {username, email} = inputs;

    const onChange = useCallback(e => {
        const {name, value} = e.target;

        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        });
        // setInputs(inputs => ({
        //     ...inputs,
        //     [name]: value
        // }));
        
    },[]);


    // const [users, setUsers] = useState([
    //         {
    //             id:1,
    //             username:'minsoo',
    //             email:'kmpluto83@gmail.com',
    //             active: true
    //         },
    //         {
    //             id:2,
    //             username:'minsoo',
    //             email:'kmpluto83@naver.com',
    //             active: false
    //         },
    //         {
    //             id:3,
    //             username:'minsoo',
    //             email:'kmpluto83@hanmail.net',
    //             active: false
    //         }
    //     ]);
    
    const nextId = useRef(13);

    const onCreate = useCallback(() => {
        // const user = {
        //     id:nextId.current,
        //     username,
        //     email,
        // }

        dispatch({
            type: 'CREATE_USER',
            user: {
                id:nextId.current,
                username,
                email
            }
        });
        /** 배열 합치기 : sprred 연산자, concat 사용 */
        // setUsers(users => [...users, user]);
        // setUsers(users.concat(user));

        // console.log(nextId.current);
        // setInputs({
        //     username:'',
        //     email:''
        // });

        nextId.current += 1;

        // console.log('initialState : ', initialState)
    },[username, email]);

    const ontoggle = useCallback(id => {

        dispatch({ 
            type:'TOGGLE_USER',
            id
        });
        // setUsers(users => users.map(user => user.id == id ? 
        // {...user, active: !user.active} : user 
        // ))
    }, []);
    
    const onRemove = useCallback(id => {

        dispatch({
            type:'REMOVE_TYPE',
            id
        })
        // console.log('e : ', e);      
        // const user = users.filter(data => data.id != id);
        // setUsers(users => users.filter(data => data.id != id));
    },[]);

    const count = useMemo(() => CountActiveUser(users), [users]);

    const [dialog, setVisible] = useState(false);

    const onClick = () => {
        console.log(('클릭 테스트'))
        setVisible(true);
    }

    const onConfirm = () => {
        console.log(('확인'))
        setVisible(false)
    }

    const onCancle = () => {
        console.log(('취소'))
        setVisible(false)
    }

    return (
        <>
            <Section className="section section1">
                <article className="article">
                    <div>
                        <h2 id="" className="ft2">등록</h2>
                        {/* <button onClick={onClick}>모달팝업 노출 테스트</button> */}
                    </div>
                    <div className="itemGroup">
                        <TitleBox>컴포넌트 상태 관리 : reducer 분리 관리</TitleBox>
                        <CountUser>활성사용자 수 : <span ref={countupRef} className="num">{count}</span></CountUser>
                        <UserList users={users}  onRemove={onRemove} ontoggle={ontoggle} />
                        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
                    </div> 
                </article>
                <article className="article">상품 페이지</article>
                <article className="article">상품 페이지</article>
                <article className="article">상품 페이지</article>
                <article className="article">상품 페이지</article>
                <article className="article">상품 페이지</article>
            </Section>

            <Modalpop titletext="가입확인창" contenttext="가입 페이지 입니다." onConfirm={onConfirm} onCancle={onCancle} visible={dialog} />
        </>
    )
}

export default Page1;