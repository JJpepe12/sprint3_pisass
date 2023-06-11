import React from 'react'
import { Outlet } from 'react-router-dom'


function Layout() {
    return (
        <container>
            <Outlet />  
        </container>
    )
}

export default Layout
