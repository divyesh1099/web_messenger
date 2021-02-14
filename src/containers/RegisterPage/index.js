import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'
import { signup } from '../../actions';
import { useDispatch } from 'react-redux';
/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const registerUser = (e) => {
    e.preventDefault();
    const user ={
      firstName, lastName, email, password
    }
    dispatch(signup())
  }
  return(
    <Layout>
      <div className="registerContainer">
        <Card>
          <form onSubmit={registerUser}>
          <input 
            type="text"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            placeholder="FirstName"
            name="firstName"
          />

          <input 
            type="text"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            placeholder="LastName"
            name="lastName"
          />

          <input 
            type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
            name="email"
          />
          <input 
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"
            name="password"
          />
          <div>
            <button>Sign Up</button>
          </div>
          </form>
        </Card>
      </div>
    </Layout>
   )

 }

export default RegisterPage