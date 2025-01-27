import React from 'react'
import '../../App.css'
import { SidebarData } from "./SidebarData";
import profile from './profile.PNG';
import { Link } from "react-router-dom";

function Sidebar() {


    return (
        <div className='menubar'> 
            <div className='profile'>
                <img id="img" src={profile} alt="" />

                <p>XYZ<br />(xyz@gecg28.ac.in)</p>
            </div>
            <ul className='listItem'>
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key}
                            className="row">
                            <div id="icon">{val.icon}</div>
                            <Link id="title" to={`${val.link}`}>{val.title}</Link>
                        </li>
                    );
                })};
            </ul>
        </div>
    );
}

export default Sidebar