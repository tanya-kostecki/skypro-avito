import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type ProtectedProps = {
    redirectPath: string;
    // isAllowed: boolean;
}
const ProtectedRoute = ({ redirectPath = "/login" }: ProtectedProps) => {
    const isAllowed = localStorage.getItem('auth');
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace={true} />
    }

    return <Outlet />
}

export default ProtectedRoute