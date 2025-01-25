import { useState, useEffect } from 'react'
import { createClient, Session } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import './LoginScreen.css'
const supabaseUrl = 'https://hcsmsnyvmcgkgvnppedi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhjc21zbnl2bWNna2d2bnBwZWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NzAxMjksImV4cCI6MjA1MzM0NjEyOX0.hjWIEc7zSW5xL7X2tHydujCl55yDPWY6aT30hi-80NM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [session, setSession] = useState<Session | null>(null)
  const [data,setData]= useState()
  async function signUpWithEmail() {
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    setSession(session)
    addDataToUser()
    getDataFromUser()
    if (error) console.log(error.message)
    if (!session) console.log('Please check your inbox for email verification!')
  }
  
  async function signInWithEmail() {
    //login  sucesso
    const {data: { session }, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    setSession(session)
    getDataFromUser()

    if (error) console.log(error.message)
    //login  fracasso
  }
  async function getDataFromUser() {
    const { data, error } = await supabase.from('user').select().eq('uuid', session?.user.id).single()
    console.log(data)
    if (error) {
      console.log(error);
    } else {
      setData(data)
    }
  }
  async function addDataToUser() {
    const { data, error } = await supabase.from('user').insert([
      { uuid:session?.user.id, detergente: 15 }
    ]);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
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



