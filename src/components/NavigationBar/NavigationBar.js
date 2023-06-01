import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import "./NavigationBar.scss"
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const navList = [
        {
            item: "00",
            name: "HOME",
            url: "/"
        },
        {
            item: "01",
            name: "DESTINATION",
            url: "/destination"
        },
        {
            item: "02",
            name: "CREW",
            url: "/crew"
        },
        {
            item: "03",
            name: "TECHNOLOGY",
            url: "/technology"
        },
    ];

    return (
        <container className="navBar">
            <div>
                <figure className='logo'>
                    <img src={Logo} alt='logo' />
                </figure>
            </div>
            <hr />
            <div className='navBarList'>
                {navList.map((item, index) => (
                    <ul className='navMenu' key={`${item.item} - ${item.name} - ${item.index}`} href={item.url}>
                        {/* <ul className='navMenu'> */}
                        <Link to={item.url}>{item.item}</Link>
                        <Link to={item.url}>{item.name}</Link>
                        {/* </ul> */}
                    </ul>
      
                ))}
            </div>
        </container>
    )
}

export default NavigationBar;