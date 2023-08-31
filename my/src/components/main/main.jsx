import { Link } from "react-router-dom";
import "./main.scss"

const Main = () => {
    return (
        <div className="menu">
            <div className="item">
                <div className="title">MAIN</div>
                <Link to="/" className="listItem">
                    <img src="home.svg" alt="" />
                    <span className="listItemTitle">Home</span>
                </Link>
                <Link to="/user" className="listItem">
                    <img src="profile.svg" alt="" />
                    <span className="listItemTitle">Register</span>
                </Link>
            </div>

        </div>
    )
}

export default Main;



// import React, { useState } from 'react';
// import './main.scss';

// const Main = () => {
//     const [collapsed, setCollapsed] = useState(false);

//     const toggleCollapse = () => {
//         setCollapsed(!collapsed);
//     };

//     return (
//         <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
//             <div className="toggle-button" onClick={toggleCollapse}>
//                 {collapsed ? 'Expand' : 'Collapse'}
//             </div>
//             <ul>
//                 <li>Item 1</li>
//                 <li>Item 2</li>
//                 <li>Item 3</li>
//             </ul>
//         </div>
//     );
// };

// export default Main;
