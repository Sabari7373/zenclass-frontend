import React from 'react'

function LogOut(){                 
    localStorage.removeItem("token");
    window.location.href="/"
}

export default LogOut