import React from 'react'
import './User-management.scss'
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { useParams } from 'react-router-dom';
function UserManagement() {
  const { page } = useParams();
  return (
    <div className='user-management-container'>
        {page === "login" && <Login />}
        {page === "signup" && <Signup />}
    </div>
  )
}

export default UserManagement;