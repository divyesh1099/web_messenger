import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'
import './style.css';
/**
* @author
* @function LoginPage

**/

const LoginPage
 = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <Layout>
      <div className="loginContainer">
        <Card>
          <form>
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
              <button>Login</button>
            </div>

          </form>
        </Card>
      </div>

    </Layout>
    
   )

 }

export default LoginPage
