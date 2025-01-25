import './index.css'
import { useState, useEffect } from 'react'
import { createClient, Session } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabaseUrl = 'https://hcsmsnyvmcgkgvnppedi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhjc21zbnl2bWNna2d2bnBwZWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NzAxMjksImV4cCI6MjA1MzM0NjEyOX0.hjWIEc7zSW5xL7X2tHydujCl55yDPWY6aT30hi-80NM'

const supabase = createClient(supabaseUrl, supabaseKey)

export default function App() {
  
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (
    <div>Logged in!
      <button onClick={addDataToUser}>SET</button>
      <button onClick={getDataFromUser}>GET</button>
    </div>

  )
  }
  async function addDataToUser(event: any) {
    //event.preventDefault();
    const { data, error } = await supabase.from('user').insert([
      { uuid:session?.user.id, detergente: 15 }
    ]);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  }

  async function getDataFromUser(event: any) {
    //event.preventDefault();

    const { data, error } = await supabase.from('user').select().eq('uuid', session?.user.id).single()
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  }
}



