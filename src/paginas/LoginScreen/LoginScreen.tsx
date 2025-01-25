import { useState, useEffect } from 'react'
import { createClient, Session } from '@supabase/supabase-js'
import { useNavigate } from "react-router-dom";

import './LoginScreen.css'
import { firstLogin } from '../../componentes/Api/config';
const supabaseUrl = 'https://hcsmsnyvmcgkgvnppedi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhjc21zbnl2bWNna2d2bnBwZWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NzAxMjksImV4cCI6MjA1MzM0NjEyOX0.hjWIEc7zSW5xL7X2tHydujCl55yDPWY6aT30hi-80NM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function Login({setSession}:{setSession:Function}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  async function signUpWithEmail() {
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    setSession(session)
  
   
    
    if (error) console.log(error.message)
    if (!session) console.log('Please check your inbox for email verification!')
  }
  
  async function signInWithEmail() {
    //login  sucesso
    const {data: { session }, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) {
      console.log(error.message)
      return
    }else{
      if(session!=null){
        await firstLogin(session)
        setSession(session)
        navigate("/bubblegod/game");
      }
      
    }
    //login  fracasso
  }
  return(
    <div className='LoginScreen'>
        <h1>Bubble Guns</h1>
        <div className='DataCtn'>
          <div className='Data'>
            <input placeholder='email'    onChange={(event:any) => setEmail(event.target.value)} value={email}></input>
            <input placeholder="senha"  onChange={(event:any) => setPassword(event.target.value)} value={password}></input>
          </div>
          <div className='Data'>
            <button onClick={signInWithEmail}>Login</button>
            <button  onClick={signUpWithEmail}>Registrar</button>

          </div>
        </div>
        
    </div>
  )
}



