import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="analyt.svg" alt="" />
                <span>Analytics Console</span>
            </div>
            <div className="icons">
                <img src="search.svg" alt="" />
                <img src="app.svg" alt="" />
                <img src="expand.svg" alt="" />
                <div className="notification">
                    <img src="notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="user.png" alt="" />
                    <span>Profile</span>
                </div>
                <img src="setting.svg" alt="" />
            </div>

        </div>
    )
}

export default Navbar;