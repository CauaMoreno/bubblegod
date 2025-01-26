import { useState, useEffect } from 'react'
import { createClient, Session } from '@supabase/supabase-js'
import { useNavigate } from "react-router-dom";

import './LoginScreen.css'
import { firstLogin } from '../../componentes/Api/config';
const supabaseUrl = 'https://hcsmsnyvmcgkgvnppedi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhjc21zbnl2bWNna2d2bnBwZWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NzAxMjksImV4cCI6MjA1MzM0NjEyOX0.hjWIEc7zSW5xL7X2tHydujCl55yDPWY6aT30hi-80NM'
const supabase = createClient(supabaseUrl, supabaseKey,)

export default function Login({setSession,session}:{setSession:Function,session:Session|undefined}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session!)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session!)
    })

    return () => subscription.unsubscribe()
  }, [])
  async function signUpWithEmail() {
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    setSession(session)
    if (error){
      switch(error.code) {
        case "weak_password":
          window.alert("Senha deve possuir mais de 6 caracteres")
          return;
        case "validation_failed":
          window.alert("Email inválido")
          return;
        case "email_address_invalid":
          window.alert("Email inválido")
          return;
      }
    }
    if (!session) {
      window.alert("Confirme deu cadastro pelo link enviado via email")
    }
  }
  async function signInWithEmail() {
    const {data: { session }, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) {
      switch(error.code) {
        case "invalid_credentials":
          window.alert("Email e/ou senha inválido")
      }
      return
    }else{
      if(session!=null){
        setSession(session)
        navigate("/bubbleguns/game");
      }
      
    }
  }
  
    if(!session){
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
    }else{
      firstLogin(session).then(() =>
        navigate("/bubbleguns/game")
      )
      console.log(session)
    }
   
  
}



