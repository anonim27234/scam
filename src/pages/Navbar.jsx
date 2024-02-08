import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const [active, setActive] = useState(false)
    const navigate = useNavigate()
    const [activePage, setActivePage] = useState()
    const list = [
        {id: 1, title: "О фонде", url: "/about"},
        {id: 2, title: "Проекты", url: "/projects"},
        {id: 3, title: "Отчетность", url: "/otchet"},
    ]

    function click(id) {
        setActive(false)
        setActivePage(id)
    }

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img onClick={() => {
                        navigate('/')
                        setActivePage()
                    }} src="logo.png" alt="" />
                </div>
                <div className={active ? "header__list list-header active" : "header__list list-header"}>
                    {list.map((el) => 
                        <Link key={el.id} onClick={() => click(el.id)} to={el.url} className={activePage == el.id ? "list-header__item active" : "list-header__item"}>{el.title}</Link>
                    )}
                    <Link className="btn" to="https://www.donationalerts.com/r/pomojemnashim">Пожертвовать</Link>
                </div>
                <div
                    className={active ? "header__burger active" : "header__burger"}
                    onClick={() => setActive(!active)}
                ><span></span></div>
            </div>
        </header>
    );
}

export default Navbar;