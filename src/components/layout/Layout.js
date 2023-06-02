import React from 'react'
import { Outlet } from 'react-router-dom'



function Layout() {
    return (
        <container>
            <NavigationBar />  
            <Outlet />  
        </container>
    )
}

export default Layout
