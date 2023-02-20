import {useState} from "react";
const NavBar = () => {
    const {toggle, setToggle} = useState(true)
    return (
        <>
            <nav className=''>
                <div className={'nav-options'}>
                    <h1>CINEMA ROOM</h1>
                    <span>Movies</span>
                    <span>TV Shows</span>
                    <span>Trending</span>
                    <span>Pricing</span>
                </div>
                <input type='text' placeholder='Search movies'/>

                <div id='Color-switcher' onClick={() => setToggle(!toggle)}>
                    <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
                </div>
            </nav>
        </>
    );
};

export {NavBar};