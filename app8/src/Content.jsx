import React, { useContext, useState } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import Users from './users/Users';
import AddUser from './users/addUser';
import EditDesc from './users/EditDesc';

const Content = () => {
    
    const { showMenu, setShowMenu } = useContext(MainContext)
    const [isUser, setIsUser] = useState(true);
    const handleShowMenu = (event) => {
        event.stopPropagation()
        setShowMenu(!showMenu)
        console.log(showMenu);
    }

    return (
        <div className={style.content_section} onClick={() => { setShowMenu(false) }}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`}
                onClick={handleShowMenu}
            ></i>
            <Routes>
                <Route path="/user" element={isUser ? <Users /> : <Navigate replace to="/posts"/>} />
                {/* <Route path="/user/add" element={<AddUser />} />
                <Route path="/user/add:user_id" element={<AddUser />} /> */}
                {
                    /*
                    حالت بالارو معادلش پایین نوشتم
                    همچنین میشه با این روش پایین یک المنت دیگه هم به کامپوننت ارسال کرد
                    */
                }
                <Route path="/user/add" element={<AddUser />} >
                    <Route path=':userId' element={<EditDesc />} />
                </Route>
                <Route path="/posts" element={<Posts/>} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/todo" element={<Todos/>} />
                <Route path='*' element={<Users />} />
            </Routes>
        </div>
    )

}

export default Content;