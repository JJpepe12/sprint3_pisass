import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../NavigationBar/NavigationBar'


function Layout() {
    return (
        <container>
            <NavigationBar />  
            <Outlet />  
        </container>
    )
}

export default Layout
